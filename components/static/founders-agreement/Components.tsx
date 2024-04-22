import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

export const Components = () => {
  return (
    <div id="Components">
      <p className="main-para">
        This Agreement can vary depending on the nature and scope of the
        business, but there are some common components that should be included
        in any Founders’ Agreement. These are:{" "}
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4 pt-5">
          <Image
            alt="Types of Companies in Oman"
            className="Benefits-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 align-items-center">
          <p>
            <strong>Names of founders and startup :</strong> This section
            identifies the parties involved in the agreement and the name of the
            company they are forming.
          </p>
          <p>
            <strong>Startup description :</strong> This section describes the
            purpose, vision, and goals of the startup and the products or
            services it offers.
          </p>
          <p>
            <strong>Ownership structure :</strong> This section specifies the
            percentage of equity ownership of each co-founder and how it is
            distributed. It also defines the voting rights and decision-making
            authority of each co-founder.
          </p>
          <p>
            <strong>Roles and responsibilities :</strong> This section assigns the roles and responsibilities of each co-founder and outlines their expected contributions and commitments to the startup. It also sets the performance standards and evaluation criteria for each co-founder.
          </p>
          <p>
            <strong>Capital contribution :</strong> This section states the amount of capital invested by each co-founder and how it is used. It also determines the valuation of the startup and the dilution of equity in case of future funding rounds.
          </p>
          <p>
            <strong>Intellectual property :</strong> This section clarifies the ownership and protection of the intellectual property created by the co-founders or the startup. It also defines the confidentiality and non-disclosure obligations of each co-founder.
          </p>
          <p>
            <strong>Compensation and benefits :</strong> This section determines the salary, bonus, stock options, and other benefits of each co-founder and how they are paid. It also covers the tax and legal implications of the compensation and benefits.
          </p>
          <p>
            <strong>Vesting schedule :</strong> This section establishes the vesting schedule of the equity of each co-founder and how it is affected by the termination, resignation, or death of a co-founder. It also defines the conditions and procedures for the transfer or sale of equity by a co-founder.
          </p>
          <p>
            <strong>Exit strategy :</strong> This section outlines the possible exit scenarios for the co-founders and the startup, such as acquisition, merger, IPO, or dissolution. It also sets the terms and conditions for the exit, such as the valuation, distribution, and liquidation of the assets and liabilities of the startup.
          </p>
          <p>
            <strong>Dispute resolution :</strong> This section provides the mechanism and process for resolving any disputes or conflicts that may arise among the co-founders or between the co-founders and the startup. It also specifies the jurisdiction and governing law of the agreement.
          </p>
          <p>
            <strong>Amendments and modifications :</strong> This section states the requirements and procedures for making any changes or updates to the agreement. It also defines the validity and enforceability of the agreement.
          </p>
          <p>
            <strong>Signature and date :</strong> This section confirms the consent and agreement of each co-founder to the terms and conditions of the agreement. It also records the date of signing the agreement.
          </p>
          <p>
            <strong>Annexures and attachments :</strong> This section includes any additional documents or information that support or supplement the agreement, such as the business plan, financial projections, corporate bylaws, etc.
          </p>
        </div>
      </div>
    </div>
  );
};
