import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../AuthLinks/AuthLinks";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="flex justify-between items-center h-[100px]">
        <span className="flex gap-5 flex-row">
          <Image
            src={"/facebook.png"}
            alt=""
            width={30}
            height={30}
            className="object-cover"
          />
          <Image
            src={"/youtube.png"}
            alt=""
            width={30}
            height={30}
            className="object-cover"
          />
          <Image
            src={"/instagram.png"}
            alt=""
            width={30}
            height={30}
            className="object-cover"
          />
          <Image
            src={"/tiktok.png"}
            alt=""
            width={30}
            height={30}
            className="object-cover"
          />
        </span>
        <span className="font-bold text-2xl">TesakTech</span>
        <span className="flex space-x-5">
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>About</Link>
          <AuthLinks />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
