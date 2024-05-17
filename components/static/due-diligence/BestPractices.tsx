import Image from "next/image";
import React from "react";
import bft from '../../../assets/images/static/due-diligence/Best Practices to be followed for Effective Due Diligence.svg'
interface HeroProps {
    cityName: string;
}
export const BestPractices = ({ cityName }: HeroProps) => {
  return (
    <div id="BestPractices">
      <div className="BestPractices flex w-80 m-auto mobile-flex-column-reverse">
        
        <div className="flex-6">
          <p><strong>1. Define Objectives and Scope:</strong>Clearly define the objectives and scope of due diligence, focusing on key areas of concern and strategic priorities. Tailor the due diligence process to address specific transactional risks and objectives comprehensively.</p>
          <p><strong>2. Assemble a Multidisciplinary Team :</strong>Collaborate with legal experts, financial analysts, industry specialists, and other relevant professionals to conduct a holistic due diligence assessment. Leverage diverse expertise and perspectives to uncover potential issues and opportunities across different domains.</p>
          <p><strong>3. Document Review and Analysis :</strong>Thoroughly review and analyze relevant documents, including contracts, financial records, regulatory filings, intellectual property rights, and operational reports. Pay close attention to inconsistencies, omissions, and potential red flags warranting further investigation.</p>
          <p><strong>4.  Engage in Open Communication :</strong>Foster open communication and collaboration between the parties involved in the due diligence process. Encourage transparency, disclosure, and dialogue to address concerns, clarify inquiries, and facilitate a constructive exchange of information.</p>
          <p><strong>5. Continuous Monitoring and Evaluation :</strong>Adopt a proactive approach to due diligence by implementing continuous monitoring and evaluation mechanisms. Stay vigilant to emerging risks, regulatory changes, and market dynamics that may impact the transaction's viability and terms.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Best Practices to be followed for Effective Due Diligence"
            className="Importance-img-h-100 w-100"
            height={620}
            loading="lazy"
            src={bft}
          />
        </div>
        
      </div>
    </div>
  );
};
