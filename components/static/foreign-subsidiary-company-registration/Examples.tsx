import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/foreign-subsidiary-company-registration/Examples of Some Foreign Subsidiary Companies in India.svg";

interface HeroProps {
  cityName: string;
}

export const Examples = ({ cityName }: HeroProps) => {
  return (
    <div id="Examples">
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <p>
            There are several foreign subsidiary companies operating in {cityName}, such as Amazon {cityName}, Google {cityName}, Microsoft {cityName}, Samsung {cityName} Electronics Pvt. Ltd, IBM {cityName} Private Limited, and McDonald's {cityName}. These are just a few examples of multinational companies with subsidiaries in {cityName}. Many more foreign companies have established subsidiaries in {cityName} across different industries and sectors, showcasing the diverse presence of international businesses in the country.
          </p>
        </div>
        <div className="flex-4">
          <Image
            alt="Examples of Some Foreign Subsidiary Companies in India"
            className="Importance-img-h-100 w-100"
            height={280}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
