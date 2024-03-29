import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/hallmark-registration/Types_of_BIS_Hallmarking_Certificate.svg";

const Types = () => {
  return (
    <div id="Types">
      <div className="benefits flex w-80 m-auto mobile-flex-column">

      <div className="flex-3">
        <Image
            alt="Types of BIS Hallmarking Certificate"
            className="Types-img w-100"
            height={500}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
           <p><strong>BIS Registration for Hallmarking Showroom/Jewellers</strong></p>
           <p>BIS Hallmarking Registration is compulsory for jewellers to manufacture or sell gold & silver jewellery. Under the Hallmarking Scheme, BIS grants Hallmarking Registration to jewellers for the specified location. A jeweller who wants to sell BIS Hallmarked gold jewellery must first obtain Hallmark Registration from BIS for each of their sales outlets. BIS-certified jewellers can have their jewellery hallmarked at BIS Assaying & Hallmarking Centres.</p>
           <p><strong>BIS Recognition of Assaying & Hallmarking Centre: </strong></p>
           <p>A Hallmarking Centre is a BIS certified marking centre or 3rd party evaluation centre where the purity of precious metals is examined & stamped. BIS recognition is required for centre and the A&H centre can apply for BIS Recognition.</p>
        </div>
      </div>
    </div>
  );
};

export default Types;


