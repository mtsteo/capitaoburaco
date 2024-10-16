import Image from "next/image";
import { useVoteContext } from "../../../../contexts/VoteContext";
import { VoteTables } from "../VoteTables/VoteTables";

export function VotingZone() {
  const {
    currentVoter,
    actualCandidate,
    votingFor,
    ChangeScreen,
    getVotingCategories,
  } = useVoteContext();

  if (!currentVoter) {
    ChangeScreen("NotElegible");
    return <></>;
  }

  const categorys = Object.entries(getVotingCategories());
  const votingIn = categorys[votingFor] && categorys[votingFor][0];

  return (
    <div className="w-full h-full bg-white flex flex-col relative font-sans">
      <header className="flex items-center justify-start gap-4 p-2 text-xs">
        Eleitor: {!currentVoter ? "" : currentVoter.Nome}{" "}
      </header>

      <h2 className="text-left ml-2 text-base m-0">Seu voto para:</h2>

      <h3 className="text-center capitalize m-0">{votingIn}</h3>

      <div className="text-left mt-0 mx-4 mb-4">
        {"Número:".padEnd(20, " ")} <VoteTables />
      </div>

      {actualCandidate && (
        <Image
          quality={100}
          width={100}
          height={150}
          src={
            actualCandidate.pictureUrl ||
            "https://static.thenounproject.com/png/55168-200.png"
          }
          alt="Foto do candidato"
          className="absolute top-0 right-0 w-20 h-28 m-2 object-contain border border-dashed border-black/10"
        />
      )}

      <p className="ml-4 mb-4 font-bold">Nome: {actualCandidate?.Nome}</p>
      <p className="ml-4 mb-4 font-bold">Partido: {actualCandidate?.Partido}</p>

      <footer className="w-full flex flex-col text-left">
        <hr className="w-full border border-black" />
        <h3 className="text-xs ml-3 mb-1">Aperte a tecla:</h3>
        <p className="text-[0.65rem] ml-8 mb-1">
          CONFIRMA para CONFIRMAR seu voto para {votingIn}
        </p>
        <p className="text-[0.65rem] ml-8 mb-1">
          CORRIGE para CORRIGIR o número digitado
        </p>
        <p className="text-[0.65rem] ml-8 mb-1">BRANCO para votar em BRANCO</p>
      </footer>
    </div>
  );
}
