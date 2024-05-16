import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const MoreFacts = () => {
  return (
    <div id="MoreFacts">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p>
            <strong>1. </strong>An investor pitch deck should avoid containing
            an excessive quantity of text, data, or information. Get rid of the
            charts and graphs and instead, concentrate on delivering a brief,
            straightforward narrative about your present financial situation and
            what you are requesting.
          </p>
          <p>
            <strong>2. </strong>A presentation for potential investors should
            contain information on the proportion of the market you currently
            hold, your method for generating income, and a detailed explanation
            of how you plan to allocate funds. Provide information such as
            different pricing levels and estimated revenue forecasts, if
            relevant. Investors will be interested in understanding how their
            funding can contribute to the success of your idea.
          </p>
          <p>
            <strong>3. </strong>An effective investor pitch deck consists of a
            compelling hook, details on why your business is sustainable, and a
            robust revenue strategy. A successful presentation to investors is
            also brief and focused, allowing time for questions about their
            worries.
          </p>
          <p>
            <strong>4. </strong>Make sure to inform investors about your
            requirements. Instead of only requesting funding, make sure to
            outline your plans for how the money will be used. When you provide
            a rationale for your request, it assists in establishing credibility
            and shows investors that you are credible.
          </p>

          <p>
            <strong>5. </strong>Avoid repeatedly showing slides about your
            technology. Refrain from using cliched phrases like "If we capture
            one percent of the market, we will succeed" or "We will be first
            movers in the industry." The guidelines are relevant for various
            aspects of pitching while establishing your business as an
            entrepreneur, including generating sales, forming partnerships,
            recruiting staff, or persuading suppliers to work with you. Keep in
            mind, for a business owner.
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

export default MoreFacts;
