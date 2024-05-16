import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">You need to have following documents for registration process in Qatar [List is not exhaustive]:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
        <div className="flex-4 pt-5">
            <p><strong>1. </strong>PAN Card</p>
            <p><strong>2. </strong>Certificate of Registration</p>
            <p><strong>3. </strong>Form CSR-1</p>
            <p><strong>4. </strong>Name, Designation, PAN & Email Id of all Members of Governing Body</p>
            <p><strong>5. </strong>Trust Deed/MOA/AOA</p>
            <p><strong>6. </strong>Resolution to appoint Authorised Signatory with Resolution Number</p>
            <p><strong>7. </strong>Digital Signature of the Authorised Person</p>
            <p><strong>8. </strong>Email Id</p>
        </div>
        <div className="flex-5">
            <Image
              alt="Documents to carry for registration process"
              className="DocumentRequired-img w-100"
              height={450}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};