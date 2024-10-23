"use client";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { passwordStrength } from "check-password-strength";
import React, { useEffect, useReducer, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import PasswordStrength from "./PasswordStrength";
import { resetPassword } from "@/lib/actions/authActions";
import { toast } from "react-toastify";

type ResetPasswordFormProps = {
  jwtUserId: string;
};

const FormSchema = z
  .object({
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(52, "Password must be at most 52 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type InputType = z.infer<typeof FormSchema>;

const ResetPasswordForm = ({ jwtUserId }: ResetPasswordFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({ resolver: zodResolver(FormSchema) });
  const [visiblePass, toggleVisiblePass] = useReducer((v) => !v, false);
  const [passStrength, setPassStrength] = useState(0);

  useEffect(() => {
    setPassStrength(passwordStrength(watch().password).id);
  }, [watch().password]);

  const resetPass: SubmitHandler<InputType> = async (data) => {
    try {
      const result = await resetPassword(jwtUserId, data.password);
      if (result === "success") toast.success("Password reset successfully");
    } catch (e) {
      console.log(e);
      toast.error("Failed to reset password");
    }
  };

  return (
    <form onSubmit={handleSubmit(resetPass)} className="flex flex-col gap-2 p-2 m-2 border rounded-md shadow">
      <div className="text-center p-2">Reset Your Password</div>
      <Input
        label="비밀번호"
        {...register("password")}
        type={visiblePass ? "text" : "password"}
        {...register("password")}
        errorMessage={errors.password?.message}
        endContent={
          <button type="button" onClick={toggleVisiblePass}>
            {visiblePass ? <EyeSlashIcon className="w-4" /> : <EyeIcon className="w-4" />}
          </button>
        }
      />
      <PasswordStrength passStrength={passStrength} />
      <Input
        label="비밀번호 확인"
        {...register("confirmPassword")}
        type={visiblePass ? "text" : "password"}
        errorMessage={errors.confirmPassword?.message}
        endContent={
          <button type="button" onClick={toggleVisiblePass}>
            {visiblePass ? <EyeSlashIcon className="w-4" /> : <EyeIcon className="w-4" />}
          </button>
        }
      />
      <div className="flex justify-center">
        {" "}
        <Button isLoading={isSubmitting} disabled={isSubmitting} type="submit" color="primary">
          {isSubmitting ? "Please wait" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
