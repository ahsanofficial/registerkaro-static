import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";


export const WhoCan = () => {
  return (
    <div id="WhoCan">
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Who Can be Secretarial Auditor and Scope of the Auditor"
            className="Importance-img-h-100 w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-5">
          <p>As per Section 204, only a Company Secretary in India who is a member of the Institute and holds a Certificate of Practice (PCS) is eligible to perform a secretarial audit for the company.</p>
          <p>The appointment of a Secretarial Auditor is necessary and should be done by the Company's Board of Directors during a Board Meeting.</p>
          <p>Compensation can also be determined by the Board of Directors during the Board meeting. It is necessary to submit a Certified True Copy of the Resolution approved in the Board Meeting to the Registrar of Companies through e-form MGT-14 within 30 days of passing the resolution. When a new secretary auditor replaces the current one, they must notify the former auditor in writing via registered mail. The company should consider appointing a Secretarial Auditor at the start of the financial year as Secretarial Audit involves monitoring compliances regularly.</p>
          <p>To offer direction to company directors regarding their duties, responsibilities, and authority. To secure the company's financial records and necessary documentation while conducting their audit. To obtain details and clarification from the company's officers regarding diverse transactions. For the Company to ensure adherence to a range of laws, rules, and regulations, it is important for detecting instances of non-compliance.</p>
          <p>It gives a sense of assurance to the Company's Directors and Key Managerial Personnel. It enhances the company's reputation. Timely compliances reduce the regulators' workload. To verify and communicate about adherence. To implement corrective actions for violations. To protect the interests of the company's directors and investors. To stop unjustified legal actions by law enforcement agencies.</p>
        </div>
      </div>
    </div>
  );
};
