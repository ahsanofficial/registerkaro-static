import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/remote-chief-financial-officer-services/one.svg";

const WhatIs = () => {
  return (
    <div id="WhatIs">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="What is the need for Remote CFO?"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6">
            <p>If a company does not have an internal finance department, it might contract out the financial function to another company. The company may also benefit from using Remote CFO services. Services for a Remote CFO might be provided remotely or by an outside expert. Enterprises need to adjust to the swiftly evolving landscape of the digitalized world. Start-ups and small and medium-sized enterprises (SMEs) might not have the funding to hire a Chief Financial Officer (CFO). As a result, these companies utilize Remote CFO services.</p>
            <p>The CFO's work has become increasingly difficult in the digital era. In this competitive environment, a CFO should be able to handle financial, management, and business tasks.</p>
        </div>
      </div>
    </div>
  );
};

export default WhatIs;


