import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { createMembership } from "./queries/memberships";

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
});
