import { NextRequest, NextResponse } from "next/server";
import { clientDb } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { checkPreviousVote } from "../../../helpers/checkPreviousVote";

export async function POST(request: NextRequest) {
  try {
    // Parsear o corpo da requisição
    const body = await request.json();

    // Conectar ao banco de dados
    const client = await clientDb;
    const db = client.db("elections");

    // Verificar se o usuário já votou
    const hasVoted = await checkPreviousVote(body.voterEmail);
    if (hasVoted) {
      return NextResponse.json(
        { message: "Este email já foi utilizado para votar" },
        { status: 409 } // Conflict status code
      );
    }

    // Preparar documento de voto
    const voteDocument = {
      _id: new ObjectId(), // Gera um novo ObjectId
      voterEmail: body.voterEmail || "",
      voterName: body.voterName || "",
      candidateNumber: body.candidateNumber || "",
      ts: {
        $timestamp: {
          t: Math.floor(Date.now() / 1000), // timestamp em segundos
          i: 1, // incremento
        },
      },
    };

    // Inserir voto
    const result = await db.collection("votes").insertOne(voteDocument);

    // Retornar resposta de sucesso
    return NextResponse.json(
      {
        message: "Voto registrado com sucesso",
        insertedId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao registrar voto:", error);

    // Tratar diferentes tipos de erros
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: "Erro ao registrar voto",
          error: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Erro desconhecido" }, { status: 500 });
  }
}
