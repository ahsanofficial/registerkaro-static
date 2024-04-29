import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const CertificationProcess = () => {
  return (
    <div id="CertificationProcess">
      <div className="flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="ZED Certification Process"
            className="Importance-img-h-100 w-100"
            height={380}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6">
          <ol>
           <li>Following the ZED Pledge, a small and medium-sized enterprise (SME) may apply online for any of the three Certification Levels (Bronze, Silver, or Gold). To be eligible for a Certification, a SME must meet all requirements of the level applied for.</li>
           <li>Each SME starting the ZED journey is required to submit an Undertaking.</li>
           <li>Should there be a non-conformity, the applicant SME will have a period of time to close the non-conformity and be eligible for the desired level/Certification.</li>
           <li>The ZED Certificate will be issued based on the conclusions and recommendations of the Accredited Assessment Agencies. </li>
          </ol>
        </div>
      </div>
      <p className="main-para">The Ministry of SME reserves the right to visit and inspect any SME after Certification that has benefited from any subsidies, benefits, or incentives offered by this Scheme.</p>
    </div>
  );
};

export default CertificationProcess;
