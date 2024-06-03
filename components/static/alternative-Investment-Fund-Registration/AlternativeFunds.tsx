import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const AlternativeFunds = () => {
  return (
    <div id="AlternativeFunds">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
        <div className="flex-4 pt-5 ">
          <p><strong>Procedure</strong></p>
          <div className="pt-0 p-2 pb-0">   <p><strong>1. </strong>The application is made as per strategies along with the documents prescribed as per the SEBI Act</p>
            <p><strong>2. </strong>These applications are reviewed and checked by the SEBI board to make sure they will be giving a reply within 21 days of the application being made.</p>
            <p><strong>3. </strong>The application must prepare a cover letter stating that:</p>
            


           <div className=" pt-0 p-3 pb-0"> 
                <p ><strong>a. </strong>If it is registered with SEBI as a capital fund.</p>
                <p ><strong>b. </strong>If the applicant has been undertaking activities with AIF</p>
            </div>

            <p><strong>4. </strong>Any other application as SEBI may prescribe from time to time.</p>
            </div>
        
            <p><strong>Documents Required</strong></p>
            <div className="pt-0 p-2 pb-0" >
            <p><strong>1. </strong>Certificate of Incorporation of the entry applicant.</p>
            <p><strong>2. </strong>Information in terms of directors and shareholders.</p>
            <p><strong>3. </strong>Copy of the MoU of the company, or the clause stating that the investment is allowed</p>
            <p><strong>4.</strong>Identity Proof and Address Proof of the applicant </p>
            </div>
        </div>
        <div className="flex-4 pt-5">
            <Image
              alt="How to Register for Alternative Funds?"
              className="Importance-img-h-100 w-100"
              height={450}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};
