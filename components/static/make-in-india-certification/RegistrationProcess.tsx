import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const RegistrationProcess = () => {
  return (
    <div id="RegistrationProcess">
      <p className="main-para">Process :</p>
      <div className="RegistrationProcess flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p><strong>1. </strong>Details of the company like incorporation papers, annual turnover and other details need to be presented to show the necessary information about the company.</p>
          <p><strong>2. </strong>After the details and documentation, a break-up of the components of the raw materials used in the manufacturing of products of the company needs to be presented</p>
          <p><strong>3. </strong>Usage percentage of Indian materials, in the products of the company, which acts as the main component</p>
          <p><strong>4. </strong>Verified and complied documents related to the company like books of accounts and assurance that all the necessary compliance of the company are done on time</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Registration Process"
            className="RegistrationProcess-img w-100 Importance-img-h-100"
            height={275}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
