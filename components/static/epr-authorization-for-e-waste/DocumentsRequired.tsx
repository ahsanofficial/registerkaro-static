import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/epr-authorization-for-e-waste-dummy.tsx/Documents Required.svg";

const DocumentRequired = () => {
  return (
    <div id="DocumentsRequired">
      <p className="main-para">The main documents required to obtain an EPR Authorisation for e-waste management are as follows:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <p><strong> 1 : </strong>EPR plan mentioning the required details</p>
            <p><strong> 2 : </strong>GST Certificate</p>
            <p><strong> 3 : </strong>Copy of permission from the concerned Department/ Ministry for selling their product</p>
            <p><strong> 4 : </strong>Sole proprietor or Authorized Signatory KYC</p>
            <p><strong> 5 : </strong>Copies of agreement with collection centres</p>
            <p><strong> 6 : </strong>Excel sheet including details of imported products</p>
            <p><strong> 7 : </strong>Copies of agreement with dealers</p>
            <p><strong> 8 : </strong>Memorandum of Association</p>
            <p><strong> 9 : </strong>Copies of agreement with Treatment, Storage, and Disposal Facilities</p>
            <p><strong> 10 : </strong>Company PAN card</p>
            <p><strong> 11 : </strong>Self- declaration on ROHS</p>
            <p><strong> 12 : </strong>Copy of DGFT permission/license</p>
            <p><strong> 13 : </strong>Copy of agreement with PRO</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Documents Required for EPR Authorisation for E-waste"
            className="DocumentsRequired-img w-100"
            height={680}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentRequired;


