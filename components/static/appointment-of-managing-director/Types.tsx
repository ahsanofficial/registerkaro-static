import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/appointment-of-managing-director/onetwo.svg";

export const Types = () => {
  return (
    <div id="Types">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Why is there a Necessity / Reason to appoint a Managing Director?, Necessity / Reason to appoint a Managing Director"
            className="Importance-img-h-100 w-100"
            height={450}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
            <p>The appointment of a Managing Director plays a crucial role in providing effective leadership, strategic direction, and operational management to the company. The Managing Director is responsible for efficient decision-making, driving business growth, and representing the organization's interests internally and externally. A Managing Director should be a Director in the 1st place. Private firms have the flexibility to determine the necessity of a Managing Director based on their objectives and preferences but public companies are subject to more stringent regulations. It is not mandatory for a private company if it opts to appoint a Managing Director, adherence to applicable laws is imperative to ensure proper compliance with legal requirements.</p>
            <p><strong>Necessity for Appointment:</strong></p>
            <p><strong>1. </strong>Sudden demise, retirement, resignation, or prolonged absence of existing directors.</p>
            <p><strong>2. </strong>Business expansion requires new talent in management.</p>
            <p><strong>3. </strong>Introduction of new product lines or departments necessitating expert leadership.</p>
             <p> <strong>4. </strong>Compulsory appointment to meet statutory directorship requirements.</p>

             <p><strong>Purpose of Appointment:</strong></p>
            <p><strong>1. </strong>Ensure continuity in corporate governance and operational management.</p>
            <p><strong>2. </strong>Facilitate business growth and strategic decision-making.</p>
            <p><strong>3. </strong>Distribute operational responsibilities while retaining strategic control.</p>
        </div>
        
      </div>
    </div>
  );
};
