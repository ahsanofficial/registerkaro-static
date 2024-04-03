import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/psara-license/How_to_apply_for_PSARA_License.svg";

const HowApply = () => {
  return (
    <div id="HowApply">
        <p className="main-para">Step-by-step process to get PSARA License:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="How to apply for PSARA License?"
            className="HowApply-img w-100"
            height={600}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>1.  Document Organization:</strong> Gather all necessary documents and organize them systematically to ensure a smooth application process. Clear and legible documents related to registrations, as well as details of promoters and directors, are crucial to avoid discrepancies. Utilize the online portal for application submission, taking advantage of the e-signing feature for a seamless process.</p>
            <p><strong>2.  Memorandum of Understanding (MOU) with a Training Institute:</strong> Identify eligible training institutes on the https://psara.gov.in homepage and establish a Memorandum of Association (MOU) with a chosen institute. This collaboration enables the agency to provide effective training to its candidates, enhancing the quality of its workforce. Ex-servicemen may benefit from certain relaxations and exemptions related to agency training requirements.</p>
            <p><strong>3.  Application Filing:</strong> Complete all preceding steps before filing the application (Form-I) with the respective state authority for the PSARA License. Include Form-II for antecedent verification and accompany Form-III affidavit with Form-I.</p>
            <p><strong>4.  Police Verification:</strong> Following the application filing, police verification is initiated. In cases where the agency is a partnership or a company, directors must undergo police verification as part of the process.</p>
            <p><strong>5.  Grant of PSARA License:</strong> Upon submission, the authority reviews the application. If accompanied by a No Objection Certificate (NOC) from the police post-verification, the authority proceeds to either grant the PSARA License in Form-IV or reject the application based on the circumstances.</p>
        </div>
      
      </div>
    </div>
  );
};

export default HowApply;


