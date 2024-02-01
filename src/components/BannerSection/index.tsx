import React from "react";
import Button from "../shared/Button";
import Image from "next/image";

// images
import BannerImg from "@/assets/images/bannerImage.png";

function BannerSection() {
  return (
    <div className="flex items-center h-[90vh] bg-[#F2F5FF] px-32">
      <div className="flex flex-col flex-1 gap-10 mx-20">
        <h1 className="text-black text-3xl font-bold">Beautify Your Space</h1>
        <p className="text-xl text-[#666]">
          Do eiusmod tempor incididunt ut labore et
          <br /> dolore magna aliqua. Ut enim ad minim veniam,
          <br /> quis nostrud exercitation ullamco laboris.
        </p>
        <div className="w-full"><Button text="Learn More" /></div>
      </div>
      <div className="flex-[20%] flex items-center">
        <div className="h-[100vh] flex items-center relative">
          <Image
            src={BannerImg}
            alt="Banner Image"
            className="-scale-x-100 object-cover h-[70%] z-50"
            style={{borderTopRightRadius: "50px", borderBottomLeftRadius: "50px"}}
          />
          <div className="h-[40vh] w-[40vh] rounded-full bg-[#09513B] absolute right-0 translate-x-1/3"></div>
        </div>        
      </div>
    </div>
  );
}

export default BannerSection;
