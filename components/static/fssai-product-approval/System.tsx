import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/fssai-product-approval/approval.svg";

interface HeroProps {
  cityName: string;
}

export const System = ({ cityName }: HeroProps) => {

  return (
    <div id="System">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <p>The process of getting Product Approval used to manual wherein the application for Product Approval and a DD or Demand Draft for the suggested fee had to be submitted to the FSSAI Office in New Delhi. But, to cope with the increase in Product Approval applications and bring transparency into the system, recently, FSSAI introduced the <strong>FPAS (Food Product Approval System)</strong>. The application for Product Approval can be submitted now and tracked online via the FSSAI FPAS Online System.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="FSSAI Product Approval Online System"
            className="System-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default System;


