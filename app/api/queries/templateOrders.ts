import { connectDb } from "./connection";
import { TemplateOrder } from "../../db/models";
import type { ITemplateOrder } from "../../db/models";

export async function findAllTemplateOrders(): Promise<ITemplateOrder[]> {
  await connectDb();
  return TemplateOrder.find().sort({ createdAt: -1 }).lean();
}

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

export async function updateTemplateOrderStatus(id: number | string, status: string): Promise<void> {
  await connectDb();
  await TemplateOrder.findByIdAndUpdate(id, { status });
}

export async function deleteTemplateOrder(id: number | string): Promise<void> {
  await connectDb();
  await TemplateOrder.findByIdAndDelete(id);
}
