import { z } from "zod";
import { createRouter, publicQuery, adminQuery } from "./middleware";
import {
  findAllTemplateOrders,
  createTemplateOrder,
  updateTemplateOrderStatus,
  deleteTemplateOrder,
} from "./queries/templateOrders";

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

  list: adminQuery.query(async () => {
    return findAllTemplateOrders();
  }),

  updateStatus: adminQuery
    .input(
      z.object({
        id: z.union([z.string(), z.number()]),
        status: z.enum(["pending", "paid", "fulfilled", "cancelled"]),
      }),
    )
    .mutation(async ({ input }) => {
      await updateTemplateOrderStatus(input.id, input.status);
      return { success: true };
    }),

  delete: adminQuery
    .input(z.object({ id: z.union([z.string(), z.number()]) }))
    .mutation(async ({ input }) => {
      await deleteTemplateOrder(input.id);
      return { success: true };
    }),
});
