import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/dir-3-ekyc/three.svg";

export const Laws = () => {
  return (
    <div id="laws">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-5">
          <Image
            alt="Lawa for penalty charges for failure"
            className="Importance-img-h-100 w-100"
            height={310}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p>The e-Form DIR-3 KYC filing is governed by the Companies Act, 2013, and the rules prescribed therein. Non-compliance with the provisions of the Companies Act can attract penalties and other legal consequences.</p>
        </div>
      </div>
    </div>
  );
};
