import Image from "next/image";
import background from "./assets/images/background.jpeg";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <Image
        src={background}
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute inset-0 bg-black/50" />{" "}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center text-white">
        <h1 className="mb-4 text-5xl font-bold sm:text-6xl">
          Bem vindo a Capitão Buraco
        </h1>
        <p className="mb-8 max-w-md text-xl">
          Nossa cidade em um universo paralelo.
        </p>
        <Button size="lg">
          <Link
            href="/about"
            className="text-base hover:underline underline-offset-8"
            prefetch={false}
          >
            Sobre o Projeto
          </Link>
        </Button>
      </div>
    </main>
  );
}
