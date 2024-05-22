import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/bee-registration/Renewal of BEE Certificate.svg";

interface HeroProps {
  cityName: string;
}

export const Renewal = ({ cityName }: HeroProps) => {
  return (
    <div id="Renewal">
      <p className="main-para">The following procedures must be followed in order for the agreement to be renewed by the manufacturer before the schedule agreement between BEE expires:</p>
      <div className="renewal flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="Renewal of BEE Certificate"
            className="Renewal-img w-100 Importance-img-h-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div> 
        <div className="flex-7">
          <p><strong>1. </strong>An online renewal notice must be sent by the Bureau or its designated agency to the manufacturer through the S&L web portal, prior to the expiration of the schedule's validity.</p>
          <p><strong>2. </strong>The manufacturer must make sure that all registered models' production data and labeling fees are current before submitting an application for renewal, which should not be submitted later than one month before the alert is released.</p>
          <p><strong>3. </strong>If the application complies with subclause 'b', BEE will approve the renewal within four weeks.</p>
          <p><strong>4. </strong>In case the agreement is not renewed on time the portal shall remain blocked till the renewal of agreement.</p>
        </div>             
      </div>
    </div>
  );
};
