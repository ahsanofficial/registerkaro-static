import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/outsource-bookkeeping-services/Services_include.svg";

const Services = () => {
  return (
    <div id="Services">
      <p className="main-para">
        Following are the various services included in Outsourcing Bookkeeping:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p>
            <strong>Electronic and Manual Financial Records: </strong>
            Maintaining financial records for a business or managing financial
            documents like invoices and debts is a fundamental aspect of
            bookkeeping. With accounting software, which is used by most
            businesses, bookkeepers automatically enter financial data into a
            database to create financial records.
          </p>

          <p>
            <strong>Account receivable tracker: </strong>
            Generally business owners remember to send invoices on the first of
            each month but then get so busy that negligence doesn’t allow them
            to follow up to find out who has paid who haven’t [in order to
            impose late fee. Sending the bills, comparing them to incoming
            payments, and following up with clients who don’t reply by the
            deadline can all be handled by a bookkeeper.
          </p>

          <p>
            <strong>Payroll processing services: </strong>
            Many bookkeepers also handle employee payroll in addition to
            managing accounts payable. A company’s debt to suppliers or vendors
            is referred to as accounts payable and making sure that bills are
            paid on schedule and accurately recorded in the expenses or debt
            column of the general ledger is usually the responsibility of
            accounts payable management. Many businesses utilize bookkeeping
            software to prepare payroll. Bookkeepers will guarantee the accuracy
            of timesheets, pay, and payouts.{" "}
          </p>

          <p>
            <strong>Compilation of tax returns services: </strong>
            Bookkeepers do not file taxes; instead, they compile the financial
            paperwork that an accountant or CPA must submit. Bookkeepers create
            and distribute 1099 and W-2 forms to company employees as part of
            tax preparation. Payroll data is used to create these records,
            typically with the aid of bookkeeping or payroll software. Other
            sorts of financial paperwork to be generated are income statements,
            balance sheets, cash flow statements, assets, and liabilities.
          </p>

          <p>
            <strong>Bank reconciliation: </strong>
            It is really important to have a smooth bank reconciliation as it
            become a serious problem is the sum in bank doesn’t match with the
            sum on the balance sheet. Fortunately, to avoid such issue, bank
            reconciliations are often carried out by bookkeepers once a month to
            ensure that your cash flow is normal and that all transactions are
            accurately recorded.
          </p>
        </div>
        <div className="flex-3">
          <Image
            alt="Services included in Outsourcing Bookkeeping"
            className="Services-img w-100"
            height={680}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
