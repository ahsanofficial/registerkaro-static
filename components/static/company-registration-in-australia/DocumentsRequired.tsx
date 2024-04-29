import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentsRequired = () => {
  return (
    <div id="DocumentsRequired">
      <div className="documentsRequired flex w-80 m-auto mobile-flex-column">
        <div className="flex-5">
          <Image
            alt="Documents Required"
            className="DocumentsRequired-img w-100 Importance-img-h-100"
            height={430}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-5">
          <p><strong>1. </strong>Completed Application Form (Form 201)</p>
          <p><strong>2. </strong>Name Reservation</p>
          <p><strong>3. </strong>Company Constitution or Replaceable Rules</p>
          <p><strong>4. </strong>Submission of Form 410 for name reservation</p>
          <p><strong>5. </strong>Australian Company Number (ACN)</p>
          <p><strong>6. </strong>Details of shareholders and directors</p>
          <p><strong>7. </strong>Information regarding the Registered Office Address</p>
          <p><strong>8. </strong>Valid identification documents for incorporators, directors, and officers</p>
          <p><strong>9. </strong>Evidence of the registered office address, such as a lease agreement or land title certificate</p>
        </div>
      </div>
    </div>
  );
};
