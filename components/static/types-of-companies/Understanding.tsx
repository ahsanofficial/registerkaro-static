import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Understanding = () => {
  return (
    <div id="Understanding">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>Let’s define a company before exploring the various types of Indian companies. A company is a body corporate created by the Companies Act of 2013 that is separate from its members and with a distinct legal identity. Companies can take on many forms to fit their aims and are founded to conduct a variety of operations and activities.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Understanding-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Understanding;


