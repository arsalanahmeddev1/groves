"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import ButtonLink from "./ButtonLink";
import {settings} from "@/main";

const SlideContent = () => (
  <div className="overlay w-full h-full absolute z-2">
    <div className="container mx-auto xl:pt-0 pt-20 sm:flex justify-center items-start flex-col h-full">
      <div className="lg:grid lg:text-left grid-cols-2 w-full sm:px-0 px-6">
        <div className="sm:pt-10 pt-32 lg:pt-0">
          <h4 className="pb-6 text-[13px] tracking-[2.6px] font-inter">KHAWAJA YANNI</h4>
          <h1 className="xl:text-[68px] text-[50px] font-playfair xl:leading-[76px] leading-[60px]">
            The new <br/> era of luxury
          </h1>
          <p className="pt-6 sm:pb-10 pb-14 font-inter">
            Lorem Ipsum is simply dummy text of the printing and{" "}
            <br className="lg:block hidden" />
            typesetting industry. Lorem Ipsum.
          </p>
          <ButtonLink
            classes="py-4 max-w-[300px] w-full pl-6 pr-4 font-inter"
            text="Book reservation now"
            link="#"
            arrow
          />
        </div>
      </div>
    </div>
  </div>
);
const Banner = () => {
  return (
    <>
      <Slider {...settings}>
        {[...Array(4)].map((_, index) => (
          <div className="relative" key={index}>
            <SlideContent  />
            <Image 
              src="/images/banner-bg.png"
              width={1540}
              height={1080}
              className="object-cover w-full h-full min-h-screen object-center"
              priority
            />
          </div>
        ))}

      </Slider>
      </>
    )
}
export default Banner;