import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/ijcepa-certification/Other Free Trade Agreements.png";

interface HeroProps {
  cityName: string;
}

export const FreeTradeAgreements = ({ cityName }: HeroProps) => {
  return (
    <div id="FreeTradeAgreements">
        <p className="main-para">{cityName} has enhanced its market access commitments for neighbouring service providers. These commitments provide companies with an opportunity to build market expertise and grow through international expansion. Under Free or Preferential Trade Agreements there are multiple options where the certificate of origin can be generated from {cityName} for import benefits to importing companies which are as follows:</p>
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <ol>
            <li><strong>ICPTA - </strong>India Chile Preferential Trade Agreement</li>
            <li><strong>SAFTA - </strong>South Asia Free Trade Agreement</li>
            <li><strong>SAPTA - </strong>SAARC Preferential Trade Agreement</li>
            <li><strong>IKCEPA - </strong>India Korea Comprehensive Economic Partnership Agreement</li>
            <li><strong>AIFTA - </strong>ASEAN India Free Trade Agreement</li>
            <li><strong>ISFTA - </strong>India Sri Lanka Free Trade Agreement</li>
            <li><strong>APTA - </strong>Asia Pacific Trade Agreement</li>
            <li><strong>GSP - </strong>Generalized System of Preferences</li>
            <li><strong>GSTP - </strong>Global System of Trade Preferences</li>
            <li><strong>IMCECA - </strong>India Malaysia Comprehensive Economic Cooperation Agreement</li>
            <li><strong>ISCECA - </strong>India Singapore Comprehensive Economic Cooperation Agreement</li>
          </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="Other Free Trade Agreements"
            className="Importance-img-h-100 w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
