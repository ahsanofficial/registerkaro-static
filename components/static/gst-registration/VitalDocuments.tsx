import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const VitalDocuments = () => {
  return (
    <div id="VitalDocuments">
        <p className="main-para">Following is the list of vital documents required for GST Registration in India:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1 : </strong>Aadhar Card;</p>
            <p><strong>2 : </strong>PAN of the applicant;</p>
            <p><strong>3 : </strong>ID and Address proof of Directors or Promoters with latest photos;</p>
            <p><strong>4 : </strong>Address proof of the business place;</p>
            <p><strong>5 : </strong>Cancelled Cheque or Bank Account Statement;</p>
            <p><strong>6 : </strong>Digital Signature;</p>
            <p><strong>7 : </strong>Incorporation Certificate or Business Registration;</p>
            <p><strong>8 : </strong>Letter of Authorization or Board Resolution for Authorised Signatory.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="VitalDocuments-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default VitalDocuments;


