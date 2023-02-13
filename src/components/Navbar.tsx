import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import type { NextComponentType } from "next";

const Navbar: NextComponentType = () => {
  return (
    <nav className="flex items-center justify-between bg-mediumHigh px-3 py-3 [&>*]:text-light">
      <Bars3Icon className="w-8" />
      <p className="font-mono text-2xl font-medium">Biowear</p>
      <MagnifyingGlassIcon className="w-6" />
    </nav>
  );
};

export default Navbar;
