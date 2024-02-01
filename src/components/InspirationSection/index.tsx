import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import Image from 'next/image';

// images
import inspirationImg1 from "@/assets/images/inpiration-1.jpg";
import inspirationImg2 from "@/assets/images/inspiration-2.jpg";
import inspirationImg3 from "@/assets/images/inspiration-3.jpg";

function InspirationSection() {
  return (
    <div className='bg-white z-50 relative py-16'>
      <SectionHeader title="Inspiration Collection" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <div className='flex flex-row gap-7 z-50 h-[60vh] mt-24 justify-center'>
        <Image src={inspirationImg1} alt="inspiration1" className="object-cover w-[25%] rounded-tl-[120px]" />
        <Image src={inspirationImg2} alt="inspiration2" className="object-cover w-[25%] relative bottom-10" />
        <Image src={inspirationImg3} alt="inspiration3" className="object-cover w-[25%] rounded-br-[120px]" />
      </div>
    </div>
  )
}

export default InspirationSection;