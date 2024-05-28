import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/Tax-Consultancy-Services-for-Startups/TDS Return Filing.svg";

export const TDS = () => {
  return (
    <div id="TDS">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
       
        <div className="flex-7">
           <p>Tax Deducted at Source (TDS) is a method employed by the Government of India to gather taxes right at the moment a transaction happens. Under this system, tax is deducted when the receiver's account gets credited or when payment is made, whichever happens first. The company responsible for the payment must submit the deducted tax amount to the Income Tax Department. TDS is beneficial as it enables the direct remittance of a portion of the tax to the Income Tax Department.</p>
         
        </div>
        <div className="flex-4">
            <Image
              alt="TDS Return Filing"
              className="Importance-img-h-100 w-100"
              height={225}
              loading="lazy"
              src={dft}
            />
        </div>
        
      </div>
    </div>
  );
};
