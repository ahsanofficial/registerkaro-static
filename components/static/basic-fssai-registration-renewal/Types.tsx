import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">Basically, there are 3 types of renewal Food license, they are as follows Basic FSSAI Registration Renewal:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt=""
            className="Types-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p>It is applicable for all types of FBO under basic FSSAI registration with annual turnover less than ₹12 Lakh.</p>
            <p>State FSSAI Registration Renewal: This type of License renewal is applicable for all FBO whose annual turnover is between ₹12 Lakh – ₹20 Crore. The fee required for this license renewal process depends upon the type of food business and the validity of the Food license.</p>
            <p>Central FSSAI Registration Renewal: It is available for the food business operator whose turnover of exceeding more than Rs. 20 crore. Additionally, Central FSSAI Registration Renewal must be renewed before the expiry of their validity time period.</p>
        </div>
      
      </div>
    </div>
  );
};

export default Types;


