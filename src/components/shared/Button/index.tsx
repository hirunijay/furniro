import React from "react";

function Button({text}: any) {
  return (
    <button className="py-6 px-[72px] w-[60%] rounded-[50px] bg-[#054C73] text-base text-white font-bold">
      {text}
    </button>
  );
}

export default Button;
