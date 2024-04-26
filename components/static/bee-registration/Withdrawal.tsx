import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Withdrawal = () => {
  return (
    <div id="Withdrawal">
      <p className="main-para">For any of the following reasons, a manufacturer may decide to cancel the registration:</p>

      <div className="withdrawal-reasons flex w-80 m-auto mobile-flex-column-reverse">        
        <div className="flex-7">
          <p><strong>1. </strong>Failure to comply with any rating plan amendment criteria</p>
          <p><strong>2. </strong>Modifications to registered appliances or their equipment designs.</p>
          <p><strong>3. </strong>Discontinue with the company.</p>
          <p><strong>4. </strong>Any unanticipated events, such as a lockout or strike.</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Withdrawal of BEE Certificate by manufacturer"
            className="Withdrawal-img w-100 Importance-img-h-100"
            height={150}
            loading="lazy"
            src={dft}
          />
        </div>    
      </div>

      <p className="main-para">The following procedure must be followed when requesting to withdraw the certificate needed to apply the label:</p>
      <div className="Withdrawal-voluntary flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="Withdrawal of BEE Certificate by manufacturer"
            className="Withdrawal-img w-100 Importance-img-h-100"
            height={200}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
            <p><strong>1. </strong>The manufacturer must send a written notification to the bureau stating its desire to withdraw.</p>
            <p><strong>2. </strong>The manufacturer will use the S&L web portal to determine the models that need to be discontinued.</p>
            <p><strong>3. </strong>The Bureau will examine the applicant's financial obligations to see whether any money is still owed.</p>
        </div>
      </div>
      <p className="main-para">Following examination of the request, the bureau will take the appropriate steps to notify the manufacturer via S&L online portal and approve or reject the request for withdrawal of application.</p>
    </div>
  );
};
