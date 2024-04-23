import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const DocumentRequired2= () => {
  return (
    <div id="phases">
        <p className="main-para">The environmental audit is done in three phases:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>Phase 1: Pre-Audit Phase</strong><br/>
            1. Assemble the audit team which constitutes of the capable and skilled members
           <br/> 2. A plan for conducting the audit is prepared 
            <br/> 3. Obtain all the necessary permissions and obtain all the previous records
           <br/> 4. List of the inquiries related to the business also needs to be prepared.
</p>
<p><strong>Phase 2: Audit Phase</strong><br/>
            1. Establishing of the evaluation method and the criteria for conducting the audit
           <br/> 2. Documentation of the steps taken and the audits conducted
            <br/> 3.Review of - policies, training, work environment as well as the risk management of the company.
           <br/> 4.Inspection of the place of conducting the business
           5.Checking proper compliainces are applied, implemented.
</p>

<p><strong>Phase 3: Post-Audit: </strong><br/>
            1. Analysis problems in case of any, the organisation faces in case of compliance
           <br/> 2. Advice on the closing note of the assesment or evaluation conducted.
            <br/> 3. Helps the company in finding solution to improve their audit assessment in case of poor evaluation results.
          
</p>
            
            
        </div>
        <div className="flex-3">
          <Image
            alt="Documents you would need"
            className="DocumentRequired-img w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
