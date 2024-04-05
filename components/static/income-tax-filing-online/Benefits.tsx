import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/income-tax-filing-online/Benefits_of_filing_ITR_Online_in_India.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
        <p className="main-para">The following are the benefits of Income Tax Filing Online:</p>
      
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Benefits of filing ITR Online in India"
            className="Benefits-img w-100"
            height={750}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7 pt-5">
           <p><strong> Facilitating Loan Approval:</strong> Streamlining the loan approval process, filing your Income Tax Return (ITR) becomes a pivotal step when applying for loans like vehicles or homes. Major banks commonly demand a copy of your tax returns to substantiate your income statement, making it an essential document for securing loan approval.</p>
           <p><strong> Reclaiming Tax Refunds:</strong> In cases where Tax Deducted at Source (TDS) has been deducted from your income, even if your total taxable income falls below the basic exemption limit or incurs no tax liability, filing an Income Tax Return becomes crucial. It serves as the avenue to claim a refund of the deducted TDS.</p>
           <p><strong> Documentation for Income and Address Verification:</strong> Your Income Tax Return stands as a multifaceted document, not only indicating your financial standing but also serving as proof of both income and address. This dual functionality enhances its utility as a comprehensive verification document.</p>
           <p><strong> Expedited Visa Processing:</strong> When embarking on the visa application journey, embassies and consultants often mandate the submission of your tax returns from preceding years. Timely filing of your ITR becomes advisable as these documents are integral prerequisites for swift and smooth visa processing.</p>
           <p><strong> Capitalizing on Loss Carryforward:</strong> Submitting your return within the stipulated due date opens the door to carrying forward losses to subsequent years. This strategic financial move allows you to offset these losses against future income, effectively minimizing your tax liability. Without filing an income tax return, this advantageous provision would remain inaccessible.</p>
        </div>
        
      </div>
    </div>
  );
};
