import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/common-images/Why _choose.svg";

export const HowRegisterKaro = () => {
  return (
    <div id="HowRegisterKaro">
      <p className="main-para">
      RegisterKaro serves as your ultimate solution for ICEGATE Registration, offering a multitude of benefits:
      </p>
      <div className="flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="What is a Legal Defamation Notice"
            className="Importance-img-h-100 w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-6">
          <p><strong>1. Pool of Experts: </strong>Our experienced legal experts will provide personalized consultation to assess your organization's eligibility and guide you through the ICEGATE Registration process. Rest assured; our team ensures your requirements are met with utmost efficiency.</p>
          <p><strong>2. Cost-effective: </strong>RegisterKaro offers premium-quality registration services for the ICEGATE Registration at highly competitive rates, ensuring that quality service remains accessible without straining your budget.</p>
          <p><strong>3. Client-oriented Approach: </strong>Our well-trained experts adopt a client-centric approach, prioritizing your needs and preferences throughout the registration process. We focus on understanding your business requirements to deliver tailored solutions.</p>
          <p><strong>4. Process Alteration: </strong>Recognizing the importance of customization, we provide flexibility in process structuring, allowing you to modify it according to your specific needs, requirements, and vision. Our goal is to achieve optimal results while ensuring your satisfaction.</p>
          <p><strong>5. Trusted Partner of 10,000+ Clientele: </strong>With trust as our cornerstone, RegisterKaro has garnered the loyalty of over 10,000 satisfied clients. Our unwavering commitment to quality and assurance has earned us the enduring trust of our esteemed clientele. Enroll with RegisterKaro today and experience excellence firsthand. </p>
        </div>
      </div>
    </div>
  );
};
