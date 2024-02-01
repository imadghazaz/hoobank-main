import {Button} from "@/components";
import Image from "next/image";

const CardDeal = () => (
  <section className="section max-container padding-container">
    <div className="sectionInfo">
      <h2 className="heading2">
      Why Choose Eenginex  <br className="sm:block hidden" /> for Your Travel Agency?
      </h2>
      <p className={`paragraph max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className="sectionImg h-[500px]">
      <Image src="/card.png" alt="billing" fill className="relative" />
    </div>
  </section>
);

export default CardDeal;
