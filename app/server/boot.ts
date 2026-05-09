import { Hono } from "hono";
import { bodyLimit } from "hono/body-limit";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "./router";
import { createContext } from "./context";
import { env } from "./lib/env";
import { createMessage } from "./queries/messages";

const app = new Hono();

// Health check — no DB required
app.get("/api/health", (c) =>
  c.json({
    ok: true,
    ts: Date.now(),
    env: {
      nodeEnv: process.env.NODE_ENV,
      hasMongoUri: !!env.mongodbUri,
    },
  })
);

app.use("/api/trpc/*", async (c) => {
  try {
    return fetchRequestHandler({
      endpoint: "/api/trpc",
      req: c.req.raw,
      router: appRouter,
      createContext,
    });
  } catch (err) {
    console.error("[tRPC] Handler error:", err);
    return c.json({ error: "Internal server error" }, 500);
  }
});

app.get("/api/test-db", async (c) => {
  try {
    const id = await createMessage({ name: "Test", email: "test@test.com", message: "test" });
    return c.json({ success: true, id });
  } catch (err: any) {
    return c.json({ error: err.message }, 500);
  }
});

app.post("/api/test-body", async (c) => {
  try {
    const body = await c.req.raw.json();
    return c.json({ success: true, body });
  } catch (err: any) {
    return c.json({ error: err.message }, 500);
  }
});

app.get("/api/test-db-raw", async (c) => {
  try {
    const mongoose = await import("mongoose");
    const uri = env.mongodbUri;
    if (!uri) return c.json({ error: "MONGODB_URI not set" }, 500);
    const start = Date.now();
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 15000,
      connectTimeoutMS: 15000,
      socketTimeoutMS: 20000,
      bufferCommands: false,
    });
    const ping = await mongoose.connection.db.admin().ping();
    const elapsed = Date.now() - start;
    return c.json({ success: true, ping, elapsedMs: elapsed });
  } catch (err: any) {
    return c.json({ error: err.message, code: err.code, name: err.name, stack: err.stack?.split("\n").slice(0,4) }, 500);
  }
});

app.all("/api/*", (c) => c.json({ error: "Not Found" }, 404));

// Global error handler
app.onError((err, c) => {
  console.error("[Hono] Unhandled error:", err);
  return c.json({ error: "Internal server error" }, 500);
});

export default app;

// Only start local server in non-Vercel production (self-hosted)
if (env.isProduction && !process.env.VERCEL) {
  const { serve } = await import("@hono/node-server");
  const { serveStaticFiles } = await import("./lib/vite");
  serveStaticFiles(app);

  const port = parseInt(process.env.PORT || "3000");
  serve({ fetch: app.fetch, port }, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}
