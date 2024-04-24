import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

export const WhyChoose = () => {
  return (
    <div id="WhyChoose">
      <p className="main-para">RegisterKaro has been one stop solution for Qatar Company Registration for the varied ranges of benefits such as:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt="Why Choose RegisterKaro for Company Registration in Qatar?"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-4">
          <p><strong>1. Protect Your Assets: </strong>LLP helps to Protect personal assets from business liabilities with limited liability status.</p>
          <p><strong>2. Boost Credibility: </strong>LLP enhances your professional image and gains trust from clients and investors.</p>
          <p><strong>3. Flexibility in Management: </strong>LLP structure is ideal for business expansion.LLP Customizes your management structure for efficient operations.</p>
          <p><strong>4. Tax Advantages: </strong>LLP has Tax Advantages so you can avail tax benefits and exemptions exclusive to LLPs, optimizing financial growth.</p>
        </div>
          
       
      </div>
    </div>
  );
};
