import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Consequences = () => {
  return (
    <div id="Consequences">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>Food Business Operator is charged with a fine amount or penalty of Rs100 /day if the FSSAI renewal application is not filed within the specified time. An FSSAI license of the FBO is considered expired if it is not renewed within the time period. Therefore it is mandatory for the food business operator to get a fresh license. To avoid these unnecessary penalties and unnecessary hustles it is better and advisable to renew the FSSAI license on time. Every FBO must apply for the FSSAI Registration Renewal within 30 days prior from the date of expiry of the previous FSSAI registration or license.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Consequences-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Consequences;


