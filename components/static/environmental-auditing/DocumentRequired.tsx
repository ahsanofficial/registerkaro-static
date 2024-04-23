import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">Following is the list of documents [not exhaustive] that you might need for the Company Registration process in Dubai:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        
      <div className="flex-3">
          <Image
            alt="Documents you would need"
            className="DocumentRequired-img w-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
            <p><strong>1. </strong>Describing the business and the industry of the business</p>
            <p><strong>2. </strong>Audit the place of business, </p>
            <p><strong>3. </strong>Employees/Staff opinions and interviews</p>
            <p><strong>4. </strong>Fomalities and procedure of the audit as directed</p>
            <p><strong>5. </strong>Inspection of the business</p>
            <p><strong>6. </strong>Arrangements made for the business projects to be carried out.</p>
            
        </div>
        
      </div>
    </div>
  );
};
