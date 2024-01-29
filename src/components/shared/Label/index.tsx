import React from "react";

function Label({dataArr}:any) {
  return (
    <div className="flex items-center w-full justify-around h-[15vh] bg-[#F2F5FF] z-50 px-24">
      {dataArr?.map((item: any,index: any)=>(
        <div className="flex flex-row gap-5">
            <div className="flex items-center">{item.icon}</div>
            <div className="flex flex-col text-black">
                <div className="text-2xl font-semibold">{item.title}</div>
                <div className="text-base">{item.subtitle}</div>
            </div>
        </div>
      ))}
    </div>
  );
}

export default Label;
