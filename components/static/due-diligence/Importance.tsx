import Image from "next/image";
import React from "react";
import bft from '../../../assets/images/pvt-reg/benefit.svg'

export const Importance = () => {
  return (
    <div id="Importance">
      <p className="main-para">The importance of due diligence is very high in today's revolutionary business context. Below are several factors.</p>
      <div className="Importance flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Importance of Due Diligence"
            className="Importance-img w-100 img-h-100"
            height={550}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p><strong>1. Risk Mitigation :</strong>Conducting due diligence helps identify potential risks and liabilities associated with the target entity. From legal disputes and regulatory non-compliance to financial vulnerabilities, thorough due diligence empowers parties to make informed decisions and mitigate risks effectively.</p>
          <p><strong>2. Valuation Accuracy :</strong>Accurate assessment of the target company's assets, liabilities, and financial performance is critical for determining its true value. Due diligence uncovers hidden liabilities, overvalued assets, and financial irregularities, ensuring transparency and integrity in valuation processes.</p>
          <p><strong>3. Legal Compliance :</strong>In the realm of corporate governance and regulatory compliance, due diligence serves as a safeguard against legal pitfalls and liabilities. By verifying compliance with applicable laws, regulations, and contractual obligations, due diligence protects parties from potential legal repercussions and ensures adherence to ethical standards.</p>
          <p><strong>4. Strategic Decision-Making :</strong>Informed by the findings of due diligence, stakeholders can make strategic decisions aligned with their business objectives and risk appetite. Whether proceeding with the transaction, renegotiating terms, or withdrawing from the deal, due diligence provides the necessary insights to navigate complex negotiations and transactions effectively.</p>
        </div>
        
      </div>
    </div>
  );
};
