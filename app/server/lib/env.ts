function getEnv(name: string, required = false): string {
  const value = process.env[name];
  if (!value && required) {
    console.warn(`[env] Missing environment variable: ${name}`);
  }
  return value ?? "";
}

export const env = {
  isProduction: process.env.NODE_ENV === "production",
  mongodbUri: getEnv("MONGODB_URI"),
  resendApiKey: getEnv("RESEND_API_KEY"),
  ownerEmail: getEnv("OWNER_EMAIL") || "rommeld216@gmail.com",
  openRouterApiKey: getEnv("OPENROUTER_API_KEY"),
  openRouterModel: getEnv("OPENROUTER_MODEL") || "openai/gpt-4o-mini",
  viteAppUrl: getEnv("VITE_APP_URL") || "https://cylux-code.vercel.app",
  resendFromEmail: getEnv("RESEND_FROM_EMAIL") || "onboarding@resend.dev",
};
