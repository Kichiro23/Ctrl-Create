import { getDb } from "./connection";
import { messages } from "@db/schema";
import { eq, desc } from "drizzle-orm";

export async function findAllMessages() {
  return getDb().query.messages.findMany({
    orderBy: desc(messages.createdAt),
  });
}

export async function createMessage(data: {
  name: string;
  email: string;
  phone?: string;
  businessName?: string;
  serviceType?: string;
  budget?: string;
  timeline?: string;
  message: string;
}) {
  const [{ id }] = await getDb().insert(messages).values(data).$returningId();
  return id;
}

export async function updateMessageStatus(id: number, readStatus: "read" | "unread") {
  await getDb().update(messages).set({ readStatus }).where(eq(messages.id, id));
}

export async function deleteMessage(id: number) {
  await getDb().delete(messages).where(eq(messages.id, id));
}
