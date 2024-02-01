import Link from "next/link";
import React from "react";

const Button = ({ styles }) => (
  <Link target="_blank" href='https://calendly.com/eenginex/discovery-call' className="z-10">
    <button type="button" className={`cursor-pointer py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Get Started
    </button>
  </Link>
);

export default Button;
