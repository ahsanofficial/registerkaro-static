import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const ApplicableRules = () => {
  return (
    <div id="ApplicableRules">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt=""
            className="ApplicableRules-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p><strong>The Trademarks Act, 1999:</strong> This is the primary legislation governing trademarks in India. It outlines the provisions related to the registration, protection, and enforcement of trademarks in the country.</p>  
          <p><strong>The Trademarks Rules, 2017:</strong> These rules provide detailed procedures and guidelines for various aspects of trademark registration and related processes, including conducting searches.</p>  
        </div>
      
      </div>
    </div>
  );
};

export default ApplicableRules;


