import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/network-license/Documents_required_for_the_Network_License_in_India.svg";
interface HeroProps {
    cityName: string;
}
export const DocumentRequired = ({ cityName }: HeroProps) => {
  return (
    <div id="DocumentRequired">
        
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
        <div className="flex-4 pt-5">
            <p><strong>1. </strong>Certificate of incorporation.</p>
            <p><strong>2. </strong>ID proof of the applicant.</p>
            <p><strong>3. </strong>RF test report of the equipment.</p>
            <p><strong>4. </strong>Qualification of the applicant.</p>
            <p><strong>5. </strong>Specification of the product.</p>
        </div>
        <div className="flex-5">
            <Image
              alt="Documents required for the Network License in {cityName}"
              className="Importance-img-h-100 w-100"
              height={350}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};
