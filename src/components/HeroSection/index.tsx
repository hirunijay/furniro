import React from "react";
import Image from "next/image";
import HeroImg from "@/assets/images/hero-section-image.jpg";
import Button from "../shared/Button";
import Label from "../shared/Label";

// icons
import { TbTruckDelivery } from "react-icons/tb";
import { Ri24HoursFill } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";

function HeroSection() {
  const data = [
    {
      icon: <TbTruckDelivery size={50} />,
      title: "Free Delivery",
      subtitle: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: <Ri24HoursFill size={50} />,
      title: "Support 24/7",
      subtitle: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: <MdOutlineVerifiedUser size={50} />,
      title: "100% Authentic",
      subtitle: "Lorem ipsum dolor sit amet.",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex lg:h-[90vh] items-center relative">
        <Image
          src={HeroImg}
          alt="hero section image"
          className="object-cover"
        />
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
          <Button text="BUY NOW" />
        </div>
      </div>
      <Label dataArr={data} />
    </div>
  );
}

export default HeroSection;
