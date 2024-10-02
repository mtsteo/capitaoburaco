import Image from "next/image";
import React from "react";
import logo from "@/app/assets/images/capitao_rounded.png"


function Logo() {
  return (
    <div>
      <Image src={logo} width={50} height={50} alt=""/>
    </div>
  );
}

export default Logo;
