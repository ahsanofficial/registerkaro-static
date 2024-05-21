import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">The following are the documents required for registering with the Register Board of India</p>

        
      <div className="benefits flex w-80 m-auto mobile-flex-column">
       
        <div className="flex-3">
          <Image
            alt="Documents you would need for rubber board registration"
            className="Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
          <p > <strong> For Registration:</strong></p>
            <p><strong>1. </strong>Business Registration of the company </p>
            <p><strong>2. </strong>Identity details of the owner</p>
            <p><strong>3. </strong>Proof of ownership</p>
            <p><strong>4. </strong>Bank details of the company</p>
            <p><strong>5. </strong>Lease ownership or lease deed</p>
            <p><strong>6. </strong>Photograph of the owner and premises</p>
            <p><strong>7. </strong>Affidavit stating the applicant's right to possess business premises for doing business for a dealer license</p>
            
            
            <p > <strong> For Renewal:</strong></p>
            <p><strong>1. </strong>Documents as evidence for continuing business </p>
            <p><strong>2. </strong>For processors, a license from local authorities that the company passed the pollution test.</p>
            <p><strong>3. </strong>Filling of monthly and annual returns procured from the business.</p>
            <p>The duration of the registration is for 5 years and can be renewed or extended.</p>
        </div>
      </div>
    </div>
  );
};
