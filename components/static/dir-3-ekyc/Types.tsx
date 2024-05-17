import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/dir-3-ekyc/There are primarily two types.svg";
interface HeroProps {
    cityName: string;
}
export const Types = ({ cityName }: HeroProps) => {
  return (
    <div id="Types">
        <p className="main-para">There are primarily two types of e-Form DIR-3 KYC:</p>
        <Image
            alt="Types of E-Form Dir-3 Ekyc"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={dft}
          />
      <div className="benefits flex w-80 m-auto">
        <div className="flex-7 text-center">
            <p><strong> 1. Initial KYC: </strong>This must be filed by directors who have not yet completed their KYC verification process.</p>
            <p><strong> 2. Annual KYC:</strong>This must be filed annually by directors who have previously completed the KYC verification.</p>
        </div>
      </div>
    </div>
  );
};
