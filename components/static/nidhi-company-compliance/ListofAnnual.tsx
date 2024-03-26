import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const ListofAnnual = () => {
  return (
    <div id="ListofAnnual">
      <p className="main-para">
        Following is the list of Annual Nidhi Company Compliance:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt=""
            className="ListofAnnual-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p>
            <strong>NDH-1</strong>
          </p>
          <p>
            Nidhi Companies must file the NDH-1 form with the appropriate fees
            and have it duly approved by an authorized chartered accountant,
            company secretary, or cost accountant. Once your registration is
            complete, the company should file the annual return within 3 months
            or 90 days of the end date of the first or second year.
          </p>

          <p>
            <strong>NDH-2</strong>
          </p>
          <p>
            If the following Compliance are not met, the form NDH-2 must be
            completed to request a time extension:
          </p>

          <p>
            <strong>1 :</strong>If the company fails to add at least 200
            partners in a year.
          </p>
          <p>
            <strong>2 :</strong>If the company is unable to maintain a net owned
            fund to deposit in the ratio of 1:20.
          </p>
          <p>
            <strong>3 :</strong>after which the director can pass the orders
            within a month or 30 days from the date of receipt of the
            application.
          </p>
          <p>
            <strong>NDH-3</strong>
          </p>
          <p>
            It is also an important annual return form that the Nidhi Company
            must file twice a year.
          </p>

          <p>
            <strong>Accounts books</strong>
          </p>
          <p>
            Every Nidhi company must ensure that its books of accounts are kept
            up to date.
          </p>

          <p>
            <strong>Keep a Statutory Register</strong>
          </p>
          <p>
            According to the Companies Act 2013, Nidhi Company is required to
            maintain the statutory registers. It is one of the mandatory
            requirements for a Nidhi Company to file its annual returns.
          </p>

          <p>
            <strong>Convene Statutory Meetings</strong>
          </p>
          <p>
            Conducting a Board meeting with the company’s Directors and
            Shareholders Financial report or statement preparation It is
            required for a Nidhi company to prepare financial reports and
            statements, which include the Balance Sheet, Cash Flow Statement,
            and Profit & Loss Account Statement.
          </p>

          <p>
            <strong>Income Tax Returns</strong>
          </p>
          <p>
            Nidhi Company must file annual income tax returns on or before
            September 30th of the following fiscal year.
          </p>

          <p>
            <strong>Financial Statement Returns Filing (AOC-4)</strong>
          </p>
          <p>
            The form AOC-4 contains nuances of the Nidhi Company’s budget
            statement or reports. Additional documents that are supported to
            transfer along this form preserve this form. MGT-7-ROC Annual Return
            Filing Annual Profit) Nidhi Company must submit an annual return to
            the MCA or Ministry of Corporate Affairs (MCA) using Form MGT-7.
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default ListofAnnual;
