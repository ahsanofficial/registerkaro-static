import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/zed-certification/one.svg";

interface HeroProps {
    cityName: string;
}
export const Objectives = ({ cityName }: HeroProps) => {
  return (
    <div id="Objectives">
      <p className="main-para">
      The ZED Certification aims at strengthening the competitiveness of an organization by guidance, assessment, handholding, managerial, modification, technological intervention and not just certification. Few objectives of ZED Certification are:
      </p>
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Objectives of ZED Certificate"
            className="Importance-img-h-100 w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 align-items-center">
         <ol>
          <li>Encourage and enable Micro, Small & Medium Enterprises (MSME) for assembling & manufacturing of good quality products using latest technology, tools & to constantly upgrade their processes for achieving optimum result with the least effect on the environment.</li>
          <li>Promote adoption of Zero Defect Zero Effect practices & recognizing the efforts of Successful MSMEs.</li>
          <li>Increasing public awareness on demanding Zero Defect & Zero Effect products through the MSMEs.</li>
          <li>Create and expand an Ecosystem for ZED Manufacturing in MSMEs, for enhancing competitiveness and enabling exports.</li>
          <li>Determine what needs to be improved in order to support the government in setting priorities for investments and policies.</li>
         </ol>
        </div>
      </div>
    </div>
  );
};
