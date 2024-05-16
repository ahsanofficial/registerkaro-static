import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/dir-3-ekyc/What is e-Form DIR-3 KYC.svg";
export const Prerequisites = () => {
  return (
    <div id="prerequisites">
        <p className="main-para">Before initiating the filing process, directors must ensure they fulfill the following prerequisites:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt="prerequisites for e-Form Dir-3 KYC"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p className="pt-4"><strong>1 . </strong>Possession of valid identification documents such as PAN card, Aadhar card, passport, etc.</p>
            <p className="pt-4"><strong>2 . </strong>Active Director Identification Number (DIN) registered with the Ministry of Corporate Affairs.</p>
            <p className="pt-4"><strong>3 . </strong>Valid digital signature certificate (DSC) for electronic submission of the form.</p>
            
        </div>
      </div>
    </div>
  );
};
