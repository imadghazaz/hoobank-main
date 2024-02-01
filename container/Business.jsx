import { features } from "@/constants";
import {Button} from "@/components";
import Image from "next/image";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-col sm:flex-row p-6 rounded-[20px] max-w-[700px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] mb-5 sm:mb-0 m-auto sm:m-0 rounded-full flexCenter bg-dimBlue`}>
      <Image src={icon} alt="star" fill className="!w-[50%] !h-[50%] !relative object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 text-center sm:text-left">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className="section max-container padding-container">
    <div className="sectionInfo">
      <h2 className="heading2">
      You Focus on Business, <br className="sm:block hidden" /> We Manage the Tech.
      </h2>
      <p className={`paragraph max-w-[470px] mt-5`}>
      Transform Your Business Journey: Optimize Operations, Maximize Returns, 
      and Save Resources with the Right AI Solutions. In a World of Choices, 
      We Simplify the Path.
      </p>

      <Button styles={`my-10`} />
    </div>

    <div className={`$sectionImg flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
