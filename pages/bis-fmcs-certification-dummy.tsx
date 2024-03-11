import React from 'react'
import Head from 'next/head'
import { Hero } from '../components/static//bis-fmcs-certification/Hero'
import { Process } from '../components/static/bis-fmcs-certification/Process'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { EventBased } from '../components/static/bis-fmcs-certification/EventBased'
import { DocsREquired } from '../components/static/bis-fmcs-certification/DocsRequired'

import { KeyInitiatives } from '../components/static/bis-fmcs-certification/KeyInitiatives'
import { ObjectivesChecklist } from '../components/static/bis-fmcs-certification/ObjectivesChecklist'
import { AdvantagesBIS } from '../components/static/bis-fmcs-certification/AdvantagesBIS'
import { ProcedureObtaining } from '../components/static/bis-fmcs-certification/ProcedureObtaining'
import { DocRequiredBIS } from '../components/static/bis-fmcs-certification/DocRequiredBIS'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'

const faq=[
    {
      "question": "What is BIS FMCS Certification, and why is it important?",
      "answer": "BIS FMCS Certification, short for Bureau of Indian Standards Foreign Manufacturers Certification Scheme, ensures that foreign manufacturers meet Indian standards, promoting quality and safety. It's crucial for accessing the Indian market and building consumer trust."
    },
    {
      "question": "How can a foreign manufacturer apply for BIS FMCS Certification?",
      "answer": "Foreign manufacturers can apply for BIS FMCS Certification through the online portal of the Bureau of Indian Standards. The application process involves submitting necessary documents, product samples, and complying with relevant standards."
    },
    {
      "question": "What types of products require BIS FMCS Certification?",
      "answer": "Various electronic and IT products, such as mobile phones, laptops, and electronic components, fall under the scope of BIS FMCS Certification. The list is regularly updated by the Bureau of Indian Standards."
    },
    {
      "question": "What are the key benefits of obtaining BIS FMCS Certification for a foreign manufacturer?",
      "answer": "BIS FMCS Certification enhances market access to India, builds consumer confidence, and ensures compliance with Indian regulatory standards. It also establishes credibility and competitiveness in the Indian market."
    },
    {
      "question": "How long does the BIS FMCS Certification process typically take?",
      "answer": "The duration varies based on factors like the type of product and the completeness of the application. Generally, it can take a few weeks to a few months. Engaging with a BIS-accredited agency can help expedite the process."
    },
    {
      "question": "Are there specific labeling requirements for products with BIS FMCS Certification?",
      "answer": "Yes, products with BIS FMCS Certification must display the standard mark in a specified format. The labeling ensures that consumers can easily identify certified products and trust their compliance with Indian quality standards."
    },
    {
      "question": "Can a foreign manufacturer renew their BIS FMCS Certification?",
      "answer": "Yes, BIS FMCS Certification is typically valid for one or two years, and it can be renewed by submitting a renewal application before the expiration date. Ensuring ongoing compliance with standards is essential for successful renewal."
    },
    {
      "question": "Are there penalties for non-compliance with BIS FMCS Certification requirements?",
      "answer": "Non-compliance may result in penalties, including fines and legal consequences. It's crucial for foreign manufacturers to adhere to BIS FMCS Certification requirements to avoid disruptions to their business in the Indian market."
    },
    {
      "question": "Can a local representative handle BIS FMCS Certification on behalf of a foreign manufacturer?",
      "answer": "Yes, a local authorized representative can assist in the BIS FMCS Certification process on behalf of a foreign manufacturer. This representative should be knowledgeable about the certification requirements and processes."
    },
    {
      "question": "How can a foreign manufacturer stay informed about updates and changes to BIS FMCS Certification standards?",
      "answer": "Regularly checking the official website of the Bureau of Indian Standards, subscribing to newsletters, and staying in touch with BIS-accredited agencies can help foreign manufacturers stay informed about updates, changes, and new requirements for BIS FMCS Certification."
    }
  ]

const Home = () => {
    return (
        <div className='services-pages bis-fmcs-certification-reg'>
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
            <h1 className='main-heading'>An Overview of BIS FMCS Certification</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>What is BIS Standard Mark?</h1>
            <div className='heading-line'></div>
            <KeyInitiatives/>
            <h1 className='main-heading'>Importance of BIS FMCS Certification in India</h1>
            <div className='heading-line'></div>
            <ObjectivesChecklist/>
            <h1 className='main-heading'>List of Products Which Require BIS FMCS Certification</h1>
            <div className='heading-line'></div>
            <DocsREquired/>
            <h1 className='main-heading'>Requirements for BIS FMCS Certification</h1>
            <div className='heading-line'></div>
            <EventBased/>
            <h1 className='main-heading'>Required Documents for BIS FMCS Certification</h1>
            <div className='heading-line'></div>
            <DocRequiredBIS/>
            <h1 className='main-heading'>Procedure for Obtaining BIS FMCS Certification</h1>
            <div className='heading-line'></div>
            <ProcedureObtaining/>
            <h1 className='main-heading'>Key Guidelines for Nomination of AIR (Authorized Indian Representative) for Foreign Manufacturers</h1>
            <div className='heading-line'></div>
            <AdvantagesBIS/>
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