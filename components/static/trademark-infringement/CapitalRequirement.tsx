import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const CapitalRequirement = () => {
  return (
    <div id="CapitalRequirement">
      <p className="main-para">Section 30 of the Trademarks Act, 1999 lays down certain conditions wherein a trademark cannot be said to have been infringed which can be used as defences by the alleged infringer during the suits for infringement. Those conditions are as follows:</p>
        
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        
        <div className="flex-4">
          <Image
            alt=" What does not Constitute Trademark Infringement"
            className="Importance-img-h-100 w-100"
            height={320}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
            <p><strong>1. </strong>When the usage of a trademark by a person is in accordance with honest practices in industrial or commercial matters.</p>
            <p><strong>2. </strong>When the usage was not intended for taking undue advantage or when the usage is proved not to be detrimental to the distinctive character or repute of the trademark.</p>
            <p><strong>3. </strong>Using any trademark to indicate the kind, quality, quantity, intended purpose, value, geographical origin, the time of production of goods or the rendering of services or any other characteristics of goods or services.</p>
            <p><strong>4. </strong>Using any trademark which is outside the scope of registration.</p>
            <p><strong>5. </strong>Using of trademark by implied consent.</p>
            <p><strong>6. </strong>Using of trademark in relation to parts and accessories.</p>
            <p><strong>7. </strong>Using of trademarks which are identical or similar to each other.</p>


        </div>
      </div>
    </div>
  );
};
