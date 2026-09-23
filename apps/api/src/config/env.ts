
import "dotenv/config";
import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().int().positive().default(5000),
  MONGODB_URI: z.string().min(1),
  JWT_SECRET: z.string().min(32),
  ADMIN_EMAIL: z.string().email(),
  ADMIN_PASSWORD_HASH: z.string().min(1),
  UPLOAD_STORAGE_URL: z.string().url(),
  CLIENT_URL: z.string().url(),
  SERVER_URL: z.string().url(),
  COOKIE_NAME: z.string().default("professor_admin")
});

export const env = Object.freeze(schema.parse(process.env));
