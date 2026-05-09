import { connectDb } from "./connection";
import { Membership } from "../../db/models";

export async function createMembership(data: {
  name: string;
  email: string;
  phone?: string;
  tier: string;
  notes?: string;
}): Promise<string> {
  await connectDb();
  const doc = await Membership.create(data);
  return doc._id.toString();
}
