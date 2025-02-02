import Link from "next/link";
import Image from "next/image";
import ButtonLink from "./ButtonLink";
import { SocialIconsList } from "@/components/SocialIcons";
import { navItems } from "@/main";
import React, { useState } from "react";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header absolute z-50 top-0 left-0 w-full">
    <div className="container relative">
      <div
        className={`topbar flex items-center justify-between gap-10 pb-3 lg:pt-5 pt-4 lg:static z-10 ${
          isMenuOpen ? "fixed" : "absolute"
        } w-full top-0 left-0 lg:px-0 px-8`}
      >
        <div className="logo">
          <Link href="/"> <Image src="/images/logo.png" width={220} height={139} alt="" /> </Link>
        </div>
        <div className="social_icons lg:flex hidden gap-6 items-center justify-between">
          <SocialIconsList />
          <ButtonLink
            text="Log in"
            link="#"
            classes="py-3 max-w-[142px] w-full px-10 "
          />
          <button className="flex gap-3 items-center">
            <Image src="/images/down.svg" width={14} height={8} alt="" />
            <Image src="/images/flag.png" width={33} height={22} alt="" />
            <span className="text-white">English</span>
          </button>
        </div>
        <div className="lg:hidden flex">
          {isMenuOpen ? (
            <Image
              src="/images/cancel.svg"
              width={24}
              height={24}
              alt=""
              onClick={handleMenu}
            />
          ) : (
            <Image
              src="/images/menu.svg"
              width={24}
              height={24}
              alt=""
              onClick={handleMenu}
            />
          )}
        </div>
      </div>
    </div>

    <div
      className={`navbar lg:border-y-[0.5px] border-y-white/50 lg:py-3 2xl:mt-5 lg:mt-3 lg:static fixed top-0 left-0 w-full h-full lg:bg-none ${
        isMenuOpen ? "block navbar-open" : "lg:block hidden"
      } bg-theme-gradient pt-28`}
    >
      <ul className="container flex lg:flex-row flex-col justify-between lg:items-center">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="border-t-[0.5px] border-t-white/50 lg:border-0 lg:last:border-0 last:border-b-[0.5px] last:border-b-white/50 lg:py-0 py-4 lg:pl-0 pl-8"
          >
            <Link
              href={item.link}
              className="uppercase font-inter text-white hover:opacity-60 tracking-[2.6px] text-sm"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="pl-8 pt-10 lg:hidden block h-full">
        <button className="flex gap-3 items-center mb-10">
          <Image src="/images/down.svg" width={14} height={8} alt="" />
          <Image src="/images/flag.png" width={33} height={22} alt="" />
          <span className="text-white">English</span>
        </button>

        <ButtonLink
          text="Log in"
          link="#"
          classes="py-3 max-w-[142px] w-full px-10 block"
        />
       <SocialIconsList />
      </div>
    </div>
  </header>
  )
}

export default Header;