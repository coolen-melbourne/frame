import download from "../../assets/icon/chevron-right.svg";

const section1 = () => {
  return (
    <div className="w-full h-[467px] bg-color   ">
      <div className="w-[900px] h-[299px] bg-green">
        <h2 className=" font-Rob font-normal text-[30px] leading-[41.99px]  text-oq pt-[87px] pb-[86px] pl-[64px] pr-[67px]">
          Vi skapar värde för samhället och våra investerare genom att vi
          utvecklar och investerar i kommersiella fastigheter och social
          infrastruktur
        </h2>
      </div>
      <div className="bg-yellow w-[900px] h-[168px] flex items-center gap-[515px] hover:rounded-br-full hover:rounded-t-full transition-all duration-1000">
        <h2 className="pl-[64px] pt-[64px] pb-[65px] font-Rob font-normal text-[28px] leading-[39px]">
          Läs mer om oss
        </h2>
        <img className="w-[40px] h-[40px]  " src={download} alt="" />
      </div>
    </div>
  );
};

export default section1;
