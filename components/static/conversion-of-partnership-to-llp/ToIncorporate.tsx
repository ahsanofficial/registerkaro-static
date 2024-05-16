import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const ToIncorporate = () => {
  return (
    <div id="ToIncorporate">
        <p className="main-para">The following steps and requirements must be fulfilled</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <p><strong>1. </strong>At least 2 individuals must come together with the intention of conducting a lawful business for profit.</p>
            <p><strong>2. </strong>An incorporation document, in the prescribed format, must be prepared.</p>
            <p><strong>3. </strong>This document, along with the requisite fees, must be filed with the Registrar of the State where the LLP's registered office will be situated.</p>
            <p><strong>4. </strong>Additionally, a statement verifying compliance with the LLP Act and related rules must be provided. This statement must be made by a legal professional (advocate, Company Secretary, Chartered Accountant, or Cost Accountant) involved in the LLP formation, as well as by at least one subscriber to the incorporation document.</p>
            <p><strong>5. </strong>The incorporation document should contain essential details such as the proposed name and business activities of the LLP, the address of its registered office, and the names and addresses of all proposed partners and designated partners.</p>
            <p><strong>6. </strong>Any person providing false information in the incorporation document or accompanying statement faces severe penalties, including imprisonment and fines.</p>
        </div>
        <div className="flex-4">
        <Image
            alt=""
            className="Importance-img-h-100 w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default ToIncorporate;


