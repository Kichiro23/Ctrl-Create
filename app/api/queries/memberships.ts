import { connectDb } from "./connection";
import { Membership } from "../../db/models";
import type { IMembership } from "../../db/models";

export async function findAllMemberships(): Promise<IMembership[]> {
  await connectDb();
  return Membership.find().sort({ createdAt: -1 }).lean();
}

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

export async function updateMembershipStatus(id: number | string, status: string): Promise<void> {
  await connectDb();
  await Membership.findByIdAndUpdate(id, { status });
}

export async function deleteMembership(id: number | string): Promise<void> {
  await connectDb();
  await Membership.findByIdAndDelete(id);
}
