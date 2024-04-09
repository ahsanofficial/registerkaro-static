import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/revival-of-struck-off-companies/Documents.svg";

const DocumentsRequired = () => {
  return (
    <div id="DocumentsRequired">
        <p className="main-para">Following are the documents required for the Revival of Struck Off Companies:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      <div className="flex-7 pt-5">
            <ol>
                <li>List of Directors</li>
                <li>Signed copy of MOA and AOA</li>
                <li>Copy of Board resolution</li>
                <li>Signed ITR acknowledgement copy</li>
                <li>Latest balance sheet</li>
                <li>vakalatnama / MOA</li>
                <li>Signed financial statement since when a company has to filed with ROC</li>
                <li> Proof of sending application copy with ROC and income Tax department.</li>
                <li>Copy of Bank statement.</li>
                <li>Proof regarding payment of application form.</li>
            </ol>
        </div>
      <div className="flex-3">
        <Image
            alt="Documents Required for the Revival of Struck Off Companies"
            className="DocumentsRequired-img w-100"
            height={600}
            loading="lazy"
            src={bft}
          />
        </div>
       
     
      </div>
    </div>
  );
};

export default DocumentsRequired;


