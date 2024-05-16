import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/consent to establish/Advantages of Consent to Establish (NOC).svg";

export const Advantage = () => {
  return (
    <div id="advantage">
        <p className="main-para">Obtaining consent for establishment and operation from the Pollution Control Committee has several benefits:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>Environmental Conservation: </strong>Identity proof of the applicant (EPIC / Aadhaar / Driving License / PAN Card / Passport),</p>
            <p><strong>Legal Protection: </strong> It protects businesses from potential legal penalties, fines, and litigation arising from non-compliance if they comply with environmental laws. </p>
            <p><strong>Reputation Building: </strong> It can enhance the reputation and trustworthiness of businesses among stakeholders and the public by demonstrating a commitment to environmental responsibility through compliance.</p>
            <p><strong>Access to Markets: </strong>Making compliance a competitive advantage and facilitating access to markets and funding opportunities leads to many consumers and investors prioritising environmentally conscious companies.</p>
            <p><strong>Enhance Resource Efficiency: </strong>Implementing pollution control measures often helps to improve resource efficiency, reducing waste generation, water and energy consumption, and overall operational costs.</p>
            <p><strong>Innovation and Competitiveness: </strong>Self-certified Site plan/layout with Road map / Route map.</p>
        </div>
        <div className="flex-3">
          <Image
            alt="establishment and operation from the Pollution Control Committee"
            className=" Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
