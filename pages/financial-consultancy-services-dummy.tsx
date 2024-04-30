import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/financial-consultancy-services/Hero'
import { Process } from '../components/static/financial-consultancy-services/Process'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { KeyNotes } from '../components/static/financial-consultancy-services/KeyNotes'
import { WhatBest } from '../components/static/financial-consultancy-services/WhatBest'
import { HowRegisterKaro } from '../components/static/financial-consultancy-services/HowRegisterKaro'
import WhyRegisterkaroPerfect from '../components/static/financial-consultancy-services/WhyRegisterkaroPerfect'

const faq = [
    {
        "question": "What’s the role of Financial Consultancy?",
        "answer": "Financial advisors usually offer guidance to individuals on various financial matters such as budgeting, saving for major expenses, planning for retirement, making investments, and managing trusts and estates."
    },
    {
        "question": "What’s the Example of Financial Consultancy?",
        "answer": "Individuals focus on personal finance areas such as retirement planning, investment plans, provident funds, stock options, and portfolio management based on their financial goals."
    },
    {
        "question": "What’s the difference between Financial Advisor & Financial Consultancy?",
        "answer": "The main distinction is in the range of services offered. Financial advisors usually provide complete financial planning services and continuous management, whereas financial consultants tend to focus on specific fields of finance and may give advice for a specific project or short-term objective."
    },
    {
        "question": "Who needs Financial Consultancy?",
        "answer": "If you are a person with a high level of wealth, you may require someone to provide tailored guidance and manage financial choices for you."
    },
    {
        "question": "Is Financial Consultancy being a Job?",
        "answer": "A financial consultancy assists a company in enhancing shareholder value and boosting capital efficiency. They may be responsible for creating a mergers and acquisition (M&A) deal or developing a pay plan for company leaders. A lot of consultants are employed in the corporate finance department of a company."
    },
];



const Home = () => {
    return (
        <div className='services-pages financial-consultancy-services'>
            <Head>
                <title>Financial Consultancy Services</title>
                <meta name="description" content='The term "financial consultant" is outdated and has mostly been substituted with the term "financial advisor." Financial consultants can be employed by a company or work independently, serving either businesses or individuals.' />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is Financial Consultancy Services?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Key Notes for Financial Consultancy Services</h2>
            <div className='heading-line'></div>
            <KeyNotes />
            <h2 className='main-heading'>What could be the Best Financial Consultancy Services?</h2>
            <div className='heading-line'></div>
            <WhatBest />
            <h2 className='main-heading'>Why RegisterKaro is Perfect for Financial Consultancy Services?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaroPerfect />
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