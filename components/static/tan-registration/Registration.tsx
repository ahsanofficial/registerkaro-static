import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Registration = () => {
  return (
    <div id="Registration">
      <p className="main-para">As per section 114(4) of Income Tax Rules, 1962 at the time of application certain documents are needed. Following documents are listed below-</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
      
        <div className="flex-7 pt-2">
          <p className="ps-5"><strong>1. </strong>Passport Size Photo .</p>
          <p className="ps-5"><strong>2. </strong>Legal Document.</p>
          <p className="ps-5"><strong>3. </strong>Proof of Address for the Registered office.
         </p>
          <p className="ps-5"><strong>4. </strong>PAN Card of company</p>
          <p className="ps-5"><strong>5. </strong>TAN Application Form</p>


    

        </div>
        <div className="flex-3">
          <Image
            alt="  Documents Required for TAN Registration"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div>
        
      </div>
    </div>
  );
};
