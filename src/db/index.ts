import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { authRelations } from "./schema/auth-schema";
import { appRelations } from "./schema/schema";

export const db = drizzle(process.env.DATABASE_URL!, {
  relations: { ...appRelations, ...authRelations },
});
