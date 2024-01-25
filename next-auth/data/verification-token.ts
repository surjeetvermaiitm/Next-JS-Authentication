import { db } from "@/lib/db";

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationTokenByEmail = await db.verificationToken.findFirst({
      where: {
        email,
      },
    });
    return verificationTokenByEmail;
  } catch (error) {
    return null;
  }
};

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationTokenByToken = await db.verificationToken.findUnique({
      where: {
        token,
      },
    });
    return verificationTokenByToken;
  } catch (error) {
    return null;
  }
};
