import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-5">
            <Image
              alt="Documents required for Company registration"
              className="DocumentRequired-img w-100"
              height={350}
              loading="lazy"
              src={dft}
            />
          </div>
       
       <div className="flex-4 pt-5">
            <p><strong>1. </strong>Form 1 Application for the Grant of a Patent in India</p>
            <p><strong>2. </strong>Bot the provisional and complete patent specifications must be submitted in duplicate, and if the provisional specification is filed, it must be followed within a year by the entire specification. (Form 2)</p>
            <p><strong>3. </strong>Only draw in duplicate if required.</p>
            <p><strong>4. </strong>The invention’s abstract and pertinent details, created in triplicate by the party.</p>
            <p><strong>5. </strong>Details and commitment outlining each foreign patent application’s number, filing date, and current status in duplicate (Form 3).</p>
            <p><strong>6. </strong>When instructed by the Controller, the priority document must be attached. This is the case for declarations of inventorship, convention/PCT national phase applications (Form 5), or applications where the priority date is claimed in the convention application.</p>
            <p><strong>7. </strong>In case the agent is filing the patent registration application, power of attorney is also required</p>
            <p><strong>8. </strong>Fee payment for the patent registration application [cheque/DD/cash]</p>
        </div>
       
      </div>
    </div>
  );
};
