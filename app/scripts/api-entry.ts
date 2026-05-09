import { handle } from "@hono/node-server/vercel";
import app from "../server/boot";

const honoHandler = handle(app);

export default async (req: any, res: any) => {
  // Vercel serverless sometimes leaves the body buffered in paused mode.
  // @hono/node-server only checks for rawBody; if missing, it uses Readable.toWeb()
  // which can hang on paused streams. Drain the buffer and set rawBody manually.
  if (
    req.complete &&
    req.readableLength > 0 &&
    req.readableFlowing === null &&
    !req.rawBody
  ) {
    const chunks: Buffer[] = [];
    let chunk: Buffer | null;
    while (null !== (chunk = req.read())) {
      chunks.push(chunk);
    }
    req.rawBody = Buffer.concat(chunks);
  }
  return honoHandler(req, res);
};
