import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Eligibility = () => {
  return (
    <div id="Eligibility">
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <p>All MSMEs that have registered on the Ministry of Micro, small & Medium Enterprises (MoMSME), UDYAM registration site are qualified to take part in the MSME Sustainable (ZED) Certification program and receive any associated rewards or incentives.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Eligibility for ZED Certification"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
