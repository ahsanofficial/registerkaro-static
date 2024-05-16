import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/trademark-hearing/Reason for Hearing Notices on Trademark.svg";

const Reason = () => {
  return (
    <div id="Reason">
      <div className="flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Reason for Hearing Notices on Trademark"
            className="Importance-img-h-100 w-100"
            height={280}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-5">
          <ol>
            <li>Hearing Notice for Objection</li>
            <li>Hearing notice after the opposition is
            filled</li> 
            <li>Opposition Proceedings</li>
            <li>Rectification Proceedings</li> 
            <li>Renewal Matters</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Reason;
