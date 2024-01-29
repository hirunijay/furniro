import React from "react";
import { Logo } from "../shared/Logo";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

function Navigation() {
  const navlinks = [
    { text: "Home", path: "/home" },
    { text: "Shop", path: "/shop" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
  ];
  return (
    <div className="flex flex-row justify-between h-[80px] mx-14 bg-white sticky">
      <div className="flex items-center justify-start">
        <Logo />
      </div>
      <div className="flex flex-row items-center lg:gap-20 gap-5">
        {navlinks.map((item, index) => (
          <Link className="flex font-medium text-base text-black hover:font-semibold" href={item.path} key={index}>
            {item.text}
          </Link>
        ))}
      </div>
      <div className="flex flex-row text-xl lg:gap-10 gap-5 items-center">
        <FiUser />
        <FiSearch />
        <FiHeart />
        <FiShoppingCart />
      </div>
    </div>
  );
}

export default Navigation;
