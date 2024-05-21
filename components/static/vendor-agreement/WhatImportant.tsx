import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/vendor-agreement/three.svg";

const WhatImportant = () => {
  return (
    <div id="WhatImportant">
        <p className="main-para">The following should be included in the vendor agreement as important clauses:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
             <p><strong>Service Area: </strong>The type of goods and services that the supplier or vendor is expected to provide, as well as the amount and quality of commodities that are bought from the vendor, should all be expressly stated in the vendor agreement.</p>
             <p><strong>Clause regarding payment or compensation: </strong>The payment schedule and means of payment (bank transfer, UPI, invoicing, etc.), the manner of payment (bulk or in milestones), and the duration of the payment should all be covered under the vendor agreement's payment provision. The clause should additionally state if interest is assessed for nonpayment of consideration in the event of a payment delay.</p>
             <p><strong>Clauses pertaining to duration and termination: </strong>The period of the agreement, or the length of the contract, during which the vendor will supply the company with goods and services, should be included in the vendor agreement. Although the agreements are typically for a set duration, they can be renewed after that time has passed. A termination clause allowing the vendor or the business owner to stop the agreement before the period expires should also be included in the agreement. The termination clause should outline the reasons for termination (breach of contract, failure to perform, etc.), the consequences of termination (e.g., the business owner must pay all outstanding amounts at the time of termination), and the provisions that remain in effect after termination (e.g., indemnity, confidentiality, and liability limitation).</p>
             <p><strong>Clause of confidentiality: </strong>Maintaining a secrecy provision is crucial. The owner may specify at the outset of the agreement which aspects of the parties' relationship must remain private. The agreement's terms and conditions, as well as the time frame for maintaining the information's confidentiality, should govern how the private information is handled and used. If the owner of the company thinks it appropriate, the parties may also sign a non-disclosure agreement.</p>
             <p><strong>Promise and Representation: </strong>A clause stating that the vendor promises to deliver the goods and services on time and with the necessary quality should be included in the representation and warranty agreement. In addition to ensuring that the service won't violate any third party's rights, the vendor should also assure that they are able to supply the goods or services.</p>
             <p><strong>Release and indemnity: </strong>A disclaimer provision that outlines the facts that include risks and limits liability should be included in the vendor agreement. The indemnity provision requires both parties to reimburse the other for any losses they suffered by conduct of others, including negligence, omissions, breach of duty and warranty and intellectual property rights infringement.</p>
             <p><strong>Liability limitation: </strong>The vendor's and the company owner's liability is restricted by the restriction of liability clause in the event of any payment breach (delay or non-payment) or deliverables breach (late delivery) resulting from the vendor's carelessness or fraud. The vendor will be responsible for covering any losses sustained by the company as a result of their actions.</p>
             <p><strong>Independent contractor: </strong>The most crucial clause in the vendor agreement should specify that the vendor is "Independent contractor" and not the company owner's employee. As a result, a vendor has no legal standing to act on behalf of the company owner.</p>
             <p><strong>Resolution of disputes: </strong>How can the provisions of the agreement be enforced in the case of a breach caused by any of the parties? Under such circumstances, the parties may specify in a Dispute Resolution clause how any divergence between the parties will be settled and what are the grounds to reach for amicable decision. This clause must specify the parties to the arbitration, including the name of the arbitrator or arbitrators, the arbitration's location and seat, the language in which the proceedings will be conducted, the applicable laws, and the court's jurisdiction.</p>
        </div>
        <div className="flex-3">
          <Image
            alt="What are the important clauses in a Vendor Agreement?"
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

export default WhatImportant;


