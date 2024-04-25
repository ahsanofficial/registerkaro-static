import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";
 
export const DraftingCheque = () => {
  return (
    <div id="Document3">
        <p className="main-para">In order to send out a cheque bounce notice to legal action, the following procedures must be completed</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt="Drafting Cheque cheque bounce notice to legal notice"
            className="Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
            <p><strong>1. </strong>Cheque Drawer details [Name and Address]</p>
            <p><strong>2. </strong>Cheque Payer details [Name and Address]</p>
            
            <p><strong>3. </strong>Details of cheque presented to bank [cheque number, date, and amount]</p>
            <p><strong>4. </strong>Reason behind cheque bounce.</p>
            <p><strong>5. </strong>Request for the sum to be paid to be arranged immediately</p>
            <p><strong>6. </strong>Drawing reference of consequences and obligations under Negotiable Instruments Act, Section 138.</p>
            <p><strong>7. </strong>Cheque return date</p>
        </div>
        
      </div>
    </div>
  );
};
