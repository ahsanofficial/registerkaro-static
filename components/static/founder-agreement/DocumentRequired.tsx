import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">To prepare and register your Agreement, you will need to provide us with the following documents:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1 : </strong>PAN card and Aadhaar card of all the co-founders</p>
            <p><strong>2 : </strong>Passport size photographs of all the co-founders</p>
            <p><strong>3 : </strong>Business name and address proof</p>
            <p><strong>4 : </strong>Business registration certificate (if applicable)</p>
            <p><strong>5 : </strong>Business plan and financial projections</p>
            <p><strong>6 : </strong>Any other document as per the nature and scope of your business</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Documents you would need"
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
