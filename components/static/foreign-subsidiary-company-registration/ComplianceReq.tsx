import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/foreign-subsidiary-company-registration/important.svg";


export const ComplianceReq = () => {
  return (
    <div id="ComplianceReq">
        <p className="main-para">Upon successfully incorporating a foreign subsidiary company in India, adhering to compliance requirements is paramount to ensure smooth operations and avoid legal ramifications. Compliance encompasses a broad spectrum of regulations, including taxation, labour laws, corporate governance, foreign exchange laws etc. A concise breakdown of compliance requirements is as follows:</p>
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Compliance Requirements for Foreign Subsidiary"
            className="Importance-img-h-100 w-100"
            height={680}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-5">
          <ol>
            <li>Taxation and Financial Compliances:
                <ol>
                    <li><strong>Income Tax: </strong>Foreign subsidiaries are taxed at a rate of 40%. Mandatory filings include annual income tax returns and audit reports if the gross receipts exceed the prescribed limit.</li>
                    <li><strong>GST: </strong>Registration is required immediately after incorporation, followed by monthly and quarterly filings of returns.</li>
                    <li><strong>Transfer Pricing: </strong>Regulations apply to transactions between the subsidiary and its foreign parent company, necessitating documentation and filings to avoid penalties.</li>
                </ol>
            </li>
            <li>Corporate and Regulatory Compliances:
                <ol>
                    <li><strong>RBI Guidelines: </strong>Compliance with Foreign Direct Investment (FDI) guidelines and reporting of foreign investments to the Reserve Bank of India.</li>
                    <li><strong>Companies Act, 2013: </strong>Holding of Annual General Meetings (AGM), Board Meetings, maintenance of statutory registers, and filings with the Registrar of Companies (ROC).</li>
                </ol>
            </li>
            <li>Labour Laws and Other Compliances:
                <ol>
                    <li><strong>Provident Fund (PF) and Employees’ State Insurance (ESI): </strong>Monthly contributions and filings are required for employee welfare schemes.</li>
                    <li><strong>Environmental Regulations: </strong>Depending on the industry, compliance with environmental standards is crucial to avoid fines and shutdowns.</li>
                </ol>
            </li>
          </ol>
        </div>
      </div>
      <p className="main-para">Ensuring compliance with these regulations not only solidifies the legal standing of a foreign subsidiary in India but also fosters a conducive environment for business growth and sustainability.</p>
    </div>
  );
};
