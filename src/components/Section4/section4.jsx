import { useState } from "react";

import move from "../../assets/icon/chevron-right.svg";

const section4 = ({ setActive }) => {
  const [activePage, setActivePage] = useState("/");
  return (
    <div className=" w-full h-[501px] bg-[#E8E4DC] flex ">
      <div className="w-[600px] h-[501px] bg-green">
        <h2 className=" fonr-[Roboto] pt-[97px] pl-[64px] font-normal text-[48px] hover:text-red-500 transition-all duration-1000 leading-[67.2px] text-oq w-[375px] h-[135px] ">
          Esteas fastighetsfonder
        </h2>
        <p className="font-[Roboto] text-[34px] leading-[41.99px] font-normal text-oq w-[449px] h-[126px] pt-[100px] pl-[64px]">
          Estea erbjuder möjligheten att investera i fastigheter genom våra
          fonder
        </p>
      </div>
      <button className={`${activePage === "/" ? "" : "bg-oq"}`}>
        <img
          className={`w-[50px] h-[50px] ml-[64px] mt-[38px] ${setActivePage === "" ? "bg-yellow" : "bg-oq"}`}
          src={move}
          alt=""
          onClick={() => setActive("")}
        />

        <h2 className="ml-[64px] pt-[300px] font-Rob font-normal text-[28px] leading-[39px]">
          Läs mer om våra fonder
        </h2>
      </button>
    </div>
  );
};

export default section4;
