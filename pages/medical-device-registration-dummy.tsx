import Head from "next/head";
import { FaqTemplatePVT } from "../components/child_components/FaqTemplatePVT";
import { WhyRegisterkaro } from "../components/static/WhyRegisterkaro";
import { ApplicableRegulations } from "../components/static/medical-device-registration/ApplicableRegulations";
import { Cancellation } from "../components/static/medical-device-registration/Cancellation";
import { DescriptionServices } from "../components/static/medical-device-registration/DescriptionServices";
import { EligibilyMandatory } from "../components/static/medical-device-registration/EligibilyMandatory";
import { Hero } from "../components/static/medical-device-registration/Hero";
import { MandatoryCom } from "../components/static/medical-device-registration/MandatoryCom";
import { MedicalDevice } from "../components/static/medical-device-registration/MedicalDevice";
import { MedicalDeviceRegistration } from "../components/static/medical-device-registration/MedicalDeviceRegistration";
import { Process } from "../components/static/medical-device-registration/Process";
import { RenewalService } from "../components/static/medical-device-registration/RenewalService";
import { WhatDocument } from "../components/static/medical-device-registration/WhatDocument";

const faq = [
  {
    question: "Who regulates medical device registration in India?",
    answer: "CDSCO under the Medical Device Rules, 2017.",
  },
  {
    question: "Who can apply for medical device registration?",
    answer: "Manufacturers or authorized representatives.",
  },
  {
    question: "What are the mandatory prerequisites for registration?",
    answer: "Compliance with quality standards and relevant testing data.",
  },
  {
    question: "What products fall under medical devices?",
    answer: "Diagnostic, surgical, imaging, and related healthcare equipment.",
  },
  {
    question: "What types of licenses are involved?",
    answer: "Mainly the Registration Certificate (RC).",
  },
  {
    question: "What documents are required?",
    answer:
      "Technical details, manufacturing info, certifications, clinical data, conformity evidence, and labeling.",
  },
  {
    question: "What’s the general procedural timeline?",
    answer:
      "Submission, evaluation, potential queries, review, and approval/rejection.",
  },
  {
    question: "How long is the Registration Certificate valid?",
    answer: "Usually 1 to 5 years, subject to renewal.",
  },
  {
    question: "Under what circumstances can it be canceled?",
    answer: "Non-compliance, safety issues, or insufficient surveillance.",
  },
  {
    question: "What mandatory compliances are required?",
    answer:
      "Post-market surveillance, adverse event reporting, labeling adherence, manufacturing conformity, and QMS maintenance.",
  },
  {
    question: "Why is post-market surveillance crucial?",
    answer: "To monitor device performance and report adverse events.",
  },
  {
    question: "How important is adherence to labeling regulations?",
    answer: "Critical for consumer safety and understanding device usage.",
  },
  {
    question: "What happens if a manufacturer fails to maintain a QMS?",
    answer: "Risk of non-compliance and potential certificate revocation.",
  },
  {
    question: "How significant is clinical data in the registration process?",
    answer: "Essential for establishing safety and efficacy.",
  },
  {
    question:
      "Are registration procedures different based on device risk classification?",
    answer: "Yes, they vary based on the device’s risk level.",
  },
  {
    question: "What actions can CDSCO take if a device poses safety risks?",
    answer: "It can cancel, suspend, or revoke the Registration Certificate.",
  },
];

const Home = () => {
  return (
    <div className="services-pages medical-device-registration-reg">
      <Head>
        {/* <title>Private Limited Company Registration | RegisterKaro</title> */}
        {/* <meta name="description" content="The Official RegisterKaro" /> */}
        <meta name="robots" content="noindex,nofollow" />
        <meta name="googlebot" content="noindex,nofollow" />
        <meta name="robots" content="all" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> */}
      </Head>
      <Hero />
      <h1 className="main-heading">Get Online Medical Device Registration in India</h1>
      <div className="heading-line"></div>
      <Process />
      <h1 className="main-heading">Applicable Rules/Acts/ Regulations</h1>
      <div className="heading-line"></div>
      < ApplicableRegulations/>
      <h1 className="main-heading">What is the Eligibility/Pre-Licensing/Mandatory Pre-Requisites for Medical Device Registration?</h1>
      <div className="heading-line"></div>
      <EligibilyMandatory />
      <h1 className="main-heading">A description of products/services involved</h1>
      <div className="heading-line"></div>
      <DescriptionServices />
      <h1 className="main-heading">What are the Documents or Paperwork required for Medical Device Registration?</h1>
      <div className="heading-line"></div>
      <WhatDocument />
      <h1 className="main-heading">
      Medical Device Registration Process in India
      </h1>
      <div className="heading-line"></div>
      <MedicalDevice />
      <h1 className="main-heading">What is the Medical Device Registration procedural timeline of the service involved?</h1>
      <div className="heading-line"></div>
      < MedicalDeviceRegistration/> 
      <h1 className="main-heading">Validity/Renewal of Service</h1>
      <div className="heading-line"></div>
      < RenewalService/> 
      <h1 className="main-heading">Cancellation/Suspension/Revocation of Service</h1>
      <div className="heading-line"></div>
      < Cancellation/>
       <h1 className="main-heading">Mandatory Compliance Attached with Service</h1>
      <div className="heading-line"></div>
      < MandatoryCom/>
      <h1 className="main-heading">Why RegisterKaro?</h1>
      <div className="heading-line"></div>
      <WhyRegisterkaro />
      <h1 className="main-heading">FAQs</h1>
      <div className="heading-line"></div>
      <FaqTemplatePVT faqItems={faq} />
    </div>
  );
};
export default Home;
