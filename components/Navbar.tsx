"use client";

import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Movies",
    link: "/",
  },
  {
    title: "TVShows",
    link: "/tv-shows",
  },
  {
    title: "Login",
    link: "/",
  },
];

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <div className="bg-black w-full px-3 sm:px-6 md:px-16 py-4 flex flex-row items-center justify-between">
      <div className="md:hidden outline" onClick={toggleMobileMenu}>
        <Bars3Icon className="size-7 text-white" />
      </div>

      {/* navbar menu here  */}
      {showMobileMenu && (
        <div className="absolute border-[2px] flex flex-col py-2 border-gray-700 rounded-md w-[90%] bg-black top-14 left-4 sm:left-7">
          {navItems.map((item, i) => (
            <Link
              onClick={toggleMobileMenu}
              key={i}
              href={item.link}
              className="text-white text-sm hover:text-gray-300 hover:bg-gray-500 mb-2 p-1 rounded-sm mx-2"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}

      <div className="flex flex-row items-center gap-10">
        <Link href="/">
          <Image src="/assets/images/logo.svg" alt="" width={0} height={0} className="w-[70px]" />
        </Link>

        <div className="md:flex hidden flex-row items-center gap-5">
          <Link href="/" className="text-white text-base hover:text-gray-300">
            Home
          </Link>
          <Link href="/movies" className="text-white text-base hover:text-gray-300">
            Movies
          </Link>
          <Link href="/tv-shows" className="text-white text-base hover:text-gray-300">
            TVShows
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center gap-5 hover:text-gray-300">
        <Link href="/login" className="text-white hidden md:flex text-base hover:text-gray-300">
          Login
        </Link>
        <MagnifyingGlassIcon className="size-6 text-white" />
      </div>
    </div>
  );
}

export default Navbar;
