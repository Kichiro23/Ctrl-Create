import { z } from "zod";
import { authRouter } from "./auth-router";
import { messageRouter } from "./messageRouter";
import { projectRouter } from "./projectRouter";
import { chatRouter } from "./chatRouter";
import { membershipRouter } from "./membershipRouter";
import { templateOrderRouter } from "./templateOrderRouter";
import { createRouter, publicQuery } from "./middleware";
import { createMessage } from "./queries/messages";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  testDb: publicQuery.query(async () => {
    const id = await createMessage({ name: "tRPC Test", email: "test@trpc.com", message: "testing tRPC + MongoDB" });
    return { ok: true, id };
  }),
  testMutation: publicQuery.mutation(async () => {
    return { ok: true, ts: Date.now() };
  }),
  testMutationWithInput: publicQuery
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input }) => {
      return { ok: true, name: input.name };
    }),
  auth: authRouter,
  message: messageRouter,
  project: projectRouter,
  chat: chatRouter,
  membership: membershipRouter,
  templateOrder: templateOrderRouter,
});

export type AppRouter = typeof appRouter;
