import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Eligibility = () => {
  return (
    <div id="Eligibility">
        <p className="main-para">To be eligible for BIS Certification for Power Banks, you need to fulfill the following conditions:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt=""
            className="Eligibility-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <ol>
           <li><p>You must be a manufacturer or an importer of power banks for use in portable applications</p></li>
           <li><p>You must have a valid business license and a scope of business license</p></li>
           <li><p>You must have an Authorized Indian Representative (AIR) who will act as your liaison with BIS and MeitY</p></li>
           <li><p>You must submit your power bank samples to a BIS-recognized lab for testing and obtain a test report</p></li>
           <li><p>You must apply for BIS CRS Registration on the BIS portal and pay the prescribed fee</p></li>
           <li><p>You must affix the BIS Standard Mark on your power bank products and packaging</p></li>
            </ol>
        </div>
       
      </div>
    </div>
  );
};

export default Eligibility;


