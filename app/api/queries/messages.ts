import { connectDb } from "./connection";
import { Message } from "../../db/models";
import type { IMessage } from "../../db/models";

export async function findAllMessages(): Promise<IMessage[]> {
  await connectDb();
  return Message.find().sort({ createdAt: -1 }).lean();
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
}): Promise<string> {
  await connectDb();
  const doc = await Message.create(data);
  return doc._id.toString();
}

export async function updateMessageStatus(id: number | string, readStatus: "read" | "unread"): Promise<void> {
  await connectDb();
  await Message.findByIdAndUpdate(id, { readStatus });
}

export async function deleteMessage(id: number | string): Promise<void> {
  await connectDb();
  await Message.findByIdAndDelete(id);
}
