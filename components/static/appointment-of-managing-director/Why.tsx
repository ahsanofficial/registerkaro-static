import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/appointment-of-managing-director/Eligibility_Criteria_for_the_Appointment_of_Managing_Director.svg";

export const Why = () => {
  return (
    <div id="WhyReg">
      <p className="main-para">The individual must meet the following criteria:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      
        
        <div className="flex-7 pt-4">
          <p><strong>1. </strong>Eligibility as per the Articles of Association.</p>
          <p><strong>2. </strong>Age requirement: Above 18 years.</p>
          <p><strong>3. </strong>Qualification as per Companies Act, 2013.No specific educational qualification is mandated by the Companies Act.</p>
          <p><strong>4. </strong>Consent of existing Board members.</p>
          <p><strong>5. </strong>Indian nationals, Non-Resident Indians (NRIs), and Foreign Nationals are eligible for directorship.</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Eligibility Criteria for the Appointment of Managing Director"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
