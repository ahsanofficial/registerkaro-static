import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/safta-license/two.svg";

interface HeroProps {
  cityName: string;
}

const Definition = ({ cityName }: HeroProps) => {
  return (
    <div id="Definition">
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <p>
          SAFTA registration involves obtaining a certificate of origin from an authorized agency in {cityName}. The certificate confirms that the goods are made in {cityName} and qualify for duty-free access in other SAFTA member countries.
          </p>
        </div>
        <div className="flex-4">
          <Image
            alt="What is SAFTA Registration?"
            className="Importance-img-h-100 w-100"
            height={280}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Definition;
