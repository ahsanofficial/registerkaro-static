import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/Tax-Consultancy-Services-for-Startups/GST Registration and Advisory Services.svg";
interface HeroProps {
    cityName: string;
}
export const Types = ({ cityName }: HeroProps) => {
  return (
    <div id="Types">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
       
        <div className="flex-7">
           <p>The Goods and Services Tax is a unified taxation system, it consolidates central taxes like Service Tax, Excise Duty and CST, along with state taxes such as Entertainment Tax, Luxury Tax, Octroi and VAT. In addition to this, taxpayers with a turnover of less than 1.5 crore rupees have the option to choose a composition scheme. This allows them to evade lengthy GST procedures and pay GST at a fixed rate based on their turnover.</p>
         
        </div>
        <div className="flex-4">
            <Image
              alt="GST Registration and Advisory Services"
              className="Importance-img-h-100 w-100"
              height={195}
              loading="lazy"
              src={dft}
            />
        </div>
        
      </div>
    </div>
  );
};
