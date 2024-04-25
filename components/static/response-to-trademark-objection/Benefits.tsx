import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg"

export const Benefits = () => {
  return (
    <div id="Benefits">

      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p>
            <strong>1. Brand Individuality:</strong> Responding to trademark
            objections preserves the unique identity of your brand,
            distinguishing it from others in the market.
          </p>

          <p>
            <strong>2. Defense Opportunity:</strong> Addressing objections offers a
            chance to defend your trademark application, protecting your brand's
            reputation and ensuring its legal recognition.
          </p>

          <p>
            <strong>3. Avoid Abandonment:</strong> By giving timely responses to
            objections, you prevent the risk of your trademark application being
            abandoned, maintaining your brand's legal status and protection.
          </p>
        </div>
        <div className="flex-4">
          <Image
            alt="Benefits of starting a Business in Qatar"
            className="Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
