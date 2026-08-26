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
import { count } from "drizzle-orm";
import { db } from "@/db";
import * as authSchema from "@/db/schema/auth-schema";
import { user } from "@/db/schema/auth-schema";

const trustedOrigins = [
  process.env.BETTER_AUTH_URL,
  process.env.NEXT_PUBLIC_APP_URL,
]
  .filter((origin): origin is string => Boolean(origin))
  .map((origin) => origin.replace(/\/$/, ""));

const hasProviderCredentials = (provider: "google" | "discord" | "github") => {
  const environmentPrefix = provider.toUpperCase();

  return Boolean(
    process.env[`${environmentPrefix}_CLIENT_ID`] &&
    process.env[`${environmentPrefix}_CLIENT_SECRET`],
  );
};

const socialProviders = {
  ...(hasProviderCredentials("google")
    ? {
        google: {
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
      }
    : {}),
  ...(hasProviderCredentials("discord")
    ? {
        discord: {
          clientId: process.env.DISCORD_CLIENT_ID!,
          clientSecret: process.env.DISCORD_CLIENT_SECRET!,
        },
      }
    : {}),
  ...(hasProviderCredentials("github")
    ? {
        github: {
          clientId: process.env.GITHUB_CLIENT_ID!,
          clientSecret: process.env.GITHUB_CLIENT_SECRET!,
          scope: ["user:email"],
        },
      }
    : {}),
};

export const auth = betterAuth({
  appName: "Arcade",
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  trustedOrigins,
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: authSchema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders,
  advanced: {
    database: {
      joins: true,
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (newUser) => {
          const [{ total }] = await db.select({ total: count() }).from(user);
          const isFirstUser = Number(total) === 0;

          return {
            data: {
              ...newUser,
              role: isFirstUser ? "admin" : "user",
            },
          };
        },
      },
    },
  },
  plugins: [
    username(),
    twoFactor({ issuer: "Arcade" }),
    passkey(),
    admin({ defaultRole: "user" }),
    haveIBeenPwned(),
    i18n({ translations: locales }),
    lastLoginMethod(),
  ],
});
