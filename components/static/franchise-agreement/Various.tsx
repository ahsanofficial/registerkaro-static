import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/franchise-agreement/Various_laws_that_govern_a_Franchise_Agreement_in_India.svg";

interface HeroProps {
  cityName: string;
}

const Various = ({ cityName }: HeroProps) => {
  return (
    <div id="Various">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
        <Image
            alt="Various laws that govern a Franchise Agreement in India"
            className="Importance-img-h-100 w-100"
            height={550}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-5 pt-5">
            <ol>
                <li>Indian Contract Act.</li>
                <li>The Foreign Exchange Management Act, 1999 (FEMA).</li>
                <li>The Competition Act, 2002.</li>
                <li>Intellectual Property Laws.</li>
                <li>The Income Tax Act, 1961.</li>
                <li>The Arbitration and Conciliation Act, 1996.</li>
                <li>The Specific Relief Act, 1963.</li>
                <li>Trade secret Laws.</li>
                <li>The Information Technology Act, 2000.</li>
            </ol>
        </div>
       
      </div>
    </div>
  );
};

export default Various;


