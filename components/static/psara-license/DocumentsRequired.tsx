import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const DocumentsRequired = () => {
  return (
    <div id="DocumentsRequired">
        <p className="main-para">To obtain a Private Security Agencies (Regulation) Act, 2005 (PSARA) license, the following registration certificates and documents are necessary</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>PAN (Permanent Account Number)</p>
            <p>GSTIN (Goods and Services Tax Identification Number)</p>
            <p>Provident Fund Registration</p>
            <p>ESIC (Employees State Insurance Corporation) Registration</p>
            <p>Registration under the Shops and Commercial Establishments Act</p>
            <p>Registration under the Labour Act</p>
            <p>Proof of identity for directors and employees</p>
            <p>Copies of Income Tax Returns for Directors</p>
            <p>Two passport-size photographs of promoters along with their PANs</p>
            <p>Proof of address for the agency office</p>
            <p>Affidavit as per Section 7 (2) of PSARA, 2005</p>
            <p>Security training affidavit</p>
            <p>Certificate of Incorporation</p>
            <p>Signed Memorandum of Understanding (MOU) with the training institute</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="DocumentsRequired-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentsRequired;


