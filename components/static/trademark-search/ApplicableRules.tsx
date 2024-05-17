import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/trademark-search/Applicable_Rules.svg";
interface HeroProps {
    cityName: string;
}
const ApplicableRules = ({ cityName }: HeroProps) => {
  return (
    <div id="ApplicableRules">
       <Image
            alt="Applicable Rules/Acts/ Regulations"
            className="ApplicableRules-img w-100"
            height={300}
            loading="lazy"
            src={bft}
          />
      <div className="benefits flex w-80 m-auto ">

        <div className="flex-7">
          <p><strong>The Trademarks Act, 1999:</strong> This is the primary legislation governing trademarks in {cityName}. It outlines the provisions related to the registration, protection, and enforcement of trademarks in the country.</p>  
          <p><strong>The Trademarks Rules, 2017:</strong> These rules provide detailed procedures and guidelines for various aspects of trademark registration and related processes, including conducting searches.</p>  
        </div>
      
      </div>
    </div>
  );
};

export default ApplicableRules;


