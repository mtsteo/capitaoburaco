import Image from "next/image";
import logoGado from "../../../../assets/logo_gado.png";

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
    </div>
  );
}
