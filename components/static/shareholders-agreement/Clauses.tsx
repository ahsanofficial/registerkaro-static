import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/shareholders-agreement/Key_Clauses.svg";

const Clauses = () => {
  return (
    <div id="Clauses">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Key Clauses in a Shareholders’ Agreement"
            className="Clauses-img w-100"
            height={780}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>Ownership and Transfer of Shares: </strong>This clause outlines the initial distribution of shares among the founding members and subsequent procedures for transferring shares. It may include pre-emption rights, restrictions on transfer to external parties, and valuation mechanisms for determining the fair market value of shares.</p>
            <p><strong>Rights and Responsibilities: </strong>This section delineates the rights and responsibilities of each shareholder. It covers issues such as dividend distribution, participation in major decisions, and the obligations of shareholders in terms of contributing capital or expertise to the company.</p>
            <p><strong>Decision-Making Mechanisms: </strong>Detailing the process for making significant decisions, this clause addresses voting procedures, quorum requirements, and the threshold for passing resolutions. It may also include provisions for deadlock resolution in the event of a tie in voting.</p>
            <p><strong>Dispute Resolution: </strong>To manage potential conflicts among shareholders, a well-constructed Shareholders’ Agreement includes mechanisms for dispute resolution. This may involve arbitration, mediation, or other alternative dispute resolution methods to ensure timely and fair resolution.</p>
            <p><strong>Exit Strategies: </strong>Considering the dynamic nature of business, the agreement outlines exit strategies for shareholders. This may include provisions for selling shares, rights of first refusal, drag-along and tag-along rights, and buy-sell agreements in the event of a shareholder’s desire to exit the company.</p>
            <p><strong>Confidentiality and Non-Compete: </strong>To protect the company’s sensitive information, this clause establishes guidelines for confidentiality and may include non-compete provisions to prevent shareholders from engaging in competing business activities during and after their association with the company.</p>
            <p><strong>Corporate Governance: </strong>Defining the structure of corporate governance, this section covers the composition and responsibilities of the board of directors, procedures for board meetings, and the appointment and removal of key executives.</p>
        </div>
      
      </div>
    </div>
  );
};

export default Clauses;


