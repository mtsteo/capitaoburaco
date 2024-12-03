import { NextResponse } from "next/server";
import { clientDb } from "../../../../lib/mongodb";

export async function GET() {
  const client = await clientDb;
  const db = client.db(process.env.MONGODB_DB);

  try {
    // Buscando os votos no banco
    const votes = await db.collection("votes").find({}).toArray();
    const totalVotes = votes.length;

    // Agrupando votos por candidato
    const voteCounts: Record<number, number> = {};
    votes.forEach((vote) => {
      const candidateNumber = vote.candidateNumber;
      if (!voteCounts[candidateNumber]) {
        voteCounts[candidateNumber] = 0;
      }
      voteCounts[candidateNumber] += 1; // Incrementa a contagem
    });

    // Buscando os candidatos da coleção "elections"
    const election = await db.collection("elections").findOne({});
    if (!election) {
      return NextResponse.json(
        { error: "Nenhuma eleição encontrada" },
        { status: 404 }
      );
    }

    const candidates = election.prefeito.candidates;

    // Criando os resultados finais
    const electionResults = candidates.map((candidate: any) => ({
      id: candidate.id,
      name: candidate.name,
      party: candidate.party || "Partido não informado",
      pictureUrl: candidate.pictureUrl,
      votes: voteCounts[candidate.id] || 0, // Número de votos (ou 0 se não recebeu votos)
    }));

    return NextResponse.json(
      {
        totalVotes,
        results: electionResults,
      },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Erro ao calcular resultados:", error);
    return NextResponse.json(
      { error: "Erro ao calcular resultados" },
      { status: 500 }
    );
  }
}
