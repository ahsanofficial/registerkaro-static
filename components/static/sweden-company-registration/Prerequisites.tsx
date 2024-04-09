import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/sweden-company-registration/Eligibility_for_Company.svg";

export const Prerequisites = () => {
  return (
    <div id="Prerequisites">
        <p className="main-para">To register a company in Sweden, you must meet the following alliances:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4 ">
          <Image
            alt="Eligibility for Company Registration in Sweden"
            className="Prerequisites-img w-100"
            height={400}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7 pt-5">
           <p><strong>1. Minimum Capital: </strong>A minimum of 25,000 SEK is required for a limited company.</p>
           <p><strong>2. Directors: </strong>A limited company must have at least one board member.</p>
           <p><strong>3. Auditor: </strong>A public limited company must appoint an auditor.</p>
           <p><strong>4. Residency: </strong>At least half of the board of directors must reside within the European Economic Area (EEA).</p>
        </div>

      </div>
    </div>
  );
};
