import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/rera-registration/Check_your_Eligibility.svg";

import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

const Eligibility = () => {
  return (
    <div id="Eligibility">
        <p className="main-para">You are eligible for RERA Registration Certificate is you fall to be in any of the following category:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
        <Image
            alt="Check your Eligibility for RERA Registration Certificate"
            className="Eligibility-img w-100"
            height={380}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-3 pt-3">
           <p><strong>1. </strong> Builders</p>
           <p><strong>2. </strong> Constructors</p>
           <p><strong>3. </strong> Agents</p>
           <p><strong>4. </strong> Advisors</p>
           <p><strong>5. </strong> Other Intermediatory Individuals</p>
        </div>
       
      </div>
    </div>
  );
};

export default Eligibility;


