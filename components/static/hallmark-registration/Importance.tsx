import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/hallmark-registration/important.svg";
interface HeroProps {
    cityName: string;
}
const Importance = ({ cityName }: HeroProps) => {
  return (
    <div id="Importance">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <p><strong>1 : </strong>It rapidly boosts your business;</p>
            <p><strong>2 : </strong>It gives quality assurances to jewellery products;</p>
            <p><strong>3 : </strong>It provides customers satisfaction and builds trust among customers;</p>
            <p><strong>4 : </strong>This Certification adds value to the precious stone & trust in jewellery;</p>
            <p><strong>5 : </strong>Provide legal protection against any violation.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Importance of Hallmark Registration Certification"
            className="Importance-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Importance;


