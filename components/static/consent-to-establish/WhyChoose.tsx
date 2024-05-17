import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/consent-to-establish/How RegisterKaro_Can_Assist_You_in_the_Franchise_Agreement_Process_.svg";

interface HeroProps {
  cityName: string;
}

export const WhyChoose = ({ cityName }: HeroProps) => {
  return (
    <div id="WhyChoose">
      <p className="main-para">
        RegisterKaro serves as your ultimate solution for Consent to Establish
        NOC, offers a multitude of benefits:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt="RegisterKaro serves as your ultimate solution for Consent to Establish"
            className="Importance-img-h-100 w-100"
            height={500}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
          <p>
            <strong>Pool of Experts :</strong>Our experienced legal experts will
            provide personalized consultation to assess your organization's
            eligibility and guide you through the Consent to Establish NOC
            process. Rest assured; our team ensures your requirements are met
            with utmost efficiency.
          </p>

          <p>
            <strong>Cost-effective :</strong>RegisterKaro offers premium-quality
            registration services for the Consent to Establish NOC at highly
            competitive rates, ensuring that quality service remains accessible
            without straining your budget.
          </p>

          <p>
            <strong>Client-oriented approach :</strong> Our well-trained experts
            adopt a client-centric approach, prioritizing your needs and
            preferences throughout the registration process. We focus on
            understanding your business requirements to deliver tailored
            solutions.
          </p>

          <p>
            <strong>Process Alteration: </strong>For the fact that we focus on a
            Client-centric approach, we keep our process structurization open
            for the client to alter it as per their need, requirements, and
            vision. For us, obtaining the best results is the focus, along with
            the Client satisfaction.
          </p>
          <p>
            <strong>Trusted Partner of 10,000+ Clientele: </strong>With trust as
            our cornerstone, RegisterKaro has garnered the loyalty of over
            10,000 satisfied clients. Our unwavering commitment to quality and
            assurance has earned us the enduring trust of our esteemed
            clientele. Enroll with RegisterKaro today and experience excellence
            firsthand.
          </p>
        </div>
      </div>
    </div>
  );
};
