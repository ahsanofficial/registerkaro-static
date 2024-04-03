import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/ireland-company-registration/Documents_to_carry.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">Following are the documents you would need to proceed with the company registration process in Ireland:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
       
        <div className="flex-4 pt-5">
            <p><strong>1. </strong> Company Name </p>
            <p><strong>2. </strong> Shareholder’s details [ list of their names, identity proof, documents stating their financial health, affidavit]</p>
            <p><strong>3. </strong> Director’’s details along with PPS Number [ list of their names, identity proof, documents stating their financial health, affidavit]</p>
            <p><strong>4. </strong> Board Resolution</p>
            <p><strong>5. </strong> Parent Company details [if any]</p>
            <p><strong>6. </strong> Financial Documents of company showcasing financial health, and capital deposition</p>
            <p><strong>7. </strong> Memorandum of Association and Article of Association [if applicable]</p>
            <p><strong>8. </strong> Form A1 for application</p>
            <p><strong>9. </strong> Company Constitution [if applicable]</p>
            <p><strong>10. </strong> Company Registered address along with proof [lease agreement, utility bills, etc]</p>
        </div>
        <div className="flex-5">
            <Image
              alt="Documents to carry for registration process"
              className="DocumentRequired-img w-100"
              height={820}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};
