import React from "react";
import Logo from "./components/logo";
import MenuNavigation from "./components/navigation_menu";


function Header() {
  return (
    <div  className="flex flex-row justify-between">
        <Logo/>
        <MenuNavigation/>
    </div>
  );
}

export default Header;
