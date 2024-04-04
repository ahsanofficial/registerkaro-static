import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/bis-certification-for-power-banks/applicatble.svg";
interface HeroProps {
    cityName: string;
}
const Applicable = ({ cityName }: HeroProps) => {
  return (
    <div id="Applicable">
        <p className="main-para">The BIS Certification for Power Banks is governed by the following rules and regulations:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            
                <p><strong>1. </strong>The BIS Act, 2016 and the BIS Rules, 2018</p>
                <p><strong>2. </strong>The Electronics and Information Technology Goods (Requirements for Compulsory Registration) Order, 2012 (CRS Order)</p>
                <p><strong>3. </strong>The Indian Standard IS 13252 (Part-1):2010 for Information Technology Equipment – Safety – Part 1: General Requirements</p>
                <p><strong>4. </strong>The BIS Conformity Assessment Regulations, 2018</p>
            
        </div>
        <div className="flex-4">
        <Image
            alt="Applicable Rules/ Acts/Regulations"
            className="Applicable-img w-100"
            height={320}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Applicable;


