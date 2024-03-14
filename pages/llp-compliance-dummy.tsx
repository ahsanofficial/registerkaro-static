import React from 'react'
import Head from 'next/head'
import { Hero } from '../components/static/llp-compilance/Hero'
import { Process } from '../components/static/llp-compilance/Process'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Benefits } from '../components/static/llp-compilance/Benefits'
import { Compilance } from '../components/static/llp-compilance/Compilance'
import { PartnershipDeed } from '../components/static/llp-compilance/PartnershipDeed'
import { WhatConseq } from '../components/static/llp-compilance/WhatConseq'

const faq = [
    {
        "question": "What is annual compliance for an LLP?",
        "answer": "Annual compliance for an LLP involves filing various forms and documents with regulatory authorities to meet legal requirements."
    },
    {
        "question": "When is the due date for filing annual compliance forms?",
        "answer": "The due date for filing annual compliance forms typically depends on the LLP’s financial year-end. It’s usually within 30 days from the end of the financial year."
    },
    {
        "question": "What forms need to be filed for annual compliance?",
        "answer": "Commonly, Form 8 (Statement of Account & Solvency) and Form 11 (Annual Return) need to be filed for annual compliance."
    },
    {
        "question": "Can the due date for annual compliance filing be extended?",
        "answer": "In some cases, you can apply for an extension of the due date, but this may attract additional fees and penalties."
    },
    {
        "question": "What is Form 8?",
        "answer": "Form 8 is the Statement of Account & Solvency that provides details about the financial position and solvency of the LLP."
    },
    {
        "question": "What is Form 11?",
        "answer": "Form 11 is the Annual Return that contains information about the LLP’s partners, address, and capital structure."
    },
    {
        "question": "Are there any penalties for the late filing of annual compliance forms?",
        "answer": "Yes, late filing can result in penalties. The amount of the penalty increases the longer the forms are delayed."
    },
    {
        "question": "Can LLPs apply for an exemption from filing annual compliance forms?",
        "answer": "LLPs with a turnover below a certain threshold may be eligible for exemption from filing these forms."
    },
    {
        "question": "What is the consequence of not filing annual compliance forms?",
        "answer": "Non-filing of annual compliance forms can lead to fines, penalties, and even the potential for the LLP to be struck off the register."
    },
    {
        "question": "Can changes to LLP details be made while filing annual compliance forms?",
        "answer": "Yes, you can update changes to partner details, registered office address, and other relevant information while filing these forms."
    },
    {
        "question": "Can annual compliance forms be revised after submission?",
        "answer": "No, once submitted, the forms cannot be revised. Accurate information must be provided during the initial submission."
    },
    {
        "question": "Are there any documents that need to be attached along with the annual compliance forms?",
        "answer": "Generally, documents such as financial statements, bank statements, and partner details are required as attachments."
    },
    {
        "question": "Can a designated partner sign the annual compliance forms digitally?",
        "answer": "Yes, the forms can be digitally signed by the designated partner or authorized signatory."
    },
    {
        "question": "What is the LLP Identification Number (LLPIN) and where can it be found?",
        "answer": "The LLPIN is a unique identification number assigned to an LLP. It can be found on the LLP registration certificate."
    },
    {
        "question": "Is an LLP required to hold an Annual General Meeting (AGM)?",
        "answer": "LLPs are not required to hold an AGM. However, they must file annual compliance forms."
    },
    {
        "question": "Are there any changes in annual compliance requirements due to recent regulatory updates?",
        "answer": "It’s important to stay updated with the latest regulations as compliance requirements can change over time. Always consult a professional for accurate information."
    }
];


const Home = () => {
    return (
        <div className='services-pages llp-compilance-reg '>
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
            <h1 className='main-heading'>LLP Compliance in India</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>What are LLP (Second Amendment) Rules, 2022?</h1>
            <div className='heading-line'></div>
            <Compilance/>
            <h1 className='main-heading'>Benefits of LLP Compliance in India</h1>
            <div className='heading-line'></div>
            <Benefits/>
            <h1 className='main-heading'>Mandatory Compliance for LLP in India</h1>
            <div className='heading-line'></div>
            <PartnershipDeed/>
            <h1 className='main-heading'>What are the Consequences of Non-Compliance for LLPs?</h1>
            <div className='heading-line'></div>
            <WhatConseq/>
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