import { NextResponse } from "next/server";
import { clientDb } from "../../../../lib/mongodb";

export async function GET(request: Request) {
  const client = await clientDb;
  const db = client.db("elections");
  const data = await db
    .collection("elections")
    .find({})
    .project({ _id: 0 })
    .toArray();
  return NextResponse.json(data);
}
