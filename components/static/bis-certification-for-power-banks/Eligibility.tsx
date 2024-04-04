import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/bis-certification-for-power-banks/eligiblity.svg";
interface HeroProps {
    cityName: string;
}
const Eligibility = ({ cityName }: HeroProps) => {
  return (
    <div id="Eligibility">
        <p className="main-para">To be eligible for BIS Certification for Power Banks, you need to fulfill the following conditions:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Eligibility for BIS Certification for Power Banks"
            className="Eligibility-img w-100"
            height={360}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          
           <p><strong>1. </strong>You must be a manufacturer or an importer of power banks for use in portable applications</p>
           <p><strong>2. </strong>You must have a valid business license and a scope of business license</p>
           <p><strong>3. </strong>You must have an Authorized Indian Representative (AIR) who will act as your liaison with BIS and MeitY</p>
           <p><strong>4. </strong>You must submit your power bank samples to a BIS-recognized lab for testing and obtain a test report</p>
           <p><strong>5. </strong>You must apply for BIS CRS Registration on the BIS portal and pay the prescribed fee</p>
           <p><strong>6. </strong>You must affix the BIS Standard Mark on your power bank products and packaging</p>
            
        </div>
       
      </div>
    </div>
  );
};

export default Eligibility;


