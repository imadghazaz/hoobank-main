import {Billing,CardDeal,Business,Clients,CTA,Stats,Testimonials,Hero} from '@/container'
import { Navbar,Footer } from '@/components';
import WhyUs from '@/container/WhyUs';


export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyUs /> 
      <Business />
      <Billing />
      {/* <CardDeal /> */}
      <Testimonials />
      <Clients />
      <CTA />
    </>
  );
}
