import { MongoClient } from "mongodb";

// Replace the uri string with your connection string.
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("A variável de ambiente MONGODB_URI não está definida.");
}

export const clientDb = new MongoClient(uri);
