import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/zed-certification/important.svg";

interface HeroProps {
    cityName: string;
}
const Renewal = ({ cityName }: HeroProps) => {
  return (
    <div id="Renewal">
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Renewal of Certificate"
            className="Importance-img-h-100 w-100"
            height={280}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-4">
          <p>MSMEs can choose to renew their ZED Certification level in order to continue receiving related benefits and incentives once the ZED Certificate’s validity has expired.</p>
        </div>
      </div>
    </div>
  );
};

export default Renewal;
