import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const TrademarkCase = () => {
  return (
    
    <div id="TrademarkCase">
        <p className="main-para">There are certain documents which are required before filing for a trademark infringement suit, which are as follows, make sure to have the following documents with you:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p><strong>1. </strong>Copy of advertisement of your trademark in the journal.</p>
          <p><strong>2. </strong>LPC (Legal Proceeding Certificate) of trademark by the Registrar.</p>
          <p><strong>3. </strong>Trademark registration certificate</p>
          <p><strong>4. </strong>Documents, data or evidence etc for proving loss to the company due to infringement</p>

          
            

        </div>
        <div className="flex-4">
          <Image
            alt="Documents Required for Filing Trademark Infringement Case"
            className="Importance-img-h-100 w-100"
            height={320}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
