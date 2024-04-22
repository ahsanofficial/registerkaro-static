import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/oman-company-registration/why_choose_regis.svg";

const WhyChooseReg = () => {
  return (
    <div id="WhyChooseReg">
      <p className="main-para">
        RegisterKaro is an online business compliance platform that helps
        entrepreneurs and other individuals with various registrations, tax
        filings, and other legal matters. RegisterKaro offers various services,
        such as Private Limited Company Registration, bookkeeping, TDS, annual
        filings, payroll management, GST Registration and filing, Trademark
        Registration, and more.
      </p>
      <p className="main-para fw-bold">
        {" "}
        RegisterKaro can help you with your venture agreement in the following
        ways:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-7 pt-3">
          <ul className="fs-5">
            <li>
              RegisterKaro has a team of experienced and qualified
              professionals, who can guide you through the entire process of
              registering a joint venture agreement in India.
            </li>
            <li>
              RegisterKaro provides a hassle-free and convenient online
              platform, where you can submit your documents, make payments,
              track your status, and receive your deliverables, without any
              physical visits or delays.
            </li>
            <li>
              RegisterKaro offers affordable and transparent pricing, with no
              hidden charges or fees. You can choose from different packages and
              plans, depending on your budget and requirements.
            </li>
            <li>
              RegisterKaro ensures complete customer satisfaction and support,
              with a dedicated account manager and a 24/7 helpline, to answer
              your queries and resolve your issues.
            </li>
          </ul>
          <p>If you are looking for a reliable and professional partner to help you register a joint venture agreement in India, look no further than RegisterKaro. Contact us today and get started with your joint venture.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Why Choose RegisterKaro for Company Registration in Oman?"
            className="WhyChooseReg-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseReg;
