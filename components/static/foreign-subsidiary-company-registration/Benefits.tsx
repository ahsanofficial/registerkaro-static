import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/foreign-subsidiary-company-registration/Benefits of Registering a Foreign Subsidiary in India.svg";

interface HeroProps {
  cityName: string;
}

export const Benefits = ({ cityName }: HeroProps) => {
  return (
    <div id="Benefits">
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Benefits of Registering a Foreign Subsidiary in India"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-5">
          <ol>
            <li>
                India's high growth potential and the government's proactive approach towards improving the ease of doing business create a fertile ground for foreign companies. Registering a foreign subsidiary in {cityName} opens up a spectrum of advantages which are as follows:
                <ol>
                    <li><strong>Access to New Markets: </strong>India's vast consumer base offers a new horizon for products and services, enabling businesses to diversify and increase their revenue streams.</li>
                    <li><strong>Cost Efficiency: </strong>Establishing manufacturing facilities in {cityName} can significantly lower material and operational costs, thanks to the availability of affordable labor and resources.</li>
                    <li><strong>Innovation and Talent: </strong>Collaboration with Indian professionals introduces advanced technology and innovative thinking, enhancing the company's competitive edge.</li>
                </ol>
            </li>
            <li>
                Moreover, the regulatory environment in {cityName} supports foreign subsidiaries through:
                <ol>
                    <li><strong>Legal Entity Establishment: </strong>Provides operational autonomy and customization of products or services.</li>
                    <li><strong>Limited Liability Protection: </strong>Safeguards the parent company's assets, offering a secure investment climate.</li>
                    <li><strong>Strategic Alliances: </strong>Facilitates partnerships, enhancing credibility and market penetration.</li>
                </ol>
            </li>
          </ol>
        </div>
      </div>
      <p className="main-para">The blend of market access, cost efficiency, a skilled talent pool, and a supportive regulatory framework underscores the strategic advantage of registering a subsidiary company in {cityName}. This, coupled with incentives like free trade zones and tax benefits, makes {cityName} an attractive destination for foreign investment and business expansion.</p>
    </div>
  );
};
