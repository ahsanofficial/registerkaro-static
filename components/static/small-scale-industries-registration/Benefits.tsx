import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/small-scale-industries-registration/Benefits_to.svg";
interface HeroProps {
    cityName: string;
}
const Benefits = ({ cityName }: HeroProps) => {
  return (
    <div id="Benefits">
        <p className="main-para">There are various types of benefits one can avail if the industry is registered under the Small Scale Industries, few of which are as follows:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>Low Interest Rates: </strong>The companies with SSI registration are offered low interest rates loan for the operations of industry which helps them to advance the growth and operations. The interest rate attracts entrepreneurs to start their business using the Banks’ assistance with monetary requirements.</p>
            <p><strong>Easy Loan access: </strong>It is made sure by the government to add such rules to the model that the budding entrepreneurs can avail loans for the business easily, which eventually promotes the setting up of Small Scale Industries.</p>
            <p><strong>Government Tender: </strong>Industries with SSI registration are given preferences in the allotment of government issued tenders which is another advantage to enjoy for such Industries.</p>
            <p><strong>Tax Benefits: </strong>Government keeps on regulating the taxation slabs and regimes for the Small Scale Industries to promote the practices and establishment of more and more industries in the country, as the increase in business enhances the country’s economy.</p>
            <p><strong>Special Schemes: </strong>There are many special schemes available for the entrepreneurs running small scale industries especially the women entrepreneurs promoting gender equality in the domain. </p>
        </div>
        <div className="flex-3">
        <Image
            alt="Benefits to avail under Small Scale Industries Registration"
            className="Benefits-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;


