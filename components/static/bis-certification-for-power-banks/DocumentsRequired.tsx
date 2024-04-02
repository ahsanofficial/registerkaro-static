import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const DocumentsRequired = () => {
  return (
    <div id="DocumentsRequired">
        <p className="main-para">The documents required for BIS Certification for Power Banks are:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1. </strong>A duly filled online application form</p>
            <p><strong>2. </strong>A test report from a BIS recognized lab</p>
            <p><strong>3. </strong>A business license and a scope of business license</p>
            <p><strong>4. </strong>An authorized Indian representative (AIR) details</p>
            <p><strong>5. </strong>A declaration of conformity</p>
            <p><strong>6. </strong>A product catalog or brochure</p>
            <p><strong>7. </strong>A fee payment receipt</p>
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


