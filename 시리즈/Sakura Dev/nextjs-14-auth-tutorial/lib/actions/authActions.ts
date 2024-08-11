"use server";
import { User } from "@prisma/client";
import prisma from "../prisma";
import * as bcrypt from "bcrypt";
import { comipleActivationTemplate, comipleResetPassTemplate, sendMail } from "../mail";
import { signJwt, verifyJwt } from "../jwt";
import { resetPasswordTemplate } from "../emailTemplates/resetPass";

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

export async function forgotPassword(email: string) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new Error("사용자를 찾을 수 없습니다.");

  // ToDo: Send Email with Password Reset Link
  const jwtUserId = signJwt({
    id: user.id,
  });
  const resetPassUrl = `${process.env.NEXTAUTH_URL}/auth/resetPass/${jwtUserId}`;
  const body = comipleResetPassTemplate(user.firstName, resetPassUrl);
  const sendResult = await sendMail({ to: user.email, subject: "비밀번호 재설정", body });

  return sendResult;
}

type ResetPasswordFunc = (jwtUserId: string, password: string) => Promise<"userNotExist" | "success">;

export const resetPassword: ResetPasswordFunc = async (jwtUserId: string, password: string) => {
  const payload = verifyJwt(jwtUserId);
  const userId = payload?.id;
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) return "userNotExist";

  const result = await prisma.user.update({
    where: { id: userId },
    data: {
      password: await bcrypt.hash(password, 10),
    },
  });
  if (result) return "success";
  else throw new Error("비밀번호 재설정에 실패했습니다.");
};
