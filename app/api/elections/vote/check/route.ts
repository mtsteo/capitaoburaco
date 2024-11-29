// app/api/votes/check/route.ts
import { NextRequest, NextResponse } from "next/server";
import { clientDb } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const email = request.nextUrl.searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { message: "Email é obrigatório" },
        { status: 400 }
      );
    }

    const client = await clientDb;
    const db = client.db("elections");

    const existingVote = await db
      .collection("votes")
      .findOne({ voterEmail: email });

    return NextResponse.json({ hasVoted: existingVote !== null });
  } catch (error) {
    console.error("Erro ao verificar voto:", error);
    return NextResponse.json(
      { message: "Erro ao verificar voto" },
      { status: 500 }
    );
  }
}
