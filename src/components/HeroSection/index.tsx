import React from "react";
import Image from "next/image";
import HeroImg from "@/assets/images/hero-section-image.jpg";

function HeroSection() {
  return (
    <div className="flex lg:h-[90vh] items-center relative">
      <Image src={HeroImg} alt="hero section image" className="object-cover" />
      <div className="absolute w-[40%] bg-[#DFE9F4] text-black z-50 right-0 m-20 p-10 flex flex-col gap-5 rounded-[10px]">
        <h3 className="text-base font-semibold">New Arrivals</h3>
        <h1 className="text-5xl leading-tight font-bold text-[#054C73]">
          Discover Our
          <br /> New Collection
        </h1>
        <p className="text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="py-6 px-[72px] w-1/2 rounded-[50px] bg-[#054C73] text-base text-white font-bold">
          BUY NOW
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
