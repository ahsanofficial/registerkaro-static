import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/non-government-organisation/What_eligibility_criteria_should.svg";

export const Eligibility = () => {
  return (
    <div id="eligibility">
        <p className="main-para">To establish an NGO, prospective founders must adhere to specific eligibility criteria. These prerequisites vary depending on the chosen legal structure:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
     
        
        <div className="flex-6 pt-5">
             <p><strong>Directors and Members:</strong></p>
            <p><strong>1. </strong>A minimum of 2 directors is mandatory for incorporation as a private limited company under the Companies Act. However, the maximum number of members permitted is 200 for such entities.</p>
            <p><strong>2. </strong>Charitable Trusts necessitate a minimum of 7 members for registration.</p>
            <p><strong>3. </strong>If opting for incorporation as a public limited company, a minimum of 3 directors is required. </p>
            <p><strong>4. </strong>There is no upper limit on the number of members for this structure.</p>
            <p><strong>5. </strong>NGOs can opt to register under Section 8 of the Companies Act, 2013, with the Registrar of Companies (ROC). This provision is specifically designed for non-profit organizations.</p>
            <p><strong>6. </strong>Registering an NGO under the Companies Act offers several advantages, including legal recognition and various benefits. Understanding these benefits is crucial for prospective founders to make informed decisions regarding the structure and registration process of their organization.</p>
           
        </div>
        <div className="flex-5">
            <Image
              alt="What eligibility criteria should be for the formation of an NGO?"
              className="Importance-img-h-100 w-100"
              height={550}
              loading="lazy"
              src={dft}
            />
          </div>
        
      
      </div>
    </div>
  );
};
