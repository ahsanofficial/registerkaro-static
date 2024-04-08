import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/wordmark-registration/one.svg";
interface HeroProps {
    cityName: string;
}
const Validity = ({ cityName }: HeroProps) => {
  return (
    <div id="Validity">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-5 pt-5">
            <p>Once registered, a wordmark in {cityName} is initially valid for 10 years from the date of filing. To maintain protection, the trademark holder must renew the registration every ten years by paying the requisite renewal fees.</p>
        </div>
        <div className="flex-4">
        <Image
            alt="Validity of Wordmark Registration"
            className="Validity-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Validity;


