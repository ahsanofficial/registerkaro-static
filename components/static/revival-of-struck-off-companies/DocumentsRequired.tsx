import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const DocumentsRequired = () => {
  return (
    <div id="DocumentsRequired">
        <p className="main-para">Following are the documents required for the Revival of Struck Off Companies:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt=""
            className="DocumentsRequired-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
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
     
      </div>
    </div>
  );
};

export default DocumentsRequired;


