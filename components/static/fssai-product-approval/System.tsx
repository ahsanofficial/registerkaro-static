import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const System = () => {
  return (
    <div id="System">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>The process of getting Product Approval used to manual wherein the application for Product Approval and a DD or Demand Draft for the suggested fee had to be submitted to the FSSAI Office in New Delhi. But, to cope with the increase in Product Approval applications and bring transparency into the system, recently, FSSAI introduced the <strong>FPAS (Food Product Approval System)</strong>. The application for Product Approval can be submitted now and tracked online via the FSSAI FPAS Online System.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="System-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default System;


