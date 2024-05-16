import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
      <p className="main-para">
        The following are the benefits that business owners can receive by using
        remote CFO services:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Benefits of starting a Business in Qatar"
            className="Importance-img-h-100 w-100"
            height={750}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
          <p>
            <strong>Success-focused methodology : </strong>
            <p className="pt-2">
              Uses a success-based methodology that emphasizes the state of the
              market and finances.
            </p>
          </p>
          <p className="pt-2">
            Monitors and assesses key performance indicators (KPIs), such as
            cash flow, supplies, sales, production, and distribution.
          </p>

          <p>
            <strong>Planning and Growth Strategy : </strong>
          </p>
          <p className="pt-2">
            Evaluates the business and offers suggestions for a growth plan.
          </p>
          <p className="pt-2">
            Creates innovative ideas, market strategies, and improvement plans
            to meet financial needs.
          </p>

          <p>
            <strong>Obtaining Investor Access : </strong>
            Supports decision-making and finds potential investors for the
            growth of a company.
          </p>

          <p>
            <strong>Increased Income : </strong>
            Evaluates resources and gets rid of waste to boost output all
            around.
          </p>

          <p>
            <strong>Efficient Decision : </strong>
            Making Facilitates business decision-making through the
            identification of critical operational metrics and financial
            evaluation.
          </p>

          <p>
            <strong>Precise Budgeting and Accounting : </strong>
            Ensures a sound budget and determines cash requirements in order to
            maintain a healthy profit.
          </p>

          <p>
            <strong>Evaluation and Mitigation of Risks : </strong>
            Identifies possible hazards and provides remedies to lessen their
            effects and improve their chances.
          </p>

          <p>
            <strong>Evaluations of Businesses : </strong>
            Manages the market value recognition of business valuations for
            securities, liabilities, and assets.
          </p>

          <p>
            <strong>Flexibility in Organizational Hierarchy : </strong>
            Has the power to modify the organizational structure of the company
            to accommodate growth.
          </p>
        </div>
     
      </div>
    </div>
  );
};
