import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Procedure = () => {
  return (
    <div id="Procedure">
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Procedure for Closure of Pvt. Ltd. Company"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-4">
          <ol>
            <li>
              <strong>Voluntary Wind Up: </strong>
                Following a lengthy procedural compliance is necessary when
                voluntarily winding up a company. There are specific essential
                criteria that must be fulfilled in order to voluntarily shut
                down a company. A company may choose to voluntarily wind up in
                the circumstances listed above:<br/>
                The company decides in its general meeting either when its
                period of existence ends or when a specified event occurs which
                requires its dissolution according to the articles. The company
                approves a special resolution (requiring at least 3/4th of
                shareholder approval) to voluntarily wind up the company. The
                process of voluntary winding-up starts on the date when the
                resolutions mentioned earlier are passed. In the same meeting,
                the company must also designate a Company liquidator.
                Confirmation of the appointment should also be obtained from a
                majority of the company's creditors (based on value). As per the
                Companies Act 2013, a board resolution is required for the
                voluntary winding up of a company, with the majority of
                directors needing to agree to the process. Furthermore, the
                winding up of the company requires a Special Resolution, which
                must be approved by three fourths of the total Stockholders.
                Approval from creditors or lenders is also required for the
                liquidation of the company. Creditors or lenders must approve
                that the company has no outstanding debts to them before the
                company can be dissolved. The company should release a Solvency
                Declaration, and the company's trade creditors should agree to
                it. The company looking to close down must prove its financial
                stability in the Declaration of Solvency. The designated
                liquidator will create a document detailing the assets,
                liabilities, capital, reserves, etc. All the steps mentioned
                earlier must be completed, shown, and submitted in the specified
                formats. After the company is dissolved, no other applicants are
                allowed to use the company's name for a period of two years.
            </li>
            <li>
              <strong>Selling of the Company: </strong>
              Selling a Private Limited Company is also considered a form of
              voluntary winding up. Selling the majority shareholding of the
              company involves selling shares of the company. Technically, it is
              not a true winding up process, as the stakes are simply passed on
              to another individual or entity, and the main shareholders are
              relieved of their stocks and duties.
            </li>
            <li>
              <strong>Defunct Wind Up: </strong>
              As per the Companies Act 2013, a company that is inactive is also
              referred to as a dormant company. Specific relief is provided by
              the government for inactive or defunct companies due to the
              absence of commercial activities or transactions in dormant
              companies. The Companies Act of 2013 provides specific guidelines
              for the closure of a dormant or inactive company. A dormant
              corporation can be closed using a quick procedure that involves
              submitting the STK-2 form. Completion of the STK-2 Form is
              necessary for the closure of a inactive company, and no additional
              steps are needed. The STK-2 form must be completed by the ROC and
              signed by the company director who has been approved by the board.
              The fast track exit scheme (FTE) is applicable to the defunct
              companies those are, No assets or liabilities, no initiation of
              any business activity post establishment, or no engagement in any
              business activities in the year prior to applying under FTE.
            </li>
            <li>
              <strong>Compulsory Wind Up: </strong>
              If any company in India, according to the Companies Act, engages
              in illegal or fraudulent activities or contributes to such
              activities, it will be required by the Tribunal to cease
              operations. The process of compulsory winding up includes the
              following stages:
              <ol>
                <li>The petition must be submitted along with the company's statement of affairs. A qualified Chartered Accountant must audit all financial documents alongside the petition, and the auditor's evaluation of the financial statement must be without conditions.</li>
                <li>The petition must be advertised in a daily journal for a minimum of 14 days, in both the local language and English.</li>
                <li>Winding up the company will require the use of Tribunal Form 11 in the proceedings.<br/>Present all the fully examined financial records up to the order's date. Provide information on the liquidator such as the date, time, and location. Transfer the company's documents and assets. If the tribunal finds that the accounts are well-organized and all required procedures have been followed, it will issue a decision to dissolve the company within 60 days of receiving the application. Once the tribunal issues the order, the ROC will release a notification in the Official Gazette stating that the company is dissolved.</li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Procedure;
