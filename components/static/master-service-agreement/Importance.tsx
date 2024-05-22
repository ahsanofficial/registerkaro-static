import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/master-service-agreement/one.svg";

interface HeroProps {
  cityName: string;
}

export const Importance = ({ cityName }: HeroProps) => {
  return (
    <div id="Importance">
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Why MSA is important"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-5">
          <ol>
            <li>
              At its core, an MSA is an agreement between multiple parties that
              sets out the terms and conditions for current and future
              activities and responsibilities. MSAs help parties prepare for the
              future and expedite the approval of upcoming agreements by
              creating a contract framework for all future actions.
            </li>
            <li>
              A main objective of an MSA is to decrease conflicts by providing a
              clear outline of expectations between parties. It can also limit
              liability or cover costs if obligations are not met. Sometimes, it
              may include dispute resolution methods like mediation or
              arbitration. MSAs focus on legal details important to
              transactional lawyers, while subsidiary agreements are more
              beneficial to operational teams. A well-defined MSA can offer
              protection against unexpected risks in a service agreement.
            </li>
            <li>
              There is no specific rule on which entities are most suited for
              creating an MSA, but they are commonly used for software license
              agreements, privacy policies, third-party indemnification,
              managing private information, and possibly as an alternative to
              attorney fees. Attorneys dealing with MSAs need to fully
              understand the various aspects involved, as they can be complex
              and cover diverse transactions. It is common for a master
              agreement to encompass unrelated transactions, so comprehending
              the overall framework is crucial for attorneys in this area.
            </li>
            <li>
              An MSA can be used by parties in a service transaction to address
              common issues and avoid repetitive negotiations for future
              contracts. By establishing terms and conditions upfront, parties
              can save time and money by facilitating quicker negotiations for
              subsequent agreements. MSAs allow parties to focus on specific
              transaction details, like price and delivery, in future dealings.
              They also provide a framework for easily adjusting terms as needed
              to navigate evolving business landscapes and address emerging
              conflicts. MSAs are commonly utilized in the IT industry, but
              businesses of all sizes and in different sectors also use them for
              ongoing service provision.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
