import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">There are primarily two types of e-Form DIR-3 KYC:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Types of E-Form Dir-3 Ekyc"
            className="Types-img w-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div>

        <div className="flex-7">
            <p><strong> 1. Initial KYC: </strong>This must be filed by directors who have not yet completed their KYC verification process.</p>
            <p><strong> 2. Annual KYC:</strong>This must be filed annually by directors who have previously completed the KYC verification.</p>
            
        </div>
        
      </div>
    </div>
  );
};
