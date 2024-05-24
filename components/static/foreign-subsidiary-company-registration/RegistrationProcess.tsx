import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/foreign-subsidiary-company-registration/private (copy).svg";


export const RegistrationProcess = () => {
  return (
    <div id="RegistrationProcess">
        <p className="main-para">The registration process of a foreign subsidiary company in India is divided into several key steps to ensure compliance with the Companies Act, foreign exchange laws and other related laws. The breakdown of the process is as follows:</p>
      <div className="flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
          <ol>
            <li><strong>Pre-Registration Requirements:</strong>
                <ol>
                    <li>Submit a name approval application through the MCA portal by filling SPICe+ form. The name should be unique and should not be similar to existing companies. The name can include "India" to associate with the parent company.</li>
                    <li>Obtain DSC (Digital Signature Certificate) for all the proposed directors and DIN (Director Identification Number) for Indian directors.</li>
                </ol>
            </li>
            <li><strong>Filing of Incorporation Documents:</strong>
                <ol>
                    <li>File the incorporation application through the SPICe+ form along with the drafted MoA and AoA.</li>
                    <li>Pay the necessary stamp duty and Registrar of Companies (ROC) fees.</li>
                </ol>
            </li>
            <li><strong>Post-Incorporation Requirements:</strong>
                <ol>
                    <li>After verification of the submitted documents and information, the ROC issues the Certificate of Incorporation along with a Corporate Identification Number (CIN).</li>
                    <li>Opening of a bank account in the company's name, preferably with banks offering global banking solutions like HSBC.</li>
                    <li>Obtain a Permanent Account Number (PAN), Tax Deduction and Collection Account Number (TAN), and register for GST, EPFO, ESIC, and Professional Tax as applicable.</li>
                </ol>
            </li>
          </ol>
        </div>
        <div className="flex-4">
          <Image
            alt="Registration Process"
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
