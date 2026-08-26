import { createAuthClient } from "better-auth/react";
import {
  usernameClient,
  twoFactorClient,
  adminClient,
  lastLoginMethodClient,
} from "better-auth/client/plugins";
import { getAuthenticatorName } from "@better-auth/passkey";
import { passkeyClient } from "@better-auth/passkey/client";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL!,
  plugins: [
    usernameClient(),
    twoFactorClient(),
    passkeyClient(),
    adminClient(),
    lastLoginMethodClient(),
  ],
});

export const { signIn, signUp, useSession } = createAuthClient();

export async function listUserPasskeys() {
  const passkeys = await authClient.passkey.listUserPasskeys();

  return (passkeys.data ?? []).map((passkey) => ({
    ...passkey,
    label: passkey.name || getAuthenticatorName(passkey.aaguid) || "Passkey",
  }));
}
