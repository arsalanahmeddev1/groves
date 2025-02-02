"use client";
import React from "react";
import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";
import Slider from "react-slick";
import {curateSliderData} from "@/main";
const CurateSlider = () => {
  

  return (
    <div className="2xl:ml-[10vw] curate-container flex md:flex-row flex-col md:items-center gap-10 pt-16">
      <div className="w-full xl:min-w-[270px]">
        <h2 className="md:mb-10 mb-8">Curate your <br /> experience <br /> as you like</h2>
        <ButtonLink
          classes="md:py-4 py-3 font-inter max-w-[231px] text-[17px] w-full pl-6 pr-4 mb-8 rounded-[15px]"
          text="Book Tickets"
          link="#"
          arrow
        />
      </div>

      <div className="w-full">
        <Slider {...curateSliderData}>
          <div className="slide-item">
            <Image
              src="/images/bookgeneral-slider/1.png"
              alt="Little Krazy"
              width={385}
              height={526}
              className="slide-image"
            />
            <h3 className="text-center pt-5">Little Krazy</h3>
          </div>

          <div className="slide-item">
            <Image
              src="/images/bookgeneral-slider/2.png"
              alt="Hawanim Groves City"
              width={228}
              height={322}
              className="slide-image"
            />
            <h3 className="text-center pt-5">
              Hawanim <br /> Groves City
            </h3>
          </div>

          <div className="slide-item">
            <Image
              src="/images/bookgeneral-slider/3.png"
              alt="Picnic Market"
              width={385}
              height={526}
              className="slide-image"
            />
            <h3 className="text-center pt-5">Picnic Market</h3>
          </div>

          <div className="slide-item">
            <Image
              src="/images/bookgeneral-slider/4.png"
              alt="Lucaworld"
              width={167}
              height={402}
              className="slide-image"
            />
            <h3 className="text-center pt-5">Lucaworld</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CurateSlider;
