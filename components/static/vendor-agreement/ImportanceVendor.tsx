import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/vendor-agreement/Importance of Vendor Agreement.svg";

interface HeroProps {
  cityName: string;
}

const ImportanceVendor = ({ cityName }: HeroProps) => {
  return (
    <div id="ImportanceVendor">
        <p className="main-para">It is imperative to have a vendor agreement in place for multiple reasons.</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="Importance of Vendor Agreement"
            className="Importance-img-h-100 w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>Defining Expectations: </strong>A vendor agreement ensures that all parties are in agreement about the goods or services being given by helping to clearly define expectations and obligations for each.</p>
            <p><strong>Reduce risks: </strong>By defining the terms and circumstances of the commercial relationship, such as payment terms, warranties, and liabilities, the agreement reduces risk.</p>
            <p><strong>Preserves Confidential Information: </strong>The agreement include clauses protecting trade secrets, intellectual property, and confidential information.</p>
            <p><strong>Prevents conflicts: </strong>By outlining the procedure for settling disagreements or conflicts between the parties, the agreement lessens the possibility of expensive legal issues.</p>
            <p><strong>Legal Compliance: </strong>Both parties are guaranteed to abide by the terms of the agreement, including any tax and regulatory compliance requirements.</p>
        </div>
      </div>
    </div>
  );
};

export default ImportanceVendor;


