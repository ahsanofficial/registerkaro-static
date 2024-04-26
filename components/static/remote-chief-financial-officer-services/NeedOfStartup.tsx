import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const NeedOfStartup = () => {
  return (
    <div id="NeedOfStartup">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt=""
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p className="ps-2"><strong>1. </strong>The concept of a remote CFO is an original and imaginative notion. It provides small businesses and startups with access to CFO assistance that was previously beyond of their pricing range. By hiring a remote CFO, a small business can have access to a skilled financial professional for a fraction of the cost of a full-time CFO.</p>
            <p className="ps-2"><strong>2. </strong>Initially, bookkeepers and accountants will be employed by businesses to manage their growth. But eventually, the business will need a CFO because it will need even stronger financial strategy and management. The high expense of full-time CFOs has led to the emergence of the Remote CFO (VCFO).</p>
        </div>
       
      </div>
    </div>
  );
};

export default NeedOfStartup;


