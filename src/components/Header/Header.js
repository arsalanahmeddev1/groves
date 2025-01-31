import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialIconsList } from "@/components/SocialIcons/SocialIcons";
const Header = () => {
  return (
    <header className="bg-[000] py-[30px] absolute top-[21px] w-full">
      <div className="container mx-auto flex justify-between items-center w-full">
        <div className="">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={250}
            height={250}
          />
        </div>
        <div className="">
          <SocialIconsList />
        </div>
      </div>
    </header>
  )
}

export default Header;