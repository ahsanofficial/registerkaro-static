import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const TerminateMeaning = () => {
  return (
    <div id="TerminateMeaning">
        <p className="main-para"> Terminating a Founders’ Agreement is a serious decision that can affect the future of your business and your relationship with your co-founders. Therefore, you should consider the following factors before proceeding with the termination:</p>
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
        <p><strong>The terms and conditions of your Agreement :</strong> You should review your Founders’ Agreement carefully and check if it contains any clauses that specify the conditions and procedures for terminating the agreement. For example, some Agreements may require a mutual consent of all the co-founders, a notice period, a vote of the board of directors, or a payment of a termination fee. You should also check if your agreement has a dispute resolution mechanism, such as arbitration or mediation, in case of any conflicts or disagreements among the co-founders.</p>
        <p><strong>The reasons and consequences of terminating the agreement :</strong> You should evaluate the reasons why you want to terminate the agreement and weigh the pros and cons of doing so. For example, you may want to terminate the agreement because of a breach of trust, a lack of commitment, a divergence of vision, or a personal conflict with your co-founders. However, you should also consider the potential consequences of terminating the agreement, such as losing your equity, intellectual property, or customers, damaging your reputation, or facing legal action from your co-founders or other stakeholders.</p>
        <p><strong>The alternatives to terminating the agreement :</strong>  You should explore the possibility of resolving the issues with your co-founders without terminating the agreement. For example, you may try to communicate openly and honestly, negotiate a compromise, seek a third-party intervention, or modify the terms of the agreement. You may also consider exiting the business gracefully and amicably, by selling or transferring your shares, or finding a suitable replacement for your role.</p>
        </div>
        <div className="flex-3 pt-5">
        <Image
            alt="Documents you would need"
            className="DocumentsReq-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default TerminateMeaning;
