import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentsRequired = () => {
  return (
    <div id="DocumentsRequired">
      <div className="documentsRequired flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-5">
          <p><strong>1. </strong>bank statement for your checking account provided by your bank.</p>
          <p><strong>2. </strong>Photograph of the CEO/Authorized person of the organization should be scanned and of dimensions 135PX x 165PX in size, in JPEG/JPG/PNG format.</p>
          <p><strong>3. </strong>Partnership agreement / Official document of company's formation, Memorandum of Association & Articles of Association.</p>
          <p><strong>4. </strong>Certificate for GST registration or Self declaration stating absence of GST. </p>
          <p><strong>5. </strong>Certificate of Import-Export Code (IE code).</p>
          <p><strong>6. </strong>Permanent Account Number card. </p>
          <p><strong>7. </strong>Certificate for Micro, Small and Medium Enterprises (MSME) known as Udyog Aadhaar.</p>
        </div>
        <div className="flex-5">
          <Image
            alt="DocumentsRequired"
            className="DocumentsRequired-img w-100 Importance-img-h-100"
            height={440}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
