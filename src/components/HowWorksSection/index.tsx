import React from "react";
import SectionHeader from "../shared/SectionHeader";
import Image from "next/image";
import ImageCard from "./ImageCard";

// images
import howWorkImg1 from "@/assets/images/howworks1.png";
import howWorkImg2 from "@/assets/images/howworks2.png";
import howWorkImg3 from "@/assets/images/howworks3.png";

function HowWorksSection() {
  return (
    <div className="bg-white z-50 relative py-16 border-t-2">
      <SectionHeader
        title="How It Works"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <div className="flex flex-row gap-7 w-full z-50 h-[60vh] mt-24 px-[210px] justify-center">
        <ImageCard
          image={howWorkImg1}
          text={"1."}
          title="Purchase Securely"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ImageCard
          image={howWorkImg2}
          text={"2."}
          title="Ships From Warehouse"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ImageCard
          image={howWorkImg3}
          text={"3."}
          title="Style Your Room"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
}

export default HowWorksSection;
