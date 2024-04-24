import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/qatar-company-registration/types.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">Let's understand the descriptions of these different types of franchise agreements:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="Types of companies for Company Registration in Qatar"
              className="Types-img w-100"
              height={1000}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-7">
           
        </div>
        
      </div>
    </div>
  );
};
