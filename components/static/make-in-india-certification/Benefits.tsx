import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
      <p className="main-para">Certain benefits are attached to this certification:</p>      
      <div className="Benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="Benefits"
            className="Benefits-img w-100 Importance-img-h-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
          <p><strong>1. </strong>Support from the government would give them a competitive advantage.</p>
          <p><strong>2. </strong>Provides eligibility to government schemes and incentives</p>
          <p><strong>3. </strong>Public trust in large</p>
          <p><strong>4. </strong>Increase the visibility of the product in the market</p>
          <p><strong>5. </strong>These companies have the trust of the banks in getting loans since they have the government support</p>
          <p><strong>6. </strong>Export Benefits of materials of the company to other countries</p>
          <p><strong>7. </strong>They have to go through a streamlined process while getting administrative tasks done, and complications in these tasks help to save a lot of time for the companies</p>
        </div>
        
      </div>
    </div>
  );
};
