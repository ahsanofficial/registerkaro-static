import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/Tax-Consultancy-Services-for-Startups/Eligibility for Filing Income Tax Returns in India.svg";
interface HeroProps {
    cityName: string;
}
export const EligibilityFiling= ({ cityName }: HeroProps) => {
  return (
    <div id="EligibilityFiling">
      <p className="main-para">The following people are required to filing income tax returns:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="Eligibility for Filing Income Tax Returns in India"
              className="Importance-img-h-100 w-100"
              height={380}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-6">
         <p><strong>1. Individuals with Taxable Income:</strong> People earning over Rs. 3 lakhs annually (for both normal and senior citizens). And in the case of Super Senior citizens (aged 80 and above) with income exceeding Rs. 5 lakhs.</p>
         <p><strong>2. Legal Entities:</strong> All legal entities, regardless of profit or loss, that generate income.</p>
         <p><strong>3. Claiming Refunds:</strong>  Individuals who have paid more in income or payroll taxes than they owe and are seeking a refund.</p>
         <p><strong>4. International Financial Connections:</strong> Individuals with financial connections to companies based outside {cityName} due to treaty agreements and Certain companies headquartered abroad but operating within {cityName}.</p>

        </div>
        
      </div>
    </div>
  );
};
