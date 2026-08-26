import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter/relations-v2";
import {
  username,
  twoFactor,
  admin,
  haveIBeenPwned,
  lastLoginMethod,
} from "better-auth/plugins";
import { passkey } from "@better-auth/passkey";
import { i18n, locales } from "@better-auth/i18n";
import { db } from "@/db";

export const auth = betterAuth({
  appName: "Arcade",
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    username(),
    twoFactor({ issuer: "Arcade" }),
    passkey(),
    admin(),
    haveIBeenPwned(),
    i18n({ translations: locales }),
    lastLoginMethod(),
  ],
});
