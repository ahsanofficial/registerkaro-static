import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/tan-registration/important.svg";

export const ProcessCompany = () => {
  return (
    <div id="processcompany">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="TAN Registration"
            className="Importance-img-h-100 w-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div>
        
        <div className="flex-7">
            <p>The procedure by which qualified organizations apply for and receive a TAN is known as TAN Registration. After registering, the organization is able to lawfully withhold or collect taxes at the source and send them to the government. The TAN must also be referenced in all TDS/TCS transactions, returns, and other compliance papers, according to this Registration.</p>
            <p>When doing tax-related activities, companies risk fines for non-compliance if they do not have a valid TAN. It streamlines tax administration throughout the nation by ensuring that the Income Tax Department can effectively track and manage tax revenues and deductions.</p>

          

        </div>
        
      </div>
    </div>
  );
};