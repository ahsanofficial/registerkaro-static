import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/conversion-of-partnership-to-llp/one.svg";

const WhatIs = () => {
  return (
    <div id="WhatIs">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p>
            A franchise is an agreement that grants the franchisee the right{" "}
          </p>
          <ol>
            <li>to sell or manufacture goods, </li>
            <li>provide services, or </li>
            <li>undertake any process identified with the franchisor</li>
          </ol>
          <p>
            whether or not a trademark, service mark, trade name, or logo, is
            involved.
          </p>
          <p>
            Several examples utilize franchise agreements to expand their
            operations. Here are some examples across various industries like
            Fast Food Chains, Retail Stores, Hospitality and Lodging, Fitness
            Centers, Automotive Services, Real Estate Services, Education and
            Tutoring, Cleaning and Maintenance Services that use franchise
            agreements to expand their service offerings across regions.
          </p>
        </div>
        <div className="flex-4">
          <Image
            alt="What is a Franchise Agreement?"
            className="Importance-img-h-100 w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIs;
