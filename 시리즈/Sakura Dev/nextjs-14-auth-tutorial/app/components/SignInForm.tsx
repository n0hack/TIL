"use client";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useReducer } from "react";
import { FormSubmitHandler, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

type SignInFormProps = {
  callbackUrl?: string;
};

const FormSchema = z.object({
  email: z.string().email("이메일 형식이 아닙니다."),
  password: z.string({
    required_error: "비밀번호를 입력해 주세요.",
  }),
});

type InputType = z.infer<typeof FormSchema>;

const SignInForm = ({ callbackUrl }: SignInFormProps) => {
  const router = useRouter();
  const [visiblePass, toggleVisiblePass] = useReducer((v) => !v, false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    const result = await signIn("credentials", { redirect: false, username: data.email, password: data.password });

    if (!result?.ok) {
      toast.error(result?.error);
      return;
    }

    toast.success("로그인 성공!");
    router.push(callbackUrl || "/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 border rounded-md shadow overflow-hidden w-full"
    >
      <div className="bg-gradient-to-b from-white to-slate-00 dark dark:from-slate-700 dark:to-slate-900 p-2">
        Sign In Form
      </div>
      <div className="p-2 flex flex-col gap-2">
        <Input label="Email" {...register("email")} errorMessage={errors.email?.message} />
        <Input
          label="Password"
          type={visiblePass ? "text" : "password"}
          {...register("password")}
          errorMessage={errors.password?.message}
          endContent={
            <button type="button" onClick={toggleVisiblePass}>
              {visiblePass ? <EyeSlashIcon className="w-4" /> : <EyeIcon className="w-4" />}
            </button>
          }
        />
        <div className="flex items-center justify-center gap-2">
          <Button color="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
          <Button as={Link} href="/auth/signup">
            Sign Up
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
