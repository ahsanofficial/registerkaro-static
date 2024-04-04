import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/bis-certification-for-power-banks/mandatory_compiance.svg";
interface HeroProps {
    cityName: string;
}
const Mandatory = ({ cityName }: HeroProps) => {
  return (
    <div id="Mandatory">
        <p className="main-para">The mandatory compliance attached with the BIS Certification for Power Banks are:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Mandatory Compliance for BIS Certification for Power Banks"
            className="Mandatory-img w-100"
            height={350}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>1. </strong>You must affix the BIS Standard Mark on your power bank products and packaging as per the BIS guidelines</p>
            <p><strong>2. </strong>You must maintain the quality and safety of your power banks as per the BIS standards</p>
            <p><strong>3. </strong>You must comply with the BIS surveillance and inspection requirements</p>
            <p><strong>4. </strong>You must submit the quarterly sales and stock data to BIS</p>
            <p><strong>5. </strong>You must inform BIS of any changes in your product specifications, manufacturing unit, brand name, AIR, etc.</p>
            <p><strong>6. </strong>You must follow the BIS Act, Rules, and Regulations</p>
        </div>
      
      </div>
    </div>
  );
};

export default Mandatory;


