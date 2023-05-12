import { ChevronRightIcon } from "@heroicons/react/24/outline";
import type { NextComponentType } from "next";
import { useState } from "react";

const Footer: NextComponentType = () => {
  const [linksOpen, setLinksOpen] = useState(true);
  const [infoOpen, setInfoOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const footerData = [
    {
      title: "Quick links",
      links: ["Home", "Shop", "Products", "About"],
      state: linksOpen,
      setState: setLinksOpen,
    },
    {
      title: "Information",
      links: ["About us", "Contact us", "Terms & Conditions", "Privacy Policy"],
      state: infoOpen,
      setState: setInfoOpen,
    },
    {
      title: "Social",
      links: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
      state: socialOpen,
      setState: setSocialOpen,
    },
  ];
  return (
    <div className="mt-10 space-y-8 bg-gray-200 py-6 px-4">
      {footerData.map((item) => (
        <div key={item.title}>
          <div
            className="flex justify-between"
            onClick={() => item.setState(!item.state)}
          >
            <p className="font-semibold">{item.title}</p>
            <ChevronRightIcon className="w-5 rotate-90" />
          </div>
          {item.state && (
            <div className="flex flex-col gap-3 px-1 pt-4 font-medium text-gray-500">
              {item.links.map((link) => (
                <p key={link}>{link}</p>
              ))}
            </div>
          )}
        </div>
      ))}
      <p className="text-center text-xs font-medium">© BIOWEAR 2023</p>
    </div>
  );
};

export default Footer;
