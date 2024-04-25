import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";
export const Prerequisites = () => {
  return (
    <div id="prerequisites">
        <p className="main-para">Before initiating the filing process, directors must ensure they fulfill the following prerequisites:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1 . </strong>Possession of valid identification documents such as PAN card, Aadhar card, passport, etc.</p>
            <p><strong>2 . </strong>Active Director Identification Number (DIN) registered with the Ministry of Corporate Affairs.</p>
            <p><strong>3 . </strong>Valid digital signature certificate (DSC) for electronic submission of the form.</p>
            
        </div>
        <div className="flex-3">
          <Image
            alt="prerequisites for e-Form Dir-3 KYC"
            className="DocumentRequired-img w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
