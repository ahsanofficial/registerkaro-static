import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/memorandum-of-understanding-mou/Why_do_youneed_Memorandum_of_Understanding.svg";
interface HeroProps {
  cityName: string;
}
const NeedMemorandum = ({ cityName }: HeroProps) => {
  return (
    <div id="NeedMemorandum">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p>
            <strong>Legal Relationship establishment: </strong>
            Understanding one another’s aims and objectives is crucial in every
            commercial transaction. An MOU can be a tremendous benefit to your
            company partnerships, even though it might be challenging at times.
            Dealings are prone to fail without clear terms and adequate
            communication. This is the main advantage of an MOU. Parties might
            just lay out what they expect and what they require. This will thus
            create a shared goal for next interactions.
          </p>

          <p>
            <strong>Written record: </strong>
            During the negotiating process, it is common for two or more parties
            to agree on specific terms that will eventually be included in the
            final contract. What occurs, then, if one of the parties retracts or
            forgets these terms? A MOU is useful in this situation. The document
            is helpful since it documents the agreements reached during
            discussions, even if it is not legally binding. As a result, this
            gives the parties a clear knowledge of their shared goals. A MOU is
            also advantageous since it allows parties to exchange private
            information in a secure manner. This document is especially helpful
            for forming partnerships.
          </p>

          <p>
            <strong>Evidence purpose: </strong>
            MoU or Memorandum of Understanding also performs the role of
            establishing the evidences in terms of unexpected and unfortunate
            circumstances to be occurred in furtherance of the business
            relationship established. This brings the parties a set of certainty
            in terms of authenticated legal status to the mutual consent
            attained between the parties.
          </p>

          <p>
            <strong>Lack of uncertainty: </strong>
            Sometimes, business talks can be difficult and unpredictable. When
            the parties’ relationship is just getting started, they may be
            especially unclear. Disagreement regarding contract conditions with
            your company partner is the worst thing ever. Therefore, MOUs offer
            a strong defence against the possibility of unclear goals and
            expectations. This is especially helpful in business partnerships
            and relationships where there is a long-term commitment.
            Disagreements between the parties can be avoided by clearly defining
            prospects and goals at the early stages of discussions.
            Additionally, it can lessen the possibility of ambiguity while
            creating the official contract. This is so because the parties have
            already outlined and approved the suggested parameters.
          </p>

          <p>
            <strong>Stipulated framework: </strong>
            When a project is difficult or takes a long time to complete, it can
            be intimidating for even seasoned organisations to engage into a
            formal contract. An MOU might therefore soothe your worries. A
            precedent document outlining the proposed terms offers a structure
            for subsequent negotiations. The future contract may be built upon
            the terms of the MOU. If there is any confusion, it can also be
            resorted to as a reminder of the parties’ goals and intents. It’s
            usually better to err on the side of caution in intricate or
            dangerous situations. Parties are guaranteed to be in agreement when
            a formal document is provided beforehand.
          </p>
        </div>
        <div className="flex-4 align-content-center">
          <Image
            alt="Why do you need Memorandum of Understanding"
            className="NeedMemorandum-img w-100"
            height={680}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default NeedMemorandum;
