import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/hallmark-registration/benefits.svg";
interface HeroProps {
    cityName: string;
}
const Benefits = ({ cityName }: HeroProps) => {
  return (
    <div id="Benefits">
      <div className="benefits flex w-80 m-auto mobile-flex-column">

      <div className="flex-4">
        <Image
            alt="Benefits of Hallmarked Gold"
            className="Benefits-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-5">
            <p><strong>1 : </strong>Mandatory hallmarking of gold jewellery provides much-needed assurance to buyers about their quality</p>
            <p><strong>2 : </strong>It ensures higher exchange or resale value because quality standardization always leads to price parity. This increase the trading of gold articles.</p>
            <p><strong>3 : </strong>Buyers receive the necessary legal protection. Hallmarked gold/silver ensures they don’t get caught in fraud.</p>
            <p><strong>4 : </strong>By selling hallmarked jewellery, retailers lay the base of sustainable businesss growth.</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;


