import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/trademark-hearing/one.svg";

interface HeroProps {
  cityName: string;
}

const RecentDevelopments = ({ cityName }: HeroProps) => {
  return (
    <div id="RecentDevelopments">
      <p className="main-para">
      Trademark hearings in {cityName} are continuously evolving, with several recent developments and emerging trends we are discussing below:
      </p>
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <ol>
            <li><strong>Digitalization: </strong>The Trademarks Registry has implemented digital initiatives as hearing procedures also shall be done online to streamline filing procedures, reduce paperwork, and enhance accessibility.</li>
            <li><strong>Expedited Proceedings: </strong>An increase in Trademark applications aims to reduce backlog and improve efficiency in efforts to expedite trademark registration and hearing processes.</li>
            <li><strong>Enhanced Enforcement: </strong>Increased focus on enforcing trademark rights and combating counterfeiting through robust legal frameworks and enforcement mechanisms.</li>
            <li><strong>International Cooperation: </strong>To facilitate cross-border protection of trademarks and enforcement of rights, collaborative efforts with international organizations and agreements.</li>
          </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="Recent Developments and Emerging Trends"
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

export default RecentDevelopments;
