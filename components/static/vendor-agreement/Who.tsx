import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/vendor-agreement/one.svg";

const Who = () => {
  return (
    <div id="Who">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="Who is a Vendor?"
            className="Importance-img-h-100 w-100"
            height={250}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p>A vendor is an individual or supplier who provides products and services to the business owner or individual in order for the business to conduct its operations in exchange for payment.</p>
        </div>
      </div>
    </div>
  );
};

export default Who;


