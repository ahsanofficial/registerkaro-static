import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/trademark-hearing/List of documents required for Trademark Hearing.svg";

const DocumentReq = () => {
  return (
    <div id="DocumentReq">
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="List of documents required for Trademark Hearing"
            className="Importance-img-h-100 w-100"
            height={320}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-4">
          <ol>
            <li>Trademark Examination Report</li> 
            <li>Copy of reply to the Examination Report</li>
            <li>Proof of Prior Use</li> 
            <li>Evidence of Distinctiveness</li> 
            <li>Power of attorney</li>
            <li>Any other relevant documents</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DocumentReq;
