import React, { HTMLAttributes } from "react";
import { useVoteContext } from "../../../contexts/VoteContext";
import { Loading } from "./Loading/Loading";
import { VotingZone } from "./VotingZone/VotingZone";
import { Finalized } from "./Finalized/Finalized";
import { AlreadyVoted } from "./AlreadyVoted/AlreadyVoted";

interface ScreenProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Screen({ className, ...props }: ScreenProps) {
  const { status } = useVoteContext();

  const screens = {
    Loading: <Loading />,
    VoteZone: <VotingZone />,
    Finalized: <Finalized />,
    AlreadyVoted: <AlreadyVoted />,
  };

  return (
    <main
      className={`relative bg-[#eeeeee] overflow-hidden ${className}`} // Adicionando classes Tailwind
      {...props}
    >
      {Object.entries(screens).map(([key, Component]) => {
        if (key === status)
          return <React.Fragment key={key}>{Component}</React.Fragment>;
      })}
    </main>
  );
}
