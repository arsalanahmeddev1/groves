import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIconsList } from "@/components/SocialIcons";


const Footer = () => {
  return (
    <footer className="border-t border-t-white/40 mdLpt-16 pt-10">
      <div className="container md:block hidden">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <h2>
            Join us for an <br /> unforgettable experience
          </h2>
          <div>
            <h4 className="text-[13px] tracking-[2.6px] pb-6 font-inter">
              DOWNLOAD THE GROVES APP
            </h4>
            <div className="flex gap-5 w-full">
              <Image
                className="object-contain"
                src="/images/app-store.png"
                alt="App Store"
                width={150}
                height={50}
              />
              <Image
                className="object-contain"
                src="/images/google-play.png"
                alt="Google Play"
                width={170}
                height={50}
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-[80%] flex justify-between pt-20">
          <div className="max-w-[250px] w-full">
            <h4 className="text-[13px] uppercase pb-4 tracking-[2.6px] font-inter">
              LOCATION
            </h4>
            <p className="leading-[23px] font-inter">
              Al-Hizam Park <br /> Al-Semairi, Yanbu Al Bahr 46455 <br /> Riyadh
              Saudi Arabia
            </p>
          </div>
          <div className="max-w-[250px] w-full ">
            <h4 className="text-[13px] uppercase pb-4 tracking-[2.6px] font-inter">
              WORKING HOURS
            </h4>
            <p className="leading-[23px] font-inter">
              Sun until Thurs: 4:00PM <br /> Fri & Sat: 2:30PM <br /> <br />{" "}
              Gates Close at: Sat until Wed: 12:00AM Thu & Fri: 12:30AM
            </p>
          </div>
          <div className="max-w-[250px] w-full">
            <h4 className="text-[13px] uppercase pb-4 tracking-[2.6px] font-inter">
              LOCATION
            </h4>
            <p className="leading-[23px] font-inter">
      <Link href="mailto:cc@thegroves-sa.com" className="hover:underline">
        cc@thegroves-sa.com
      </Link>
      <br />
      <Link href="tel:920001672" className="hover:underline">
        920001672
      </Link>
      <br />
      <br />
      <Link href="tel:+966556631309" className="hover:underline">
        +966556631309
      </Link>
    </p>
          </div>
        </div>
        <div className="footer_bottom md:pt-[73px]">
          <div className="flex items-center justify-between">
            <Image src="/images/logo.png" alt="Logo" width={286} height={65} />
            <SocialIconsList />
          </div>
        </div>
        <div className="footer_bottom md:pt-[52px] pb-12">
          <div className="flex items-center justify-between">
            <ul className="flex gap-10 items-center">
              <li className="md:text-[15px] text-[13px]">
                <Link href="#" className="font-inter">Terms & Conditions</Link>
              </li>
              <li className="md:text-[15px] text-[13px]">
                <Link href="#" className="font-inter">Privacy Policy</Link>
              </li>
              <li className="md:text-[15px] text-[13px] font-inter">
                ©2023 The Groves for Entertainment
              </li>
            </ul>
            <div className="flex items-center justify-between gap-2">
              <Image src="/images/pay/1.png" width={43} height={14} alt="" />
              <Image src="/images/pay/2.png" width={31} height={31} alt="" />
              <Image src="/images/pay/3.png" width={26} height={26} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 md:hidden block">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={200}
          height={65}
          className="pb-7"
        />
        <h2 className="leading-10 pb-12">
          Join us for an <br /> unforgettable <br /> experience
        </h2>
        <h4 className="text-[13px] tracking-[2.6px] pb-6">
          DOWNLOAD THE GROVES APP
        </h4>
        <div className="flex gap-5 w-full pb-12">
          <Image
            className="object-contain"
            src="/images/app-store.png"
            alt="App Store"
            width={150}
            height={50}
          />
          <Image
            className="object-contain"
            src="/images/google-play.png"
            alt="Google Play"
            width={170}
            height={50}
          />
        </div>
        <div className="w-full flex flex-col gap-11 pb-10">
          <div className="max-w-[250px] w-full">
            <h4 className="text-[13px] uppercase pb-4 tracking-[2.6px]">
              LOCATION
            </h4>
            <p className="leading-[23px]">
              Al-Hizam Park <br /> Al-Semairi, Yanbu Al Bahr 46455 <br /> Riyadh
              Saudi Arabia
            </p>
          </div>
          <div className="max-w-[250px] w-full">
            <h4 className="text-[13px] uppercase pb-4 tracking-[2.6px]">
              WORKING HOURS
            </h4>
            <p className="leading-[23px]">
              Sun until Thurs: 4:00PM <br /> Fri & Sat: 2:30PM <br /> <br />{" "}
              Gates Close at: Sat until Wed: 12:00AM Thu & Fri: 12:30AM
            </p>
          </div>
          <div className="max-w-[250px] w-full">
            <h4 className="text-[13px] uppercase pb-4 tracking-[2.6px]">
              LOCATION
            </h4>
            <p className="leading-[23px] font-inter">
      <Link href="mailto:cc@thegroves-sa.com" className="hover:underline">
        cc@thegroves-sa.com
      </Link>
      </p>
            
          </div>
        </div>
        <div className="flex items-center gap-8 pb-12">
       <SocialIconsList />
        </div>
        <div className="flex flex-col gap-7 pb-16">
          <ul className="flex flex-col gap-7">
            <li className="md:text-[15px]">
              <Link href="#" className="font-inter">Terms & Conditions</Link>
            </li>
            <li className="md:text-[15px]">
              <Link href="#" className="font-inter">Privacy Policy</Link>
            </li>
            <li className="md:text-[15px] font-inter">
              ©2023 The Groves for Entertainment
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <Image src="/images/pay/1.png" width={43} height={14} alt="" />
            <Image src="/images/pay/2.png" width={31} height={31} alt="" />
            <Image src="/images/pay/3.png" width={26} height={26} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
