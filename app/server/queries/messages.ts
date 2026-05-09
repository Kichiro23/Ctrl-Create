import { connectDb } from "./connection";
import { Message } from "../../db/models";

function withTimeout<T>(fn: () => Promise<T>, ms = 10000): Promise<T> {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error(`Database operation timed out after ${ms}ms`)), ms)
  );
  return Promise.race([fn(), timeout]);
}

export async function createMessage(data: {
  name: string;
  email: string;
  phone?: string;
  businessName?: string;
  serviceType?: string;
  budget?: string;
  timeline?: string;
  discountType?: string;
  discountId?: string;
  message: string;
}): Promise<string> {
  return withTimeout(async () => {
    await connectDb();
    const doc = await Message.create(data);
    return doc._id.toString();
  });
}
