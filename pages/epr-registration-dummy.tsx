import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { ApplicableRules } from '../components/static/epr-registration/ApplicableRules'
import { CancellationValid } from '../components/static/epr-registration/CancellationValid'
import { DocumentsRequired } from '../components/static/epr-registration/DocumentsRequired'
import { Eligibility } from '../components/static/epr-registration/Eligibility'
import { Hero } from '../components/static/epr-registration/Hero'
import { HowEPRRegistration } from '../components/static/epr-registration/HowEPRRegistration'
import { MandatoryCompliance } from '../components/static/epr-registration/MandatoryCompliance'
import { Process } from '../components/static/epr-registration/Process'
const faq = [
    {
        "question": "What is the purpose of registering for EPR?",
        "answer": "Registering for EPR enables users to access enhanced features and services within the system, optimizing their experience."
    },
    {
        "question": "Who is eligible to complete the registration process for enhanced access?",
        "answer": "Individuals with specific roles or responsibilities can undergo the registration process to gain enhanced access, tailored to their needs."
    },
    {
        "question": "Can I modify my registration details after the initial sign-up?",
        "answer": "Yes, users have the flexibility to update their registration details as needed, ensuring accuracy and relevance over time."
    },
    {
        "question": "Is there a cost associated with the EPR registration process?",
        "answer": "No, the EPR registration process is typically free of charge, allowing eligible users to benefit from enhanced features without incurring additional expenses."
    },
    {
        "question": "What kind of information is required during the EPR registration?",
        "answer": "The registration process gathers essential information to establish user profiles, focusing on details relevant to their roles and the functionalities they need."
    },
    {
        "question": "Can organizations register multiple users simultaneously for EPR access?",
        "answer": "Yes, organizations often have the option to register multiple users in a batch, streamlining the onboarding process for teams or departments."
    },
    {
        "question": "How long does the EPR registration process usually take?",
        "answer": "The registration process is designed to be efficient, taking a short amount of time to complete and ensuring users can quickly access enhanced features."
    },
    {
        "question": "Are there training resources available after EPR registration?",
        "answer": "Yes, post-registration, users may have access to training resources that help them maximize the benefits of their enhanced access and navigate the system effectively."
    },
    {
        "question": "Can I transfer my EPR registration to another user?",
        "answer": "In certain cases, EPR registrations may be transferable, allowing for seamless transitions when responsibilities or roles within an organization change."
    },
    {
        "question": "What happens if I forget my login credentials after EPR registration?",
        "answer": "If you forget your login credentials, there are typically secure processes in place to help you recover or reset your password, ensuring uninterrupted access to the EPR system."
    }
]



const Home = () => {
    return (
        <div className='services-pages epr-registration-reg'>
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
            <h1 className='main-heading'>Get Online EPR Registration Now!</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Applicable Rules/ Acts/ Regulations for EPR </h1>
            <div className='heading-line'></div>
            <ApplicableRules/>
            <h1 className='main-heading'>Eligibility/ Pre-Licensing/ Mandatory Prerequisites</h1>
            <div className='heading-line'></div>
            <Eligibility/>
            <h1 className='main-heading'>Documents Required for EPR Registration</h1>
            <div className='heading-line'></div>
            <DocumentsRequired/>
            <h1 className='main-heading'>How to apply for EPR Registration online in India?</h1>
            <div className='heading-line'></div>
            <HowEPRRegistration/>
            <h1 className='main-heading'>Cancellation/Validity/ Renewal of EPR</h1>
            <div className='heading-line'></div>
            <CancellationValid/>
            <h1 className='main-heading'>Mandatory Compliance</h1>
            <div className='heading-line'></div>
            <MandatoryCompliance/>
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