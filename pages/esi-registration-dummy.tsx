import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { AdvantagesBIS } from '../components/static/esi-registration/AdvantagesBIS'
import { DocsREquired } from '../components/static/esi-registration/DocsRequired'
import { EventBased } from '../components/static/esi-registration/EventBased'
import { Hero } from '../components/static/esi-registration/Hero'
import { KeyInitiatives } from '../components/static/esi-registration/KeyInitiatives'
import { ObjectivesChecklist } from '../components/static/esi-registration/ObjectivesChecklist'
import { OtherAnnual } from '../components/static/esi-registration/OtherAnnual'
import { Process } from '../components/static/esi-registration/Process'

const faq = [
    {
        "question": "What is ESI registration?",
        "answer": "It is the process of registering a business entity under the Employee State Insurance Act, of 1948, to provide medical and social security benefits to employees."
    },
    {
        "question": "Who needs to register for ESI?",
        "answer": "Any establishment or business entity having 10 or more employees (20 or more in certain states) must register for ESI."
    },
    {
        "question": "Can establishments with fewer employees voluntarily register for ESI?",
        "answer": "Yes, establishments with less than the prescribed number of employees can voluntarily register for ESI."
    },
    {
        "question": "What benefits do employees receive under ESI?",
        "answer": "Employees covered under ESI are entitled to medical benefits, sickness benefits, maternity benefits, disablement benefits, dependent benefits, and funeral expenses."
    },
    {
        "question": "How can I apply for ESI registration?",
        "answer": "You can apply for the same online through the ESIC (Employee State Insurance Corporation) portal or by visiting the nearest ESIC office."
    },
    {
        "question": "What documents are required for the registration?",
        "answer": "The documents required for the registration include the registration certificate of the establishment, address proof, PAN card, salary details of employees, and bank account details."
    },
    {
        "question": "What is the time limit for the registration of ESI after the establishment becomes eligible?",
        "answer": "This registration must be done within 15 days from the date the establishment becomes eligible for registration."
    },
    {
        "question": "Is it mandatory for employees to contribute to ESI?",
        "answer": "Yes, both the employer and employees are required to contribute to ESI. The contribution rates are shared between them."
    },
    {
        "question": "How is the ESI contribution calculated?",
        "answer": "The contribution towards ESI is calculated as a percentage of the employee’s wages, where the employee’s contribution is deducted from their wages and the employer contributes the remaining portion."
    },
    {
        "question": "What is the due date for the ESI contribution payment?",
        "answer": "ESI contributions must be paid by the 15th of every month for the previous month’s wages."
    },
    {
        "question": "Can the ESI registration be canceled?",
        "answer": "Yes, if an establishment ceases to exist or no longer falls within the purview of ESI, the registration can be canceled."
    },
    {
        "question": "Can a registered establishment change its address?",
        "answer": "Yes, a registered establishment can request a change in address by submitting the required documents to the appropriate ESIC office."
    },
    {
        "question": "What are the consequences of non-compliance with ESI regulations?",
        "answer": "Non-compliance with ESI regulations may lead to penalties, fines, or legal actions imposed by the authorities."
    },
    {
        "question": "Is ESI registration applicable to all states in India?",
        "answer": "Yes, ESI registration is applicable to all states and union territories of India."
    },
    {
        "question": "Can an establishment with branches in multiple locations have a single ESI registration?",
        "answer": "Yes, an establishment with branches in multiple locations can have a single ESI registration if the branches are covered under the same registration."
    },
    {
        "question": "Is it mandatory to renew the ESI registration?",
        "answer": "No, this registration does not require renewal. Once registered, it is valid until the establishment is eligible and compliant with ESI regulations."
    }
]

const Home = () => {
    return (
        <div className='services-pages esi-registration-reg'>
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
            <h1 className='main-heading'>Get Online ESI Registration Now!</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Benefits of ESI Registration in India</h1>
            <div className='heading-line'></div>
            <EventBased/>
            <h1 className='main-heading'>Various Entities covered under ESIC</h1>
            <div className='heading-line'></div>
            <ObjectivesChecklist/>
            <h1 className='main-heading'>What is the Eligibility for ESI Registration in India?Various Entities covered under ESIC</h1>
            <div className='heading-line'></div>
            <OtherAnnual/>
            <h1 className='main-heading'>What are the vital documents required for online ESI Registration in India?</h1>
            <div className='heading-line'></div>
            <KeyInitiatives/>
            <h1 className='main-heading'>Procedure for Online ESI Registration</h1>
            <div className='heading-line'></div>
            <AdvantagesBIS/>           
            <h1 className='main-heading'>Compliance and Returns after ESI Registration in India</h1>
            <div className='heading-line'></div>
            <DocsREquired/>
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