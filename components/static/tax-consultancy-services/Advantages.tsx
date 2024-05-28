import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/Tax-Consultancy-Services-for-Startups/Advantages of Professional Tax Registration.png";

export const Advantages = () => {
  return (
    <div id="Advantages">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">

        <div className="flex-7 pt-5">
            <p><strong>1. Legal Obligation: </strong> Employers in many states are required by law to register for professional tax and pay taxes for their employees.</p>
            <p><strong>2. Avoiding Penalties: </strong>Not registering for professional tax can result in hefty penalties that increase over time.</p>
            <p><strong>3. Simplified Compliance:</strong>The rules for professional tax are straightforward, making the registration process quick and compliance easier.</p>
            <p><strong>4. Tax Deductions: </strong>Paying professional tax enables employees to claim deductions in their annual salary.</p>
            <p><strong>5. State Collection: </strong>Professional tax is collected by state governments and local authorities based on employment and professions.</p>
          
            
        </div>
        <div className="flex-3">
            <Image
              alt="Advantages of Professional Tax Registration"
              className="Importance-img-h-100 w-100"
              height={420}
              loading="lazy"
              src={dft}
            />
          </div>
       
      </div>
    </div>
  );
};
