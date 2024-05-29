import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentsRequired = () => {
  return (
    <div id="DocumentsRequired">
      <div className="DocumentsRequired flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p><strong>1. </strong>Application for LLP Closure; </p>
          <p><strong>2. </strong>Consent of All Partners; </p>
          <p><strong>3. </strong>Statement of Company Accounts Showing Zero Liabilities and Assets Certified by a Practicing Chartered Accountant with a Date, Not More Than 30 Days Prior to the Date of Application Filing; </p>
          <p><strong>4. </strong>An Affidavit Executed Either Individually or Jointly by All Partners; </p>
          <p><strong>5. </strong>A Copy of the Most Recent Income Tax Return Acknowledgement; </p>
          <p><strong>6. </strong>Initial LLP Agreement</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Documents Required"
            className="DocumentsRequired-img w-100 Importance-img-h-100"
            height={325}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
