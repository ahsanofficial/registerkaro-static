import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/epr-authorization-for-e-waste-dummy.tsx/what_is.svg";

export const WhatIs = () => {
  return (
    <div id="WhatIs">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="What is E-Waste?"
            className="WhatIs-img w-100"
            height={300}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
          <p>
            E-Waste is one of the world’s fastest growing trash streams. India
            currently produces nearly 50 million tonnes of it per year, and the
            number is going to rise as electronic garbage, refers to obsolete,
            unwanted, or defective electrical and electronic equipment. That
            includes everything from smart phones to refrigerators that have
            reached the end of their useful lives.
          </p>
        </div>
      </div>
    </div>
  );
};
