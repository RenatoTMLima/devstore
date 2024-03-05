import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    "Env file not configured correctly!",
    parsedEnv.error.flatten().fieldErrors
  );

  throw new Error("Env file not configured correctly!");
}

export const env = parsedEnv.data;