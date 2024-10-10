"use client";

import React from "react";
import { useSession } from "next-auth/react";
import LoginComponent from "../loginComponent";

interface ProtectedPageWrapperProps {
  children: React.ReactNode;
}

export const ProtectedPageWrapper: React.FC<ProtectedPageWrapperProps> = ({
  children,
}) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Carregando...</div>;
  }

  if (!session) {
    return (
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center ">
            <LoginComponent />
          </div>
        </div>
        <div className="blur-sm">{children}</div>
      </div>
    );
  }

  return <>{children}</>;
};
