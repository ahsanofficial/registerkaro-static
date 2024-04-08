import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/tds-return-filing/Check_the_deadlines.svg";
interface HeroProps {
    cityName: string;
}
const Deadlines = ({ cityName }: HeroProps) => {
  return (
    <div id="Deadlines">
        <p className="main-para">The deadline for TDS Return Filing for the current Fiscal Year tends to be the following:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <p><strong>Quarter 1:</strong> 31st July 2024</p>
            <p><strong>Quarter 2:</strong> 31st October 2024</p>
            <p><strong>Quarter 3:</strong> 31st Jan 2025</p>
            <p><strong>Quarter 4:</strong> 31st May 2025</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Check the deadlines"
            className="Deadlines-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Deadlines;


