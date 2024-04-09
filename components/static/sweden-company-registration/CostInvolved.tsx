import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/sweden-company-registration/Cost_Involved_in_Compa.svg";

const CostInvolved = () => {
  return (
    <div id="CostInvolved">
        <p className="main-para">The cost of Company Registration in Sweden depends on the application method but typically ranges from 1,900 to 2,200 SEK. Additional costs include:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      <div className="flex-7 pt-5">
            <ol>
                <li>Minimum Capital: 25,000 SEK for an LLC.</li>
                <li>Bank Account Setup: Varies depending on the bank and services chosen.</li>
                <li>Office Leasing or Purchasing: Depends on the location and size of the office.</li>
                <li>Payroll: Ongoing costs for employees' salaries and benefits.</li>
            </ol>
        </div>
      
      <div className="flex-4">
        <Image
            alt="Cost Involved in Company Registration in Sweden"
            className="CostInvolved-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
       
      </div>
    </div>
  );
};

export default CostInvolved;


