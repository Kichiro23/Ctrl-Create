import { authRouter } from "./auth-router";
import { messageRouter } from "./messageRouter";
import { projectRouter } from "./projectRouter";
import { chatRouter } from "./chatRouter";
import { membershipRouter } from "./membershipRouter";
import { templateOrderRouter } from "./templateOrderRouter";
import { createRouter, publicQuery } from "./middleware";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  auth: authRouter,
  message: messageRouter,
  project: projectRouter,
  chat: chatRouter,
  membership: membershipRouter,
  templateOrder: templateOrderRouter,
});

export type AppRouter = typeof appRouter;
