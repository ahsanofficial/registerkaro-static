import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/Tax-Consultancy-Services-for-Startups/Income Tax Return Filing.svg";
interface HeroProps {
    cityName: string;
}
export const IncomeTaxReturn = ({ cityName }: HeroProps) => {
  return (
    <div id="IncomeTaxReturn">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="Income Tax Return Filing"
              className="Importance-img-h-100 w-100"
              height={280}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-7">
           <p>Filing income tax returns is a mandatory duty for every responsible citizen in {cityName}. Thankfully, with modern technology, you can easily file your taxes online without any time constraints. However, it's important to note that filing taxes via the official website requires completing specific forms known as ITR forms. Different forms are applicable for individuals and salaried employees. Filing of these forms correctly is crucial because each form serves a specific purpose and belongs to a distinct category. RegisterKaro’s team of experts can assist you in comprehending and filing these intricate ITR forms efficiently without hassle.</p>
         
        </div>
        
      </div>
    </div>
  );
};
