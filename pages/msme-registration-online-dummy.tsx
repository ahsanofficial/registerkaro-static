import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { BenefitsMSME } from '../components/static/msme-registration-online/BenefitsMSME'
import { Hero } from '../components/static/msme-registration-online/Hero'
import { NoFee } from '../components/static/msme-registration-online/NoFee'
import { Process } from '../components/static/msme-registration-online/Process'
import { ProcessMSME } from '../components/static/msme-registration-online/ProcessMSME'
import { SupportingDocuments } from '../components/static/msme-registration-online/SupportingDocuments'
import { TableCom } from '../components/static/msme-registration-online/TableCom'
import { TypeBusiness } from '../components/static/msme-registration-online/TypeBusiness'
import { UdyamDiffrence } from '../components/static/msme-registration-online/UdyamDiffrence'
import { UdyamRegistration } from '../components/static/msme-registration-online/UdyamRegistration'
import { WhatMSME } from '../components/static/msme-registration-online/WhatMSME'
import { WhichEntities } from '../components/static/msme-registration-online/WhichEntities'

const faq = [
    {
        "question": "What is MSME registration?",
        "answer": "It is a government initiative to classify and register Micro, Small, and Medium Enterprises, providing them with various benefits and support."
    },
    {
        "question": "Who can apply for MSME registration online?",
        "answer": "Any business falling under the Micro, Small, or Medium category can apply for registration online."
    },
    {
        "question": "How can I initiate the MSME registration process?",
        "answer": "Visit the official MSME registration portal and fill in the required details in the online registration form."
    },
    {
        "question": "What documents are needed for the registration online?",
        "answer": "Generally, you need documents like Aadhar card, business address proof, and details of the business activities."
    },
    {
        "question": "Is there a fee for MSME registration online?",
        "answer": "No, the registration process is usually free of charge."
    },
    {
        "question": "Can existing businesses apply for the registration of MSME online?",
        "answer": "Yes, both new and existing businesses can apply for the Registration of MSME online."
    },
    {
        "question": "How long does it take to get MSME registration after applying online?",
        "answer": "The registration process typically takes a few working days, but it may vary."
    },
    {
        "question": "What benefits does MSME registration offer?",
        "answer": "Benefits include easier access to credit, subsidies, and various government schemes designed to support small and medium enterprises."
    },
    {
        "question": "Can MSME registration details be updated online?",
        "answer": "Yes, you can update your registration details online by revisiting the official portal."
    },
    {
        "question": "Is MSME registration mandatory for businesses?",
        "answer": "While it’s not mandatory, but the registration is beneficial as it opens doors to numerous advantages for the business."
    },
    {
        "question": "Can a business register as both an MSME and a startup?",
        "answer": "Yes, a business can register as both an MSME and a startup, as these registrations serve different purposes."
    },
    {
        "question": "Is there a renewal process for MSME registration?",
        "answer": "No, MSME registration does not require periodic renewal."
    },
    {
        "question": "Can I check the status of my MSME registration application online?",
        "answer": "Yes, you can track the status of your registration application on the official portal."
    },
    {
        "question": "Can an MSME registration be canceled?",
        "answer": "Yes, in certain cases, registration can be canceled. However, it’s essential to understand the reasons and implications."
    },
    {
        "question": "Can a business have multiple MSME registrations?",
        "answer": "No, a business entity is generally allowed only one MSME registration."
    },
    {
        "question": "Is MSME registration available for service-based businesses?",
        "answer": "Yes, this registration is open to both manufacturing and service-oriented businesses, providing benefits to a wide range of sectors."
    }
]



const Home = () => {
    return (
        <div className='services-pages msme-registration-reg'>
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
            <h1 className='main-heading'>Get MSME Registration Online in India</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>What are MSMEs?</h1>
            <div className='heading-line'></div>
            <WhatMSME/> 
            <h1 className='main-heading'>What type of business comes under MSME? </h1>
            <div className='heading-line'></div>
            <TypeBusiness/> 
            <h1 className='main-heading'>MSME Classification</h1>
            <div className='heading-line'></div>
            <TableCom/>
            <h1 className='main-heading'>Benefits of MSME Registration Online</h1>
            <div className='heading-line'></div>
            <BenefitsMSME/>
            <h1 className='main-heading'>What is Udyam Registration?</h1>
            <div className='heading-line'></div>
            <UdyamRegistration/> 
            <h1 className='main-heading'>What is the difference between MSME and Udyam Registration?</h1>
            <div className='heading-line'></div>
            <UdyamDiffrence/>  
            <h1 className='main-heading'>Which Entities are eligible for MSME Online?</h1>
            <div className='heading-line'></div>
            <WhichEntities/>
            <h1 className='main-heading'>Supporting Documents Required for MSME Registration Online</h1>
            <div className='heading-line'></div>
            <SupportingDocuments/>  
            <h1 className='main-heading'>Process for MSME Registration Online</h1>
            <div className='heading-line'></div>
            <ProcessMSME/>
            <h1 className='main-heading'>No Fee for Registration</h1>
            <div className='heading-line'></div>
            <NoFee/> 
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