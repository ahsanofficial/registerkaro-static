import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/foreign-subsidiary-company-registration/Understanding Foreign Subsidiary Company Registration.svg";

interface HeroProps {
  cityName: string;
}

export const Understanding = ({ cityName }: HeroProps) => {
  return (
    <div id="Understanding">
        <p className="main-para">India's burgeoning market, characterized by its vast consumer base, low-cost labour, and skilled workforce, presents a lucrative opportunity for foreign companies. The strategic location and favourable business environment further accentuate India's appeal as an investment destination. Here’s a breakdown of key considerations for establishing a foreign subsidiary company in {cityName}:</p>
        <Image
            alt="Understanding Foreign Subsidiary Company Registration"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
      <div className="flex w-80 m-auto">
        <div className="flex-7">
          <ol>
            <li>
                <strong>Types of Subsidiary Structures:</strong>
                <ol>
                    <li>Private Limited Companies</li>
                    <li>Public Limited Companies</li>
                    <li>Limited Liability Partnerships (LLPs)</li>
                </ol>
            </li>
            <li>
                <strong>Operational Aspects:</strong>
                <ol>
                    <li>A subsidiary operates as a separate legal entity, adhering to the laws of its incorporation country.</li>
                    <li>The parent company must hold more than 50% of the subsidiary's shares to exercise control.</li>
                    <li>Options include Wholly Owned Subsidiaries (WOS), Joint Ventures (JV), or LLPs.</li>
                </ol>
            </li>
          </ol>
        </div>
      </div>
      <p className="main-para pt-5">Understanding the diverse subsidiary structures and their respective benefits is crucial for foreign entities which are aiming to navigate India's dynamic market landscape successfully.</p>
    </div>
  );
};
