import React from 'react'
import Head from 'next/head'
import { Hero } from '../components/static/cdsco-registration/Hero'
import { Process } from '../components/static/cdsco-registration/Process'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { PartnershipDeed } from '../components/static/cdsco-registration/PartnershipDeed'
import { EventBased } from '../components/static/cdsco-registration/EventBased'
import { DocsREquired } from '../components/static/cdsco-registration/DocsRequired'
import { KeyInitiatives } from '../components/static/cdsco-registration/KeyInitiatives'
import { ObjectivesChecklist } from '../components/static/cdsco-registration/ObjectivesChecklist'
import { AdvantagesBIS } from '../components/static/cdsco-registration/AdvantagesBIS'
import { Renewal } from '../components/static/cdsco-registration/Renewal'
import { Revocation } from '../components/static/cdsco-registration/Revocation'
import { Mandatory } from '../components/static/cdsco-registration/Mandatory'
import { Paperwork } from '../components/static/cdsco-registration/Paperwork'
import { Services } from '../components/static/cdsco-registration/Services'
import { Rules } from '../components/static/cdsco-registration/Rules'

const faq = [
    {
        "question": "What does CDSCO stand for?",
        "answer": "CDSCO stands for Central Drugs Standard Control Organization, responsible for regulating pharmaceuticals, medical devices, cosmetics, and diagnostics in India."
    },
    {
        "question": "Who needs CDSCO registration?",
        "answer": "Manufacturers or their representatives intending to market pharmaceuticals, medical devices, cosmetics, or diagnostics in India require CDSCO registration."
    },
    {
        "question": "What are the key prerequisites for CDSCO registration?",
        "answer": "Compliance with quality standards, necessary testing data, adherence to regulatory norms, and submission of essential documents are prerequisites."
    },
    {
        "question": "What types of products does CDSCO regulate?",
        "answer": "CDSCO regulates various products, including pharmaceuticals, medical devices, cosmetics, and diagnostics."
    },
    {
        "question": "What types of licenses or services are involved in CDSCO registration?",
        "answer": "The primary requirement is the Registration Certificate (RC), alongside import licenses, manufacturing licenses, and approvals for clinical trials based on product classification."
    },
    {
        "question": "What documents are typically required for CDSCO registration?",
        "answer": "Technical details, manufacturing information, quality management system certifications, clinical data (if applicable), conformity evidence, and labeling details are commonly required documents."
    },
    {
        "question": "How long is the validity of the Registration Certificate?",
        "answer": "The Registration Certificate’s validity typically ranges from 1 to 5 years and requires renewal before expiration to maintain market access."
    },
    {
        "question": "Under what circumstances can CDSCO cancel a Registration Certificate?",
        "answer": "CDSCO can cancel, suspend, or revoke a Registration Certificate due to non-compliance, safety concerns, or inadequate surveillance."
    },
    {
        "question": "What mandatory compliances are linked with CDSCO registration?",
        "answer": "Mandatory compliances include post-market surveillance, adverse event reporting, adherence to labeling regulations, conformity with manufacturing standards, and maintaining an effective quality management system."
    },
    {
        "question": "Why is post-market surveillance crucial in CDSCO registration?",
        "answer": "Post-market surveillance ensures continued monitoring of the product’s safety and performance after it enters the market, identifying and addressing potential risks."
    },
    {
        "question": "How significant is adherence to labeling regulations in CDSCO registration?",
        "answer": "Strict adherence to labeling regulations is critical as it provides essential information for safe product use, including instructions, warnings, and precautions."
    },
    {
        "question": "What happens if a manufacturer fails to maintain a quality management system (QMS)?",
        "answer": "Failure to maintain a QMS can result in non-compliance issues, potentially leading to the cancellation or revocation of the Registration Certificate."
    }
]







const Home = () => {
    return (
        <div className='services-pages cdsco-registration-reg'>
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
            <h1 className='main-heading'>An Overview of CDSCO Registration</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Types of CDSCO Registration</h1>
            <div className='heading-line'></div>
            <KeyInitiatives/>
            <h1 className='main-heading'>Applicable Rules/Acts/ Regulations</h1>
            <div className='heading-line'></div>
            <Rules/>
            <h1 className='main-heading'>What is the Eligibility/Pre-Licensing/Mandatory Pre-Requisites</h1>
            <div className='heading-line'></div>
            <AdvantagesBIS/>
            <h1 className='main-heading'>A description of products/services Involved</h1>
            <div className='heading-line'></div>
            <DocsREquired/>
            <h1 className='main-heading'>Types and Distinctions of Licenses/Services Involved</h1>
            <div className='heading-line'></div>
            <Services/>
            <h1 className='main-heading'>Who can apply for CDSCO Registration in India?</h1>
            <div className='heading-line'></div>
            <ObjectivesChecklist/>
            <h1 className='main-heading'>Documents Required/Paperwork from the Client for CDSCO Registration</h1>
            <div className='heading-line'></div>
            <Paperwork/>
            <h1 className='main-heading'>CDSCO Registration Process</h1>
            <div className='heading-line'></div>
            <EventBased/>
            <h1 className='main-heading'>What is the procedural timeline of the service involved?</h1>
            <div className='heading-line'></div>
            <PartnershipDeed/>
            <h1 className='main-heading'>Cancellation/Validity/Renewal of Service</h1>
            <div className='heading-line'></div>
            <Renewal/>
            <h1 className='main-heading'>Cancellation/Suspension/Revocation of Service</h1>
            <div className='heading-line'></div>
            <Revocation/>
            <h1 className='main-heading'>Mandatory Compliance Attached with Service</h1>
            <div className='heading-line'></div>
            <Mandatory/>
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
        </div>
    )
}
export default Home