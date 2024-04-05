import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/change-llp-agreement/documents.svg";

const DocumentsRequired = () => {
  return (
    <div id="DocumentsRequired">
        <p className="main-para">The following documents are required to change LLP agreement :</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="What are the documents required to change LLP agreement?"
            className="DocumentsRequired-img w-100"
            height={650}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">

            <h3>Documents to be enclosed with Form 3:</h3>
            <div className="ps-5">
                <p><strong>1. </strong>Original LLP Agreement</p>
                <p><strong>2. </strong>Modified LLP agreement</p>
                <p><strong>3. </strong>Supplementary Deed</p>
                <p><strong>4. </strong>Resolution regarding the changes to be made, which is passed in a meeting by the LLP Partners</p>
                <p><strong>5. </strong>Any supplementary forms or documents required as proof</p>
            </div>
            <h3>Documents to be enclosed with Form 4</h3>
            <div className="ps-5">
                <p><strong>1. </strong>Consents of each of the partners</p>
                <p><strong>2. </strong>An affidavit or other proof of a change in name</p>
                <p><strong>3. </strong>Evidence of cessation</p>
                <p><strong>4. </strong>If any of the partners is a company, the copy of the resolution in this regard</p>
                <p><strong>5. </strong>Copy of authorization/resolution mentioning the name & address of individuals(s) nominated as a representative of the partner/nominee</p>
            </div>
        </div>
       
      </div>
    </div>
  );
};

export default DocumentsRequired;


