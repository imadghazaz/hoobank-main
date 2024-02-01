import { clients } from "@/constants";
import Image from "next/image";

const Clients = () => (
  <section className={`flexCenter my-4 max-container padding-container`}>
    <div className={`flexCenter flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 flexCenter sm:min-w-[192px] min-w-[120px] m-5`}>
          <Image src={client.logo} alt="client_logo" width={100} height={20} className="sm:w-[192px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
