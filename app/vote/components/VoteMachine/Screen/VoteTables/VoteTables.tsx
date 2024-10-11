import { useVoteContext } from "../../../../contexts/VoteContext";

export function VoteTables() {
  const { selectedNumbers, maxCharacters } = useVoteContext();
  let index = -1;

  return (
    <div className="inline-block">
      <div className="flex items-center justify-center text-center">
        {[...Array(maxCharacters)].map(() => {
          index++;
          return (
            <div 
              key={index} 
              className="block w-6 h-8 font-bold mr-1 p-1 border border-dashed border-gray-600/40"
            >
              {selectedNumbers[index] || "⠀"}
            </div>
          );
        })}
      </div>
    </div>
  );
}
