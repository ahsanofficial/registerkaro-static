import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentsRequired = () => {
  return (
    <div id="DocumentsRequired">
      <p className="main-para">The following are the documents required to obtain the certification:</p>
      <div className="DocumentsRequired flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="Documents Required"
            className="DocumentsRequired-img w-100 Importance-img-h-100"
            height={250}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
          <p><strong>1. </strong>GSTIN Certificate</p>
          <p><strong>2. </strong>Purchase Bill in the course of business for the company to develop its products.</p>
          <p><strong>3. </strong>Component details of the materials used as prescribed by the government.</p>
          <p><strong>4. </strong>Warehouses or storehouses details like address proof and evidence of ownership</p>
          <p><strong>5. </strong>Manufacturing and Utilization Capacity- monthly and annually.</p>
          <p><strong>6. </strong>Diagrammatic representation of the manufacturing unit.</p>
        </div>        
      </div>
    </div>
  );
};
