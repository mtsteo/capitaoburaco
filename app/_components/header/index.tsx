import React from "react";
import MenuNavigation from "./components/navigation_menu";


function Header() {
  return (
    <div  className="flex flex-row justify-between">
        <MenuNavigation/>
    </div>
  );
}

export default Header;
