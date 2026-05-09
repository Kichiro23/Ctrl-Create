import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { createMessage } from "./queries/messages";
import { sendContactNotification } from "./lib/email";

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
        discountType: z.enum(["none", "student", "pwd", "senior"]).optional(),
        discountId: z.string().optional(),
        message: z.string().min(1, "Message is required"),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        const id = await createMessage(input);
        // Fire-and-forget email notification
        sendContactNotification(input).catch(() => {});
        return { success: true, id };
      } catch (err: any) {
        console.error("[contact] Failed to save message:", err);
        // Graceful fallback: acknowledge receipt even if DB is down
        return {
          success: true,
          id: "fallback",
          warning: "Message received but could not be saved to database. Please email rommeld216@gmail.com directly.",
        };
      }
    }),
});
