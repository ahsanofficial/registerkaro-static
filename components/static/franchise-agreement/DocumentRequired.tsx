import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">You need to have following documents for registration process in Qatar [List is not exhaustive]:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
        <div className="flex-4 pt-5">
            <p><strong>1. </strong>Franchise disclosure document</p>
            <p><strong>2. </strong>Franchise Agreement</p>
            <p><strong>3. </strong>Operations Manual</p>
            <p><strong>4. </strong>Franchise Registration Applications and Notices</p>
            <p><strong>5. </strong>Financial Statements</p>
           
        </div>
        <div className="flex-4">
            <Image
              alt="Documents to carry for registration process"
              className="Importance-img-h-100 w-100"
              height={350}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};
