import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

export const Definition = () => {
  return (
    <div id="Definition">
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Auditor of a Company"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-5">
          <ol>
            <li>The company must rotate or change auditors every 5 years in order to comply with the Companies Act, 2013. In these instances, it is important to explicitly mention that a retiring auditor cannot be reappointed during an Annual General Meeting where a resolution is passed to appoint a new auditor. According to the specific notification, the Auditor has the option to submit a written representation to the company, either accepting or disputing the change, depending on the circumstances.</li>
            <li>An auditor hired by a company is an impartial external expert responsible for evaluating and confirming the company's financial status and must approve the company's financial documents. An auditor is tasked with assessing the accuracy and trustworthiness of the financial statements of a company or organization. The most essential task of the company is carried out by the auditors. Therefore, choosing and hiring an auditor is a crucial responsibility for the board of directors.</li>
            <li>Choosing the correct audit company is a significant decision. Advising the board on selecting an external auditor is a crucial responsibility of the audit committee when one is present. Nevertheless, the selection of auditors holds significance for shareholders because auditors directly communicate with them, and therefore, the decision to appoint or reappoint auditors must be approved by shareholders in a meeting.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
