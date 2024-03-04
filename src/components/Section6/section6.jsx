import img from "../../assets/images/bg-imae.png";

const section6 = () => {
  return (
    <div className="flex items-center h-[768px]">
      <img src={img} alt="bg-image" />
      <div className="bg-color w-full font-normal text-[15px] leading-[16px] h-[768px] font-Rob  pt-[88px] pl-[64px] pb-[78px]">
        <h2 className="">Snabbfakta</h2>
        <hr className="border-black  w-[600px] mt-[12.5px]" />
        <div className="flex items-center w-[600px] mt-[7.5px] justify-between">
          <h2>Namn</h2>
          <p className="max-w-[211px]">Estea Omsorgsfastigheter AB (publ)</p>
        </div>
        <hr className="border-black  w-[600px] mt-[12.5px]" />
        <div className="flex items-center w-[600px] mt-[7.5px] justify-between">
          <h2>Start</h2>
          <p>2019</p>
        </div>
        <hr className="border-black  w-[600px] mt-[12.5px]" />
        <div className="flex items-center w-[600px] mt-[7.5px] justify-between">
          <h2>Löptid</h2>
          <p>5 år</p>
        </div>
        <hr className="border-black  w-[600px] mt-[12.5px]" />
        <div className="flex items-center w-[600px] mt-[7.5px] justify-between">
          <h2>Målavkastning</h2>
          <p>8-10 procent per år</p>
        </div>
        <hr className="border-black  w-[600px] mt-[12.5px]" />
        <div className="flex items-center w-[600px] mt-[7.5px] justify-between">
          <h2>Ränta</h2>
          <p className="max-w-[165px]">
            4 procent per år med kvartalsvis utbetalning*
          </p>
        </div>
        <hr className="border-black  w-[600px] mt-[12.5px]" />
        <div className="flex items-center w-[600px] mt-[7.5px] justify-between">
          <h2>Noterad</h2>
          <p>Nasdaq Stockholm</p>
        </div>
        <hr className="border-black  w-[600px] mt-[12.5px]" />
        <div className="flex items-center w-[600px] mt-[7.5px] justify-between">
          <h2>Antal fastigheter</h2>
          <p>43</p>
        </div>
        <hr className="border-black  w-[600px] mt-[12.5px]" />
        <div className="flex items-center w-[600px] mt-[7.5px] justify-between">
          <h2>Total area (kvm)</h2>
          <p>78 466 kvm</p>
        </div>
        <hr className="border-black  w-[600px] mt-[12.5px]" />
        <div className="flex items-center w-[600px] mt-[7.5px] justify-between">
          <h2 className="max-w-[217px]">
            *Ackumuleras från och med 10 april 2023 för utbetalning vid senare
            utvisat tillfälle
          </h2>
          <p>43</p>
        </div>
        <hr className="border-black  w-[600px] mt-[12.5px]" />
        <div className="flex items-center w-[600px] h-[80px] mt-[7.5px] justify-between">
          <h2 className="max-w-[217px]">Nyckeltal</h2>
        </div>
        <hr className="border-black  w-[600px] mt-[12.5px]" />
        <div className="flex items-center w-[600px] mt-[7.5px] justify-between">
          <h2 className="max-w-[217px]">Lorem, ipsum.</h2>
          <p>110,5 procent</p>
        </div>
        <hr className="border-black  w-[600px] mt-[12.5px]" />
        <p className="pt-2 max-w-[425px]">
          Uppgifter per 2022-09-30. Nyckeltal baseras på data från senast
          publicerad rapport.
        </p>
      </div>
    </div>
  );
};

export default section6;
