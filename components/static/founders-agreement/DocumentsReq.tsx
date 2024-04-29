import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const DocumentsReq = () => {
  return (
    <div id="DocumentsReq">
        <p className="main-para"> To prepare and register your Agreement, you will need to provide us with the following documents:</p>
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
        <ol className="fs-5">
              <li>PAN card and Aadhaar card of all the co-founders</li>
              <li>Passport size photographs of all the co-founders</li>
              <li>Business name and address proof</li>
              <li>Business registration certificate (if applicable)</li>
              <li>Business plan and financial projections</li>
              <li>Any other document as per the nature and scope of your business</li>
            </ol>
        </div>
        <div className="flex-3">
        <Image
            alt="Documents you would need"
            className="DocumentsReq-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentsReq;
