import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/wpc-certificate/what_is.svg";
interface HeroProps {
  cityName: string;
}
export const Types = ({ cityName }: HeroProps) => {
  return (
    <div id="Types">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="What is WPC certificate?"
            className="Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
            <p className="pt-3"><strong>1. </strong>Wireless Planning and Coordination is referred to as WPC. WPC is in charge of managing frequency spectrum; it was founded in 1952 as a branch of the Ministry of Communications. The WPC has regional offices in Mumbai, Chennai, Kolkata, Guwhati, and New Delhi.</p>
            <p className="pt-3"><strong>2. </strong>The Ministry of Communications and Information Technology's WPC Wing division is in charge of assigning frequency spectrum, granting amateur radio licenses, holding tests, and keeping an eye on radio waves.</p>
            <p className="pt-3"><strong>3. </strong>It is also in charge of providing wireless certifications, such the WPC ETA certificate.</p>

        </div>
       
      </div>
    </div>
  );
};
