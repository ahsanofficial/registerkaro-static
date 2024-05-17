import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/wpc-certificate/required_documents.svg";

export const Advantage = () => {
  return (
    <div id="advantage">
        <p className="main-para">The WPC ETA Registration requires the following documents:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt="Required Documents for WPC Certification"
            className=" Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
            <p><strong>1. </strong>Certificate of Company Incorporation </p>
            <p><strong>2. </strong>Certificate of GST Registration</p>
            <p><strong>3. </strong>Imports- Export Code (IEC Certificate)</p>
            <p><strong>4. </strong>Purchase Order (PO) for imported equipment.</p>
            <p><strong>5. </strong>Online fee receipt</p>
            <p><strong>6. </strong>Provide Address Proof for the Entity Applying RF Test report from a foreign laboratory accredited by ISO or from a laboratory accredited by NABL.</p>
            <p><strong>7. </strong>Technical specifications of the product</p>

        </div>
      
      </div>
    </div>
  );
};
