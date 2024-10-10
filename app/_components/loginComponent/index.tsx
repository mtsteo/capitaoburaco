"use client"
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { SVGProps } from "react";

export const LoginComponent = () => {
  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <p className="text-muted-foreground">
          Entre com sua conta do Google para acessar a aplicação.
        </p>
      </div>
      <Button
        onClick={() => signIn("google")}
        variant="outline"
        className="w-full"
      >
        <ChromeIcon className="mr-2 h-5 w-5" />
        Entrar com Google
      </Button>
    </div>
  );
};

function ChromeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

export default LoginComponent;
