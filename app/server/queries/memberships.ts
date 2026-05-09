import { connectDb } from "./connection";
import { Membership } from "../../db/models";

function withTimeout<T>(fn: () => Promise<T>, ms = 10000): Promise<T> {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error(`Database operation timed out after ${ms}ms`)), ms)
  );
  return Promise.race([fn(), timeout]);
}

export async function createMembership(data: {
  name: string;
  email: string;
  phone?: string;
  tier: string;
  notes?: string;
}): Promise<string> {
  return withTimeout(async () => {
    await connectDb();
    const doc = await Membership.create(data);
    return doc._id.toString();
  });
}
