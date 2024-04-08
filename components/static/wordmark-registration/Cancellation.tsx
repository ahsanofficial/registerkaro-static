import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/wordmark-registration/three.svg";
interface HeroProps {
    cityName: string;
}
const Cancellation = ({ cityName }: HeroProps) => {
  return (
    <div id="Cancellation">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-5 pt-5">
            <p>A registered wordmark can be canceled on various grounds, including non-renewal after the validity period, voluntarily surrender by the trademark holder, or by an order of the Registrar or courts due to non-use, abandonment, or legal invalidity.</p>
        </div>
        <div className="flex-4">
        <Image
            alt="Cancellation of Wordmark Registration Application"
            className="Cancellation-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Cancellation;


