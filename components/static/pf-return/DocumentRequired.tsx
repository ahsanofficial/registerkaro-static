import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">Following are the general documents you will need to regulate the PF Return, however, this list is not exhaustive:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
       <div className="flex-4 pt-5">
            <p><strong>1: </strong>Employer Contribution in EPF</p>
            <p><strong>2: </strong>Employee Contribution in EPF</p>
            <p><strong>3: </strong>ECR Challan [copy]</p>
            <p><strong>4: </strong>Employee’s UAN Details [KYC Compiled]</p>
        </div>
        <div className="flex-5">
            <Image
              alt="Documents required for Company registration"
              className="DocumentRequired-img w-100"
              height={550}
              loading="lazy"
              src={dft}
            />
          </div>
       
      </div>
    </div>
  );
};
