import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Types = () => {
  return (
    <div id="Types">
      <p className="main-para">Licensed Payment Banks come with the following Types:</p>
      <div className="Types flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="Types of Strike Off"
            className="Types-img w-100 Importance-img-h-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
          <p><strong>1. Voluntary Wind-Up : </strong>Submit the form 24 along with the partners' statement to the ROC. Both indemnity bonds and a signed affidavit confirming the accuracy of the information to the partners' best knowledge are required to be included with the primary application. The application's information will be posted on the Registrar's website for a one-month notification period after about 20 business days. Around 10 business days after the initial month, the LLP will be officially closed by the registrar through removing its name from the register and publishing a notice in the official gazette.</p>
          <p><strong>1. Compulsory Wind-Up : </strong>If an LLP is inactive for two years or longer and the Registrar suspects this, a notice will be sent to the LLP and its partners, requesting their views within one month from the notice date, prior to striking off the name.</p>
        </div>
      </div>
    </div>
  );
};
