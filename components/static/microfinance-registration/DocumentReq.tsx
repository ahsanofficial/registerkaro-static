import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/microfinance-registration/Documents Required for Micro Finance Company Registration_.svg";

const DocumentReq = () => {
  return (
    <div id="DocumentReq">
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Civil Defamation"
            className="Importance-img-h-100 w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-2">
          <ol>
            <li>Memorandum of Association and Articles of Association</li> 
            <li>Certificate of Incorporation of the company</li> 
            <li>Certified True Copy of Board resolution</li>
            <li>Auditor’s Certificate on Net Owned Fund</li> 
            <li>Banker’s Certificate of No
            Lien on Fixed Deposit</li> 
            <li>Banker’s report about the company</li> <li>Education Proof of the Director</li> 
            <li>CIBIL Credit Report of the directors</li> 
            <li>CA Certified Net worth certificate of the directors</li> 
            <li>Directors Professional Qualification Proof</li> 
            <li>Photo, Identity & Address Proof of
            Directors</li> 
            <li>Relevant work experience in the financial sector</li>
            <li>Organization Structure Plan</li> 
            <li>Income Proof of the director</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DocumentReq;
