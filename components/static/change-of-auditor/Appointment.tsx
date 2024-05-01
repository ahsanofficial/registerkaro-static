import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Appointment = () => {
  return (
    <div id="Appointment">
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <ol>
            <li>The company's first auditor is appointed by the directors. They remain in office until the conclusion of the initial shareholder meeting where the accounts are presented to the members. During that meeting, the shareholders have the option to either re-appoint the current auditor or select a new one to serve until the next shareholders' meeting where accounts are presented.</li>
            <li>Private companies have the option to decide not to present accounts to the members at a general meeting by passing an 'elective resolution'. In case of completion, the auditor must be re-elected or a new one chosen at a subsequent meeting of the company's members within 28 days of the accounts distribution.</li>
            <li>Private firms can also choose to pass a resolution that exempts them from having to appoint an auditor annually. If that occurs, the current auditor continues to serve without any additional process until a decision is made to renew annual appointment or to dismiss them as auditor. The detailed process includes step-by-step explanations along with copies of all meeting minutes and notices in our documentation packet for the auditor appointment.</li>
          </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="Appointment of Auditor"
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

export default Appointment;