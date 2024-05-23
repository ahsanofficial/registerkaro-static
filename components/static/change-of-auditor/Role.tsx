import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/change-of-auditor/onetwo.svg";

interface HeroProps {
  cityName: string;
}

export const Role = ({ cityName }: HeroProps) => {
  return (
    <div id="Role">
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <ol>
            <li>The auditor must create an audit report using the company's financial statements. He must ensure that the accounting books he examines are kept in compliance with the appropriate legislation. He needs to make sure that the financial statements adhere to the Companies Act 2013, relevant Accounting Standards, and other applicable regulations.</li>
            <li>If the auditor assigned is specifically for the branch and not for the entire company, they will provide help in finishing the branch audit. He will create a report using the branch's accounts that he has reviewed, and then forward it to the company auditor. The auditor of the company will then add this report to the company's main audit report.</li>
            <li>The auditor might have specific concerns about possible fraud occurring in the company, instances where the financial statements and numbers provided don't seem to match up. If he ever encounters such scenarios, he must promptly inform the Central Government as outlined in the Act.</li>
            <li>As a professional, the auditor must follow both the Code of Ethics and the Code of Professional Conduct. This includes the need to maintain confidentiality and exercise caution while performing his responsibilities. Professional scepticism is another crucial requirement.</li>
          </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="Role of Auditor"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
