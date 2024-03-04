import leaf from "../../assets/images/leaf.png";

const section3 = () => {
  return (
    <div
      className="w-full h-[600px]"
      style={{
        backgroundImage: `url(${leaf})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-color w-[600px] h-[189px] ml-[804px]">
        <h2 className=" font-Rob font-normal text-[15px] w-[451px] h-[125px] leading-[25px] pl-[64px] pt-[31px] pb-[33px] ">
          Sedumtak fungerar isolerande och skyddar bland annat taket mot
          UV-strålar. Det fångar upp delar av det sura regn som annars skulle
          hamna i våra dagbrunnar och slutligen i våra sjöar. Dessutom är det
          vackert att se på.
        </h2>
      </div>
    </div>
  );
};

export default section3;
