import React from "react";
import tree from "../../assets/images/Frame.png";

const section10 = () => {
  return (
    <div className="bg-[#213F39] text-oq">
      <div className="bg-[#213F39] flex items-center justify-between gap-[224px] text-oq pl-[90px] pt-[72px] pr-[319px] pb-[]">
        <div className="flex items-center gap-[68px]">
          <img src={tree} alt="" />
          <div>
            <h2>Om Estea</h2>
            <h2>Fonder</h2>
            <h2>Investera</h2>
            <h2>Medarbetare</h2>
            <h2>Press</h2>
          </div>

          <div>
            <h2>Instagram</h2>
            <h2>Linkedin</h2>
          </div>
        </div>
        <div>
          <p>Estea AB</p>
          <p>Box 7135</p>
          <p>103 87 Stockholm</p>
          <p>08-679 05 00</p>
          <p>info@estea.se</p>
        </div>
      </div>
      <h2 className="text-center  mt-5">
        Copyright © 2021 Estea AB. All rights reserved. Om personuppgifter . Om
        visselblåsning. Synpunkter och klagomål.
      </h2>
    </div>
  );
};

export default section10;
