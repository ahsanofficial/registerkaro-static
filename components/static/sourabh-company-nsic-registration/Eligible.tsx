import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Eligible = () => {
  return (
    <div id="Eligible">
        <p className="main-para">For proceeding ahead with the NSIC Registration, you need to fall in one of the give category to qualify for the minimum eligibility criteria:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt=""
            className="Eligible-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>1. </strong>Registration with NSIC is open to all Micro and Small Businesses who hold an EM Part-II (Optional) or Udyog Aadhaar Memorandum (UAM). </p>
            <p><strong>2. </strong>For nascent businesses, Micro & Small Enterprises that have initiated their commercial production but have not yet reached their one-year anniversary of establishment. </p>
            <p><strong>3. </strong>Then, Micro & Small Businesses may apply for and receive a Provisional Registration Certificate, which will be good for a year. </p>
        </div>
      
      </div>
      <p className="main-para"><strong>Note: </strong>It is not possible for traders to register under this scheme.</p>
    </div>
  );
};

export default Eligible;


