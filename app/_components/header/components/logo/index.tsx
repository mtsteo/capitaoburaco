import Image from "next/image";
import React from "react";
import logo from "@/app/assets/images/capitao_rounded.png"


function Logo() {
  return (
    <div className="ml-4 mt-5">
      <Image src={logo} width={40} height={40} alt=""/>
    </div>
  );
}

export default Logo;
