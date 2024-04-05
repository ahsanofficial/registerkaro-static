import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/tds-return-filing/Hero'
import { Process } from '../components/static/tds-return-filing/Process'
import Deadlines from '../components/static/tds-return-filing/Deadlines'
import { ProcessBtn } from '../components/static/tds-return-filing/ProcessBtn'
import Rates from '../components/static/tds-return-filing/Rates'
import Happens from '../components/static/tds-return-filing/Happens'
import Eligible from '../components/static/tds-return-filing/Eligible'
import Forms from '../components/static/tds-return-filing/Forms'
import HowDoes from '../components/static/tds-return-filing/HowDoes'

const faq = [
    {
        "question": "How is the TDS return filed?",
        "answer": "",
        "list":[
            "Step 1- Check the official e-filing portal and tap on ‘Login Here.’",
            "Step 2- Enter either your TAN or user ID with a password.",
            "Step 3- Click ‘Login,’ click on the ‘TDS’ section, and select ‘Upload TDS.’",
            "Step 4- In the given form, check the relevant statement details [such as the FVU version, Form name, financial year, upload type, quarter]",
            "Step 5- Select ‘Validate’ to check the statement details.",
            "Step 6- Upload the TDS statement along with your DSC (Digital Signature Certificate).",
            "Step 7- Upload the ZIP file for the TDS statement.",
            "Step 8- Attach a signature file and Click ‘Upload.’",
        ]
    },
    {
        "question": "What are the four types of TDS return?",
        "answer": "Four types of TDS include TDS at Salary Income, TDS at non-salary income, TDS at payment against immovable property, and TDS at income from interest, dividends, etc.",
    },
    {
        "question": "What is 24Q and 26Q?",
        "answer": "",
        "list":["Form 24Q: Used as a statement of TDS on Salary Income","Form 26Q: Used as a statement of TDS on non-salary Income"]
    },
    {
        "question": "Who is eligible for a TDS refund?",
        "answer": "If you have made financial declarations at the beginning of the year, which tend to be lower than the investment bucket at the end of the year, then you are eligible to file a claim for a TDS Refund."
    },
    {
        "question": "How to file TDS step by step?",
        "answer": "",
        "list":[
            "Step 1- Check the official e-filing portal and tap on ‘Login Here.’",

            "Step 2- Enter either your TAN or user ID with a password.",
            
            "Step 3- Click ‘Login,’ click on the ‘TDS’ section, and select ‘Upload TDS.’",
            
            "Step 4- In the given form, check the relevant statement details [such as the FVU version, Form name, financial year, upload type, quarter]",
            
            "Step 5- Select ‘Validate’ to check the statement details.",
            
            "Step 6- Upload the TDS statement along with your DSC (Digital Signature Certificate).",
            
            "Step 7- Upload the ZIP file for the TDS statement.",
            
            "Step 8- Attach a signature file and Click ‘Upload.’",
        ]
    },
    {
        "question": "What is the TDS rule?",
        "answer": "TDS was introduced by the government to collect the tax at the very source of income that is rendered to the receiver. A person or deductor who is liable to pay the deductee a certain amount of money in return for service then remits the deducted amount to the account of the central government on behalf of the deductee."
    },
    {
        "question": "Is TDS filed every month?",
        "answer": "No, TDS is only filed quarterly following the months of July, October, January, and May."
    },
    {
        "question": "What is the TDS in salary?",
        "answer": "TDS is a practice of deducting Tax by the employer before crediting the salary of the employees and then remitting it to the government on behalf of the employees. This is known as TDS in Salary."
    },
    {
        "question": "In which month TDS is filed?",
        "answer": "TDS can be filed quarterly following the given due dates:",
        "list":[
            "Quarter 1: 31st July",
            "Quarter 2: 31st October",
            "Quarter 3: 31st Jan",
            "Quarter 4: 31st May",
        ]
    },
    {
        "question": "What happens if I file TDS late?",
        "answer": "In case you do not file a TDS return or delay in filing the TDS Return, then you’ll be liable to pay late fees under Section 234E and a penalty as per Section 271H."
    }
]


  
const Home = () => {
    return (
        <div className='services-pages tds-return-filing-reg'>
            <Head>
                <title>Tds return filing- Eligibility and Process</title>
                <meta name="description" content="Complete your TDS return filing on-time and avoid penalties. E-filing done by Top Accountants and TAX experts" />
                <link rel="canonical" href="https://www.registerkaro.in/tds-return-filing" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Tds return filing- Eligibility and Process" />
                <meta property="og:description" content="Complete your TDS return filing on-time and avoid penalties. E-filing done by Top Accountants and TAX experts" />
            </Head>
            <Hero />
            <h1 className='main-heading'>Understand TDS Return filing</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Are you eligible for a TDS Return?</h2>
            <div className='heading-line'></div>
            <Eligible />
            <h2 className='main-heading'>Forms you need to know for TDS Return Filing</h2>
            <div className='heading-line'></div>
            <Forms />
            <h2 className='main-heading'>Check the deadlines</h2>
            <div className='heading-line'></div>
            <Deadlines />
            <h2 className='main-heading'>Process of TDS Return filing</h2>
            <div className='heading-line'></div>
            <ProcessBtn />
            <h2 className='main-heading'>Few common TDS Rates</h2>
            <div className='heading-line'></div>
            <Rates />
            <h2 className='main-heading'>What happens when you do late TDS Filing?</h2>
            <div className='heading-line'></div>
            <Happens />
            <h2 className='main-heading'>How does RegisterKaro help in the process?</h2>
            <div className='heading-line'></div>
            <HowDoes />
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