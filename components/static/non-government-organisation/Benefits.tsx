import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
        <p className="main-para">NGOs may operate under various legal structures, including trusts, societies, and Section 8 of the Companies Act. Each structure has its own set of regulations and requirements, governed primarily by:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      <div className="flex-4">
          <Image
            alt="Legal Framework for NGOs In india"
            className="Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
           <p><strong> Indian Trusts Act, 1882:</strong> It regulates the formation and administration of public trusts.</p>
           <p><strong>Societies Registration Act, 1860:</strong>   It governs the registration and functioning of societies engaged in charitable activities.</p>
           <p><strong> Companies Act, 2013: </strong> It provides for the establishment of it under Section 8 companies, primarily for promoting charitable objectives.</p>
        </div>
        
      </div>
    </div>
  );
};
