import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/small-scale-industries-registration/Hero'
import { Process } from '../components/static/small-scale-industries-registration/Process'
import Small from '../components/static/small-scale-industries-registration/Small'
import Eligibility from '../components/static/small-scale-industries-registration/Eligibility'
import Checklist from '../components/static/small-scale-industries-registration/Checklist'
import Documents from '../components/static/small-scale-industries-registration/Documents'
import Benefits from '../components/static/small-scale-industries-registration/Benefits'
import { Proceed } from '../components/static/small-scale-industries-registration/Proceed'
import HowRegisterKaro from '../components/static/small-scale-industries-registration/HowRegisterKaro'

const faq =[
    {
        "question": "Who is eligible for small scale industries?",
        "answer": "According to the MSMED Act, 2006, updated in July 2020 by the Finance Ministry, small businesses in India are categorized based on their capital investment and turnover. If your industry falls into any of these categories, then you are eligible for SSI Registration. Categories include: Micro-level industries with less than Rs. 1 Crore in machinery investments should have turnover below Rs. 5 Crores. Small-level industries with less than Rs. 10 Crore in machinery investments should have turnover below Rs. 50 Crores. Medium-level industries with less than Rs. 50 Crore in machinery investments should have turnover below Rs. 250 Crores."
    },
    {
        "question": "How can I register an SME in India?",
        "answer": "Anyone wishing to start a micro, small, or medium-sized business can apply for Udyam Registration online using the Udyam Registration portal. This process is based solely on self-declaration and does not need the uploading of any paperwork, certifications, or other supporting documentation."
    },
    {
        "question": "What are the benefits under SSI Registration?",
        "answer": "There are many benefits of SSI Registration such as easy loan access, lower loan rates, government schemes, tax benefits, and government tenders, etc."
    },
    {
        "question": "Are MSME and small scale industries the same?",
        "answer": "Indeed. Previous industries that produced, manufactured, and offered services on a micro- or small-scale were registered as Small Scale Industries (SSI). The MSME (Micro, Small and Medium Enterprises) Act was subsequently passed by the government in 2006."
    },
    {
        "question": "What is the validity of an SSI certificate?",
        "answer": "Initially, a provisional registration certificate is issued and after commencement of production, a permanent registration certificate is issued. The provisional registration certificate is valid for a period of 5 years and permanent registration is given in perpetuity."
    },
    {
        "question": "What is the limit of SSI in India?",
        "answer": "A small business is one that has a sales of little more than Rs. 50 crore and invests no more than Rs. 10 crore in plant, machinery, and equipment."
    },
    {
        "question": "What is an example of a small scale industry?",
        "answer": "There are many forms of small scale industries such as bakeries, beauty parlors, small toy manufacturers, pickle manufacturing, local snacks manufacturers, etc."
    },
    {
        "question": "What are the prerequisites for the Small Scale Industry?",
        "answer": "The prerequisites for the SSI registration demands the right structure chosen for the business, along with the location, machinery & equipment, product selection, Power & water connection, etc."
    }
]



  
const Home = () => {
    return (
        <div className='services-pages small-scale-industries-reg'>
            <Head>
                <title>Small Scale Industries Registration | RegisterKaro</title>
                <meta name="description" content="Companies with Small Scale Industries Registration are offered low interest rates loan for the operations which helps them to advance the growth and operations." />
                <link rel="canonical" href="https://www.registerkaro.in/small-scale-industries-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Small Scale Industries Registration | RegisterKaro" />
                <meta property="og:description" content="Companies with Small Scale Industries Registration are offered low interest rates loan for the operations which helps them to advance the growth and operations." />
            </Head>
            <Hero />
            <h1 className='main-heading'>What are all Small Scale Industries?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Types of Small Scale Industries</h2>
            <div className='heading-line'></div>
            <Small />
            <h2 className='main-heading'>Check your eligibility for Small Scale Industries Registration</h2>
            <div className='heading-line'></div>
            <Eligibility />
            <h2 className='main-heading'>Checklist for the Small Scale Industries Registration</h2>
            <div className='heading-line'></div>
            <Checklist />
            <h2 className='main-heading'>Documents you will need for Small Scale Industries Registration</h2>
            <div className='heading-line'></div>
            <Documents />
            <h2 className='main-heading'>Benefits to avail under Small Scale Industries Registration</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className='main-heading'>How to proceed with Small Scale Industries Registration?</h2>
            <div className='heading-line'></div>
            <Proceed />
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