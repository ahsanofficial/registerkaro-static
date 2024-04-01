import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/qatar-company-registration/documents.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">You need to have following documents for registration process in Qatar [List is not exhaustive]:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
        <div className="flex-4 pt-5">
            <p><strong>1: </strong>Article of Association [if applicable]</p>
            <p><strong>2: </strong>Memorandum of Association [if applicable]</p>
            <p><strong>3: </strong>Passport of shareholders [if foreign nationals]</p>
            <p><strong>4: </strong>Shareholders’ KYC Form</p>
            <p><strong>5: </strong>Manager KYC Form</p>
            <p><strong>6: </strong>Manager Individual Details</p>
            <p><strong>7: </strong>Qatar ID for shareholders [if local resident]</p>
            <p><strong>8: </strong>Certificate proving good standing of the company </p>
            <p><strong>9: </strong>Registered Office Address [along with proof such as Utility Bills, electricity bill, lease agreement, etc]</p>
            <p><strong>10: </strong>Company Valuation reports</p>
            <p><strong>11: </strong>Commercial Registration offered by the Ministry of Economy and Commerce.</p>
            <p><strong>12: </strong>Valid Establishment card copy</p>
            <p><strong>13: </strong>Board Resolution</p>
            <p><strong>14: </strong>Fee payment proof</p>
        </div>
        <div className="flex-5">
            <Image
              alt="Documents to carry for registration process"
              className="DocumentRequired-img w-100"
              height={750}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};
