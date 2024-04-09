import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/sweden-company-registration/Types_of_Business.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">Following are the types of company structures available in the UK laws:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
        <div className="flex-7">
           <h3>Limited Company (AB)</h3>
           <ol>
            <li>Ownership: Can have one shareholder.</li>
            <li>Liability: Directors and shareholders enjoy limited liability protection.</li>
            <li>Popular Choice: Most common business structure for foreign investors.</li>
            <li>Requirements: Minimum capital of 25,000 SEK.</li>
           </ol>


          <h3>Trading Partnership (HB)</h3>
          <ol>
            <li>Ownership: Must have two or more partners.</li>
            <li>Liability: Partners are personally liable for the company's debts.</li>
            <li>Requirements: No minimum capital is required.</li>
          </ol>


          <h3>Limited Partnership (KB)</h3>
          <ol>
            <li>Ownership: Involves more than two partners (individuals or businesses).</li>
            <li>Liability: General partners have unlimited liability, while limited partners have liability up to their capital contribution.</li>
            <li>Requirements: No minimum capital is required.</li>
          </ol>


          <h3>Branch Office (Filial)</h3>
          <ol>
            <li>Ownership: Extensions of the parent company.</li>
            <li>Liability: The parent company is liable for the company's debts.</li>
            <li>Requirements: Must use the name "Filial."</li>
          </ol>


          <h3>Sole Proprietorship</h3>
          <ol>
            <li>Ownership: Suitable for individual professionals launching their own businesses.</li>
            <li>Liability: The owner bears full responsibility for all debts and liabilities.</li>
            <li>Requirements: No minimum capital is required.</li>
          </ol>
        </div>
        <div className="flex-4">
            <Image
              alt="Types of Business Structures in Sweden"
              className="Types-img w-100"
              height={900}
              loading="lazy"
              src={dft}
            />
        </div>
        
      </div>
    </div>
  );
};
