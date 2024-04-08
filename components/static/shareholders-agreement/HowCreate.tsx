import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/shareholders-agreement/How_to_Create_a_Shareholders.svg";

const HowCreate = () => {
  return (
    <div id="HowCreate">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="How to Create a Shareholders’ Agreement?"
            className="HowCreate-img w-100"
            height={880}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>Identify Objectives and Concerns: </strong>Before drafting the agreement, stakeholders should identify their objectives, concerns, and expectations. This involves open communication among shareholders to ensure that the agreement aligns with the collective vision for the company.</p>
            <p><strong>Engage Legal Professionals: </strong>Given the legal complexities involved, it is advisable to engage legal professionals experienced in corporate law. They can provide valuable insights, ensure legal compliance, and tailor the agreement to meet the specific needs of the company.</p>
            <p><strong>Define Ownership Structure: </strong>Clearly define the initial ownership structure and the procedure for future share transfers. Consider issues such as pre-emption rights, restrictions on transfers, and mechanisms for determining the fair market value of shares.</p>
            <p><strong>Specify Decision-Making Processes: </strong>Establish clear protocols for decision-making, including voting procedures, quorum requirements, and thresholds for passing resolutions. Address potential deadlocks by including mechanisms for resolution in the event of tied votes.</p>
            <p><strong>Incorporate Exit Strategies: </strong>Anticipate future scenarios by incorporating exit strategies in the agreement. This may involve buy-sell provisions, drag-along and tag-along rights, and other mechanisms to facilitate a smooth exit for shareholders.</p>
            <p><strong>Address Dispute Resolution: </strong>Include provisions for dispute resolution, specifying whether disputes will be resolved through arbitration, mediation, or other alternative methods. Clarity on this front can prevent prolonged legal battles that may disrupt the company’s operations.</p>
            <p><strong>Include Confidentiality and Non-Compete Clauses: </strong>To protect the company’s sensitive information, incorporate confidentiality clauses and, if necessary, non-compete provisions. This ensures that shareholders do not engage in activities that may be detrimental to the company’s interests.</p>
            <p><strong>Regularly Review and Update: </strong>A Shareholders’ Agreement should not be a static document. Regularly review and update it to reflect changes in the business landscape, ownership structure, or applicable laws. This ensures that the agreement remains relevant and effective over time.</p>
        </div>
       
      </div>
    </div>
  );
};

export default HowCreate;


