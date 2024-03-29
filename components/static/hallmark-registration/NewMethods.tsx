import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/hallmark-registration/new_methods.svg";

const NewMethods = () => {
  return (
    <div id="NewMethods">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
            <p>The BIS has introduced a new method for marking jewellery and the new method contains a Unique Identification Number along with a BIS Hallmark and the purity of the metal. In 2019, the Indian Government announced that Hallmarking of gold artefacts & jewellery would be mandatory across the country. After fulfilling the terms & conditions of the Hallmark Registration Certificate as specified in Regulation 5 of the BIS (Hallmarking) Regulations, 2018, precious articles of gold marked with Hallmark shall be sold only by registered jewellers via certified sales outlets. The list of licensed jewellers can be accessed by selecting the state or region and IS Number.</p>
        </div>
        <div className="flex-4">
        <Image
            alt="New Methods of Hallmarking"
            className="NewMethods-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default NewMethods;


