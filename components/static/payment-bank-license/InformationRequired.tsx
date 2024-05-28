import Image from "next/image";
import React from "react";
import bft from '../../../assets/images/pvt-reg/benefit.svg';

const InformationRequired = () => {
  return (
    <div id="InformationRequired">
      <p className="main-para">To obtain a Payments Bank License from the RBI, the following details must be provided:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="What Information is Required for Obtaining Payment Bank Licence?"
            className="InformationRequired-img w-100 Importance-img-h-100"
            height={950}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6">
            <p><strong>1. Information of the Individual Promoter:</strong></p>
            <div className="ps-4">
              <p><strong>a. </strong>Name, Date of Birth, and Residential Status of the Promoter.</p>
              <p><strong>b. </strong>Parent’s Name.</p>
              <p><strong>c. </strong>PAN No.</p>
              <p><strong>d. </strong>Branch and Bank Account Details, including any Credit Facilities.</p>
              <p><strong>e. </strong>Experience and Areas of Expertise of the Individual Promoter.</p>
              <p><strong>f. </strong>Track Record of Business and Financial Worth.</p>
            </div>
            <p><strong>2. Information of the Entity Promoting the Bank:</strong></p>
            <div className="ps-4">
              <p><strong>a. </strong>Shareholder Pattern of the Promoter Entity.</p>
              <p><strong>b. </strong>Memorandum and Articles of Association.</p>
              <p><strong>c. </strong>Financial statements from the past five years of the promoter entity.</p>
              <p><strong>d. </strong>Income tax returns for the last three years.</p>
            </div>
            <p><strong>3. Information of the Individuals and Entities in the Promoter Group:</strong></p>
            <div className="ps-4">
              <p><strong>a. </strong>Names of individuals and entities.</p>
              <p><strong>b. </strong>Details of shareholding.</p>
              <p><strong>c. </strong>Management details.</p>
              <p><strong>d. </strong>Pictorial Organogram.</p>
              <p><strong>e. </strong>Total Assets of Entities.</p>
              <p><strong>f. </strong>Annual Reports from the previous five years of all group entities.</p>
              <p><strong>g. </strong>Details of Listing in Stock Exchanges.</p>
              <p><strong>h. </strong>PAN No., TAN No., CIN No.</p>
              <p><strong>i. </strong>Bank Account and Branch Details.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InformationRequired;


