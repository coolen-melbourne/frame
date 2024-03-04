import rasm from "../../assets/images/IMAGE.png";

const Header = () => {
  return (
    <div
      className="w-full h-[640px]"
      style={{
        backgroundImage: `url(${rasm})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2 className="font-Rob hover:text-red-800 transition-all duration-1000 font-normal text-[72px] leading-[85.68px] text-oq w-[890px] h-[172px] pt-[428px] pl-[64px] pb-[40px]">
        Estea bidrar
        <span className="hover:text-yellow transition-all duration-1000">
          {" "}
          till
        </span>{" "}
        långsiktig samhällsutveckling
      </h2>
    </div>
  );
};

export default Header;
