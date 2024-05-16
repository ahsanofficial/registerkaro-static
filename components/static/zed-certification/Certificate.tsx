import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/zed-certification/two.svg";

const Certificate = () => {
  return (
    <div id="Certificate">
      <p className="main-para">
        MSME Sustainable (ZED) Certification can be attained in THREE Levels
        after registering and taking the ZED Pledge
      </p>
      <div className="flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="ZED Certification Level"
            className="Importance-img-h-100 w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6 pt-4">
          <ol>
            <li><strong>Certification Level 1: </strong>BRONZE</li> 
            <li><strong>Certification Level 2: </strong>SILVER</li>
            <li><strong>Certification Level 3: </strong>GOLD</li>
          </ol>
          <ol>
            <li>Before submitting an application for a ZED Certification Level (Bronze, Silver, or Gold), every MSME that decides to embark on the ZED path must take the "ZED Pledge."</li>
            <li>MSMEs can obtain certification on WASH Standard and other capacity building measures through MSME KAWACH as soon as they take the ZED Pledge.</li>
            <li>The MSME may apply for any Certification Level after adopting the ZED Pledge if it believes it can meet the standards listed for that level. The purpose of the ZED Pledge is to encourage MSMEs to continue on the ZED path by asking them to accept a "pre-commitment" or a serious vow to follow the principles of Zero Defect Zero Effect in their operations.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
