import { connectDb } from "./connection";
import { Message } from "../../db/models";

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
  await connectDb();
  const doc = await Message.create(data);
  return doc._id.toString();
}
