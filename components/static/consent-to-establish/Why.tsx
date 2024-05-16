import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/consent to establish/onetwo.svg";

export const Why = () => {
  return (
    <div id="WhyReg">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      
        <div className="flex-3">
          <Image
            alt="Consent to Establish a validity period shall be as follows"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7 pt-2">
          <p><strong>1. </strong> Application for NOC from the Board must be submitted online through portals.</p>
          <p><strong>2. </strong>The NOC issued by the Board remains valid for seven (7) years.</p>
          <p><strong>3. </strong>The application fee for Consent to Establish is determined based on the Gross Capital Investment concerning land, building, and plant machinery for the project.</p>
          <p><strong>4. </strong> All fees for availing services are required to be paid through the online payment gateway exclusively.</p>
        </div>
      </div>
    </div>
  );
};
