import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/revival-of-struck-off-companies/Benefits.svg";
interface HeroProps {
    cityName: string;
}
const Benefits = ({ cityName }: HeroProps) => {
  return (
    <div id="Benefits">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-5">
        <Image
            alt="Benefits to Activate Struck Off Company"
            className="Benefits-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-4 pt-5">
            <p><strong>1. </strong>Continue operations with the existing entity.</p>
            <p><strong>2. </strong>Cost effective</p>
            <p><strong>3. </strong>Can use the existing brand name for marketing & advertisement purpose.</p>
            <p><strong>4. </strong>Continue operations with the existing setup</p>
        </div>
       
      </div>
    </div>
  );
};

export default Benefits;


