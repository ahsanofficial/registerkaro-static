import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/gst-cancellation-and-revocation/Reasons for Cancellation of GST Registration.svg";
interface HeroProps {
    cityName: string;
}
const ReasonsCancel = ({ cityName }: HeroProps) => {
  return (
    <div id="ReasonsCancel">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt="Reasons for Cancellation of GST Registration"
            className="Importance-img-h-100 w-100"
            height={650}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p>
            <strong>1. Migration to GST: </strong>Any person who was registered
            under any of the previous indirect tax laws had to migrate
            mandatorily to the GST. Such migrated taxpayers, who are not making
            any inter-state supplies, can request for cancellation. However the
            request can only be made after passing of one year from the date of
            registration.
          </p>
          <p>
            <strong>2. Cancellation by Taxpayer: </strong>In various cases such as
            closing, amalgamation and disposing off of business, cancellation
            can be requested by the taxpayer himself. However in cases of
            transfer of business the transferee shall be a registered person.
          </p>
          <p>
            <strong>3. Cancellation by GST Officer: </strong>In certain cases, an
            appropriate GST officer can also initiate cancellation process on
            the basis of following reasons:
            <div className="ps-5">
                <p><strong>a. </strong>Violation of anti-profit making provisions.</p>
                <p><strong>b. </strong>Declared place of business not being used to carry out business.</p>
                <p><strong>c. </strong>Issuing invoices without the delivery of goods or services.</p>
                <p><strong>d. </strong>Taxpayer didn’t file GSTR-1 due to non-filing of GSTR-3B for more than 2 regular months or one quarter for those who opted for QRMP scheme.</p>
                <p><strong>e. </strong>Usage of ITC from electronic credit ledger to discharge liability which is greater than 99 percent of the total tax liability by specified taxpayers.</p>
            </div>
          </p>
          <p><strong>4. By the Legal heirs to the taxpayer:</strong> Legal Heirs of the taxpayers can also request cancellation. However prior to cancelling the registration, he would be notified and he may within the stipulated time, respond and ask not to cancel the registration.</p>
        </div>
      
      </div>
    </div>
  );
};

export default ReasonsCancel;
