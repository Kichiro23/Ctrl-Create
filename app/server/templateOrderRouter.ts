import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { createTemplateOrder } from "./queries/templateOrders";

export const templateOrderRouter = createRouter({
  create: publicQuery
    .input(
      z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email is required"),
        phone: z.string().optional(),
        templateName: z.string().min(1, "Template name is required"),
        pricePHP: z.string().min(1, "Price is required"),
        notes: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const id = await createTemplateOrder(input);
      return { success: true, id };
    }),
});
