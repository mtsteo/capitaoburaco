import { NextResponse } from "next/server";
import { clientDb } from "../../../../lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET() {
  const client = await clientDb;
  const db = client.db(process.env.MONGODB_DB);
  const data = await db
    .collection("elections")
    .find({})
    .project({ _id: 0 })
    .toArray();
  return NextResponse.json(data);
}
