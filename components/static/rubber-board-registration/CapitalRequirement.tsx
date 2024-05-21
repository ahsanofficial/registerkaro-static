import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const CapitalRequirement = () => {
  return (
    <div id="CapitalRequirement">
        
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p><strong>Rubber:</strong></p>
            <p><strong>1. </strong>Natural Rubber</p>
            <p><strong>2. </strong>Synthetic Rubber</p>
            <p><strong>3. </strong>Reclaimed Rubber</p>
         <p><strong>License:</strong></p>
            <p><strong>1. </strong>Dealer’s Licence</p>
            <p><strong>2. </strong>Processors License</p>
            <p><strong>3. </strong>Manufacturers Licence</p>
            <p><strong>4. </strong>Exporters License</p>
            <p><strong>5. </strong>Others as may be authorised by the Board</p>





        </div>
        <div className="flex-4">
          <Image
            alt=" Types of rubber "
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
