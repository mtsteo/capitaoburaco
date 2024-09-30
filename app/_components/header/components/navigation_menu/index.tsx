import Image from "next/image";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

function MenuNavigation() {
  return (
    <div className="ml-4 mt-5 mr-5">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger >Item One</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger >Item One</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger >Item One</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default MenuNavigation;
