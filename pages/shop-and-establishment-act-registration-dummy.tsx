import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { AdvantagesShop } from '../components/static/shop-and-establishment-act-registration/AdvantagesShop'
import { ChecklistDocumentRequired } from '../components/static/shop-and-establishment-act-registration/ChecklistDocumentRequired'
import { Hero } from '../components/static/shop-and-establishment-act-registration/Hero'
import { ImportanceShop } from '../components/static/shop-and-establishment-act-registration/ImportanceShop'
import { Penalities } from '../components/static/shop-and-establishment-act-registration/Penalities'
import { ProcedureShop } from '../components/static/shop-and-establishment-act-registration/ProcedureShop'
import { Process } from '../components/static/shop-and-establishment-act-registration/Process'
import { WhatRegulations } from '../components/static/shop-and-establishment-act-registration/WhatRegulations '
import { WhichEntities } from '../components/static/shop-and-establishment-act-registration/WhichEntities'

const faq = [
    {
        "question": "What is the shop and establishment act?",
        "answer": "The shop and establishment act is a state-specific law that governs the working conditions, safety standards, and business registration requirements for shops, commercial establishments, and service providers."
    },
    {
        "question": "Who needs to register under the shop and establishment act?",
        "answer": "Registration under the shop and establishment act is required for all establishments involved in commercial activities, such as shops, hotels, restaurants, theatres, and offices."
    },
    {
        "question": "What are the benefits of registering under the shop and establishment act?",
        "answer": "By registering under the act, you can demonstrate compliance with legal requirements, protect the rights of your employees, and avail various social security benefits for your workforce."
    },
    {
        "question": "How do I register under the shop and establishment act?",
        "answer": "To register, you need to submit an application with the prescribed fees and required documents to the respective state’s labour department or the online portal, if available."
    },
    {
        "question": "What documents are required for shop and establishment act registration?",
        "answer": "The commonly required documents include identity proof, address proof, ownership proof or rental agreement, details of employees, and other relevant business documents."
    },
    {
        "question": "Is it mandatory to display the registration certificate?",
        "answer": "Yes, it is mandatory to display the registration certificate prominently at your establishment where it can be easily seen by employees and customers."
    },
    {
        "question": "What is the validity period of the shop and establishment registration certificate?",
        "answer": "The validity of the registration certificate varies from state to state, typically ranging from 1 to 5 years. After it expires, it needs to be renewed."
    },
    {
        "question": "What is the penalty for non-compliance with the shop and establishment act?",
        "answer": "The penalty for non-compliance may include fines, imprisonment, or even closure of the business in severe cases, depending on the severity of the offence and the respective state laws."
    },
    {
        "question": "Can I make changes in my registration details after obtaining the certificate?",
        "answer": "Yes, you can make changes in your registration details by submitting an application for amendment to the labour department within the specified time frame."
    },
    {
        "question": "Do I need to maintain any registers or records under the shop and establishment act?",
        "answer": "Yes, you are required to maintain registers and records related to attendance, wages, leave, holidays, and other relevant details of your employees."
    },
    {
        "question": "Am I required to provide employee benefits like leaves and holidays?",
        "answer": "Yes, the shop and establishment act mandates that certain employee benefits, such as weekly offs, annual leave, maternity leave, etc., should be provided as per the state-specific rules."
    },
    {
        "question": "What are the working hours prescribed under the shop and establishment act?",
        "answer": "The working hours and weekly offs prescribed under the act may vary by state, but in general, establishments are required to adhere to a maximum limit of working hours per day and provide employees with weekly rest periods."
    },
    {
        "question": "Do I need to renew my registration every year?",
        "answer": "The renewal period varies from state to state. Some states require annual renewal, while others may have longer renewal periods such as once in three or five years."
    },
    {
        "question": "Can I transfer my shop and establishment registration to another owner?",
        "answer": "Yes, you can transfer your registration to another owner in case of a change in ownership. It is necessary to inform the labour department and follow the prescribed procedure for transfer."
    },
    {
        "question": "Is there any provision for online registration under the shop and establishment act?",
        "answer": "Many states have introduced online registration portals to simplify the registration process. You can check the respective state’s labour department website for more information."
    },
    {
        "question": "What are the consequences of operating without a valid shop and establishment registration?",
        "answer": "Operating without a valid registration certificate can lead to legal consequences, including hefty fines, penalties, closure of the business, and other legal liabilities."
    }
]




const Home = () => {
    return (
        <div className='services-pages shop-and-establishment-act-reg'>
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
            <h1 className='main-heading'>Get Online Shop and Establishment Act Registration</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>What are the various regulations under the Shop and Establishment Act?</h1>
            <div className='heading-line'></div>
            <WhatRegulations/>
            <h1 className='main-heading'>Importance of Shop and Establishment Act License</h1>
            <div className='heading-line'></div>
            <ImportanceShop/> 
            <h1 className='main-heading'>Which entities have to register under the Shop and Establishment Act?</h1>
            <div className='heading-line'></div>
            <WhichEntities/>
            <h1 className='main-heading'>Advantages of Shop and Establishment Act Registration</h1>
            <div className='heading-line'></div>
            <AdvantagesShop/>  
            <h1 className='main-heading'>Documents Required for Shop and Establishment Act Registration</h1>
            <div className='heading-line'></div>
            <ChecklistDocumentRequired/> 
            <h1 className='main-heading'>Procedure for Shop and Establishment Act Registration</h1>
            <div className='heading-line'></div>
            <ProcedureShop/> 
            <h1 className='main-heading'>Penalties for not obtaining Shop and Establishment License in India</h1>
            <div className='heading-line'></div>
            <Penalities/> 
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