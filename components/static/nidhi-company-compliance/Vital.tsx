import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Vital = () => {
  return (
    <div id="Vital">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <p>Like any other financial institution, Nidhi Companies must adhere to certain regulatory requirements. They have to adhere to the following fundamental Nidhi Company Compliance:</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Vital-img w-100"
            height={280}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Vital;


