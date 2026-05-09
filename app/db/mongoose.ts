import mongoose from "mongoose";
import { env } from "../server/lib/env";

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDb() {
  if (cached.conn) return cached.conn;

  if (!env.mongodbUri) {
    throw new Error("Database not configured. Please set MONGODB_URI in environment variables.");
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(env.mongodbUri, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000,
      socketTimeoutMS: 10000,
    }).then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
