import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { FindArrById } from "../lib/FindArrById";
import { useSession } from "next-auth/react";

export type ScreenTypes =
  | "Loading"
  | "VoteZone"
  | "Transition" // Screen where nothing happens
  | "NotElegible"
  | "VoteViewer"
  | "AlreadyVoted"
  | "Finalized";

type VoteContextProviderData = {
  selectedNumbers: string;
  maxCharacters: number;
  status: ScreenTypes;
  votingFor: number;
  currentVoter: userSpecs | undefined;
  actualCandidate: votingSpecs | undefined;
  election: ElectionProps | undefined;
  setSelectedNumbers: (numbers: string) => void;
  saveVote: () => void;
  ChangeScreen: (newScreen: ScreenTypes) => void;
  nextStep: (isWhiteVote?: boolean) => void;
};
type VoteContextProviderProps = {
  children: ReactNode;
};
export type votingSpecs = {
  id: number;
  name: string;
  party?: string;
  pictureUrl?: string;
};
export type userSpecs = {
  Nome: string;
  Email: string;
  pictureUrl?: string;
};

interface ElectionProps {
  [key: string]: {
    digits: number;
    candidates: votingSpecs[];
  };
}

export const VoteContext = createContext({} as VoteContextProviderData);
export function VoteContextProvider(props: VoteContextProviderProps) {
  const [selectedNumbers, setSelectedNumbers] = useState("");
  const [maxCharacters, setMaxCharacters] = useState(4);
  const [votingFor, setVotingFor] = useState(0);
  const [status, setScreen] = useState<ScreenTypes>("Loading");
  const [actualCandidate, setActualCandidate] = useState<
    votingSpecs | undefined
  >(undefined);
  const [currentVoter, setCurrentVoter] = useState<userSpecs>();
  const [election, setElection] = useState<ElectionProps>();

  const { data: session } = useSession();

  const VoterPerson = {
    Nome: session?.user?.name ?? "",
    Email: session?.user?.email ?? "",
    pictureUrl: session?.user?.image ?? "",
  };

  useEffect(() => {
    setCurrentVoter(VoterPerson);
    const getActualElection = async () => {
      try {
        const response = await fetch("/api/elections/election");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setElection(data[0]);
      } catch (err) {
        console.error("Erro ao buscar eleição:", err);
        // Opcional: Adicionar um estado de erro para mostrar ao usuário
        // setErrorMessage("Não foi possível carregar a eleição");
      }
    };
    getActualElection();

    setTimeout(() => {
      // First Load timing...
      setScreen("VoteZone");
    }, 3000);
  }, []);

  /** Shows in real time the current candidate */
  useEffect(() => {
    if (status != "VoteZone") return;

    const candidates = getAvalibleCandidates();
    if (selectedNumbers.length >= maxCharacters && candidates) {
      // if all numbers is inserted
      const newCadidate = FindArrById(candidates, selectedNumbers);
      if (!newCadidate) {
        const isNull = !selectedNumbers.includes("•");
        setActualCandidate({
          //if the number is incorrect shows 'Nulo'
          id: isNull ? 0 : -1,
          name: isNull ? "Nulo" : "Voto em Branco",
        });
      } else {
        setActualCandidate(newCadidate);
      }
    } else {
      setActualCandidate(undefined);
    }
  }, [selectedNumbers, status]);

  /** when 'CONFIRMA/BRANCO' key is pressed */
  function nextStep() {
    if (status === "Loading") return;

    if (["NotElegible"].includes(status)) {
      if (selectedNumbers === "0000") {
        ChangeScreen("VoteViewer");
        return;
      }

      setVotingFor(0);
      setSelectedNumbers("");
    }

    if (status == "VoteZone") {
      setVotingFor((num) => num + 1);
      setSelectedNumbers("");
      ChangeScreen("VoteZone");
    }
  }

  /** Get vote options(candidates) and set maxChars  */
  function getAvalibleCandidates() {
    const voteOptions = Object.entries(election!);
    if (votingFor > voteOptions.length - 1) {
      // if don't have more options, end votation:
      HandleEndVotation();
      return;
    }
    const option = voteOptions[votingFor][1];
    setMaxCharacters(option.digits);
    return option.candidates;
  }

  /** Simple animation to blink the screen */
  function ChangeScreen(newScreen: ScreenTypes) {
    setScreen("Transition");
    setTimeout(() => {
      setScreen(newScreen);
    }, 50); // simulate load or an transition between 2 screens
  }

  function HandleEndVotation() {
    ChangeScreen("Finalized");

    // Reset all states
    setActualCandidate(undefined);
    setMaxCharacters(4);
    setSelectedNumbers("");
    setVotingFor(0);

    setTimeout(() => {
      setScreen("AlreadyVoted");
    }, 3000);
  }

  async function saveVote() {
    try {
      const response = await fetch("/api/elections/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          voterEmail: currentVoter?.Email,
          voterName: currentVoter?.Nome,
          candidateNumber: actualCandidate?.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar voto");
      }

      const result = await response.json();
      console.log("Voto salvo:", result);
      return result;
    } catch (error) {
      console.error("Erro ao salvar voto:", error);
      // Tratar erro (mostrar mensagem ao usuário, etc.)
    }
  }

  return (
    <VoteContext.Provider
      value={{
        status,
        votingFor,
        currentVoter,
        maxCharacters,
        selectedNumbers,
        actualCandidate,
        election,
        saveVote,
        setSelectedNumbers,
        ChangeScreen,
        nextStep,
      }}
    >
      {props.children}
    </VoteContext.Provider>
  );
}

/** Hook for use the Vote Context */
export function useVoteContext() {
  const voteContext = useContext(VoteContext);

  return voteContext;
}
