import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import Consequences from '../components/static/pf-return/Consequences'
import { DocumentRequired } from '../components/static/pf-return/DocumentRequired'
import { File } from '../components/static/pf-return/File'
import Forms from '../components/static/pf-return/Forms'
import { Hero } from '../components/static/pf-return/Hero'
import KeyPoints from '../components/static/pf-return/KeyPoints'
import { Process } from '../components/static/pf-return/Process'
import { WhyChoose } from '../components/static/pf-return/WhyChoose'
import WhyOpt from '../components/static/pf-return/WhyOpt'
import WhoCan from '../components/static/pf-return/WhoCan'

const faq = [
    {
        "question": "What are the returns on PF?",
        "answer": "For FY 2022–2023, the EPF Interest Rate is set at 8.15%. Nevertheless, the EPF account does not get the full 12% of the employer contribution. The employee’s EPF account receives the remaining 3.67% of the 12% contribution, with 8.33% going to the Employee Pension Scheme Account."
    },
    {
        "question": "How can I return my PF amount?",
        "answer": "To access the EPFO website, you need to enter your password, captcha, and UAN (Universal Account Number). Next, select “Claim (Form 31, Form 19, Form 10C and Form 10D)” by clicking on the “Online Services Tab.” Click “Verify” after entering the bank account number associated with your Provident Fund account."
    },
    {
        "question": "What is the PF annual return?",
        "answer": "It is the procedure for sending the EPFO the PF returns. These returns include details on the total earnings, number of employees, and PF account numbers, as well as information about the employer and employee’s contributions to the Provident Fund."
    },
    {
        "question": "What is the return of EPF per year?",
        "answer": "Every year, the interest rate on EPF is reviewed. For the fiscal year 2023–2024, the EPF interest rate is 8.15%."
    },
    {
        "question": "What happens to PF after 5 years?",
        "answer": "When an account holder prematurely withdraws their PF amount, they might also reduce their tax obligation. Withdrawals are typically subject to TDS. But, as per the updated EPF withdrawal guidelines for 2024, there won’t be any TDS applied to fund withdrawals made after at least five years of service."
    },
    {
        "question": "What is the PF deduction for 25000 salary?",
        "answer": "You will contribute Rs. 3,000 per month, or 12% of Rs. 25,000, to the Employee Provident Fund (EPF). The monthly contribution made by your company to your EPF is Rs. 917.50, or 3.67% of Rs. 25,000."
    },
    {
        "question": "Does PF interest stop after 3 years?",
        "answer": "The tenure of membership is not limited. One can maintain their membership even after departing the establishment. But if a PF account is left unfunded for three years in a row, the account will no longer be eligible for interest payments three years after the contributions ceased."
    },
    {
        "question": "How is PF calculated above 15000?",
        "answer": "Employees making more than Rs. 15,000 a month, however, are still free to make voluntary contributions. Employer and employee contributions to the Employee Provident Fund (EPF) total 12% of the employee’s base pay + dearness allowance."
    },
    {
        "question": "Are PF returns tax free?",
        "answer": "Normally, interest received on EPF contributions is tax-free, but starting in FY 2021–2022, if it is above a threshold set by the EPFO, it will be subject to taxation. For most employees, the cap is Rs 2.5 lakh; for government employees, who do not get employer contributions to EPF, it is Rs 5 lakh."
    }
]


  
const Home = () => {
    return (
        <div className='services-pages pf-return'>
            <Head>
                <title>Step by step process to fill PR Return Filing online</title>
                <meta name="description" content="All businesses that have registered for employee provident funds are required to file a PF return each month." />
                <link rel="canonical" href="https://www.registerkaro.in/pf-return" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Step by step process to fill PR Return Filing online" />
                <meta property="og:description" content="All businesses that have registered for employee provident funds are required to file a PF return each month." />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is PF?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Who can apply for PF?</h2>
            <div className='heading-line'></div>
            <WhoCan />
            <h2 className='main-heading'>Why to opt for PF Return?</h2>
            <div className='heading-line'></div>
            <WhyOpt />
            <h2 className='main-heading'>Documents required for PF Return</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>Forms to be familiar with for PF Return</h2>
            <div className='heading-line'></div>
            <Forms />
            <h2 className='main-heading'>How to file PF Return?</h2>
            <div className='heading-line'></div>
            <File />
            <h2 className='main-heading'>Consequences of non-filing of PF Return</h2>
            <div className='heading-line'></div>
            <Consequences />
            <h2 className='main-heading'>Key points to remember for PF Return</h2>
            <div className='heading-line'></div>
            <KeyPoints />
            <h2 className='main-heading'>Why Choose RegisterKaro for your PF Return?</h2>
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