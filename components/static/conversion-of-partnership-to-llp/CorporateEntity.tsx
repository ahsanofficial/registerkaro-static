import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/conversion-of-partnership-to-llp/Limited_Liability_Partnership_LLP_as_a_Corporate_Entity.svg";

interface HeroProps {
  cityName: string;
}

const CorporateEntity = ({ cityName }: HeroProps) => {
  return (
    <div id="CorporateEntity">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
                <p><strong>1. Incorporation and Corporate Status: </strong>A Limited Liability Partnership (LLP) is thereby constituting a distinct legal entity separate from its partners, established and registered under the provisions of the Limited Liability Partnership (LLP) Act,An LLP holds the status of a body corporate, thereby possessing the legal capacity to enter into contracts, sue or be sued, and conduct business operations in its name.</p>
                <p><strong>2. Perpetual Succession: </strong>An LLP enjoys perpetual succession, implying that its existence is not contingent upon the lifespan or changes in its partners. This feature ensures continuity in the LLP's operations and facilitates seamless transition even in the event of partner alterations.</p>
                <p><strong>3. Stability Amid Partner Changes: </strong>The alteration or replacement of partners within  LLP does not impact its continuity, rights, or obligations.  Irrespective of modifications in its partner composition, LLP maintains its distinct legal identity and continues to operate independently.</p>

        </div>
        <div className="flex-4">
        <Image
            alt="Limited Liability Partnership (LLP) as a Corporate Entity"
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

export default CorporateEntity;


