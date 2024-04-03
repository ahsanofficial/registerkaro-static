import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Renewal = () => {
  return (
    <div id="Renewal">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt=""
            className="Renewal-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p>The renewal process can be initiated within six months before the expiration date. Late renewal within six months after expiration is possible, subject to additional fees. However, failing to renew within this extended period may result in the removal of the wordmark from the register.</p>
        </div>
      
      </div>
    </div>
  );
};

export default Renewal;


