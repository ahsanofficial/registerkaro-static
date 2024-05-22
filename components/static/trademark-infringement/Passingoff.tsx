import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/trademark-infringement/pre-incorporation.svg";
interface HeroProps {
    cityName: string;
}
export const Passingoff = ({ cityName }: HeroProps) => {
  return (
    <div id="passingoff">
        
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt=" What is Passing Off "
            className="Importance-img-h-100 w-100"
            height={320}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
          <p>Passing off is a common law tort. In {cityName}, it is used to protect unregistered trademarks. Similar to the protection extended to registered marks under Section 29 of the Trademark Act, 1999 it also prevents a person from misrepresenting their goods and services. This common law principle is embodied in Section 27 of the Act. There are three elements of passing off popularly known as the classical trinity which include— reputation, misrepresentation and damage to goodwill.</p>
          
            

        </div>
        
      </div>
    </div>
  );
};
