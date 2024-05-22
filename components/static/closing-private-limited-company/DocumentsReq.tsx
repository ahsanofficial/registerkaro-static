import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/closing-private-limited-company/DOCUMENTS REQUIRED.svg";

interface HeroProps {
  cityName: string;
}

const DocumentsReq = ({ cityName }: HeroProps) => {
  return (
    <div id="DocumentsReq">
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-4">
         <ol>
            <li>A board resolution that sanctions the company’s closure and designates a liquidator.</li>
            <li>The articles of association, outlining the stipulations for winding up and liquidation.</li>
            <li>A notification of the liquidator’s appointment, endorsed by the company’s directors.</li>
            <li>A solvency declaration, signed by all directors, affirming the company’s ability to settle its debts completely within a reasonable timeframe.</li>
            <li>A comprehensive list of the company’s creditors, detailing their addresses and outstanding debts.</li>
            <li>A statement of the company’s financial status, crafted by the liquidator, illustrating its assets and liabilities as of the winding-up date.</li>
            <li>The final accounts of the company, compiled by the liquidator, covering the period from the commencement of winding up until its conclusion.</li>
         </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="Documents Required"
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

export default DocumentsReq;