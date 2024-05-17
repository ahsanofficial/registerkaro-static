import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/microfinance-registration/one.svg";
interface HeroProps {
    cityName: string;
}
export const Definition = ({ cityName }: HeroProps) => {
  return (
    <div id="Definition">
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="What is a Micro-Finance Company?"
            className="Importance-img-h-100 w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 align-items-center">
          <p>Microfinance enables individuals to access small business loans safely and ethically, primarily in developing nations. These organizations offer various services, including basic banking facilities, startup capital for small businesses, and educational programs on financial management and investing principles. Unlike traditional lenders, microfinance institutions prioritize helping entrepreneurs succeed rather than focusing solely on collateral. Many microfinance institutions (MFIs) focus on assisting women entrepreneurs. Clients often undergo money management classes before applying for loans, covering topics like interest rates, budgeting, and debt management. Loan officers guide borrowers through the application process, with loans that can significantly impact impoverished individuals by enabling them to start or sustain businesses. Only Non-banking Finance Companies can be set up as Micro Finance Companies, with the prior approval of the Reserve Bank of {cityName}.</p>
        </div>
      </div>
    </div>
  );
};
