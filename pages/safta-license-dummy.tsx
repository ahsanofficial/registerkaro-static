import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/safta-license/Hero'
import { Process } from '../components/static/safta-license/Process'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { ApplicableGovernments } from '../components/static/safta-license/ApplicableGovernments'
import ProcessDuration from '../components/static/safta-license/ProcessDuration'
import { ProcessStep } from '../components/static/safta-license/ProcessStep'
import { WhyChoose } from '../components/static/safta-license/WhyChoose'
import Definition from '../components/static/safta-license/Definition'
import WhyApply from '../components/static/safta-license/WhyApply'
import DocumentReq from "../components/static/safta-license/DocumentReq"

const faq = [
    {
        "question": "What is a SAFTA license, and how can it benefit my business?",
        "answer": "A SAFTA (South Asian Free Trade Area) license grants businesses preferential tariff rates and trade benefits within South Asian countries, facilitating easier access to regional markets and enhancing export competitiveness."
    },
    {
        "question": "Who is eligible to apply for a SAFTA license?",
        "answer": "Businesses located within South Asian Free Trade Area (SAFTA) member countries, engaged in eligible trade activities, are typically eligible to apply for a SAFTA license."
    },
    {
        "question": "What documents are required for obtaining a SAFTA license?",
        "answer": "The required documents for obtaining a SAFTA (South Asian Free Trade Area) license typically include proof of business registration, import/export licenses, invoices, and a declaration of origin for goods traded within SAFTA member countries."
    },
    {
        "question": "How long does it take to process a SAFTA license application?",
        "answer": "The processing time for a SAFTA (South Asian Free Trade Area) license application varies depending on the specific procedures and requirements of the issuing authority, but it typically ranges from a few weeks to a few months."
    },
    {
        "question": "Can I modify or renew my SAFTA license?",
        "answer": "Yes, SAFTA (South Asian Free Trade Area) license holders can typically modify or renew their licenses as needed, subject to compliance with relevant regulations and submission of required documentation."
    },
    {
        "question": "Are there any restrictions on the products eligible for SAFTA benefits?",
        "answer": "Yes, products eligible for SAFTA (South Asian Free Trade Area) benefits must meet specific rules of origin criteria outlined in the agreement."
    },
    
    {
        "question": "How can I ensure my business remains compliant with SAFTA regulations after obtaining the license?",
        "answer": "By staying updated on any changes or developments in the agreement, maintaining accurate records of trade activities, regularly reviewing eligibility criteria, and seeking professional guidance when needed to address compliance concerns effectively."
    },
    {
        "question": "Can you assist with any post-approval formalities or ongoing compliance checks related to SAFTA licenses?",
        "answer": "Yes, our services include assistance with post-approval formalities and ongoing compliance checks related to SAFTA (South Asian Free Trade Area) licenses, ensuring that your business remains aligned with regulatory requirements and maximizes the benefits of the agreement."
    },
];



const Home = () => {
    return (
        <div className='services-pages safta-license'>
            <Head>
                <title>The South Asian Free Trade Agreement (SAFTA) License</title>
                <meta name="description" content="The South Asian Free Trade Area (SAFTA) is the free trade arrangement of the South Asian Association for Regional Cooperation (SAARC)." />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> */}
            </Head>
            <Hero />
            <h1 className='main-heading'>Introduction</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Applicable Governments</h2>
            <div className='heading-line'></div>
            <ApplicableGovernments />
            <h2 className='main-heading'>What is SAFTA Registration?</h2>
            <div className='heading-line'></div>
            <Definition />
            <h2 className='main-heading'>Process and Duration</h2>
            <div className='heading-line'></div>
            <ProcessDuration />
            <h2 className='main-heading'>Why one should apply for SAFTA License?</h2>
            <div className='heading-line'></div>
            <WhyApply/>
            <h2 className='main-heading'>Process for obtaining SAFTA License</h2>
            <div className='heading-line'></div>
            <ProcessStep />
            <h2 className='main-heading'>List of documents required for SAFTA Licence registration.</h2>
            <div className='heading-line'></div>
            <DocumentReq />
            <h2 className='main-heading'>How RegisterKaro Can Assist You in the Franchise Agreement Process?</h2>
            <div className='heading-line'></div>
            <WhyChoose />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
        </div>
    )
}
export default Home