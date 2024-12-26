"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <Button onClick={() => signOut()}>
      <LogOut /> Sign out
    </Button>
  );
};

export default SignOutButton;
