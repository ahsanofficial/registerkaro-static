import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/nsic-registration/Hero'
import { Process } from '../components/static/nsic-registration/Process'
import { WhyChoose } from '../components/static/nsic-registration/WhyChoose'
import { ProcessNSIC } from '../components/static/nsic-registration/ProcessNSIC'
import  Documents  from '../components/static/nsic-registration/Documents'
import  Schemes  from '../components/static/nsic-registration/Schemes'
import  Challenges  from '../components/static/nsic-registration/Challenges'
import  Eligible  from '../components/static/nsic-registration/Eligible'
import  Benefits  from '../components/static/nsic-registration/Benefits'

const faq = [
    {
        "question": "Who is eligible for NSIC registration?",
        "answer": "One falling into the given category is eligible for NSIC registration: Micro and Small Businesses who hold an EM Part-II (Optional), Udyog Aadhaar Memorandum (UAM), nascent businesses, Micro & Small Enterprises that have initiated their commercial production but have not yet reached their one-year anniversary of establishment."
    },
    {
        "question": "What is the difference between NSIC and Udyam registration?",
        "answer": "In contrast to Udyam, NSIC levies a small registration cost that is determined by turnover. It is not true that Udyam registration is required in order to register your firm with NSIC. According to certification: Every benefit provided by an NSIC certificate is also covered by an Udyam MSME certificate."
    },
    {
        "question": "What is the difference between MSME and NSIC?",
        "answer": "Since NSIC is a corporation under the Ministry of MSME, the MSME’s purview is expanded. NSIC is primarily concerned with the commercial expansion of micro and small businesses in the nation, while the Ministry of MSME serves the many business demands of all small-scale organizations."
    },
    {
        "question": "What are NSIC registration fees?",
        "answer": "The fee for NSIC registration falls to somewhere Rs 3000 for companies with 1 crore in revenue whereas small businesses with revenue under 1 crore are assessed a fee of Rs. 5000."
    },
    {
        "question": "What is the benefit of NSIC registration?",
        "answer": "NSIC registration allows the company to enjoy the benefits offered under the government schemes, free issuance of the tender sets, waiver of the need to pay an earnest money deposit (EMD), Participating MSEs in the tender who quote prices within the L1+15 percent price band may also supply up to 25% of the requirement by lowering their prices to L1 price, provided that L1 is made up of non-MSEs, etc."
    },
    {
        "question": "Is an NSIC certificate useful?",
        "answer": "Yes, NSIC Certificate helps you in availing different benefits offered by the government under different schemes, under the law, etc."
    },
    {
        "question": "Is NSIC a MSME?",
        "answer": "Under the Ministry of Micro, Small, and Medium Enterprises (MSME), National Small Industries Corporation (NSIC) is a Government of India enterprise certified under ISO 9001:2015. NSIC has been tasked with encouraging, supporting, and growing the nation’s micro, small, and medium-sized businesses. 1 crore in revenue is assessed a fee of Rs. 3000, whilst small businesses with revenue under 1 crore are assessed a fee of Rs. 5000."
    },
    {
        "question": "What is the purpose of NSIC?",
        "answer": "The NSIC was established to advance and grow the nation’s small-scale industries. The Government of India owns the business, which was later converted into a wholly-owned government entity and granted ISO 9001-2015 certification."
    },
    {
        "question": "What is the validity of NSIC registration?",
        "answer": "The NSIC Certificate awarded to MSMEs under Single Point Registration is valid for two years, after which it is renewed. It’s important to remember that the one-year validity of the provisional NSIC certificate awarded to MSMEs with a financial ceiling of INR 5 lakhs begins on the day the certificate is issued."
    }
]



  
const Home = () => {
    return (
        <div className='services-pages nsic-reg'>
            <Head>
                <title>Get online NSIC Registration in India</title>
                <meta name="description" content="Micro and Small Enterprises can participate in Govt. procurement by opting for NSIC Registration under the Single Point Registration Scheme." />
                <link rel="canonical" href="https://www.registerkaro.in/nsic-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Get online NSIC Registration in India" />
                <meta property="og:description" content="Micro and Small Enterprises can participate in Govt. procurement by opting for NSIC Registration under the Single Point Registration Scheme." />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is NSIC?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Benefits of NSIC Registration</h2>
            <div className='heading-line'></div>
            <Benefits/>
            <h2 className='main-heading'>Check if you are eligible for NSIC Registration</h2>
            <div className='heading-line'></div>
            <Eligible/>
            <h2 className='main-heading'>Challenges to experience in NSIC registration</h2>
            <div className='heading-line'></div>
            <Challenges/>
            <h2 className='main-heading'>Schemes pertaining to NSIC</h2>
            <div className='heading-line'></div>
            <Schemes/>
            <h2 className='main-heading'>Documents to carry with you</h2>
            <div className='heading-line'></div>
            <Documents/>
            <h2 className='main-heading'>Process of NSIC Registration</h2>
            <div className='heading-line'></div>
            <ProcessNSIC/>
            <h2 className='main-heading'>Why Choose RegisterKaro for NSIC Registration?</h2>
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