import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/indonesia-company-registration/Documents_to_carry_for_registrationprocess.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">You must have following documents if you are applying for the company registration in Indonesia:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
       
        <div className="flex-4 pt-5">
            <p><strong>1. </strong> Shareholder’s details [ list of their names, identity proof, documents stating their financial health, affidavit]</p>
            <p><strong>2. </strong> Director’’s details [ list of their names, identity proof, documents stating their financial health, affidavit]</p>
            <p><strong>3. </strong> Directors’ and shareholders’ passports [if foreign Nationals]</p>
            <p><strong>4. </strong> Acceptance copy from Ministry of law and Human Rights</p>
            <p><strong>5. </strong> Financial Documents of company showcasing financial health, and capital deposition</p>
            <p><strong>6. </strong> Memorandum of Association and Article of Association [if applicable]</p>
            <p><strong>7. </strong> Domicile Letter</p>
            <p><strong>8. </strong> Company Registered address along with proof [lease agreement, utility bills, etc]</p>
        </div>
        <div className="flex-5">
            <Image
              alt="Documents to carry for registration process"
              className="DocumentRequired-img w-100"
              height={700}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
      <p className="main-para"><strong>Note: </strong>Make sure that all the documents related to the company are notarized by the respective authority.</p>
    </div>
  );
};
