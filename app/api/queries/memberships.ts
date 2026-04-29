import { getDb } from "./connection";
import { memberships } from "@db/schema";
import { eq, desc } from "drizzle-orm";

export async function findAllMemberships() {
  return getDb().query.memberships.findMany({
    orderBy: desc(memberships.createdAt),
  });
}

export async function createMembership(data: {
  name: string;
  email: string;
  phone?: string;
  tier: "bronze" | "silver" | "gold" | "diamond";
  notes?: string;
}) {
  const [{ id }] = await getDb().insert(memberships).values(data).$returningId();
  return id;
}

export async function updateMembershipStatus(id: number, status: "pending" | "active" | "expired" | "cancelled") {
  await getDb().update(memberships).set({ status }).where(eq(memberships.id, id));
}

export async function deleteMembership(id: number) {
  await getDb().delete(memberships).where(eq(memberships.id, id));
}
