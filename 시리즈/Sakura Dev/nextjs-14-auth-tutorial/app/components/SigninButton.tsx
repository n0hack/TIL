"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const SigninButton = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-2">
      {session && session.user ? (
        <>
          <Link href="/profile">{`${session.user.firstName} ${session.user.lastName}`}</Link>
          <Link className="text-sky-500 hover:text-sky-600 transition-colors" href={"/api/auth/signout"}>
            Sign Out
          </Link>
        </>
      ) : (
        <>
          <Button onClick={() => signIn()}>Sign In</Button>
          <Button as={Link} href={"/auth/signup"}>
            Sign Up
          </Button>
        </>
      )}
    </div>
  );
};

export default SigninButton;
