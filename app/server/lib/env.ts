import "dotenv/config";

function getEnv(name: string, requiredInProd = false): string {
  const value = process.env[name];
  if (!value && requiredInProd) {
    console.warn(`[env] Missing required environment variable: ${name}`);
  }
  return value ?? "";
}

export const env = {
  appId: getEnv("APP_ID", true),
  appSecret: getEnv("APP_SECRET", true),
  isProduction: process.env.NODE_ENV === "production",
  mongodbUri: getEnv("MONGODB_URI", true),
  resendApiKey: getEnv("RESEND_API_KEY"),
  ownerEmail: getEnv("OWNER_EMAIL") || "rommeld216@gmail.com",
  kimiAuthUrl: getEnv("KIMI_AUTH_URL", true),
  kimiOpenUrl: getEnv("KIMI_OPEN_URL", true),
  ownerUnionId: getEnv("OWNER_UNION_ID"),
  openRouterApiKey: getEnv("OPENROUTER_API_KEY"),
  openRouterModel: getEnv("OPENROUTER_MODEL") || "openai/gpt-4o-mini",
  viteAppUrl: getEnv("VITE_APP_URL") || "https://cylux-code.vercel.app",
  resendFromEmail: getEnv("RESEND_FROM_EMAIL") || "onboarding@resend.dev",
};
