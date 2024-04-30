import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const WhatRevocation = () => {
  return (
    <div id="WhatRevocation">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt=""
            className="Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p>GST revocation is the process of reversing the cancellation of Goods and Services Tax (GST) registration. When your GST registration gets cancelled, either voluntarily or by the tax authorities, you have the option to apply for revocation to reinstate your registration. At RegistarKaro, we understand that sometimes businesses face situations that lead to GST registration cancellation. That's why we're here to help you navigate the revocation process smoothly and efficiently.</p>
        </div>
      
      </div>
    </div>
  );
};

export default WhatRevocation;


