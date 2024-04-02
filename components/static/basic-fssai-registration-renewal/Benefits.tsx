import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Benefits = () => {
  return (
    <div id="Benefits">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1. </strong>The concept of Food License is created to improve the standard and hygiene of the food products and also to assist them in achieving the benchmark of international organizations.</p>
            <p><strong>2. </strong>It provides the laws to the FBOs and the department regulates by a single access point.</p>
            <p><strong>3. </strong>It will give the customers some kind of confidence and trust assuring that the particular brand or business is registered with FSSAI, and it will make the general public more comfortable and create trust on the food product which holds with FSSAI license number and logo.</p>
            <p><strong>4. </strong>The most important advantage of obtaining the FSSAI renewal has the legal reward as the proceeding in the license is done by doing various inspections and examinations. Then only the authority will approve the food license.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Benefits-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;


