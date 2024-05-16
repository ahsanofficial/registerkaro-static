import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/environmental-auditing/Process_of_Environmental.svg";

export const ProcessEnvironment = () => {
  return (
    <div id="processenvironment">
        <p className="main-para">The steps that are involved in the environemntal audits are:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column ">
        
      <div className="flex-5">
          <Image
            alt="Process of Environmental Audit"
            className="Importance-img-h-100 w-100"
            height={400}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-6 pt-5">
            <p><strong>1. </strong>Describing the business and the industry of the business</p>
            <p><strong>2. </strong>Audit the place of business, </p>
            <p><strong>3. </strong>Employees/Staff opinions and interviews</p>
            <p><strong>4. </strong>Fomalities and procedure of the audit as directed</p>
            <p><strong>5. </strong>Inspection of the business</p>
            <p><strong>6. </strong>Arrangements made for the business projects to be carried out.</p>
            
        </div>
        
      </div>
    </div>
  );
};