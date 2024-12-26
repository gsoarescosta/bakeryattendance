"use client";

import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";

const GoogleSignInButton = () => {
  const loginWithGoogle = () => signIn("google", { callbackUrl: "/" });

  return (
    <Button onClick={loginWithGoogle}>
      <LogIn /> Sign in with Google
    </Button>
  );
};

export default GoogleSignInButton;
