import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/petroleum-and-explosive-safety-organisation/Process of obtaining a licence.svg";
interface HeroProps {
    cityName: string;
}
export const Types = ({ cityName }: HeroProps) => {
  return (
    <div id="Types">
        
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-5">
          <Image
            alt="Process of obtaining a licence"
            className="Importance-img-h-100 w-100"
            height={500}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
            <p><strong> Documentation : </strong> The initial process of any registration process is documenting the entire process of what would be expected and adding the documents that are required for the registration. The detailed documents that are required for the registration process.</p>
            <p><strong> Submission of Application : </strong>An application containing sales numbers, client details and other important commercial data needs to be submitted to the PESO Authority.</p>
            <p><strong> Screening Process : </strong>Following the application submission, a screening process is conducted with the application being selected. The screening process will be passed if the documents are submitted properly and the application is filed properly.</p>
            <p><strong>Audit and Due Diligence :</strong>An audit is done for some products in order to check if they are in compliance with the instructions.</p>
            <p><strong>PESO Certification & Lisencing : </strong>After all the process is done successfully and in the manner prescribed then the PESO Certification would be granted, and also a licence would be handed to their Authorised Representative.</p>
        </div>
       
      </div>
    </div>
  );
};
