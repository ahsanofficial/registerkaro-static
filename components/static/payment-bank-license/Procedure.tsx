import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Procedure = () => {
  return (
    <div id="Procedure">
      <p className="main-para">The step-by-step process for applying for a Payment Bank License is as follows:</p>
      <div className="Procedure flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="Procedure to Obtain a Payment Bank License"
            className="Procedure-img w-100 Importance-img-h-100"
            height={550}
            loading="lazy"
            src={dft}
          />
        </div>   
        <div className="flex-7">
          <p><strong>1. Register as a Public Limited Company : </strong>The Payment Bank must register itself as a Public Limited Company under the Companies Act, 2013.</p>
          <p><strong>2. Apply for License : </strong>The Payment Bank needs to apply for a license under Section 22 of the Banking Regulation Act, 1949. This application is made using Form-III, as per Rule 11 of the Banking Regulation (Companies) Rules, 1949. It should be addressed to the Chief General Manager of the Department of Banking Regulation of the RBI.</p>
          <p><strong>3. Initial Screening : </strong>The RBI conducts an initial screening to assess the prima facie eligibility of the applicant. Additional criteria may be applied if necessary.</p>
          <p><strong>4. Evaluation by External Advisory Committee (EAC) : </strong>An External Advisory Committee, comprising professionals such as Chartered Accountants, Finance Professionals, and Bankers, evaluates the applications. Discussions with the applicants may be held at this stage if required.</p>
          <p><strong>5. In-Principle Approval : </strong>The RBI makes the final decision to issue an in-principle approval. This approval remains valid for 18 months, during which the bank must be established.</p>
          <p><strong>6. Additional Conditions : </strong>If any adverse features are observed, the RBI may impose additional conditions or withdraw the in-principle approval.</p>
          
        </div>
      </div>
    </div>
  );
};
