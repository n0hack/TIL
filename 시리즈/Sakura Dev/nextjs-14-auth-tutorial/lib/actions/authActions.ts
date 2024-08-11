"use server";
import { User } from "@prisma/client";
import prisma from "../prisma";
import * as bcrypt from "bcrypt";
import { comipleActivationTemplate, sendMail } from "../mail";
import { signJwt, verifyJwt } from "../jwt";

export async function registerUser(user: Omit<User, "id" | "emailVerified" | "image">) {
  const result = await prisma.user.create({
    data: {
      ...user,
      password: await bcrypt.hash(user.password, 10),
    },
  });

  const jwtUserId = signJwt({
    id: result.id,
  });
  const activationUrl = `${process.env.NEXTAUTH_URL}/auth/activation/${jwtUserId}`;
  const body = comipleActivationTemplate(user.firstName, activationUrl);

  await sendMail({ to: user.email, subject: "이메일 화성화", body });

  return result;
}

type ActivateUserFunc = (jwtUserId: string) => Promise<"userNotExist" | "alreadyActivated" | "success">;

export const activateUser: ActivateUserFunc = async (jwtUserId) => {
  const payload = verifyJwt(jwtUserId);
  const userId = payload?.id;
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) return "userNotExist";
  if (user.emailVerified) return "alreadyActivated";

  const result = await prisma.user.update({
    where: { id: userId },
    data: {
      emailVerified: new Date(),
    },
  });

  return "success";
};
