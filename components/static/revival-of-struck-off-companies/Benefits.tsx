import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Benefits = () => {
  return (
    <div id="Benefits">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1. </strong>Benefits</p>
            <p><strong>2. </strong>Benefits</p>
            <p><strong>3. </strong>Benefits</p>
            <p><strong>4. </strong>Benefits</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Benefits-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;


