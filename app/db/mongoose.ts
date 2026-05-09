import mongoose from "mongoose";
import { env } from "../server/lib/env";

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectWithTimeout(): Promise<typeof mongoose> {
  if (!env.mongodbUri) {
    throw new Error("Database not configured. Please set MONGODB_URI in environment variables.");
  }

  const promise = mongoose.connect(env.mongodbUri, {
    bufferCommands: false,
    serverSelectionTimeoutMS: 10000,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 20000,
  }).then((m) => m);

  const timeout = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error("MongoDB connection timed out after 10s")), 10000);
  });

  return Promise.race([promise, timeout]);
}

export async function connectDb() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = connectWithTimeout();
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (err) {
    // Reset cache so next attempt can retry
    cached.promise = null;
    throw err;
  }
}
