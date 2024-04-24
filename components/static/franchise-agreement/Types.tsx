import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Types = () => {
  return (
    <div id="Types">
      <p className="main-para">
        Let's understand the descriptions of these different types of franchise
        agreements:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4 align-content-center">
          <Image
            alt="Types of companies for Company Registration in Qatar"
            className="Importance-img-h-100 w-100"
            height={400}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
          <p>
            <strong>1. Single Unit Franchise Agreement:</strong>A Single Unit
            Franchise Agreement establishes a relationship solely between the
            franchisor and the franchisee. It allows the latter to operate a
            single unit of the franchise at a designated location. This is
            suitable for small businesses seeking to expand their presence
            within a specific area. It offers a streamlined and cost-effective
            approach to franchising for smaller enterprises.
          </p>
          <p>
            <strong>2. Multi-Unit Franchise Agreement:</strong>A Multi-Unit
            Franchise Agreement grants the franchisee the right to operate
            multiple franchise units without geographical limitations. This
            agreement provides the franchisee with greater autonomy and
            flexibility in expanding their business operations compared to the
            Single Unit Franchise Agreement.
          </p>
          <p>
            <strong>3. Area Development Franchise Agreement</strong>
            An Area Development Franchise Agreement permits the franchisee to
            establish and operate multiple franchise units within a defined
            geographical area for a specified duration. While the franchisee
            enjoys the freedom to expand within the designated territory, this
            agreement imposes restrictions on both the area and timeframe,
            fostering strategic growth and market penetration within the
            specified region.
          </p>
          <p>
            <strong>4. Master Franchise Agreement:</strong>
            Under a Master Franchise Agreement, the master franchisee is granted
            the authority by the franchisor to sub-franchise within a
            predetermined territory. The master franchisee acts as an
            intermediary, facilitating the establishment of franchise units by
            sub-franchisees within the specified area. Sub-franchisees operate
            under the guidance and supervision of the master franchisee, who
            effectively assumes the role of a franchisor within the designated
            territory.
          </p>
        </div>
      </div>
    </div>
  );
};
