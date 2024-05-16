import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/appointment-of-managing-director/two.svg";

export const Managing = () => {
  return (
    <div id="managing">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>In India, the appointment of a Managing Director (MD) in a private company is governed by the provisions of the Companies Act, 2013, along with the Articles of Association (AoA) of the company. The company must adhere to the prescribed procedure to ensure legal compliance and smooth functioning of the business operations. Additionally, seeking professional legal advice and guidance during the appointment process can help mitigate any potential risks or legal issues.</p>
          
            <p><strong></strong>Here is a step-by-step procedure for the appointment of a Managing Director in a private company:</p>         
        </div>
        <div className="flex-4">
          <Image
            alt="Procedure for Appointment of Managing Director"
            className="Importance-img-h-100 w-100"
            height={320}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};