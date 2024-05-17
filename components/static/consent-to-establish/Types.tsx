import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/consent-to-establish/what_is.svg";

interface HeroProps {
  cityName: string;
}

export const Types = ({ cityName }: HeroProps) => {
  return (
    <div id="Types">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <p>This consent is to be obtained before establishing any industry or process.Before starting operations, all industrial and commercial establishments must first obtain a "Consent to Establish." After receiving this consent and fulfilling all conditions, they can apply for a "Consent to Operate" one month before commencing operations.</p>
            
        </div>
        <div className="flex-4">
          <Image
            alt="What is Consent to Establish?"
            className="Importance-img-h-100 w-100"
            height={230}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
