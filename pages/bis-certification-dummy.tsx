import React from 'react'
import Head from 'next/head'
import { Hero } from '../components/static/bis-certification/Hero'
import { Process } from '../components/static/bis-certification/Process'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Benefits } from '../components/static/bis-certification/Benefits'
import { PartnershipDeed } from '../components/static/bis-certification/PartnershipDeed'
import { OtherAnnual } from '../components/static/bis-certification/OtherAnnual'
import { EventBased } from '../components/static/bis-certification/EventBased'
import { MandatoryCompilance } from '../components/static/bis-certification/MandatoryCompilance'
import { DocsREquired } from '../components/static/bis-certification/DocsRequired'
import { WhoReq } from '../components/static/bis-certification/WhoReq'
import { KeyInitiatives } from '../components/static/bis-certification/KeyInitiatives'
import { ObjectivesChecklist } from '../components/static/bis-certification/ObjectivesChecklist'
import { AdvantagesBIS } from '../components/static/bis-certification/AdvantagesBIS'
import { TypesBIS } from '../components/static/bis-certification/TypesBIS'

const faq = [
    {
        "question": "What is BIS certification?",
        "answer": "BIS certification is a quality mark issued by the Bureau of Indian Standards (BIS) to ensure the quality and safety of products sold in India."
    },
    {
        "question": "Why is BIS certification important?",
        "answer": "BIS certification is essential to confirm that products meet Indian standards, ensuring consumer safety and product quality."
    },
    {
        "question": "Which products require BIS certification?",
        "answer": "Products like electronics, appliances, automotive components, and many others require BIS certification before they can be sold in India."
    },
    {
        "question": "How can I apply for BIS certification?",
        "answer": "You can apply for BIS certification online through the BIS website or at a BIS branch office."
    },
    {
        "question": "What are the documents required for BIS certification?",
        "answer": "Required documents may include product specifications, test reports, manufacturing process details, and more, depending on the product category."
    },
    {
        "question": "How long does it take to obtain BIS certification?",
        "answer": "The time frame varies depending on the complexity of the product and the certification process, but it typically takes several months."
    },
    {
        "question": "What is the validity period of a BIS certificate?",
        "answer": "BIS certificates are typically valid for two years, after which they need to be renewed."
    },
    {
        "question": "What is the BIS mark, and where should it be placed on the product?",
        "answer": "The BIS mark is the certification mark that should be placed on the product, packaging, or accompanying documents, as specified by BIS."
    },
    {
        "question": "Can imported products be sold in India without BIS certification?",
        "answer": "No, imported products must also comply with BIS standards and obtain BIS certification before being sold in India."
    },
    {
        "question": "What are the consequences of selling uncertified products in India?",
        "answer": "Selling uncertified products in India can result in legal penalties, product seizure, and damage to your brand’s reputation. It is essential to adhere to BIS certification requirements."
    }
]






const Home = () => {
    return (
        <div className='services-pages bis-certification-reg'>
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
            <h1 className='main-heading'>Get Online BIS Certification in India</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Key Initiatives by BIS</h1>
            <div className='heading-line'></div>
            <KeyInitiatives/>
            <h1 className='main-heading'>Objectives of BIS</h1>
            <div className='heading-line'></div>
            <ObjectivesChecklist/>
            <h1 className='main-heading'>Quality Control Orders</h1>
            <div className='heading-line'></div>
            <PartnershipDeed/>
            <h1 className='main-heading'>Advantages of Obtaining BIS Certification</h1>
            <div className='heading-line'></div>
            <AdvantagesBIS/>
            <h1 className='main-heading'>Types of BIS Certification</h1>
            <div className='heading-line'></div>
            <EventBased/>
            <h1 className='main-heading'>Products Covered Under BIS Certification</h1>
            <div className='heading-line'></div>
            <DocsREquired/>
            <h1 className='main-heading'>Documentation Required for BIS Certification</h1>
            <div className='heading-line'></div>
            <OtherAnnual/>
            <h1 className='main-heading'>Procedure for BIS Certification</h1>
            <div className='heading-line'></div>
            <MandatoryCompilance/>
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