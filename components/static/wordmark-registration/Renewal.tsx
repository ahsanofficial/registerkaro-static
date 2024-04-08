import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/wordmark-registration/two.svg";
interface HeroProps {
    cityName: string;
}
const Renewal = ({ cityName }: HeroProps) => {
  return (
    <div id="Renewal">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4 pt-5">
        <Image
            alt="Renewal of Wordmark Registration Certificate"
            className="Renewal-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-5 pt-5">
            <p>The renewal process can be initiated within six months before the expiration date. Late renewal within six months after expiration is possible, subject to additional fees. However, failing to renew within this extended period may result in the removal of the wordmark from the register.</p>
        </div>
      
      </div>
    </div>
  );
};

export default Renewal;


