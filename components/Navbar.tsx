import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-black w-full px-16 py-4 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-10">
        <Image src="/assets/images/logo.svg" alt="" width={70} height={70} className="" />
        <div className="flex flex-row items-center gap-5">
          <Link href="/" className="text-white text-base hover:text-gray-300">
            Home
          </Link>
          <Link href="/" className="text-white text-base hover:text-gray-300">
            Movies
          </Link>
          <Link href="/" className="text-white text-base hover:text-gray-300">
            TVShows
          </Link>
        </div>
      </div>

      <div>
        <Link href="/" className="text-white text-base hover:text-gray-300">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
