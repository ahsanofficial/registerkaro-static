import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/vendor-agreement/two.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">Depending upon the requirements of the company and the nature of the activities, there are many types of Vendor Agreement:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
            <Image
              alt="What are the types of Vendor Agreement?"
              className="Importance-img-h-100 w-100"
              height={400}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-7">
        <p><strong>1. Fixed Price Contract: </strong>In this type of agreement, the buyer and seller agree on a fixed price for a clearly defined good or service, regardless of market fluctuations or delays.</p>
        <p><strong>2. Cash Reimbursable Contract: </strong>The parties acknowledge that the seller will receive payment for any work completed in connection with the fulfillment of the Agreement in addition to the standard price.        </p>
        <p><strong>3. Materials and Time Contract: </strong>The buyer and seller agree on the period and hourly rate. Usually used to describe independent contractors, such as third-party suppliers, consultants, and freelancers.</p>
        <p><strong>4. Letter Subcontract: </strong>A portion of the job, usually less than 40%, is subcontracted because of ambiguous contract requirements or intricate projects with lots of moving parts.</p>
        <p><strong>5. Indefinite Delivery Contract: </strong>Depending on the buyer's needs, the parties agree to a flexible agreement with an arbitrary amount of goods or an arbitrary term of service. It functions best in situations where multiple tasks are ongoing at once.</p>
        <p><strong>6. Distribution Agreement Contract: </strong>outlines the terms and conditions, including where, when, and how, under which a vendor's goods are to be distributed. It also makes clear whether or not the relationship is exclusive.</p>

        </div>
      </div>
    </div>
  );
};
