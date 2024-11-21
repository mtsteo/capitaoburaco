
import { MongoClient } from "mongodb";

// Replace the uri string with your connection string.
const uri = process.env.MONGODB_URI;

export const clientDb = new MongoClient(uri);


