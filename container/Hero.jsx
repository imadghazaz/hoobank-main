import {GetStarted} from "@/components";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col paddingY max-container padding-container`}>
      <div className={`flex-1 flexStart flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image src="/Discount.svg" alt="discount" width={32} height={32}/>
          <p className={`paragraph ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Year</span> Subscribtion
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[40px] text-white ss:leading-[100.8px] leading-[60px]">
          <span className="text-gradient">Elevate </span>{" Your"}<br className="block" />
          Business{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[40px] text-white ss:leading-[100.8px] leading-[60px] w-full">
          with AI.
        </h1>
        <p className={`paragraph max-w-[470px] mt-5`}>
          Boosting Your Business Smartly: Our Experts Use a 
          Proven Method to Make AI Work for You. We Study, Adapt, Improve..
        </p>
      </div>

      <div className={`flex-1 flex flexCenter md:h-[600px] md:my-0 my-10 relative `}>
        <Image src="/robot2.png" alt="billing" width={500} height={500} className=" z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden flexCenter`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
