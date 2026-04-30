import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { connectDb } from "./queries/connection";
import { ChatMessage } from "../db/models";

const SYSTEM_PROMPT = `You are the Ctrl + Create assistant — a knowledgeable, friendly AI for a one-man creative studio based in the Philippines. Help visitors with questions about services, pricing, thesis help, web development, and commissions.

Key service details:
- Website Commissions: ₱6,500 Starter · ₱11,500 Business · ₱22,500 Pro · ₱32,500 Enterprise
- Academic / Thesis Help: Chapter 1–5, SPSS Analysis, Concept Paper, Defense PPT, IMRaD, Grammar Proofreading
- Web & Mobile Dev: React, Next.js, TypeScript, TailwindCSS, React Native
- Graphic Design: Branding, UI/UX, visuals, social media assets
- Video Editing: Cinematic cuts, motion graphics, reels, AVPs
- Voice Overs: Professional narration
- Social Media Growth: Authentic audience building
- Dashboard Customization: Custom widgets, reports, integrations

Academic Package: ₱4,000 for graduating IT/CS students
Thesis Support: 3–5 days per chapter, Turnitin + AI Report included
Membership Tiers:
- Bronze ₱2,999 (1mo, 5% off)
- Silver ₱5,999 (2mo, 6% off)
- Gold ₱12,999 (3mo, 8% off)
- Diamond ₱22,500 (4mo, 10% off, VIP)

Payment: GCash · Maya · PayPal · Google Pay · Bank Transfer
Response time: Within 24 hours on business days
Contact: rommeld216@gmail.com · +63 962 790 5910

Be concise, professional, and encouraging. If asked about pricing, be accurate. For thesis inquiries, highlight Turnitin reports and fast turnaround.`;

export const chatRouter = createRouter({
  send: publicQuery
    .input(
      z.object({
        message: z.string().min(1),
        sessionId: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const sessionId = input.sessionId || `session_${Date.now()}_${Math.random().toString(36).slice(2)}`;
      let dbConnected = false;
      try {
        await connectDb();
        dbConnected = true;
        // Store user message
        await ChatMessage.create({
          sessionId,
          role: "user",
          content: input.message,
        });
      } catch {
        // DB not available — chat still works without history
      }

      try {
        const apiKey = process.env.OPENROUTER_API_KEY || "";
        const model = process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini";

        // Get conversation history for context
        let history: any[] = [];
        if (dbConnected) {
          try {
            history = await ChatMessage.find({ sessionId })
              .sort({ createdAt: -1 })
              .limit(10)
              .lean();
          } catch {
            // ignore history fetch errors
          }
        }

        const messages = [
          { role: "system", content: SYSTEM_PROMPT },
          ...history.reverse().map((m) => ({
            role: m.role as "user" | "assistant",
            content: m.content,
          })),
        ];

        let reply = "";
        try {
          const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
              "HTTP-Referer": process.env.VITE_APP_URL || "https://ctrl-create-srvcs.vercel.app",
              "X-Title": "Ctrl + Create Assistant",
            },
            body: JSON.stringify({
              model,
              messages,
              temperature: 0.7,
              max_tokens: 800,
            }),
          });

          if (response.ok) {
            const data = (await response.json()) as {
              choices?: { message?: { content?: string } }[];
            };
            reply = data.choices?.[0]?.message?.content || "";
          } else {
            const errorText = await response.text();
            console.error("[OpenRouter] API error:", errorText);
          }
        } catch (apiError) {
          console.error("[OpenRouter] Fetch error:", apiError);
        }

        if (!reply) {
          reply = `Thanks for reaching out! I'd love to help with your project. We offer website development, thesis/academic support, graphic design, video editing, and more.\n\nFor a detailed quote, visit /contact or email rommeld216@gmail.com.`;
        }

        // Store assistant response
        if (dbConnected) {
          try {
            await ChatMessage.create({
              sessionId,
              role: "assistant",
              content: reply,
            });
          } catch {
            // ignore storage errors
          }
        }

        return { reply, sessionId };
      } catch {
        return {
          reply: "I'm here to help! Please visit our contact page or email rommeld216@gmail.com for direct assistance.",
          sessionId,
        };
      }
    }),
});
