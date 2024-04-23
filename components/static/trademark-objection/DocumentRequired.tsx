import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">For the Trademark Objection reply, you will need the following documents:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
        <div className="flex-4 pt-5">
            <p><strong>1. </strong>Authorized document report</p>
            <p><strong>2. </strong>Trademark examination report</p>
            <p><strong>3. </strong>Identification document</p>
            <p><strong>4. </strong>Documents pertaining to address verification</p>
        </div>
        <div className="flex-5">
            <Image
              alt="Documents to carry for registration process"
              className="DocumentRequired-img w-100 img-h-100"
              height={200}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};
