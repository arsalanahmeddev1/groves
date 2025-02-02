// pages/cuisine.js
import React from "react";
import CuisineCard from "@/components/CuisineCard";
import {cuisineList} from "@/main";


const FinestCuisine = () => (
  <div className="container md:px-0 px-6 xl:pt-[124px] md:pt-[90px] pt-12">
    <div className="md:text-center text-left md:pb-16 pb-8">
      <h2>Experience the <br className="md:hidden block" /> Finest Cuisine</h2>
      <p className="max-w-[775px] mx-auto md:block hidden font-inter">
        {`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`}
      </p>
    </div>

    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-3">
      {cuisineList.map((cuisine, index) => (
        <CuisineCard key={index} {...cuisine} />
      ))}
    </div>
  </div>
);

export default FinestCuisine;
