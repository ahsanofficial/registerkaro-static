import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/gst-cancellation-and-revocation/two.svg";
interface HeroProps {
    cityName: string;
}
const WhoCancel = ({ cityName }: HeroProps) => {
  return (
    <div id="WhoCancel">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>Cancellation of registration can be broadly divided into two categories, that is either voluntary or involuntary. In case of voluntary cancellation, the taxpayer himself requests for the cancellation. Moreover, legal heirs of the taxpayer can also request for cancellation on behalf of the taxpayer whereas involuntary cancellation on the other hand means cancellation initiated by the appropriate GST officer.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Who can Cancel the GST Registration?"
            className="Importance-img-h-100 w-100"
            height={150}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default WhoCancel;


