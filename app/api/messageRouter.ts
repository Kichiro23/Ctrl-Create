import { z } from "zod";
import { createRouter, publicQuery, adminQuery } from "./middleware";
import {
  findAllMessages,
  createMessage,
  updateMessageStatus,
  deleteMessage,
} from "./queries/messages";

export const messageRouter = createRouter({
  create: publicQuery
    .input(
      z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email is required"),
        phone: z.string().optional(),
        businessName: z.string().optional(),
        serviceType: z.string().optional(),
        budget: z.string().optional(),
        timeline: z.string().optional(),
        message: z.string().min(1, "Message is required"),
      }),
    )
    .mutation(async ({ input }) => {
      const id = await createMessage(input);
      return { success: true, id };
    }),

  list: adminQuery.query(async () => {
    return findAllMessages();
  }),

  updateStatus: adminQuery
    .input(
      z.object({
        id: z.number(),
        readStatus: z.enum(["read", "unread"]),
      }),
    )
    .mutation(async ({ input }) => {
      await updateMessageStatus(input.id, input.readStatus);
      return { success: true };
    }),

  delete: adminQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      await deleteMessage(input.id);
      return { success: true };
    }),
});
