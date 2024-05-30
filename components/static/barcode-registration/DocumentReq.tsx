import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentReq = () => {
  return (
    <div id="DocumentReq">
      <div className="flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Documents Required"
            className="Importance-img-h-100 w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-5">
          <ol>
            <li>Applicant Company’s PAN card or proprietor’s PAN card for a proprietorship firm.</li>
            <li>Copy of balance sheet to substantiate your annual sales turnover.</li>
            <li>Letter on company letterhead requesting barcode allotment.</li>
            <li>Proof of status of the applicant company.</li>
            <li>Proof of Proprietorship Firms: GST/VAT registration certificate.</li>
            <li>Proof of Partnership Firms: GST/VAT registration certificate or partnership deed.</li>
            <li>Proof of Private/Public Ltd. Company: GST/VAT registration certificate and Registrars of Companies (ROC) certificate.</li>
            <li>Memorandum of Association (MOA).</li>
            <li>Proof of other entities (e.g. Registered Society, HUF etc.): GST/VAT registration certificate or Registrar of Society (ROS) certificate.</li>
            <li>Cancelled cheque copy of the company.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
