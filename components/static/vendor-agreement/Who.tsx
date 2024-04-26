import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Who = () => {
  return (
    <div id="Who">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>A vendor is an individual or supplier who provides products and services to the business owner or individual in order for the business to conduct its operations in exchange for payment.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
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

export default Who;


