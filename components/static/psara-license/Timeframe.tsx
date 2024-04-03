import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/psara-license/timefram_obtaining.svg";

const Timeframe = () => {
  return (
    <div id="Timeframe">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <p>The duration required to obtain a PSARA license is contingent upon the efficiency of the specific state authority processing the applications. Generally, the application processing time is around 60 days from the date of application submission.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Timeframe for Obtaining a PSARA License"
            className="Timeframe-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Timeframe;


