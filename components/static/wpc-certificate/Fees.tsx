import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/wpc-certificate/certificate_fee.svg";
interface HeroProps {
  cityName: string;
}
export const Fees = ({ cityName }: HeroProps) => {
  return (
    <div id="Fees">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt="WPC Certificate Fees,How to Apply Certificate or WPC License "
            className=" Importance-img-h-100 w-100"
            height={200}
            loading="lazy"
            src={dft}
          />
        </div>
        
        <div className="flex-7 pt-5">
            <p>The application fee for a WPC certificate is Rs. 10,000 from the government, and professional fees vary from Rs. 7,000 to Rs. 12,000 based on the WPC license consultants. If you are in possession of the RF test findings, the complete procedure takes at least thirty days.</p>
           
        </div>
    
      </div>
    </div>
  );
};
