import Head from "next/head";
import { FaqTemplatePVT } from "../components/child_components/FaqTemplatePVT";
import { WhyRegisterkaro } from "../components/static/WhyRegisterkaro";
import { AdvantagesBIS } from "../components/static/iec-registration/AdvantagesBIS";
import { DocsReq } from "../components/static/iec-registration/DocsReq";
import { Eligibility } from "../components/static/iec-registration/Eligibility";
import { EventBased } from "../components/static/iec-registration/EventBased";
import { Exemption } from "../components/static/iec-registration/Exemption";
import { Hero } from "../components/static/iec-registration/Hero";
import { KeyInitiatives } from "../components/static/iec-registration/KeyInitiatives";
import { ObjectivesChecklist } from "../components/static/iec-registration/ObjectivesChecklist";
import { PartnershipDeed } from "../components/static/iec-registration/PartnershipDeed";
import { Process } from "../components/static/iec-registration/Process";

const faq = [
  {
    question: "What is IEC registration?",
    answer:
      "IEC registration is a 10-digit code issued by the Directorate General of Foreign Trade (DGFT) in India. It is required for individuals or businesses engaged in import and export activities.",
  },
  {
    question: "Who needs to obtain an Import Export Code registration?",
    answer:
      "Any individual or business entity involved in import/export activities in India must obtain an IEC registration, except for those exempted by the government.",
  },
  {
    question: "How do I apply for Import Export Code registration?",
    answer:
      "You can apply for Import Export Code registration online through the DGFT website by filling out the prescribed application form and submitting the required documents.",
  },
  {
    question:
      "What are the documents required for Import Export Code registration?",
    answer:
      "The documents typically required for IEC registration include PAN card, Aadhaar card, bank certificate, cancelled cheque, passport-size photographs, and other supporting documents as needed.",
  },
  {
    question:
      "How long does it take to obtain an Import Export Code registration?",
    answer:
      "The processing time for Import Export Code registration is usually 2-3 working days from the submission of the application, assuming all the documents are in order.",
  },
  {
    question: "Is there any fee for IEC registration?",
    answer:
      "Yes, a fee is charged for IEC registration. The fee structure may vary based on the type of entity (individual or company) and can be found on the DGFT website.",
  },
  {
    question: "Can an individual obtain multiple IECs?",
    answer:
      "No, as per the current regulations, an individual can obtain only one IEC. However, a business entity can have multiple branches or divisions, each with a separate IEC.",
  },
  {
    question:
      "Is Import Export Code registration mandatory for the export of services?",
    answer:
      "No, IEC registration is not required for the export of services. It is primarily needed for the export and import of goods.",
  },
  {
    question:
      "What is the validity period of an Import Export Code registration?",
    answer:
      "The IEC registration does not have an expiration date. Once obtained, it is valid for a lifetime unless cancelled or surrendered.",
  },
  {
    question: "Can IEC registration be modified or updated?",
    answer:
      "Yes, certain changes like address, contact details, or addition/removal of partners can be updated by submitting the required documents to the DGFT.",
  },
  {
    question: "Is there a penalty for non-compliance with IEC regulations?",
    answer:
      "Yes, failure to comply with IEC regulations may result in penalties, including suspension or cancellation of the IEC registration, and can affect import/export operations.",
  },
  {
    question:
      "Can Import Export Code registration be transferred to another person or entity?",
    answer:
      "No, IEC registration is non-transferable. If there is a change in ownership or the entity undergoes restructuring, a new IEC registration must be obtained.",
  },
  {
    question: "Can an registration for IEC be cancelled or surrendered?",
    answer:
      "Yes, an IEC registration can be cancelled or surrendered by submitting an application to the DGFT, along with the required documents.",
  },
  {
    question:
      "Can an Import Export Code registration be used for both import and export activities?",
    answer:
      "Yes, an IEC registration allows an entity to engage in both import and export activities in India.",
  },
  {
    question:
      "Is it mandatory to mention the IEC on shipping bills and other import/export documents?",
    answer:
      "Yes, it is mandatory to mention the IEC on shipping bills, invoices, and other import/export documents as a means of identification.",
  },
  {
    question: "Can IEC registration be used for the personal import of goods?",
    answer:
      "No, IEC registration is meant for commercial purposes and cannot be used for personal imports of goods.",
  },
];

const Home = () => {
  return (
    <div className="services-pages iec-registration-reg">
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
      <h1 className="main-heading">Online IEC Registration in India</h1>
      <div className="heading-line"></div>
      <Process />
      <h1 className="main-heading">When is Import Export Code Required?</h1>
      <div className="heading-line"></div>
      <ObjectivesChecklist />
      <h1 className="main-heading">Benefits of IEC Registration in India</h1>
      <div className="heading-line"></div>
      <AdvantagesBIS />
      <h1 className="main-heading">What is the eligibility to get the Import Export Code in India?</h1>
      <div className="heading-line"></div>
      <Eligibility />
      <h1 className="main-heading">Prerequisites for applying IEC Code in India </h1>
      <div className="heading-line"></div>
      <EventBased />
      <h1 className="main-heading">Documents Required for IEC Registration</h1>
      <div className="heading-line"></div>
      <DocsReq />
      <h1 className="main-heading">Procedure for IEC Registration Online</h1>
      <div className="heading-line"></div>
      <KeyInitiatives />
      <h1 className="main-heading">When is IEC not Mandatory?</h1>
      <div className="heading-line"></div>
      <PartnershipDeed />
      <h1 className="main-heading">Exemption of Import Export Code (IEC)</h1>
      <div className="heading-line"></div>
      <Exemption />
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
