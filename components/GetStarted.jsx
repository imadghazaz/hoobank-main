import Image from "next/image";
import Link from "next/link";

const GetStarted = () => (
  <Link target="_blank" href='https://calendly.com/eenginex/discovery-call' className={`flexCenter w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`flexCenter flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`flexStart flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <Image src="/arrow-up.svg" alt="arrow-up" width={23} height={23} className="object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </Link>
);

export default GetStarted;
