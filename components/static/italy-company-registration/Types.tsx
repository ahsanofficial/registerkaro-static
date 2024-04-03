import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/italy-company-registration/Types_of_companies.svg"

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">For establishing a business in Italy, you may choose one of the following company structure:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="Types of companies for Company Registration in Italy"
              className="Types-img w-100"
              height={800}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-7">
           <p><strong>1. Limited Liability Company [società a responsabilità limitata/S.r.l.]: </strong>In an LLC, quotas are used to symbolize the capital stock and can be started with just one shareholder. Moreover, the required issued capital is to be minimum 1 euro. Only one "quota," or the percentage of a shareholder's interest in the corporation, will be held by each shareholder. Both corporate and private stockholders are permitted to operate under LLC along with dealing in local clients. </p>
           <p><strong>2. Joint Stock Company [società per azioni or S.p.A.]: </strong>It is such a business where shares indicate the equity owned by the participants where one director and one auditor must be an Italian Resident. Moreover, a minimum investment of Euro 50,000 is required where the money must remain in the account. The capital may be contributed with cash, or, if specifically stated in the Memorandum of Association, it may be contributed in kind or in the form of receivables, the value of which shall equal the capital subscribed. Additionally it is mandatory to conduct regular audits.</p>
           <p><strong>3. Branch Office: </strong>A branch is an organizationally independent division of a larger firm that operates independently of its parent company geographically or in other ways. The branch conducts regular business on the company's behalf in its location. Remember that a branch office of a parent company is not a distinct legal entity. This implies that the foreign parent bears whole responsibility for the branch's activities, and satisfying the branch's duties may require drawn-out negotiations with the tax authorities. Moreover, an Italian branch is subject to the same taxes as an Italian corporation.</p>
           <p><strong>4. Representative Office: </strong>Like in other European countries, a representative office is a place designated by an official legal body to handle advertising and other non-transactional tasks when S.p.A. or S.r.l. organizations are not required. It is not required to file taxes or VAT returns, keep records, or supply financial data. To track the expenses (for personnel, office supplies, etc.) that the overseas company's main office is accountable for paying, regular accounting must also be kept up to date.</p>
        </div>
        
      </div>
    </div>
  );
};
