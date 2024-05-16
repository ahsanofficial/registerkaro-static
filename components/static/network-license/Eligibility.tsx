import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/conversion-of-partnership-to-llp/two.svg";

const Eligibility = () => {
  return (
    <div id="Eligibility">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Eligibility Criteria for Network License in India"
            className="Importance-img-h-100 w-100"
            height={320}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p>In India, the eligibility criteria for obtaining a Network License are contingent upon the registration status of the entity. Specifically, only companies that are duly registered are deemed eligible to apply for a Network License. It is imperative to understand that the issuance of a Network License is not extended to individuals on a singular basis. Therefore, the eligibility for acquiring such a license is predicated upon the corporate registration of the entity seeking authorization</p>
        </div>
      
      </div>
    </div>
  );
};

export default Eligibility;


