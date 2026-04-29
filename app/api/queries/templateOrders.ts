import { getDb } from "./connection";
import { templateOrders } from "@db/schema";
import { eq, desc } from "drizzle-orm";

export async function findAllTemplateOrders() {
  return getDb().query.templateOrders.findMany({
    orderBy: desc(templateOrders.createdAt),
  });
}

export async function createTemplateOrder(data: {
  name: string;
  email: string;
  phone?: string;
  templateName: string;
  pricePHP: string;
  notes?: string;
}) {
  const [{ id }] = await getDb().insert(templateOrders).values(data).$returningId();
  return id;
}

export async function updateTemplateOrderStatus(id: number, status: "pending" | "paid" | "fulfilled" | "cancelled") {
  await getDb().update(templateOrders).set({ status }).where(eq(templateOrders.id, id));
}

export async function deleteTemplateOrder(id: number) {
  await getDb().delete(templateOrders).where(eq(templateOrders.id, id));
}
