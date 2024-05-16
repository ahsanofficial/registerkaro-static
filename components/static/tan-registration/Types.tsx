import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/tan-Registration/one.svg";

export const Types = () => {
  return (
    <div id="Types">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-5">
          <Image
            alt="Necessity / Reason to appoint TAN"
            className="Importance-img-h-100 w-100"
            height={340}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-6">
            <p>The Income Tax Department issues TANs, which stand for Tax Deduction Account Numbers or Tax Collection Account Numbers. The number is ten-digit alphanumeric.</p>
            <p>Every assesse who is obligated to withhold TDS must apply for a TAN and include this number in all TDS payments, returns, and correspondence with the Income Tax Department on TDS.</p>
            <p>In TDS/TCS certificates, TDS/TCS payment challans, and TDS/TCS returns (including any e-TDS/TCS Return), TAN must be quoted.</p>

            
        </div>
        
      </div>
    </div>
  );
};
