import { z } from "zod";
import { createRouter, publicQuery, adminQuery } from "./middleware";
import {
  findAllMemberships,
  createMembership,
  updateMembershipStatus,
  deleteMembership,
} from "./queries/memberships";

export const membershipRouter = createRouter({
  create: publicQuery
    .input(
      z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email is required"),
        phone: z.string().optional(),
        tier: z.enum(["bronze", "silver", "gold", "diamond"]),
        notes: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const id = await createMembership(input);
      return { success: true, id };
    }),

  list: adminQuery.query(async () => {
    return findAllMemberships();
  }),

  updateStatus: adminQuery
    .input(
      z.object({
        id: z.number(),
        status: z.enum(["pending", "active", "expired", "cancelled"]),
      }),
    )
    .mutation(async ({ input }) => {
      await updateMembershipStatus(input.id, input.status);
      return { success: true };
    }),

  delete: adminQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      await deleteMembership(input.id);
      return { success: true };
    }),
});
