import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/dubai-company-registration/documents_you_would_need.svg";

export const CapitalRequirement = () => {
  return (
    <div id="CapitalRequirement">
        
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1 : </strong>Only Banks and Non-banking companies must adhere to the minimum capital requirement necessities to be met.</p>
            <p><strong>2 : </strong>Companies that have approved lisences from foreign countries for dealing with these transaction rellated business under the FEMA, need not adhere to these requirements.</p>
          

        </div>
        <div className="flex-3">
          <Image
            alt=" capitial Requirement you would need"
            className="Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
