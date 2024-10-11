import logoGado from "../../../../assets/logo_gado.png";
import Image from "next/image";

export function Finalized() {

  // useEffect(() => {
  //   const audio = new Audio("./Plililim.mp3");
  //   audio.play();
  // },[])

  return (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center transition-all duration-[4000ms]">
      <Image 
        src={logoGado} 
        alt="brasão ministério público" 
        className="absolute top-0 right-0 m-2 w-8" 
      />
      <h2 className="uppercase font-normal text-[8rem]">FIM</h2>
      <p className="absolute bottom-0 right-0 m-0.5 opacity-50">VOTOU</p>
    </div>
  );
}
