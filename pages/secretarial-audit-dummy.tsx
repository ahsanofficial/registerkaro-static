import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/secretarial-audit/Hero'
import { Process } from '../components/static/secretarial-audit/Process'
import { WhoCan } from '../components/static/secretarial-audit/WhoCan'
import { Benefits } from '../components/static/secretarial-audit/Benefits'
import { HowRegisterkaro } from '../components/static/secretarial-audit/HowRegisterkaro'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'


const faq = [
    {
        "question": "What’s Secretarial Audit?",
        "answer": "A Secretarial Audit is a method used to verify whether an organization is adhering to the laws, rules, regulations, notifications, etc that were in place during the audit period. In this instance, the goal is to verify whether a company has been adhering to the regulations outlined in the Companies Act 2013 and its corresponding rules."
    },
    {
        "question": "Secretarial Audit under section 204 of Companies Act, 2013?",
        "answer": "Section 204 mandates that all listed companies and other designated companies must include a secretarial audit report, prepared by a practicing company secretary, along with their Board's report as outlined in sub-section (3) of section 134, in the specified format."
    },
    {
        "question": "What it will cost for Secretarial Audit?",
        "answer": "The Institute of Company Secretaries of India has not set any minimum fees for secretarial auditors to charge. The fees of the secretarial auditor should be proportional to the nature and size of the client company, or the level of effort needed for the audit."
    },
    {
        "question": "Why Secretarial Audit is important?",
        "answer": "A secretarial audit is essential for companies to verify adherence to relevant laws and regulations. Assisting in enhancing internal controls, mitigating fraud risks, and fostering transparency."
    },
    {
        "question": "What’s the limit for Secretarial Audit Report?",
        "answer": "ICSI has also imposed a restriction on the number of audits that can be conducted by an Auditor. A maximum of 10 Secretarial Audits per partner/PCS are allowed, with an extra cap of 5 Secretarial Audits per partner/PCS if the unit undergoes a peer review."
    },
]

const Home = () => {
    return (
        <div className='services-pages secretarial-audit'>
            <Head>
                <title>Secretarial Audit | RegisterKaro</title>
                <meta name="description" content="A Secretarial Audit is a process used to ensure that an organization is abiding by the laws, rules, regulations, notifications, and other relevant requirements in place during the audit." />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <h1 className='main-heading'>Know More About Secretarial Audit</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Who Can be Secretarial Auditor and Scope of the Auditor</h2>
            <div className='heading-line'></div>
            <WhoCan />
            <h2 className='main-heading'>Benefits of Secretarial Auditor</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className='main-heading'>How RegisterKaro helps you in the Registration process?</h2>
            <div className='heading-line'></div>
            <HowRegisterkaro />
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