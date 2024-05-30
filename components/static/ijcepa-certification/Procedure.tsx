import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/ijcepa-certification/Procedure for Obtaining IJCEPA Certificate.svg";

interface HeroProps {
  cityName: string;
}

export const Procedure = ({ cityName }: HeroProps) => {
  return (
    <div id="Procedure">
        <p className="main-para">The complete procedure for obtaining the IJCEPA Certificate is as follows:</p>
      <div className="flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Procedure for Obtaining IJCEPA Certificate"
            className="Importance-img-h-100 w-100"
            height={340}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6">
          <ol>
            <li><strong>Application: </strong>The applicant applies to the appropriate authority with a Digital Signature Certificate (DSC) and updated Import-Export Code (IEC).</li>
            <li><strong>Necessary Documents: </strong>The applicant submits all relevant information and required documents along with the application.</li>
            <li><strong>Payment: </strong>The applicant makes payment of the requisite fees after submission of the application form.</li>
            <li><strong>Issuance of License: </strong>When all the above-mentioned steps are completed, the appropriate certificate issuing authority issues the IJCEPA certificate in the name of the applicant.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
