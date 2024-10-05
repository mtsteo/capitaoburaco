"use client";
import { signIn } from "next-auth/react";

import React from "react";

function LoginButton() {
  return (
    <button
      onClick={() => {
        signIn("google", { callbackUrl: "/vote" });
      }}
    >
      Login com google
    </button>
  );
}

export default LoginButton;
