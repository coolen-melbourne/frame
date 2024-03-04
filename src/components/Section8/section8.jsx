import Leaf from "../..//assets/images/leafs.png";
import Show from "../../assets/icon/chevron-right.svg";

const section8 = () => {
  return (
    <div className="w-full h-[844px] flex items-center">
      <div className="bg-oq w-full ">
        <h2 className="w-[563px] font-Rob font-normal text-[33px] leading-[41.99px] h-[336px] pl-[64px] pt-[173px] pr-[73px]">
          För att få träd att växa högt och brett krävs en näringsrik jordmån.
          På samma sätt är det med fastighetsinvesteringar. Vi har all kunskap
          som krävs för att få dina investeringar att skjuta iväg som ett skott
          för att sedan på lång sikt växa stabilt.
        </h2>

        <button className="flex items-center h-[168px] pl-[64px] gap-[400px] mt-[340px] bg-[#D4CC33] w-full">
          <h2>Läs mer om oss</h2>
          <img className="w-[50px] h-[50px]" src={Show} alt="" />
        </button>
      </div>
      <img className="sticky" src={Leaf} alt="" />
    </div>
  );
};

export default section8;
