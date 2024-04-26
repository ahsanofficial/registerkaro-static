import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/financial-modeling-for-startups/Best_Practices_in.svg";
interface HeroProps {
    cityName: string;
  }
export const BestPractices = ({ cityName }: HeroProps) => {
  return (
    <div id="BestPractices">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-5 ">
          <Image
            alt="Best Practices in Financial Modeling for Businesses in India"
            className="Importance-img-h-100 w-100"
            height={450}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
           <p className='pt-5'><strong>1. Dynamic and Iterative Approach: </strong> Financial models should be flexible to accommodate changes and updates based on evolving market conditions and business strategies.</p>
           <p className='pt-5'><strong>2. Sensitivity Analysis: </strong> Conducting sensitivity analysis helps in understanding the impact of varying assumptions on financial outcomes, making the model more robust.</p>
           <p className='pt-5'><strong>3. Engage with Experts: </strong> Collaborating with financial analysts, advisors, or consultants can enhance the accuracy and reliability of the financial model.</p>
        </div>
        
      </div>
      <p className="main-para pt-5">Thus, it can be inferred that financial modeling is an indispensable tool for startups in {cityName}, aiding in strategic planning, fundraising, and operational decision-making. Creating a comprehensive, dynamic, and well-structured financial model tailored to the specific needs and challenges of the Indian market is crucial for the success and sustainability of startups in the country.</p>
    </div>
  );
};
