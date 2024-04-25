import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const DocumentReq = () => {
  return (
    <div id="DocumentReq">
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="List of documents required for SAFTA Licence registration."
            className="Importance-img-h-100 w-100"
            height={380}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6">
          <ol>
            <li>
              <strong>Application Form: </strong>Completed application form for
              SAFTA registration.
            </li>
            <li>
              <strong>Proof of Identity: </strong>Valid identification documents
              of the exporter, such as PAN card, Aadhaar card, passport, etc.
            </li>
            <li>
              <strong>Proof of Address: </strong>Address proof of the exporter,
              such as utility bills, lease agreements, or property documents.
            </li>{" "}
            <li>
              <strong>Import-Export Code (IEC): </strong>Copy of the
              Import-Export Code (IEC) issued by the Director-General of Foreign
              Trade (DGFT).
            </li>
            <li>
              <strong>Bank Certificate: </strong>Certificate from the exporter's
              bank confirming details of the exporter's bank account.
            </li>
            <li>
              <strong>Registration Certificate: </strong>Certificate of
              registration of the business entity (e.g., partnership deed,
              memorandum of association, articles of association).
            </li>
            <li>
              <strong>Invoice: </strong>Invoice of the goods to be exported,
              indicating details such as description, quantity, value, etc.
            </li>
            <li>
              <strong>Bill of Lading/Airway Bill: </strong>Document evidencing
              the shipment of goods, issued by the carrier (bill of lading for
              sea shipments, airway bill for air shipments).
            </li>
            <li>
              <strong>Packing List: </strong>List detailing the contents and
              packaging of the exported goods.
            </li>
            <li>
              <strong>Certificate of Origin: </strong>Certificate confirming the
              origin of the goods, issued by the relevant authority in India.
            </li>
            <li>
              <strong>Other Supporting Documents: </strong>Any additional
              documents requested by the authorized agency or specific to the
              nature of the exported goods.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DocumentReq;
