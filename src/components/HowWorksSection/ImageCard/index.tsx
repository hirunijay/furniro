import React from "react";
import Image from "next/image";

function ImageCard({ image, text, title, subtitle }: any) {
  return (
    <div className="flex-1">
      <div className="relative mb-12">
        <Image
          src={image}
          alt="inspiration1"
          className="object-cover w-full rounded-xl"
        />
        <div className="flex justify-center">
          <div className="flex bg-white items-center justify-center rounded-full absolute bottom-0 translate-y-1/2 w-28 h-28">
            <div className="flex bg-black justify-center rounded-full w-20 h-20">
              <div className="flex items-center justify-center text-white text-3xl font-bold">
                {text}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <div className="flex flex-col justify-center py-5 gap-2">
          <h3 className="text-2xl font-bold text-center">{title}</h3>
          <p className="text-center text-lg">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
