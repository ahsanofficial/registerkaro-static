import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/nsdc-registration/two.svg";


export const NonFunded = () => {
  return (
    <div id="NonFunded">
        <p className="main-para">NSDC incorporates reputed entities with established credentials willing to be part of Skill India or Make in India Mission, without requiring funding. However, the proposals submitted must be robust, catering to sectors with high growth, unmet needs or unorganized sectors. They must be outcome-oriented and should focus on placement in industry, self-employment and entrepreneurship.</p>
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Non-Funded Affiliation"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-5">
          <ol>
            <li>Eligibility for Non-Funded Affiliation
                <ol>
                    <li>For-profit entities:
                        <ol>
                            <li>An entity with more than five years in operation with sustainable growth.</li>
                            <li>An entity listed on BSE/NSE for more than five years with sustainable growth and having a credit rating of A- and above, a separate TOR and due-diligence process may be applicable.</li>
                        </ol>
                    </li>
                    <li>Not-for-profit entities:
                        <ol>
                            <li>A not-for-profit entity that has more than five years of sustainable growth.</li>
                            <li>A not-for-profit entity already funded by the World Bank, ADB, MSDF, UNDP etc. or foundation/social ventures of large corporates. Separate TOR and due-diligence would be applicable.</li>
                        </ol>
                    </li>
                </ol>
            </li>
            <li>Training Outcome:
                <ol>
                    <li>A minimum of 2,000 persons over three years with a placement commitment of 70% (for-profit organisations)</li>
                    <li>A minimum of 5,000 persons over three years with a placement commitment of 70% (not-for-profit organisation)</li>
                    <li>On achieving 70% of the committed target, the partnership would be renewed automatically every year.</li>
                </ol>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
