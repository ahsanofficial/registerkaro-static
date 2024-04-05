import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/income-tax-filing-online/Documents_required_for_ITR_filing_online.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">The following is the list of some vital documents required for income tax filing online:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-5 ">
            <Image
              alt="Documents required for ITR filing online"
              className="DocumentRequired-img w-100"
              height={500}
              loading="lazy"
              src={bft}
            />
          </div>
        <div className="flex-4 pt-5">
            <p className="pt-5"><strong>1: </strong>Form 16 (for salaried/pensioners);</p>
            <p><strong>2: </strong>Form 26AS;</p>
            <p><strong>3: </strong>Profit and Loss Statement (for businesses/self-employed);</p>
            <p><strong>4: </strong>All investment documents (u/s 80C, 80D, 80E, 80G, etc.);</p>
            <p><strong>5: </strong>Home loan interest certificate, etc.</p>
        </div>
      </div>
    </div>
  );
};
