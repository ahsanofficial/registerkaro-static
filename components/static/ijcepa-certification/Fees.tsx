import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/ijcepa-certification/private (copy).svg";


export const Fees = () => {
  return (
    <div id="Fees">
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <p>Before obtaining IJCEPA registration, the business must have an Import Export Code (IEC). the government fee for IEC is Rs. 500 and the professional fee is around Rs. 1000 to 1500. If the business already has IEC then obtaining IJCEPA registration becomes easier.</p>
          <p>For IJCEPA registration government fee is Rs. 736 and the one-time registration fee is Rs. 500. Apart from this if the applicant is involving a professional, then a professional fee also needs to be paid which varies between Rs 2000 to 3000. Once granted it is valid for 12 months from the date of issuance.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Fees for IJCEPA Registration"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
