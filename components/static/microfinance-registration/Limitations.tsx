import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/microfinance-registration/three.svg";
interface HeroProps {
    cityName: string;
}
const Limitations = ({ cityName }: HeroProps) => {
  return (
    <div id="Limitations">
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6">
          <ol>
            <li><strong>Risk of Exploitation: </strong>Wealthier community members may exploit poorer neighbors, undermining trust and social capital within microfinance programs.</li>
            <li><strong>Fluctuating Savings: </strong>Poor individuals may struggle to save consistently due to unexpected expenses, leading to variable savings and potential financial instability.</li>
            <li><strong>Inflation Risks: </strong>Inflation can erode saved funds, disadvantaging savers while potentially benefiting lenders or collectors.</li>
            <li><strong>Challenges in Replication: </strong>Successfully replicating models like the Grameen Bank is challenging in regions with lower population densities due to higher operating costs and logistical difficulties.</li>
            <li><strong>Need for Local Funds: </strong>Microfinance programs should ideally rely on local funds for sustainability and community relevance.</li>
          </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="Limitations of Microfinancing"
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

export default Limitations;
