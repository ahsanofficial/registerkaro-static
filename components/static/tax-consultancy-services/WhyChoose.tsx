import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/Tax-Consultancy-Services-for-Startups/What Tax Consultancy Services for Startups are Being Offered by RegisterKaro_.svg"

export const WhyChoose = () => {
  return (
    <div id="WhyChoose">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     
        <div className="flex-7">
          <p>We offer tax and regulatory compliance services in addition to preparing and submitting company tax returns, computing advanced tax and all related taxation services. We assist enterprises in efficiently running their business operations by completing a full health check-up of the business operations in order to become eligible for the greatest tax incentives benefits, deduct any deductions where possible and improve tax compliance. Our professional team of specialists saves your time by managing every Tax and Regulatory Compliance, including local tax queries, disclosures and documentation. By availing of our services, entrepreneurs can avoid the negative outcomes of non-following of the rules and compliances. RegisterKaro works hard to provide services that are prompt and effective, so you can manage your business without any issues and without facing any penalties or problems.</p>
          
        </div>
        <div className="flex-4">
          <Image
            alt="What Tax Consultancy Services for Startups are Being Offered by RegisterKaro?"
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
