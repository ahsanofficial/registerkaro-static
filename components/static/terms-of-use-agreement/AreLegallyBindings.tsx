import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const AreLegallyBindings = () => {
  return (
    <div id="AreLegallyBindings">
      <p className="main-para">Indeed, they are legally binding contracts between service providers and their clients. The primary objective of these agreements is to outline the relationship and outline the functionality and service availability of the organization. Many legal issues can be effectively addressed through this means. For instance, in the event of a consumer lodging a legal complaint against your service due to prolonged unavailability, having a clearly articulated section in your Terms of Use Agreement acknowledging the possibility of service disruptions can shield you from legal repercussions.</p>
      <p className="main-para">To ensure the legal enforceability of your Agreement, certain criteria must be met which are as follows:</p>
      <div className="AreLegallyBindings flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="Are Terms of Use Agreements Legally Binding?"
            className="AreLegallyBindings-img w-100 Importance-img-h-100"
            height={320}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
          <p><strong>1. Clarity : </strong>The legal bindingness and enforceability of the agreement hinge solely upon the establishment of mutual agreement between both parties, therefore both parties should have consented.</p>
          <p><strong>2. Fairness : </strong>The legal bindingness and enforceability of the agreement hinge solely upon the establishment of mutual agreement between both parties, therefore both parties should have consented.</p>
          <p><strong>3. Legality : </strong>The legal bindingness and enforceability of the agreement hinge solely upon the establishment of mutual agreement between both parties, therefore both parties should have consented.</p>
          <p><strong>4. Mutual Consent : </strong>The legal bindingness and enforceability of the agreement hinge solely upon the establishment of mutual agreement between both parties, therefore both parties should have consented.</p>
          
        </div>
      </div>
    </div>
  );
};
