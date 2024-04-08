import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/tds-return-filing/two.svg";

const Rates = () => {
  return (
    <div id="Rates">
        <p className="main-para">Though the TDS rate list is quite extensive, here are certain common TDS Rates for reference:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
        <Image
            alt="Few common TDS Rates"
            className="Rates-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p><strong>1. </strong>For interest on securities: 10%.</p>  
          <p><strong>2. </strong>For dividend income: 10%.</p>  
          <p><strong>3. </strong>For interest on post office deposits, bank deposits, or cooperative society deposits: 10% for senior citizens (threshold limit ₹50000 and others (threshold limit ₹ 40,000).</p>  
          <p><strong>4. </strong>For payment to contractors or subcontractors [individuals or HUF]: 1% and 2% for others</p>  
          <p><strong>5. </strong>For payment to contractors or subcontractors [others]: 2% [threshold limit Rs. 30,000 for single transactions and Rs. 1,00,000 for aggregate transactions]</p>  
          <p><strong>6. </strong>For rent of plant and machinery: 2% [Rs. 2,40,000 threshold limits]</p>  
          <p><strong>7. </strong>For rent of land or building or furniture or fitting: 10% [Rs. 2,40,000 threshold limits]</p>  
        </div>
      
      </div>
    </div>
  );
};

export default Rates;


