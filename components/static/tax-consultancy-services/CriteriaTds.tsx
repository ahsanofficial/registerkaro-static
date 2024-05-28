import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/Tax-Consultancy-Services-for-Startups/Eligibility Criteria for TDS Deduction in India.svg";

export const CriteriaTds = () => {
  return (
    <div id="CriteriaTds">
      <p className="main-para">The following entities are considered eligible for TDS deduction and filing in India:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      
        <div className="flex-7">
           <p><strong>1. </strong>Individuals making specified payments under the Income Tax Act, such as salaries, commissions, professional fees and rent exceeding specified thresholds.</p>
           <p><strong>2. </strong>Hindu Undivided Family (HUF) carrying out business or professional activities and making payments eligible for TDS deduction.</p>
           <p><strong>3. </strong>Companies, Partnership Firms, Body of Individuals, Association of Individuals and Local Authorities which deduct TDS on various payments like salaries, interest, rent and consultancy fees.</p>

        </div>
        <div className="flex-4">
            <Image
              alt="Eligibility Criteria for TDS Deduction in India"
              className="Importance-img-h-100 w-100"
              height={285}
              loading="lazy"
              src={dft}
            />
        </div>
        
      </div>
    </div>
  );
};
