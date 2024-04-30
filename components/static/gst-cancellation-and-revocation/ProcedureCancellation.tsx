import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const ProcedureCancellation = () => {
  return (
    <div id="ProcedureCancellation">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p>
            <strong>In case of Voluntary Cancellation: </strong>
            Registered persons desirous of cancelling the registration can make
            an application in the form <strong>GST REG-16</strong>. The following details need to
            be submitted along with the form— details of inputs, semi-finished
            or finished goods held in stock as of the date of application,
            liability thereof and details of the payment. Thereafter the proper
            officer in form <strong>GST REG-19</strong> issues the order of cancellation within
            30 days from the date of application. However, the cancellation will
            only be effective on the date determined by the officer, which will
            be notified to the concerned person.
          </p>

          <p>
            <strong>In case of Involuntary Cancellation: </strong>
            In case of involuntary cancellation the proper officer sends the
            show-cause notice in form <strong>GST REG-17</strong> and the concerned person has to
            reply to the notice in form <strong>GST REG-18</strong> within 7 days from the
            receipt of the notice. If in the opinion of the proper officer, the
            reply is found to be satisfactory, the proceedings will be dropped
            by passing an order in the form <strong>GST REG–20</strong>. However if the reply in
            the opinion of the proper officer is found to be unsatisfactory and
            liable to be cancelled then the order of cancellation will be
            issued, within 30 days from the date of receipt of the reply by the
            proper officer in form <strong>GST REG-19</strong>.
          </p>
        </div>
        <div className="flex-3">
          <Image
            alt=""
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

export default ProcedureCancellation;
