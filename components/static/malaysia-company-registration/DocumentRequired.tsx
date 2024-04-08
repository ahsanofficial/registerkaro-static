import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/malaysia-company-registration/documents.svg"

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">Following are certain documents that you would need for the company registration process in Malaysia:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
       
        <div className="flex-4 pt-5">
            <p><strong>1: </strong>Directors’ details: Identity proof, financial documents, self declaration, [passport for foreigners]</p>
            <p><strong>2: </strong>Shareholders’ details: Identity proof, financial documents, self declaration [passport for foreigners]</p>
            <p><strong>3: </strong>Registration certificate copy [if the shareholder is a company]</p>
            <p><strong>4: </strong>Documents showcasing financial health [if the shareholder is a company]</p>
            <p><strong>5: </strong>Board Resolution accepting incorporation of a company in Malaysia</p>
            <p><strong>6: </strong>Article of Association [if applicable]</p>
            <p><strong>7: </strong>Memorandum of Association [if applicable]</p>
            <p><strong>8: </strong>Office registered address and the supporting documents such as Utility bills, electricity bills, lease agreement, etc.</p>
            <p><strong>9: </strong>Residential address and proof for the foreign directors and shareholders.</p>
            <p><strong>10: </strong>Paid up capital and supporting documents </p>
        </div>
        <div className="flex-5">
            <Image
              alt="Documents to prepare for company registration in Malaysia"
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
