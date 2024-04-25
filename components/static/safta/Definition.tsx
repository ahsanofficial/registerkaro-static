import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Definition = () => {
  return (
    <div id="Definition">
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <p>
          SAFTA registration involves obtaining a certificate of origin from an authorized agency in India. The certificate confirms that the goods are made in India and qualify for duty-free access in other SAFTA member countries.
          </p>
        </div>
        <div className="flex-4">
          <Image
            alt="What is SAFTA Registration?"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Definition;
