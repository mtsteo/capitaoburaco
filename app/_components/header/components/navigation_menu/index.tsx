import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Logo from "../logo";
import { SVGProps } from "react";
import { signOut, useSession } from "next-auth/react";
import { DialogTitle } from "@radix-ui/react-dialog";
export default function NavigationMenu() {
  const { status } = useSession();

  return (
    <div className="w-full flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800 font-[family-name:var(--font-geist-sans)]">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <Logo />
      </Link>
      <div className="hidden md:flex gap-4">
        <Link
          href="#"
          className=" text-base hover:underline underline-offset-8  "
          prefetch={false}
        >
          Inicio
        </Link>
        <Link
          href="#"
          className=" text-base hover:underline underline-offset-8 "
          prefetch={false}
        >
          Sobre o Projeto
        </Link>
        <Link
          onClick={() => signOut()}
          href="#"
          className=" text-base hover:underline underline-offset-8 "
          prefetch={false}
        >
          {status === "authenticated" ? "sair" : " "}
        </Link>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
        <VisuallyHidden>
            <DialogTitle>Menu</DialogTitle>
          </VisuallyHidden>
          < div className="grid w-[200px] p-4 font-[family-name:var(--font-geist-sans)] ">
            <Link
              href="#"
              className="text-lg font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Inicio
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Sobre o Projeto
            </Link>
            <Link
              onClick={() => signOut()}
              href="#"
              className="text-lg font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              {status === "authenticated" ? "sair" : " "}
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
