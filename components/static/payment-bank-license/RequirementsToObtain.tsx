import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const RequirementsToObtain = () => {
  return (
    <div id="RequirementsToObtain">
      <p className="main-para">The following are the requirements, which need to be fulfilled before making an application for a Payments Bank Licence:</p>
      <div className="RequirementsToObtain flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
          <Image
            alt="What are the Requirements to Obtain a Payment Bank License?"
            className="RequirementsToObtain-img w-100 Importance-img-h-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
          <p><strong>1. Paid-up equity capital : </strong>The entity which wishes to obtain the Payment Bank Licence shall have a paid-up equity capital of a minimum of Rs.100 crore.</p>
          <p><strong>2. Capital Adequacy Ratio : </strong>Payment Banks are required to uphold a minimum capital adequacy ratio of 15 per cent of their Risk Weighted Assets (RWAs), which may be adjusted to a higher percentage as directed by the RBI. The Tier I Capital should constitute at least 7.5 per cent of the RWAs, while Tier II Capital is capped at a maximum of 100 per cent of the total Tier I Capital. Despite not engaging in complex financial products, Payment Banks compute their Capital Adequacy Ratio according to the standardized approaches outlined by the Basel Committee.</p>
          <p><strong>3. Structure of Entity : </strong>The entity which wishes to obtain the Payment Bank Licence must be a Public Limited Company registered under the Companies Act, 2013</p>
        </div>        
      </div>
    </div>
  );
};
