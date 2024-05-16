import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Unqualified = () => {
  return (
    <div id="Unqualified">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>Not everyone can apply for the revocation of the registration. Some persons are barred from applying for revocation after the cancellation. Those persons include UIN holders such as UN Bodies, Embassies, or other notified persons, GST Practitioners, or persons who have voluntarily cancelled their registration by themselves or through legal heirs.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Unqualified;


