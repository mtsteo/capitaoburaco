import Image from "next/image";
import logoGado from "../../../../assets/logo_gado.png";
import { Button } from "../../../../../../components/ui/button";
import Link from "next/link";

export function AlreadyVoted() {
  // TODO: add audio effect soon
  // useEffect(() => {
  //   const audio = new Audio("./Plililim.mp3");
  //   audio.play();
  // }, [])

  return (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center transition-all duration-[4000ms] font-sans">
      <Image
        src={logoGado}
        alt="brasão ministério público"
        className="absolute top-0 right-0 m-2 w-8"
      />
      <p className="text-center m-0.5">
        Seu voto já foi registrado com SUCESSO!!
      </p>
      <Button>
        <Link
          href="/results"
          className="text-base hover:underline underline-offset-8"
          prefetch={false}
        >
          Ver Resultados
        </Link>
      </Button>
    </div>
  );
}
