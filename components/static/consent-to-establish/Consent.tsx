import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/consent-to-establish/consent_to_es.svg";

export const Consent = () => {
  return (
    <div id="Consent">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      
        
        <div className="flex-7 pt-4">
          <p className="pt-2"><strong>1. </strong> Projects Validity Period for Micro and Small scale Green category projects Combined CTE & CTO issued for 15 years after collecting 5 years fees.</p>
          <p className="pt-2"><strong>2. </strong>For all other projects, CTE is issued for 5 Years (1 year fee).</p>
         
        </div>
        <div className="flex-3">
          <Image
            alt=" Consent to Establish a validity period shall be as follows:,Projects Validity Period for Micro and Small scale Green category projects"
            className="Importance-img-h-100 w-100"
            height={200}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
