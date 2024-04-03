import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Validity = () => {
  return (
    <div id="Validity">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>Once registered, a wordmark in India is initially valid for 10 years from the date of filing. To maintain protection, the trademark holder must renew the registration every ten years by paying the requisite renewal fees.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Validity-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Validity;


