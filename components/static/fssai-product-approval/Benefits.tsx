import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/fssai-product-approval/benefits.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
        <p className="main-para">Following are some benefits of FSSAI product approval:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong>1. </strong> You standardised examination processes confirm the minimal loss of time and regulation risk.</p>
           <p><strong>2. </strong> Your brand will be highly public confidence as a product seller that is entirely safe for consumption;</p>
           <p><strong>3. </strong> As the safety and quality tests are accurate and benchmarked to global standards. Even global customers will be confident regarding the quality of your food product;</p>
           <p><strong>4. </strong> You will be profited by an enlarged network due to aggressive industry engagement across stakeholders.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Benefits of getting product approval"
            className="Benefits-img w-100"
            height={350}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
