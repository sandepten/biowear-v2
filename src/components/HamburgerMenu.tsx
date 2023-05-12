import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const HamburgerMenu = (props: Props) => {
  const { isOpen, setIsOpen } = props;
  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "About",
      link: "/about",
    },
  ];
  return (
    <div
      className={`fixed top-0 z-10 h-screen w-[85%] bg-white transition-transform duration-200 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <XMarkIcon
        className="absolute top-4 right-4 w-8"
        onClick={() => setIsOpen(false)}
      />
      <div className="flex h-[90%] flex-col justify-between px-4 pt-[30%]">
        <div className="flex flex-col gap-10">
          {menu.map((item) => (
            <div key={item.name}>
              <Link href={item.link} className="flex justify-between">
                <p className="text-lg font-medium">{item.name}</p>
                <ChevronRightIcon className="w-6" />
              </Link>
            </div>
          ))}
        </div>
        <div>
          <p className="mb-6 text-xl font-semibold tracking-wide">My Account</p>
          <div className="flex flex-col gap-3">
            <button className="width-full rounded-md border border-black bg-black py-1.5 font-medium text-white">
              Log in
            </button>
            <button className="width-full rounded-md border border-black py-1.5 font-medium">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
