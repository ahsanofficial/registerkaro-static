import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/rubber-board-registration/Process.svg";
interface HeroProps {
    cityName: string;
}
export const ProcessRegistration = ({ cityName }: HeroProps) => {
  return (
    <div id="ProcessRegistration">
                <p className="main-para">The following is the registration process that is followed for registration:</p>

      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      <div className="flex-7">
            <p><strong>1. </strong>Application in the online portal</p>
            <p><strong>2. </strong>Document checking and verification</p>
            <p><strong>3. </strong>Correcting and changing business as per the requirement</p>
            <p><strong>4. </strong>Obtain Digital Certification with registration number</p>
            

        </div>
        <div className="flex-3">
          <Image
            alt="Process that is followed for registration"
            className="Importance-img-h-100 w-100"
            height={175}
            loading="lazy"
            src={dft}
          />
        </div>
      
      </div>
    </div>
  );
};
