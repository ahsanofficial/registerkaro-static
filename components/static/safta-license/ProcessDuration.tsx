import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const ProcessDuration = () => {
  return (
    <div id="ProcessDuration">
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Process Duration"
            className="Importance-img-h-100 w-100"
            height={280}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-4">
          <p>
            SAFTA registration is a one-time process that lasts for a year. Once
            registered, exporters can enjoy duty-free access to eligible goods
            for a year from the registration date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessDuration;
