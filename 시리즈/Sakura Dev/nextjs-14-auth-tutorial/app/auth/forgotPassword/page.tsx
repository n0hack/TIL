"use client";

import { forgotPassword } from "@/lib/actions/authActions";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type InputType = z.infer<typeof FormSchema>;

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({ resolver: zodResolver(FormSchema) });

  const submitRequest: SubmitHandler<InputType> = async (data) => {
    try {
      const result = await forgotPassword(data.email);
      if (result) toast.success("Password reset link sent to your email");
      reset();
    } catch (e) {
      console.log(e);
      toast.error("Failed to send password reset link");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center">
      <form onSubmit={handleSubmit(submitRequest)} className="flex flex-col gap-2 p-2 rounded-md border shadow">
        <div className="p-2 text-center">Enter Your Email</div>
        <Input
          label="이메일"
          {...register("email")}
          startContent={<EnvelopeIcon className="w-4" />}
          errorMessage={errors.email?.message}
        />
        <Button isLoading={isSubmitting} disabled={isSubmitting} type="submit" color="primary">
          {isSubmitting ? "Please wait" : "Submit"}
        </Button>
      </form>
      <Image
        className="col-span-2 place-self-center"
        src="/forgotPass.png"
        alt="Forgot Password"
        width={500}
        height={500}
      />
    </div>
  );
};

export default ForgotPasswordPage;
