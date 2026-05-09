import { connectDb } from "./connection";
import { TemplateOrder } from "../../db/models";

export async function createTemplateOrder(data: {
  name: string;
  email: string;
  phone?: string;
  templateName: string;
  pricePHP: string;
  notes?: string;
}): Promise<string> {
  await connectDb();
  const doc = await TemplateOrder.create(data);
  return doc._id.toString();
}
