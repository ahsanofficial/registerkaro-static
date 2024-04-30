import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/change-of-auditor/Hero'
import { Process } from '../components/static/change-of-auditor/Process'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { Definition } from '../components/static/change-of-auditor/Definition'
import Appointment from '../components/static/change-of-auditor/Appointment'
import { Role } from '../components/static/change-of-auditor/Role'
import { HowRegisterKaro } from '../components/static/change-of-auditor/HowRegisterKaro'
import RemovalOfAuditor from '../components/static/change-of-auditor/RemovalOfAuditor'

const faq = [
    {
        "question": "What are the Rules for Changing of Auditor?",
        "answer": "During their term of office, the company's members have the authority to dismiss an auditor or choose not to re-appoint them for another term. The company must be given a 28-day notice if they plan to propose changes to the auditor or appoint a new one during a general meeting."
    },
    {
        "question": "What are the reasons for Change of Auditor?",
        "answer": "The shift in auditors is due to internal policies, introducing new skills, meeting compliance requirements, expertise, and quality needs."
    },
    {
        "question": "What forms are required for Change of Auditor?",
        "answer": "In order to oust an auditor before the completion of his term, both a special resolution and approval from the Central Government are required. Within a month of the Board Resolution being approved, Form ADT-2 seeks approval from the Central Government for the removal of auditors. Also, MGT-14 & RD-1."
    },
    {
        "question": "Why to Change Auditor in every 5 years?",
        "answer": "Initial audits have a greater rate of failure compared to audits conducted in later years. This signifies that every five years, auditors will conduct additional audits that are inaccurate. New auditors will need time to adjust during their first year, which could result in a less effective audit."
    },
    {
        "question": "Can we Change the Auditor in AGM?",
        "answer": "In accordance with Section 140 of the Companies Act, 2013, an auditor can only be dismissed before the end of their term through the approval of a special resolution at a general meeting and with the Central Government's prior consent."
    },
];



const Home = () => {
    return (
        <div className='services-pages change-of-auditor'>
            <Head>
                <title>Change of Auditor</title>
                <meta name="description" content="Auditors are experts in finance who conduct audits by evaluating financial statements, internal procedures, and transaction documents to determine their accuracy and completeness." />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <h1 className='main-heading'>What’s an Auditor?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Auditor of a Company</h2>
            <div className='heading-line'></div>
            <Definition />
            <h2 className='main-heading'>Role of Auditor</h2>
            <div className='heading-line'></div>
            <Role />
            <h2 className='main-heading'>Removal of Auditor</h2>
            <div className='heading-line'></div>
            <RemovalOfAuditor />
            <h2 className='main-heading'>Appointment of Auditor</h2>
            <div className='heading-line'></div>
            <Appointment />
            <h2 className='main-heading'>How RegisterKaro helps you in the Registration process?</h2>
            <div className='heading-line'></div>
            <HowRegisterKaro />
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