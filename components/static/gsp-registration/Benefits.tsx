import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/gsp-registration/onetwo.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
            <Image
              alt="Benefits of GSP"
              className="Benefits-img w-100 img-h-100"
              height={215}
              loading="lazy"
              src={dft}
            />
        </div>     
        <div className="flex-7">
            <p><strong>1. </strong>Indian exporters benefit indirectly – through the benefits that accrue to the importer by way of reduced tariff or duty-free entry of eligible Indian products.</p>
            <p><strong>2. </strong>Reduction or removal of import duty on an Indian product makes it more competitive in the developed foreign markets.</p>
            <p><strong>3. </strong>Tariff preference helps the new exporters penetrate a market and established exporters increase their market share and improve the donor country’s profit margins.</p>
        </div>
        
      </div>
    </div>
  );
};
