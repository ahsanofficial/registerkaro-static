import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Applicability } from '../components/static/epf-registration/Applicability'
import { DifferentTypes } from '../components/static/epf-registration/DifferentTypes'
import { DocumentRequired } from '../components/static/epf-registration/DocumentRequired'
import { EligibilityCriteria } from '../components/static/epf-registration/EligibilityCriteria'
import { EventBased } from '../components/static/epf-registration/EventBased'
import { Hero } from '../components/static/epf-registration/Hero'
import { KeyInitiatives } from '../components/static/epf-registration/KeyInitiatives'
import { MandatoryCompliance } from '../components/static/epf-registration/MandatoryCompliance'
import { ObjectivesChecklist } from '../components/static/epf-registration/ObjectivesChecklist'
import { OurProcedure } from '../components/static/epf-registration/OurProcedure'
import { PartnershipDeed } from '../components/static/epf-registration/PartnershipDeed'
import { Process } from '../components/static/epf-registration/Process'
import { TableCom } from '../components/static/epf-registration/TableCom'
import { WhoExemptedRegi } from '../components/static/epf-registration/WhoExemptedRegi'
import { WithdrawlPF } from '../components/static/epf-registration/WithdrawlPF'

const faq = [
    {
        "question": "What is EPF registration?",
        "answer": "EPF registration refers to the process of enrolling employers and their employees into the Employees’ Provident Fund scheme, which is a mandatory savings scheme for employees in India."
    },
    {
        "question": "Who is required to register for EPF?",
        "answer": "Any organisation with 20 or more employees is required to register for EPF."
    },
    {
        "question": "How can I register for EPF?",
        "answer": "To register for EPF, you need to visit the EPFO’s official website, fill out the necessary forms, and submit the required documents."
    },
    {
        "question": "What documents are required for EPF registration?",
        "answer": "The documents required for EPF registration include the company’s registration certificate, PAN card, address proof, cancel bank cheque, and employee details."
    },
    {
        "question": "Can I register for EPF online?",
        "answer": "Yes, you can register for EPF online through the EPFO’s Unified Portal."
    },
    {
        "question": "When should I register for EPF?",
        "answer": "EPF registration should be completed within 30 days of reaching the threshold of 20 employees."
    },
    {
        "question": "What are the benefits of EPF registration for employers?",
        "answer": "By registering for EPF, employers contribute towards their employees’ retirement savings and ensure compliance with labor laws."
    },
    {
        "question": "What are the benefits of EPF registration for employees?",
        "answer": "EPF registration provides employees with a secure and assured savings fund for their retirement. It also offers financial support during emergencies, loans for housing, medical treatment, etc."
    },
    {
        "question": "How does EPF registration affect salary calculation?",
        "answer": "Employers have to deduct a fixed percentage of employees’ salary towards EPF contributions. This deduction is tax-deductible for both employers and employees."
    },
    {
        "question": "Can I opt-out of EPF registration?",
        "answer": "No, EPF registration is mandatory for eligible organisations. Employees must contribute to EPF unless their salary exceeds a certain threshold limit."
    },
    {
        "question": "What is the contribution percentage for EPF registration?",
        "answer": "Currently, the contribution percentage for EPF registration is 12% of an employee’s basic salary plus dearness allowance. The employer also contributes the same amount."
    },
    {
        "question": "Can I register for EPF if my organisation has less than 20 employees?",
        "answer": "Yes, organisations with fewer than 20 employees can voluntarily register for EPF."
    },
    {
        "question": "Can an employer change the EPF registration details?",
        "answer": "Yes, an employer can change EPF registration details by submitting the necessary forms and documents to the EPFO."
    },
    {
        "question": "What happens if an employer fails to register for EPF?",
        "answer": "Failure to register for EPF can result in penalties, fines, and legal consequences as per the EPF Act."
    },
    {
        "question": "Can an employee withdraw their EPF after leaving the organisation?",
        "answer": "Yes, employees can withdraw their EPF balance after leaving the organisation. However, there are specific rules and criteria governing such withdrawals."
    },
    {
        "question": "Can an organisation have multiple EPF registrations?",
        "answer": "No, an organisation can have only one EPF registration irrespective of the number of branches or locations. All employees should be covered under the same registration."
    }
]


const Home = () => {
    return (
        <div className='services-pages epf_registration-reg'>
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
            <h1 className='main-heading'>Get Online EPF Registration in India</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>What is EPFO and its objectives?</h1>
            <div className='heading-line'></div>
            <EventBased/>
            <h1 className='main-heading'>Applicability of EPF Registration </h1>
            <div className='heading-line'></div>
            <Applicability/> 
            <h1 className='main-heading'>What are the Benefits of EPF in India?</h1>
            <div className='heading-line'></div>
            <KeyInitiatives/>
            <h1 className='main-heading'>Eligibility Criteria for EPF Registration in India</h1>
            <div className='heading-line'></div>
            <EligibilityCriteria/>
            <h1 className='main-heading'>What are the Different Types of EPF Forms?</h1>
            <div className='heading-line'></div>
            <DifferentTypes/>
            <h1 className='main-heading'>Important details need to provide for the Registration under EPFO</h1>
            <div className='heading-line'></div>
            <ObjectivesChecklist/>
            <h1 className='main-heading'>Documents Required for EPF Registration</h1>
            <div className='heading-line'></div>
            <DocumentRequired/>
            <h1 className='main-heading'>Our Procedure for Online EPF Registration in India</h1>
            <div className='heading-line'></div>
            <OurProcedure/>
            <h1 className='main-heading'>What are the PF Withdrawal Rules after the Registration under EPFO?</h1>
            <div className='heading-line'></div>
            <WithdrawlPF/> 
            <h1 className='main-heading'>Who is exempted from EPF Registration in India?</h1>
            <div className='heading-line'></div>
            <WhoExemptedRegi/> 
            <h1 className='main-heading'>Mandatory Compliance</h1>
            <div className='heading-line'></div>
            <MandatoryCompliance/>
            <h1 className='main-heading'>What is the Due Date for PF Filing?</h1>
            <div className='heading-line'></div>
            <PartnershipDeed/> 
            <h1 className='main-heading'>Penalty Prescribed for the Employer’s Delay</h1>
            <div className='heading-line'></div>
            <TableCom/>
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