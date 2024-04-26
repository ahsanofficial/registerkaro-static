import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Benefits } from '../components/static/non-government-organisation/Benefits'
import { Eligibility } from '../components/static/non-government-organisation/Eigibility'
import { Hero } from '../components/static/non-government-organisation/Hero'
import { Process } from '../components/static/non-government-organisation/Process'
import { ProcessCompany } from '../components/static/non-government-organisation/ProcessCompany'
import { Types } from '../components/static/non-government-organisation/Types'
import { WhyChoose } from '../components/static/non-government-organisation/WhyChoose'
import{Why} from '../components/static/non-government-organisation/Why'
import { Registration_Ngo } from '../components/static/non-government-organisation/Registration_Ngo'
import { TableCom } from '../components/static/non-government-organisation/TableCom';



const faq = [
    {
        "question": " What are the eligibility criteria for registering an NGO?",
        "answer": "Mainly, NGOs must primarily engage in charitable activities for the public good. Eligibility criteria vary based on the chosen legal structure."
    },
    {
        "question": "Can foreign nationals establish NGOs in India?",
        "answer": "Yes, foreign nationals can establish NGOs in India, subject to compliance with Foreign Contribution (Regulation) Act (FCRA) regulations."
    },
    {
        "question": "What are the tax benefits available to registered NGOs?",
        "answer": "Registered NGOs are eligible for tax exemptions under sections 12A, 80G, and 35AC of the Income Tax Act, 1961, for donations received and income generated."
    },
    {
        "question": " What are the documents required for NGO registration?",
        "answer": "Documents typically include identity and address proofs of founders, Memorandum and Articles of Association, and proof of registered office address."
    },
    {
        "question": " How long does it take to register an NGO in India?",
        "answer": "The registration process may take anywhere from a few weeks to a few months, depending on the chosen legal structure and the efficiency of the regulatory authority"
    },
    {
        "question": "Can an NGO be registered for specific purposes or activities?",
        "answer": "Yes, NGOs can be registered for specific purposes or activities aligned with their charitable objectives, as outlined in the governing documents"
    },
    {
        "question": "Are there any compliance requirements post-registration?",
        "answer": "Yes, registered NGOs must comply with statutory filing requirements, maintain proper accounts and records, and adhere to regulations under FCRA, if applicable."
    },
    {
        "question": "Can an NGO change its legal structure after registration?   ",
        "answer": "Yes, subject to compliance with legal requirements and obtaining necessary approvals, NGOs can change their legal structure through a process of conversion or re-registratio"
    }
]


  
const Home = () => {
    return (
        <div className='services-pages qatar-reg'>
            <Head>
                <title>Non-Government Organisation,NGO Registration</title>
                <meta name="description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
                <link rel="canonical" href="https://www.registerkaro.in/qatar-company-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Get Started with Company Registration in Qatar" />
                <meta property="og:description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
            </Head>
            <Hero />
            <h1 className='main-heading'>Introduction:</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Legal Framework for NGOs in India:</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className='main-heading'>Different Types of NGOs:</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>What eligibility criteria should be for the formation of an NGO?</h2>
            <div className='heading-line'></div>
            <Eligibility />
            <h2 className='main-heading'>Online Registration Process for NGOs:</h2>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h2 className='main-heading'>List of Documents Needed for NGO Registration:</h2>
            <div className='heading-line'></div>
            <Why />
            <h2 className='main-heading'>Benefits of Registration NGOs:</h2>
            <div className='heading-line'></div>
            <Registration_Ngo/>
            <h2 className='main-heading'>Differences between trusts, societies, and Section 8 companies.</h2>
            <div className='heading-line'></div>
            <TableCom/>

            <h2 className='main-heading'>How RegisterKaro Can Assist You in the ISP Licence Registration Process?</h2>
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