import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/bis-certification-for-power-banks/Types_and_distinctions.svg";
interface HeroProps {
    cityName: string;
}
const Types = ({ cityName }: HeroProps) => {
  return (
    <div id="Types">
        <p className="main-para">There are two types of BIS Certification for Power Banks:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Types and distinctions of Licenses/Services involved"
            className="Types-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p><strong>Domestic Manufacturer Registration:</strong> This is for the manufacturers who produce power banks in {cityName}. They need to apply for BIS CRS Registration for each manufacturing unit and each brand name of their power banks.</p>
            <p><strong>Foreign Manufacturer Registration: </strong>This is for the manufacturers who produce power banks outside {cityName} and import them into {cityName}. They need to apply for BIS CRS Certification for each country of origin and each brand name of their power banks.</p>
        </div>
      
      </div>
    </div>
  );
};

export default Types;


