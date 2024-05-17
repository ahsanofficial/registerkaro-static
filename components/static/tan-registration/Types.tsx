import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/tan-registration/what_is.svg";

interface HeroProps {
    cityName: string;
}
export const Types = ({ cityName }: HeroProps) => {
  return (
    <div id="Types">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt="TAN: What is it?,Necessity / Reason to appoint TAN"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p><strong>1. </strong>The Income Tax Department issues TANs, which stand for Tax Deduction Account Numbers or Tax Collection Account Numbers. The number is ten-digit alphanumeric.</p>
            <p><strong>2. </strong>Every assesse who is obligated to withhold TDS must apply for a TAN and include this number in all TDS payments, returns, and correspondence with the Income Tax Department on TDS.</p>
            <p><strong>3. </strong>In TDS/TCS certificates, TDS/TCS payment challans, and TDS/TCS returns (including any e-TDS/TCS Return), TAN must be quoted.</p>

            
        </div>
        
      </div>
    </div>
  );
};
