import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/legal-notice-for-defamation/three.svg";
interface HeroProps {
    cityName: string;
}
const CivilDefamation = ({ cityName }: HeroProps) => {
  return (
    <div id="CivilDefamation">
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <p>In Civil Defamation, the ingredients of the notice would differ from that of the ingredients of a Criminal Defamation. It acts as evidence in a court of law, that the party was made aware of the legal intent and the claimed damages. It may contain the remedy the aggrieved party is seeking for a resolution plan, a demand for apology or if there is an intent of settlement via negotiation.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Civil Defamation"
            className="Importance-img-h-100 w-100"
            height={320}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default CivilDefamation;
