// import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";

// export const {
//   handlers: { GET, POST },
//   auth,
// } = NextAuth({
//   providers: [GitHub],
// });

//For edge compatibility

import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import authConfig from "@/auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
