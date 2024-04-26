import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const WhoNeedsBee = () => {
  return (
    <div id="WhoNeedsBee">
      <div className="whoNeedsBee flex w-80 m-auto mobile-flex-column-reverse">        
        <div className="flex-7">
          <p><strong>1. Manufacturers : </strong>The person who produces the final product may register with BEE's Star Labeling Scheme. However, a single product may only be registered under a single login with a single brand.</p>
          <p><strong>2. Importers : </strong>In accordance with the State Labelling Scheme of BEE, any Indian business or organization wishing to import any good or item covered by the BBE mandatory certification program must first complete the BEE registration process. However, an importer is limited to registering a single product under a single login for a single brand.</p>
          <p><strong>3. Traders : </strong>In accordance with the BEE State Labeling Scheme, any domestic trader who transacts domestically with goods covered by the BEE Certification regime must go through the BEE registration process. However, an importer is limited to registering a single product under a single login for a single brand.</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Who needs a BEE Certificate?"
            className="WhoNeedsBee-img w-100 Importance-img-h-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
