import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/master-service-agreement/two.svg";

const ThingsInMSA = () => {
  return (
    <div id="ThingsInMSA">
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-4">
          <ol>
            <li>
              A party's involvement in a transaction can lead to liability for
              various reasons, such as breach of contract, negligence,
              misrepresentation, or infringement of IP rights. Limiting
              liability can help parties manage risk by setting a cap on the
              amount of compensation one party can seek in a contract lawsuit.
            </li>
            <li>
              A contact person is an organization's official with the power to
              act on behalf of the business in transactions, exchanging
              information and receiving deliverables in an MSA.
            </li>
            <li>
              In a service transaction, parties must address IP concerns by
              determining the use of existing IP rights, granting licenses, and
              establishing ownership of created IP. For example, a client may
              want to own IP rights in a project, or obtain a license if the
              service provider owns it. An indemnification clause can also be
              included to protect against third-party IP infringement.
            </li>
            <li>
              A breakdown in communication can result in misalignment within an
              MSA. For instance, when one party asks for a project update and
              the other party doesn't respond promptly. Designating a contact
              person can prevent this issue.
            </li>
            <li>
              Many Metropolitan Statistical Areas oversee service provision.
              Defects in products may make them inadequate for client
              requirements, resulting in financial losses. For instance, hiring
              a web design firm to create a site would be disappointing if it
              cannot handle your business's usual web traffic.
            </li>
            <li>
              One project can have multiple deadlines, so parties may divide it
              into milestones with individual deadlines for each. There are
              separate deadlines for project completion, product supply, and
              payment. Missing a payment deadline can lead to service
              termination, while missing a project delivery deadline can harm
              the client's business. Using contract management software can help
              avoid missing deadlines due to human error.
            </li>
            <li>
              Involved in a Master Service Agreement (MSA) utilize Service Level
              Agreements (SLAs) to outline specific terms of individual projects
              such as prices, quality, and deadlines. Multiple SLAs can be
              included in a single MSA, governing project-specific aspects not
              covered by the MSA itself. Conflicts may arise when terms in the
              MSA clash with those in the SLA, with the MSA usually taking
              precedence, although this isn't always guaranteed. Disagreements
              can ensue between parties due to conflicts like differing dispute
              resolution methods outlined in the MSA and SLA.
            </li>
            <li>
              An MSA is meant to outline each party's duties. Unclear
              responsibilities can lead to contract breaches due to vague terms,
              resulting in MSA conflicts. Parties must agree on tool provision,
              tax payment, and post-delivery support, to avoid disputes over
              unforeseen circumstances not covered in the contract.
            </li>
            <li>
              Payment terms in an MSA specify how and when parties will make
              payment, and any necessary approvals for payment. Failure to make
              timely payments can lead to disputes between parties in an MSA due
              to delays in receiving payment for products or services provided.
            </li>
          </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="Things to be Present in MSA"
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

export default ThingsInMSA;
