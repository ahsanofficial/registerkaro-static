import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../components/static/malaysia-company-registration/DocumentRequired'
import { Hero } from '../components/static/malaysia-company-registration/Hero'
import { Process } from '../components/static/malaysia-company-registration/Process'
import { ProcessCompany } from '../components/static/malaysia-company-registration/ProcessCompany'
import { Types } from '../components/static/malaysia-company-registration/Types'
import { WhyChoose } from '../components/static/malaysia-company-registration/WhyChoose'
import { Benefits } from '../components/static/malaysia-company-registration/Benefits'
import { Prerequisites } from '../components/static/malaysia-company-registration/Prerequisites'
import Taxes from '../components/static/malaysia-company-registration/Taxes'
import PostRegistration from '../components/static/malaysia-company-registration/PostRegistration'

const faq = [
    {
        "question": "How much does it cost to register a company in Malaysia?",
        "answer": "SSM charges a minimum registration cost of MYR 1,000 to register a business in Malaysia in accordance with the Companies Act of 2016. Furthermore, an entrepreneur must cover a range of other costs, including those associated with opening a bank account and obtaining a business license."
    },
    {
        "question": "Can foreigners register a company in Malaysia?",
        "answer": "Foreign nationals are only permitted to create a private limited company (Sendirian Berhad, or 'Sdn Bhd') in Malaysia, according to the Company Commission of Malaysia (CCM). In Malaysia, sole proprietorships, enterprises, and limited liability corporations (LLPs) are exclusively open to Malaysian citizens and cannot be registered by foreigners."
    },
    {
        "question": "What are the requirements to set up a company in Malaysia?",
        "answer": "The minimum requirements for a company set up in Malaysia includes minimum 1 shareholders, two directors, registered office address, paid up capital, company charter, Directors’ details, shareholders’ details, etc."
    },
    {
        "question": "What is SSM registration in Malaysia?",
        "answer": "Only foreign nationals are permitted to create a private limited company (Sendirian Berhad, or 'Sdn Bhd') in Malaysia, according to the Company Commission of Malaysia (CCM). In Malaysia, sole proprietorships, enterprises, and limited liability corporations (LLPs) are exclusively open to Malaysian citizens and cannot be registered by foreigners."
    },
    {
        "question": "How much capital do I need to start a business in Malaysia?",
        "answer": "It's generally advised to have about RM 100,000 set aside as startup capital when starting a business in Malaysia. This sum ought to provide business owners with a precise notion of the loan amount they could have to obtain in order to pay these upfront expenses."
    },
    {
        "question": "Is it easy to register a company in Malaysia?",
        "answer": "Registering your company in Malaysia is quite an easy process for all whether you are a Malaysian or a foreign national. The process takes 2 -3 weeks on an average if there are no errors found in your application."
    },
    {
        "question": "Do small businesses need to register in Malaysia?",
        "answer": "In Malaysia, launching a business requires a valid business license. Permits, permissions, licenses, and registrations are all included even for a small business."
    },
    {
        "question": "How long does it take to register a company in Malaysia?",
        "answer": "A Malaysian company's incorporation procedure usually takes five to ten working days. It's crucial to remember that there are a number of variables that could affect the registration timetable, such as the veracity and applicability of the data submitted throughout the application procedure."
    },
    {
        "question": "Where can I register my company name in Malaysia?",
        "answer": "You have to register your company with SSM or Suruhanjaya Syarikat Malaysia if you are planning to start your business in Malaysia. The first step is to search for a company name and select a business structure. Afterwards, prepare your documents and file your application with the SSM."
    }
]

  
const Home = () => {
    return (
        <div className='services-pages malaysia-company-reg'>
            <Head>
                <title>Trademark Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/trademark-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Trademark Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Company Registration in Malaysia</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Why to start a business in Malaysia?</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className='main-heading'>Types of Companies in Malaysia</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Prerequisites for company registration in Malaysia</h2>
            <div className='heading-line'></div>
            <Prerequisites />
            <h2 className='main-heading'>Taxes applicable in Malaysia</h2>
            <div className='heading-line'></div>
            <Taxes />
            <h2 className='main-heading'>Documents to prepare for company registration in Malaysia</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>Process of Company Registration in Malaysia</h2>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h2 className='main-heading'>Post Registration Compliances in Malaysia</h2>
            <div className='heading-line'></div>
            <PostRegistration />
            <h2 className='main-heading'>Why Choose RegisterKaro for Company Registration in Malaysia?</h2>
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