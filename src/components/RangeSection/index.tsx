import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import Image from 'next/image';

// images
import rangeImg1 from "@/assets/images/range1.png";
import rangeImg2 from "@/assets/images/range2.png";
import rangeImg3 from "@/assets/images/range3.png";

function RangeSection() {
  return (
    <div className='bg-white z-50 relative py-16'>
      <SectionHeader title="Inspiration Collection" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <div className='flex flex-row gap-7 w-full z-50 h-[60vh] mt-24 px-[210px] justify-center'>
        <div className='flex-1'>
          <Image src={rangeImg1} alt="inspiration1" className="object-cover w-full rounded-xl" />
          <div className='flex justify-center text-2xl font-semibold py-5'>Dining</div>
        </div>
        <div className='flex-1'>
          <Image src={rangeImg2} alt="inspiration2" className="object-cover w-full rounded-xl" />
          <div className='flex justify-center text-2xl font-semibold py-5'>Living</div>
        </div>
        <div className='flex-1'>
          <Image src={rangeImg3} alt="inspiration3" className="object-cover w-full rounded-xl" />
          <div className='flex justify-center text-2xl font-semibold py-5'>Bed Room</div>
        </div>
      </div>
    </div>
  )
}

export default RangeSection;