import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
     
        <div className="flex-3">
            <Image
              alt="Eligibility"
              className="Importance-img-h-100 w-100"
              height={350}
              loading="lazy"
              src={dft}
            />
          </div>
          
        <div className="flex-4 pt-5">
            <p><strong>1. </strong>The applicant has to be eligible as per the criteria specified in Schedule II of SEBI Regulation</p>
            <p><strong>2. </strong>The applicant is not making any investment under misrepresentation or forgery.</p>
            <p><strong>3. </strong>If investment is made on behalf of the company, then the MoA and AoA of the company should allow them to do so.</p>
           
        </div>
      </div>
    </div>
  );
};
