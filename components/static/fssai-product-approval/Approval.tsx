import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Approval = () => {
  return (
    <div id="Approval">
        <p className="main-para"><strong>Following are some points where you need FSSAI product approval:</strong></p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt=""
            className="Approval-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>1. </strong>The current license owner whose product or item safety valuation has not been performed;</p>
            <p><strong>2. </strong>Introduction of ingredients or products which are new to the industry;</p>
            <p><strong>3. </strong>A proprietary product that needs approval before presenting to the market;</p>
            <p><strong>4. </strong>If the product’s safety valuation was not performed earlier;</p>
            <p><strong>5. </strong>The product or ingredients have not been used/produced in any nation across the world</p>
        </div>
       
      </div>
    </div>
  );
};

export default Approval;


