import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/safta-license/one.svg";

interface HeroProps {
  cityName: string;
}

export const ApplicableGovernments = ({ cityName }: HeroProps) => {
  return (
    <div id="ApplicableGovernments">
      <p className="main-para">
        The rules apply to SAARC (South Asian Association for Regional
        Cooperation) Member States, including:
      </p>
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Applicable Governments"
            className="Importance-img-h-100 w-100"
            height={280}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 align-items-center">
          <ol>
            <li>Bangladesh</li> 
            <li>India</li> 
            <li>Republic of Maldives</li> 
            <li>Nepal</li> 
            <li>Pakistan</li> 
            <li>Sri Lanka</li>
          </ol>
        </div>
      </div>
      <p className="main-para mt-2">
      <strong>Effective Date: </strong>The rules come into force on the 1st day of July 2006.
      </p>
    </div>
  );
};
