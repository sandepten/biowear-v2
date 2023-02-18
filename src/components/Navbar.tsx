import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import type { NextComponentType } from "next";
import { useState } from "react";
import Cart from "./Cart";
import HamburgerMenu from "./HamburgerMenu";

const Navbar: NextComponentType = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <div>
        {isHamburgerOpen && (
          <div
            onClick={() => setIsHamburgerOpen(false)}
            className="absolute top-0 h-screen w-screen bg-black bg-opacity-60"
          ></div>
        )}
        <HamburgerMenu
          isOpen={isHamburgerOpen}
          setIsOpen={setIsHamburgerOpen}
        />
      </div>
      <div>
        {isCartOpen && (
          <div
            onClick={() => setIsCartOpen(false)}
            className="absolute top-0 h-screen w-screen bg-black bg-opacity-60"
          ></div>
        )}
        <Cart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
      </div>
      <nav className="[&>*]:text-light flex items-center justify-between px-3 py-3">
        <Bars3Icon className="w-8" onClick={() => setIsHamburgerOpen(true)} />
        <p className="-mr-8 font-mono text-2xl font-medium">Biowear</p>
        <div className="flex space-x-4">
          <MagnifyingGlassIcon className="w-6" />
          <ShoppingBagIcon
            className="w-6"
            onClick={() => setIsCartOpen(true)}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
