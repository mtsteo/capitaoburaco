import { clientDb } from "@/lib/mongodb";

// Função para verificar se o usuário já votou
export async function checkPreviousVote(email: string) {
  const client = await clientDb;
  const db = client.db("elections");
  const existingVote = await db
    .collection("votes")
    .findOne({ voterEmail: email });

  return existingVote !== null;
}
