import { Button } from '@/components'
import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
  return (
    <section className="flex flex-col max-container padding-container">
        <div className="sectionInfo !items-center w-full">
            <h2 className="heading2 !w-auto">
            Why Choose Eenginex  <br className="sm:block hidden" /> for Your Travel Agency?
            </h2>
            <p className={`paragraph text-justify last-justify sm:last-center !text-[15px] max-w-[1000px] mt-5`}>
            Having gained expertise through collaborating with travel agencies we have a deep understanding 
            of what truly works. Our extensive industry experience guides our customized AI solutions guaranteeing
             that we implement strategies and proven practices to enhance the success of your travel agency.
              Lets work together to make your travel business extraordinary.
            </p>

            <Button styles={`mt-10`} />
            <div className="md:mt-[-120px] z-0">
                <Image src="/aboutUs.png" alt="billing" fill className="!relative my-10" />
            </div>
        </div>
  </section>
  )
}

export default WhyUs