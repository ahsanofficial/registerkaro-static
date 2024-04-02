import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/saudi-arabia-company-registration/Documents.svg"

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">You need to have following documents for registration process in Saudi Arabia [List is not exhaustive]:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
        <div className="flex-4 pt-5">
            <p><strong>1. </strong>Memorandum of Association [if applicable]</p>
            <p><strong>2. </strong>Article of Association [if applicable]</p>
            <p><strong>3. </strong>Passport of shareholders [if foreign nationals]</p>
            <p><strong>4. </strong>Company name reservations Certificate</p>
            <p><strong>5. </strong>Company’s office address with proof [lease agreement, Utility Bills, etc]</p>
            <p><strong>6. </strong>Required License for the business [specific to industry]</p>
            <p><strong>7. </strong>Shareholders’ details [financial documents, resident proof, local ID card, etc]</p>
            <p><strong>8. </strong>Commercial registration certificate of Directors/shareholders/directors</p>
            <p><strong>9. </strong>Power of attorney defining the company registration by an agent.</p>
            <p><strong>10. </strong>Documents signifying the business’ financial health.</p>
          
        </div>
        <div className="flex-5">
            <Image
              alt="Documents to carry for registration process"
              className="DocumentRequired-img w-100"
              height={700}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};
