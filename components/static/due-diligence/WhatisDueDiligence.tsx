import Image from "next/image";
import React from "react";
import bft from '../../../assets/images/static/due-diligence/three.svg'

export const WhatisDueDiligence = () => {
  return (
    <div id="WhatisDueDiligence">
      <div className="whatisDueDiligence flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="What is Due Diligence?"
            className="WhatisDueDiligence-img w-100 img-h-100"
            height={180}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p>A detailed investigation and analysis process conducted by prospective parties involved in a business transaction is known as due diligence. Its objective is to evaluate the legal, financial, operational, and commercial aspects of the target businesses of the entity. Due diligence is required for stakeholders to analyse the risks, opportunities, and overall viability of the business by scrutinizing relevant documents, financial statements, contracts, regulatory compliance, and operational procedures.</p>
        </div>
      </div>
    </div>
  );
};
