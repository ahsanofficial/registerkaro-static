import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Application } from '../components/static/drug-liecense/Application'
import { Basic } from '../components/static/drug-liecense/Basic'
import { DocumentsRequired } from '../components/static/drug-liecense/DocumentsRequired'
import { Fees } from '../components/static/drug-liecense/Fees'
import { Hero } from '../components/static/drug-liecense/Hero'
import { HowRegisterKaro } from '../components/static/drug-liecense/HowRegisterKaro'
import { Process } from '../components/static/drug-liecense/Process'
import { ProcessCompany } from '../components/static/drug-liecense/ProcessCompany'
import { Types } from '../components/static/drug-liecense/Types'


const faq = [
    {
        "question": "What is a drug license?",
        "answer": "A drug license gives you the ability to operate a drug, medicine, or cosmetic business in accordance with the Drugs and Cosmetic Act. Such a license is granted by the Central or State Drug Standard Control Organization in accordance with the Drugs and Cosmetics Act of 1940."
    },
    {
        "question": "Who needs a drug license in India?",
        "answer": "All manufacturers as defined by the Drugs and Cosmetics Act 1940 that deal with ayurvedic, allopathic, cosmetics, pharmaceuticals, etc."
    },
    {
        "question": "What are the qualifications for obtaining a drug license?",
        "answer": "With a focus on clinical pharmacology or microbiology, a graduate degree in pharmacy, pharmaceutical sciences, or medicine from an Indian institution founded by law is required. Additionally, two years of experience in the production, testing, regulation, or design of medical devices are required."
    },
    {
        "question": "How long is a drug license valid for?",
        "answer": "The cost of a license to manufacture pharmaceuticals is now set at Rs 6,000 for a duration of five years. A fee of Rs 1,500 will also be applied for the examination of the premises before a license is granted or renewed."
    },
    {
        "question": "Who controls drugs in India?",
        "answer": "The National Regulatory Authority (NRA) of India is the Central Drugs Standard Control Organization (CDSCO), which is housed inside the Directorate General of Health Services, Ministry of Health & Family Welfare."
    },
    {
        "question": "What is Form 21B for drug license?",
        "answer": "Permission to sell and distribute medications listed in Schedule C & C (1) of the medications & Cosmetics Act and Rules is granted to wholesalers via Form 21B."
    }
]


const Home = () => {
    return (
        <div className='services-pages drug-license-reg'>
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
            <h1 className='main-heading'>A quick overview on Drug License</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Basic pre-requisites for a drug license</h1>
            <div className='heading-line'></div>
            <Basic />
            <h1 className='main-heading'>Who may submit a drug license application?</h1>
            <div className='heading-line'></div>
            <Application />
            <h1 className='main-heading'>Types of Drug License Registration</h1>
            <div className='heading-line'></div>
            <Types/>
            <h1 className='main-heading'>Documents requirement for Drug License in India</h1>
            <div className='heading-line'></div>
            <DocumentsRequired/>
            <h1 className='main-heading'>Drug License Registration process in India</h1>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h1 className='main-heading'>Fees for drug license registration</h1>
            <div className='heading-line'></div>
            <Fees />
            <h1 className='main-heading'>How RegisterKaro helps you in getting Drug License?</h1>
            <div className='heading-line'></div>
            <HowRegisterKaro/>
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