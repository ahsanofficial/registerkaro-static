import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/dubai-company-registration/why_choose_regis.svg";

export const WhyChoose = () => {
  return (
    <div id="WhyChoose">
      <p className="main-para"> RegisterKaro serves as your ultimate solution for the DIR 3 eKYC Filing, offering a multitude of benefits:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      
        <div className="flex-3">
          <Image
            alt="How RegisterKaro Can Assist You in the DIR 3 eKYC Filing Process"
            className="Importance-img-h-100 w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
            <p><strong>Pool of Experts: </strong>Our experienced legal experts will provide personalized consultation to assess your organization's eligibility and guide you through the DIR 3 eKYC Filing. Rest assured; our team ensures your requirements are met with utmost efficiency.</p>
            <p><strong>Cost-effective: </strong>RegisterKaro offers premium-quality registration services for the DIR 3 eKYC Filing process at highly competitive rates, ensuring that quality service remains accessible without straining your budget.</p>
            <p><strong>Client-oriented approach: </strong> Our well-trained experts adopt a client-centric approach, prioritizing your needs and preferences throughout the registration process. We focus on understanding your business requirements to deliver tailored solutions.</p>
            
            <p><strong>Process Alteration: </strong>Recognizing the importance of customization, we provide flexibility in process structuring, allowing you to modify it according to your specific needs, requirements, and vision. Our goal is to achieve optimal results while ensuring your satisfaction.</p>
            <p><strong> Trusted Partner of 10,000+ Clientele:</strong>With trust as our cornerstone, RegisterKaro has garnered the loyalty of over 10,000 satisfied clients. Our unwavering commitment to quality and assurance has earned us the enduring trust of our esteemed clientele. Enroll with RegisterKaro today and experience excellence firsthand.  </p>
        </div>
      </div>
    </div>
  );
};