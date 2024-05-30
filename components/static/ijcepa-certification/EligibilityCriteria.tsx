import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/ijcepa-certification/Eligibility Criteria for the IJCEPA Certificate.svg";

interface HeroProps {
  cityName: string;
}

export const EligibilityCriteria = ({ cityName }: HeroProps) => {
  return (
    <div id="EligibilityCriteria">
        <p className="main-para">To qualify for the Comprehensive Economic Preferential Agreement between India and Japan, goods must meet the following criteria:</p>
      <div className="flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Eligibility Criteria for the IJCEPA Certificate"
            className="Importance-img-h-100 w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-5">
          <ol>
            <li>Goods entirely obtained or produced in either India or Japan:
                <ol>
                    <li>This includes live animals born and raised in India or Japan, obtained through hunting, trapping, fishing, gathering, or capturing.</li>
                    <li>It also covers goods obtained from live animals, plants, plant products, minerals, and other naturally occurring substances harvested, picked, gathered, or extracted in India or Japan.</li>
                    <li>Goods derived from sea-fishing activities outside the territorial seas of both countries, goods produced on board factory ships outside these seas, and goods extracted from the sea-bed or subsoil beneath it outside the territorial sea, in accordance with the UN convention on the law of the sea.</li>
                    <li>Articles collected in India or Japan that can no longer serve their original purpose and are suitable only for disposal or recovery of parts or raw materials, including scrap and waste from manufacturing, processing, or consumption.</li>
                    <li>Parts or raw materials recovered in India or Japan from articles that can no longer function as intended and cannot be repaired or restored.</li>
                    <li>Goods produced in India or Japan exclusively from materials meeting the above criteria.</li>
                </ol>
            </li>
            <li>For goods not entirely obtained or produced in India or Japan to qualify, they must meet these requirements:
                <ol>
                    <li>Have a value content of at least 35%.</li>
                    <li>All non-originating materials used in production must undergo a change in tariff classification at the 6-digit level of the harmonised system in either India or Japan.</li>
                </ol>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
