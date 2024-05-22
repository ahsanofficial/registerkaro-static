import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/bee-registration/Benefits of BEE registration.svg";

interface HeroProps {
  cityName: string;
}

export const BenefitsBee = ({ cityName }: HeroProps) => {
  return (
    <div id="BenefitsBee">
      <p className="main-para">These are the some listed benefits of BEE registration-</p>
      <div className="BenefitsBee flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="Benefits of BEE registration"
            className="BenefitsBee-img w-100 Importance-img-h-100"
            height={320}
            loading="lazy"
            src={dft}
          />
        </div>   
        <div className="flex-7">
          <p><strong>1. Compliance : </strong>The manufacturer or industry would be assured of meeting all legal criteria by receiving this type of certification. This accreditation would offer further reassurance that the producer conforms to the Energy Act of 2001 requirements.</p>
          <p><strong>2. Standards : </strong>There are standards that must be fulfilled with regard to energy efficiency. A certification of this kind would guarantee the upkeep of such standards in compliance with the law.</p>
          <p><strong>3. Efficiency : </strong>Manufacturers or industries holding this accreditation would ensure a particular standard of efficiency is upheld. This would ensure adherence to the Energy Act of 2001's energy efficiency standards.</p>
          <p><strong>4. Reputation : </strong>This certification would ensure that the industry or the manufacturer was abiding by the pertinent laws.</p>
        </div>
      </div>
    </div>
  );
};
