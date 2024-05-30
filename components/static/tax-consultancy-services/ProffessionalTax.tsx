import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/Tax-Consultancy-Services-for-Startups/Professional Tax Registration.svg";
interface HeroProps {
    cityName: string;
}
export const ProfessionalTax = ({ cityName }: HeroProps) => {
  return (
    <div id="ProfessionalTax">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
            <Image
              alt="Professional Tax Registration"
              className="Importance-img-h-100 w-100"
              height={200}
              loading="lazy"
              src={dft}
            />
          </div>
        <div className="flex-6 pt-5">
            <p>Professional tax registration is a mandatory requirement for professionals like chartered accountants, lawyers, and doctors in {cityName}. It's a state-imposed tax based on one's profession, with rates varying from state to state, with a maximum cap of Rs. 2,500 per year.</p>
            
        </div>
      
      </div>
    </div>
  );
};
