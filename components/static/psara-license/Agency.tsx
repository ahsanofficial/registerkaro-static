import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Agency = () => {
  return (
    <div id="Agency">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>A private security agency is a business entity created to provide security services to a range of sectors, including banking, information Agency, finance, and industries. The introduction of the Private Security Agencies (Regulation) Act, 2005 (PSARA) aimed to instill a specific standard of professionalism in the realm of security services. To legally operate, these agencies must obtain a PSARA license. Beyond offering security services, these agencies also extend the opportunity to train individuals aspiring to pursue careers in security-related fields.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Agency-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Agency;

