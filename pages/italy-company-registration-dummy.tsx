import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../components/static/italy-company-registration/DocumentRequired'
import { Hero } from '../components/static/italy-company-registration/Hero'
import { Process } from '../components/static/italy-company-registration/Process'
import { ProcessCompany } from '../components/static/italy-company-registration/ProcessCompany'
import { Types } from '../components/static/italy-company-registration/Types'
import { WhyChoose } from '../components/static/italy-company-registration/WhyChoose'
import { Benefits } from '../components/static/italy-company-registration/Benefits'
import { Prerequisites } from '../components/static/italy-company-registration/Prerequisites'

const faq = [
    {
        "question": "How much does it cost to register a company in Italy?",
        "answer": "Minimum share capital requirements for company registration ranges between €1 and €50,000. The incorporation charge is roughly 2,300 euros whereas the fee for Trade Register is € 520."
    },
    {
        "question": "Can a foreigner set up a company in Italy?",
        "answer": "Yes, foreigners can set up a company in Italy. They can start a self-employed business, work as an employee, or open a business by obtaining the Golden Visa residence visa in Italy."
    },
    {
        "question": "What is an LLC called in Italy?",
        "answer": "The Italian limited liability Company, sometimes referred to as \"Societá a responsabilità limitata\" or \"S.r.l.\", may then come into your attention. This kind of business is the most common in Italy for foreign investors."
    },
    {
        "question": "How much is company tax in Italy?",
        "answer": "In Italy, the corporate tax rate is 24% and is referred to as IRES. This is a significant tax that must be paid in Italy by specific organizations that are registered there."
    },
    {
        "question": "Is Italy a good country to start a business?",
        "answer": "Italy is expected to see growth in its economy, with a GDP of €1.8 trillion. In 2024, the European Commission predicts an acceleration to reach 0.9%, and by 2025, it will reach 1.2%. A thriving GDP is indicative of a strong and productive economy, which attracts firms."
    },
    {
        "question": "How long does it take to open a company in Italy?",
        "answer": "It takes a foreign national five to six working days from the day we begin the formation process to set up a company (including getting VAT and opening a bank account)."
    },
    {
        "question": "Is it hard to open a business in Italy?",
        "answer": "Despite Italy's image for bureaucracy and red tape, opening your own business is actually quite simple. Italy does not require a business visa for citizens of the European Union (EU) or the European Free Trade Association (EFTA, which includes Iceland, Liechtenstein, Norway, and Switzerland)."
    },
    {
        "question": "What taxes are there in Italy?",
        "answer": "There are various taxes applicable in Italy applicable for corporate and personal income such as Municipal Income Tax, Regional Incomes Tax, National Income Tax, Unified Municipal Tax, Value Added Tax, Tonnage Tax, etc."
    }
]

  
const Home = () => {
    return (
        <div className='services-pages italy-company-reg'>
           <Head>
                <title>Company Registration in Italy | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/italy-company-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Company Registration in Italy | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Company Registration in Italy</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Benefits of starting a Business in Italy</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className='main-heading'>Types of companies for Company Registration in Italy</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Documents to carry for registration process</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>Company Registration Process in Italy</h2>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h2 className='main-heading'>Types of Taxes you must know</h2>
            <div className='heading-line'></div>
            <Prerequisites />
            <h2 className='main-heading'>Why Choose RegisterKaro for Company Registration in Italy?</h2>
            <div className='heading-line'></div>
            <WhyChoose/>
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