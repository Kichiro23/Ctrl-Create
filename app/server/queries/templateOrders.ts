import { connectDb } from "./connection";
import { TemplateOrder } from "../../db/models";

function withTimeout<T>(fn: () => Promise<T>, ms = 3000): Promise<T> {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error(`Database operation timed out after ${ms}ms`)), ms)
  );
  return Promise.race([fn(), timeout]);
}

export async function createTemplateOrder(data: {
  name: string;
  email: string;
  phone?: string;
  templateName: string;
  pricePHP: string;
  notes?: string;
}): Promise<string> {
  return withTimeout(async () => {
    await connectDb();
    const doc = await TemplateOrder.create(data);
    return doc._id.toString();
  });
}
