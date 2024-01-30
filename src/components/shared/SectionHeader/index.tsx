import React from "react";

function SectionHeader({ title, subtitle }: any) {
  return (
    <div className="flex flex-col w-full gap-5 justify-center">
      <h1 className="text-black text-3xl font-bold text-center">
        {title}
      </h1>
      <h3 className="text-[#666] text-xl text-center">
        {subtitle}
      </h3>
    </div>
  );
}

export default SectionHeader;
