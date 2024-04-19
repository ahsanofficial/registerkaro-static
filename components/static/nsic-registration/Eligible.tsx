import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/nsic-registration/check_if_you_are_eligible.svg";
interface HeroProps {
    cityName: string;
}
const Eligible = ({ cityName }: HeroProps) => {
  return (
    <div id="Eligible">
        <p className="main-para">For proceeding ahead with the NSIC Registration, you need to fall in one of the give category to qualify for the minimum eligibility criteria:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
        <Image
            alt="Check if you are eligible for NSIC Registration"
            className="Eligible-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p><strong>1. </strong>Registration with NSIC is open to all Micro and Small Businesses who hold an EM Part-II (Optional) or Udyog Aadhaar Memorandum (UAM). </p>
            <p><strong>2. </strong>For nascent businesses, Micro & Small Enterprises that have initiated their commercial production but have not yet reached their one-year anniversary of establishment. </p>
            <p><strong>3. </strong>Then, Micro & Small Businesses may apply for and receive a Provisional Registration Certificate, which will be good for a year. </p>
        </div>
      
      </div>
      <p className="main-para"><strong>Note: </strong>It is not possible for traders to register under this scheme.</p>
    </div>
  );
};

export default Eligible;


