import { Button } from "@/components";
import Image from "next/image";

const Billing = () => (
  <section id="product" className="sectionReverse max-container padding-container">
    <div className="sectionImgReverse h-[600px]">
      <Image src="/chatBot.png" alt="billing" width={600} height={500} className=" z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className="sectionInfo">
      <h2 className="heading2">
        Begin Your Journey <br className="sm:block hidden" /> with Eenginex:
      </h2>
      <p className={`paragraph max-w-[470px] mt-5`}>
        Start with ChatBot Integration, Experience the Power of Seamless Conversations, 
        and Discover the Difference Before Embarking on Full-Scale AI Consultation and System Enhancement.
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Image src="/apple.svg" alt="app_store" width={128.86} height={42.05} className="object-contain mr-5 cursor-pointer" />
        <Image src="/google.svg" alt="google_play" width={144.17} height={43.08} className="object-contain cursor-pointer" />
      </div> */}
      <Button styles={`mt-10`} />
    </div>
  </section>
);

export default Billing;
