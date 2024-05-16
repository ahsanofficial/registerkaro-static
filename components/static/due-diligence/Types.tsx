import Image from "next/image";
import React from "react";
import bft from '../../../assets/images/static/due-diligence/Types of Due Diligence.svg'

export const Types = () => {
  return (
    <div id="Types">
      <p className="main-para">Different types of due diligence businesses can be considered while analysing due diligence. It has been discussed below:</p>
      <div className="types flex w-80 m-auto mobile-flex-column-reverse">
        
        <div className="flex-7">
           <p><strong>1. Financial Due Diligence :</strong>Financial due diligence analysis can be done by assessing the target company's financial health, performance, and viability and it involves financial statements, tax returns, cash flow projections, debt obligations, and historical financial data to ascertain the accuracy of financial representations and identify potential risks, such as undisclosed liabilities, revenue recognition issues, or cash flow challenges.</p>
           <p><strong>2. Legal Due Diligence :</strong>Legal due diligence intends to uncover any legal risks, liabilities, or non-compliance issues that could impact the transaction or expose the parties to legal challenges post-closing. Corporate governance structure, contractual agreements, litigation history, intellectual property rights, regulatory compliance, and legal disputes are the factors considered for legal due diligence done through an examination of the target company's legal affairs.</p>
           <p><strong>3. Commercial Due Diligence :</strong>Commercial Due Diligence can be done to validate the commercial assumptions underlying the transaction, evaluate the target's competitive positioning, and identify potential opportunities or threats in the marketplace.It focuses on assessing the market dynamics, industry trends, competitive landscape, customer relationships, and growth prospects of the target company.</p>
           <p><strong>4. Operational Due Diligence :</strong>Operational due diligence involves evaluating the operational capabilities, efficiency, and scalability of the target company's business operations. It includes reviewing operational processes, supply chain management, IT infrastructure, human resources, and regulatory compliance procedures to identify operational risks, bottlenecks, or inefficiencies that could impact post-acquisition integration or business performance.</p>
           <p><strong>5. Environmental Due Diligence :</strong>Environmental due diligence assesses the environmental risks and liabilities associated with the target company's operations, facilities, and properties. It involves conducting environmental assessments, site inspections, and regulatory compliance audits to identify potential environmental contamination, remediation obligations, regulatory violations, or future liabilities that could affect the transaction or trigger regulatory scrutiny.</p>
           <p><strong>6. Technical Due Diligence :</strong>Technical due diligence focuses on evaluating the technological assets, capabilities, and infrastructure of the target company. It involves assessing software systems, intellectual property portfolios, research and development initiatives, technological dependencies, and cybersecurity protocols to identify technological risks, vulnerabilities, or opportunities that could impact the transaction or future business operations.</p>
           <p><strong>7. Cultural Due Diligence :</strong>Cultural due diligence assesses the organizational culture, values, leadership dynamics, and employee morale within the target company. It aims to evaluate cultural compatibility, communication channels, and change management readiness to identify potential cultural clashes, integration challenges, or employee retention issues that could affect post-acquisition integration and long-term business performance.</p>
        </div>
        <div className="flex-4">
            <Image
              alt="Types of Due Diligence"
              className="Importance-img-h-100 w-100"
              height={800}
              loading="lazy"
              src={bft}
            />
        </div>
        
      </div>
    </div>
  );
};
