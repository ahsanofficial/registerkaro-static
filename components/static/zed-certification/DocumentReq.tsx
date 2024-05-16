import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/zed-certification/Documents required for ZED Certificate.svg";

const DocumentReq = () => {
  return (
    <div id="DocumentReq">
      <p className="main-para">Following are the documents which are required for the ZED Certification</p>
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6">
          <ol>
            <li>Enterprise’s Udyam registration number.</li>
            <li>Mobile number linked to the Udyam registration.</li>
            <li>Reputable email address (information/documents and login credentials will be delivered to the unit email address)</li>
          </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="Documents required for ZED Certificate"
            className="Importance-img-h-100 w-100"
            height={240}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentReq;
