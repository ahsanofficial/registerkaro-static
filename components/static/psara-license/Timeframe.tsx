import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Timeframe = () => {
  return (
    <div id="Timeframe">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>The duration required to obtain a PSARA license is contingent upon the efficiency of the specific state authority processing the applications. Generally, the application processing time is around 60 days from the date of application submission.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Timeframe-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Timeframe;


