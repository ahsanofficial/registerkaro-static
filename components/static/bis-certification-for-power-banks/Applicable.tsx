import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Applicable = () => {
  return (
    <div id="Applicable">
        <p className="main-para">The BIS Certification for Power Banks is governed by the following rules and regulations:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <ol>
                <li>The BIS Act, 2016 and the BIS Rules, 2018</li>
                <li>The Electronics and Information Technology Goods (Requirements for Compulsory Registration) Order, 2012 (CRS Order)</li>
                <li>The Indian Standard IS 13252 (Part-1):2010 for Information Technology Equipment – Safety – Part 1: General Requirements</li>
                <li>The BIS Conformity Assessment Regulations, 2018</li>
            </ol>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Applicable-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Applicable;


