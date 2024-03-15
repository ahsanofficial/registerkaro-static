import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

export const Application = () => {
  return (
    <div id="Application">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4 ">
            <Image
                alt="Benefits of USA Company Registration
                The United States is a global economic powerhouse that also serves as a center for innovation and entrepreneurship. A powerful consumer market, potential investors, and a favorable business environment can all be gained"
                className="Application-img w-100"
                height={250}
                loading="lazy"
                src={bft}
            />
            </div>
        <div className="flex-7 pt-2">
           <p>Let's say you want to distribute pharmaceuticals or open a medical supply business and need a drug license. If so, you have to meet the educational requirements outlined in the 1940 Drugs and Cosmetic Act. A pharmacy degree is required of both competent individuals and pharmacists. The qualified individual needs to have prior drug distribution expertise. The pharmacist must maintain their registration with the Pharmacist Council at the same time. Since the Drug License Application will be submitted, they should have proof. </p>
        </div>
        
      </div>
    </div>
  );
};
