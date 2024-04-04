import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/fssai-product-approval/who_can.svg";


interface HeroProps {
  cityName: string;
}

export const WhoCan = ({ cityName }: HeroProps) => {
  return (
    <div id="WhoCan">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Who can apply?"
            className="WhoCan-img w-100"
            height={320}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p>The manufacturer or importer of non-specified food shall apply as per the ‘Food Safety and Standards (Approval for Non-Specified Food and Food Ingredients) Regulations, 2017, to get the Product approval.</p>
        </div>
       
      </div>
    </div>
  );
};

export default WhoCan;


