import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/icegate-registration/Hero'
import { Process } from '../components/static/icegate-registration/Process'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhoCanHave } from '../components/static/icegate-registration/WhoCanHave'
import ProprietorshipEntities from '../components/static/icegate-registration/ProprietorshipEntities'
import { ProcessStep } from '../components/static/icegate-registration/ProcessStep'
import { HowRegisterKaro } from '../components/static/icegate-registration/HowRegisterKaro'
import DocumentPrerequisites from '../components/static/icegate-registration/DocumentPrerequisites'
import CorporateEntity from '../components/static/icegate-registration/CorporateEntity'
import Advantages from "../components/static/icegate-registration/Advantages"

const faq = [
    {
        "question": "What is ICEGATE, and why is registration necessary?",
        "answer": "ICEGATE is the Indian Customs Electronic Commerce/Electronic Data Interchange (EC/EDI) Gateway, and registration is necessary for businesses to electronically file customs documents and facilitate trade processes with the Indian customs authorities."
    },
    {
        "question": "Who needs to register on ICEGATE?",
        "answer": "All entities engaged in importing or exporting goods across Indian borders must register on ICEGATE."
    },
    {
        "question": "What are the documents required for ICEGATE registration?",
        "answer": "The documents required for ICEGATE registration typically include proof of identity, address, and business registration documents such as PAN card, Aadhaar card, GST registration certificate, and Import Export Code (IEC)."
    },
    {
        "question": "Is there any fee associated with ICEGATE registration?",
        "answer": "Yes, there is typically no fee associated with ICEGATE registration but it is always suggested to get expert help for it."
    },
    {
        "question": "How long does it take to complete the ICEGATE registration process?",
        "answer": "The duration to complete the ICEGATE registration process can vary but generally takes around 1 to 2 weeks upon submission of all required documents and information."
    },
    {
        "question": "Can a company have multiple users registered under one ICEGATE account?",
        "answer": "Yes, a company can have multiple users registered under one ICEGATE account, allowing for efficient management and collaboration in customs-related processes."
    },
    
    {
        "question": "What are the benefits of being registered on ICEGATE?",
        "answer": "The benefits of being registered on ICEGATE include streamlined customs clearance processes, access to online filing and tracking of customs documents, reduced paperwork, faster clearance times, and enhanced transparency and compliance with customs regulations."
    },
    {
        "question": "Is there any validity period for ICEGATE registration, or is it permanent?",
        "answer": "ICEGATE registration typically does not have an expiration date and is considered permanent unless there are changes in the regulations or the status of the registered entity necessitating an update or renewal of the registration details."
    },
];



const Home = () => {
    return (
        <div className='services-pages icegate-registration'>
            <Head>
                <title>Icegate Registration</title>
                <meta name="description" content="ICEGATE stands for Indian Customs Electronic Gateway. It is an online platform that facilitates the filing of customs and import-export documents, reducing paperwork and accelerating the customs clearance process. " />
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
            <h2 className='main-heading'>Who can have an ICEGATE Registration?</h2>
            <div className='heading-line'></div>
            <WhoCanHave />
            <h2 className='main-heading'>Process of ICEGATE Registration </h2>
            <div className='heading-line'></div>
            <ProcessStep />
            <h2 className='main-heading'>List of documents and Pre-requisites for user registration on ICEGATE</h2>
            <div className='heading-line'></div>
            <DocumentPrerequisites />
            <h2 className='main-heading'>Prerequisites for Proprietorship Entities</h2>
            <div className='heading-line'></div>
            <ProprietorshipEntities />
            <h2 className='main-heading'>Prerequisites where Entity Type is Corporate (Company or LLP)</h2>
            <div className='heading-line'></div>
            <CorporateEntity/>
            <h2 className='main-heading'>Advantages of ICEGATE Registration</h2>
            <div className='heading-line'></div>
            <Advantages />
            <h2 className='main-heading'>How RegisterKaro Can Assist You in the Registration Process?</h2>
            <div className='heading-line'></div>
            <HowRegisterKaro/>
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