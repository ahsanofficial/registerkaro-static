import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/financial-modeling-for-startups/Key_Challenges_in.svg";

export const KeyChallanges = () => {
  return (
    <div id="KeyChallanges">
        <p className="main-para">You need to have following documents for registration process in Qatar [List is not exhaustive]:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
        <div className="flex-4 ">
            <p><strong>1. Market Uncertainty: </strong>India’s startup ecosystem is dynamic, with changing market trends and regulatory landscapes. Accounting for these uncertainties in the financial model is essential.</p>
            <p><strong>2. Data Availability: </strong>Startups may lack historical data, making projections challenging. They must rely on market research, industry benchmarks, and early operational metrics to fill these gaps.</p>
            <p><strong>3. Complexity in Valuation: </strong>Valuing a startup accurately is complex due to the absence of tangible assets. Startups often use methods like Discounted Cash Flow (DCF), Comparable Company Analysis (CCA), or the Risk Factor Summation (RFS) method.</p>
          
        </div>
        <div className="flex-5">
            <Image
              alt="Key Challenges in Financial Modeling"
              className="Importance-img-h-100 w-100"
              height={400}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};
