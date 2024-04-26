import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const WhyApply = () => {
  return (
    <div id="WhyApply">
      <p className="main-para">
        Importance of Certificates:
      </p>
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <ol>
            <li>These certificates are vital for exporters as they serve as proof of the origin of goods.</li>
            <li>They enable exporters to establish the origin of their goods, thereby allowing them to claim any benefits that goods of Indian origin (Made in India) may be eligible for in the country of exports.</li>
          </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="Why one should apply for SAFTA License?"
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

export default WhyApply;
