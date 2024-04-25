import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";
 
export const IssueCheque = () => {
  return (
    <div id="issue">

      
        <p className="main-para">In order to send out a cheque bounce notice to legal action, the following procedures must be completed</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1. </strong>Within 30 days of the cheque being dishonored, the payee must send a bounce notice to the defaulter via registered mail (or expedited post) acknowledging the amount owed. The reason for the cheque bounce, the amount, the date the cheque was deposited, the bounced date, the type of the transaction, and the request for payment within 15 days must all be included in the right format of the notice that a cheque has bounced.</p>
            <p><strong>2. </strong>The payee must file a criminal action in court within 30 days of the notice period expiring if the cheque defaulter does not make payment within 15 days of receiving a notice that the cheque has bounced. The court in the city where the cheque was presented is where complaints about cheque bounces must be lodged.</p>
            
            <p><strong>3. </strong>Under Section 138 of the Negotiable Instruments Act, the court will hear the matter after it is filed and issue summonses.</p>
            <p><strong>4. </strong>The person who failed to pay the cheque would then need to provide a surety and appear in court to settle the dispute</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Issue in cheque bounce notice to legal action"
            className="Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
