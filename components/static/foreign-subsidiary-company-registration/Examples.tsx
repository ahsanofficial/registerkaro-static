import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/foreign-subsidiary-company-registration/two.svg";


export const Examples = () => {
  return (
    <div id="Examples">
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Examples of Some Foreign Subsidiary Companies in India"
            className="Importance-img-h-100 w-100"
            height={280}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-5">
          <p>
            There are several foreign subsidiary companies operating in India, such as Amazon India, Google India, Microsoft India, Samsung India Electronics Pvt. Ltd, IBM India Private Limited, and McDonald's India. These are just a few examples of multinational companies with subsidiaries in India. Many more foreign companies have established subsidiaries in India across different industries and sectors, showcasing the diverse presence of international businesses in the country.
          </p>
        </div>
      </div>
    </div>
  );
};
