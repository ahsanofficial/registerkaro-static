import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/fieo-registration/two.svg";

interface HeroProps {
  cityName: string;
}

export const Fieo = ({ cityName }: HeroProps) => {
  return (
    <div id="Fieo">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="Know More FIEO"
            className="Importance-img-h-100 w-100"
            height={260}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-6 pt-2 ps-5">
            <p className="ps-5">The primary goal of the organization is to promote international trade, while also providing support and representation for small businesses and exporters in foreign markets. Being a member of Registration will essentially authorize the company to participate in exports and benefit from existing trade policy incentives.
               The FIEO is consistently making efforts to enhance and broaden India's exports and market penetration. Entrepreneurs who register with FIEO can benefit from various opportunities like worldwide exposure and detailed guidance on crucial aspects of global trade, such as the Foreign Trade Policy.</p>
        </div>
      </div>
    </div>
  );
};
