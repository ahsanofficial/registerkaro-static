import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const RCMC = () => {
  return (
    <div id="RCMC">
      <p className="main-para">If a person wants to export tea in bulk or packets or bags or instant tea etc. They are required to register with the Tea Board and obtain a RCMC. To obtain RCMC the Applicant needs to apply in form 19-A and form 19-B. Once granted it is valid until the validity of the manufacturer's export licence and can be further renewed.</p>
      <div className="RCMC flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p><strong>1. </strong>Application along with the date and seal of the appropriate Proprietor or Partner or Director or any other Authorised Personnel</p>
          <p><strong>2. </strong>Copy of the Import Export Code</p>
          <p><strong>3. </strong>A Copy of the Export License</p>
          <p><strong>4. </strong>Declaration on the letterhead of the company stating that there is no default in filing of export returns</p>
          <p><strong>5. </strong>Any other document, if demanded by the Board</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Registration Cum Membership Certificate (RCMC)"
            className="RCMC-img w-100 Importance-img-h-100"
            height={250}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
