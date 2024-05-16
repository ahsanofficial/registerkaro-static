import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/microfinance-registration/two.svg";

const Characteristics = () => {
  return (
    <div id="Characteristics">
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <ol>
            <li>Helps individuals from low-income backgrounds by offering financial support, and granting them access to credit facilities.</li>
            <li>Provides easy loans without requiring collateral or imposing pre-payment charges, making borrowing easier and more affordable.</li>
            <li>Offers shorter repayment periods to suit the financial circumstances of borrowers from low-income groups.</li>
            <li>Maintain a minimum net owned funds of Rs. 5 crore (Rs. 2 crore for North East Regions) when registering as an NBFC, ensuring financial stability and compliance.</li>
            <li>Having the flexibility not to be a member of any Self-Regulatory Organization (SRO) like RBI, SEBI, NABARD, SIDBI, or IRDA.</li>
            <li>Ensures interest rate differences are 4% or less to promote fair and transparent lending practices.</li>
            <li>Partnering with Credit Information Companies (CICs) to encourage responsible lending and access to borrower credit information.</li>
            <li>Charging processing fees from customers, capped at 1% of the loan amount, to maintain affordability and transparency in financial dealings.</li>
          </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="Characteristics of Micro Finance Company"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Characteristics;
