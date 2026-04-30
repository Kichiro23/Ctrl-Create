import "dotenv/config";

function getEnv(name: string, requiredInProd = false): string {
  const value = process.env[name];
  if (!value && requiredInProd && process.env.NODE_ENV === "production") {
    console.warn(`[env] Missing environment variable: ${name}`);
  }
  return value ?? "";
}

export const env = {
  appId: getEnv("APP_ID"),
  appSecret: getEnv("APP_SECRET"),
  isProduction: process.env.NODE_ENV === "production",
  mongodbUri: getEnv("MONGODB_URI"),
  resendApiKey: process.env.RESEND_API_KEY ?? "",
  ownerEmail: process.env.OWNER_EMAIL ?? "rommeld216@gmail.com",
  kimiAuthUrl: getEnv("KIMI_AUTH_URL"),
  kimiOpenUrl: getEnv("KIMI_OPEN_URL"),
  ownerUnionId: process.env.OWNER_UNION_ID ?? "",
};
