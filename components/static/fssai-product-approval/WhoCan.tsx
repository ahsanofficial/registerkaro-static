import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const WhoCan = () => {
  return (
    <div id="WhoCan">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt=""
            className="WhoCan-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p>The manufacturer or importer of non-specified food shall apply as per the ‘Food Safety and Standards (Approval for Non-Specified Food and Food Ingredients) Regulations, 2017, to get the Product approval.</p>
        </div>
       
      </div>
    </div>
  );
};

export default WhoCan;


