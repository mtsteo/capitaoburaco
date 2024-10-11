import Image from "next/image";
import logoGado from "../../../../assets/logo_gado.png";

export function Loading() {
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center transition-all duration-[4000ms]">
      <Image 
        src={logoGado} 
        alt="brasão ministério público" 
        className="w-[40%] animate-[fadeLoad_3s]" 
      />
      <h2 className="uppercase font-[var(--font-geist-sans)] animate-[fadeLoad_3s]">
        Justiça do Curral
      </h2>
    </div>
  );
}
