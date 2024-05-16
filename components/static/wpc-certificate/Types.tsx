import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/wpc-Certificate/one.svg";

export const Types = () => {
  return (
    <div id="Types">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-5">
          <Image
            alt=" WPC certificate"
            className="Importance-img-h-100 w-100"
            height={380}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
            <p>Wireless Planning and Coordination is referred to as WPC. WPC is in charge of managing frequency spectrum; it was founded in 1952 as a branch of the Ministry of Communications. The WPC has regional offices in Mumbai, Chennai, Kolkata, Guwhati, and New Delhi.</p>
            <p>The Ministry of Communications and Information Technology's WPC Wing division is in charge of assigning frequency spectrum, granting amateur radio licenses, holding tests, and keeping an eye on radio waves.</p>
            <p>It is also in charge of providing wireless certifications, such the WPC ETA certificate.</p>

        </div>
       
      </div>
    </div>
  );
};
