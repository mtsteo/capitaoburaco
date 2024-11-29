"use client";
import React from "react";
import { VoteMachine } from "./components/VoteMachine/VoteMachine";
import { ProtectedPageWrapper } from "../_components/ProtectedPageWrapper";



export default function Vote() {
 
  return (
    <main className="flex items-center justify-center min-h-screen">
      <ProtectedPageWrapper>
        <VoteMachine />
      </ProtectedPageWrapper>
    </main>
  );
}
