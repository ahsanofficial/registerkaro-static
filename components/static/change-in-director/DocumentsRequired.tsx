import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/change-in-director/Documents_Required.svg";

const DocumentsRequired = () => {
  return (
    <div id="DocumentsRequired">
      <p className="main-para">Following are the documents required for change in director of a Company:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
        <Image
            alt="Documents Required for Change in Director of a Company"
            className="DocumentsRequired-img w-100"
            height={280}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-2">
            <p><strong>1 : </strong>Latest passport size photos;</p>
            <p><strong>2 : </strong>PAN Card;</p>
            <p><strong>3 : </strong>Identity & Residence proof;</p>
            <p><strong>4 : </strong>DSC & DIN;</p>
            <p><strong>5 : </strong>Personal details like mobile number, email id, etc.</p>
        </div>
       
      </div>
    </div>
  );
};

export default DocumentsRequired;


