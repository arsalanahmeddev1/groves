"use client";
import ButtonLink from "@/components/ButtonLink";
import Slider from "react-slick";
import Image from "next/image";
import {bookGeneralSliderSettings} from "@/main";

const BookGeneralSlider = ({ heading, buttonText }) => {
  return (
    <>
      <div className="container md:pt-[100px] pt-12 sm:px-0 px-4">
        <h2 className="pb-10">
          Book General Access ticket and <br className="md:block hidden" /> enjoy the attractions for free
        </h2>
        <ButtonLink
          classes="py-4 sm:max-w-[350px] max-w-[300px] text-[15px] w-full pl-6 pr-4"
          text="Book General Access Ticket"
          link="#"
          arrow
        />
      </div>
      <div className="lg:pl-[12vw]">
      <div className="pt-16">
        <Slider {...bookGeneralSliderSettings}>
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
            <h3 className="text-center pt-5">Hawanim <br /> Groves City</h3>
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
    </>
  );
};

export default BookGeneralSlider;

