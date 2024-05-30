import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/Tax-Consultancy-Services-for-Startups/Benefits of ITR Filing.svg";
interface HeroProps {
    cityName: string;
}
export const BenefitsITR = ({ cityName }: HeroProps) => {
  return (
    <div id="BenefitsITR">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      
        <div className="flex-7">
           <p><strong>Demonstrates Citizenship Responsibility:</strong> Paying taxes demonstrates responsible citizenship and contributes to the nation's progress.</p>
         <p><strong>Enhances Loan Eligibility and Credibility:</strong> A consistent history of tax filing improves the chances of loan approval, especially for mortgages and other financial needs. Financial institutions often require tax returns as proof of financial stability and credibility before engaging in business transactions.</p>
         <p><strong>Allows Loss Adjustment:</strong> Regular tax filing permits adjustments for losses in subsequent years, leading to potential tax benefits. Properly documented losses in tax returns can be deducted from taxable income in the future, ensuring potential savings.</p>
        </div>
        <div className="flex-4">
            <Image
              alt="Benefits of ITR Filing"
              className="Importance-img-h-100 w-100"
              height={368}
              loading="lazy"
              src={dft}
            />
        </div>
        
      </div>
    </div>
  );
};
