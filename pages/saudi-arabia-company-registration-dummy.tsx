import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Benefits } from '../components/static/saudi-arabia-company-registration/Benefits'
import { DocumentRequired } from '../components/static/saudi-arabia-company-registration/DocumentRequired'
import { Hero } from '../components/static/saudi-arabia-company-registration/Hero'
import { Process } from '../components/static/saudi-arabia-company-registration/Process'
import { ProcessCompany } from '../components/static/saudi-arabia-company-registration/ProcessCompany'
import { Types } from '../components/static/saudi-arabia-company-registration/Types'
import { WhyChoose } from '../components/static/saudi-arabia-company-registration/WhyChoose'
import PostRegistration from '../components/static/saudi-arabia-company-registration/PostRegistration'
import TypesofTaxes from '../components/static/saudi-arabia-company-registration/TypesofTaxes'

const faq = [
    {
        "question": "How much does it cost to register a company in Saudi Arabia?",
        "answer": "The registration fee for a limited liability corporation is 1,200 Saudi riyals, while it costs 1,600 Saudi riyals to form a joint stock company. Additionally, there is an incorporation fee of 800 Saudi riyals for businesses having a parent company branch in Egypt and 1,200 Saudi riyals for limited liability corporations."
    },
    {
        "question": "How can I check if a company is registered in Saudi Arabia?",
        "answer": "You can access the company registry using a web-based system offered by the Ministry of Commerce and Industry at http://eservices.mci.gov.sa/Eservices/Verification/PageVerify.aspx?docId=3. This system retrieves information about a corporation using its commercial registration number."
    },
    {
        "question": "Do companies pay tax in Saudi Arabia?",
        "answer": "Yes, companies in Saudi Arabia are subject to corporate income tax at a rate of 20% of the adjusted net earnings. Additionally, 2.5% of the company's Zakat base is levied for Zakat."
    },
    {
        "question": "How much money do I need to start a business in Saudi Arabia?",
        "answer": "To establish a company in Saudi Arabia, you need to register, obtain the necessary licenses, create a bank account, and deposit the share capital. The minimum share capital required for registration is SAR 50,000, approximately $13,000 USD."
    },
    {
        "question": "Is it easy to open a company in Saudi Arabia?",
        "answer": "Opening a company in Saudi Arabia involves registering it with the Saudi Arabian General Investment Authority (SAGIA) and fulfilling various documentation requirements. While it is possible for residents and expatriates to register a company, the process may involve some complexity."
    },
    {
        "question": "How many types of licenses are there in Saudi Arabia?",
        "answer": "Foreign businesses and individuals can apply for nine different categories of business licenses from the Saudi Arabian government: service, entrepreneurial, industrial, agricultural, real estate, mining, trading, and professional licenses."
    },
    {
        "question": "Is Saudi tax free income?",
        "answer": "In Saudi Arabia, there is no system of individual income taxation. Individuals whose income comes solely from employment are not subject to income tax. However, income from sources other than employment may be subject to entity or permanent establishment (PE) taxes."
    },
    {
        "question": "What is the gold tax in Saudi Arabia?",
        "answer": "Gold in Saudi Arabia is subject to a value-added tax (VAT) rate of 15%. However, higher purity levels of gold are subject to zero-rated supply, meaning they are taxed at a rate of 0%, while lower purity levels are taxed at the regular 15% rate."
    }
]


  
const Home = () => {
    return (
        <div className='services-pages saudi-arabia-reg'>
            <Head>
                <title>Get Started with Company Registration in Saudi Arabia</title>
                <meta name="description" content="description-Get your business up and running smoothly with our Saudi Arabia company registration services. This quick guide tells you which steps to take." />
                <link rel="canonical" href="https://www.registerkaro.in/trademark-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Get Started with Company Registration in Saudi Arabia" />
                <meta property="og:description" content="description-Get your business up and running smoothly with our Saudi Arabia company registration services. This quick guide tells you which steps to take." />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Company Registration in Saudi Arabia</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Benefits of starting a Business in Saudi Arabia</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className='main-heading'>Types of companies for Company Registration in Saudi Arabia</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Documents to carry for registration process</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>Process for Company registration in Saudi Arabia</h2>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h2 className='main-heading'>Post registration Compliances</h2>
            <div className='heading-line'></div>
            <PostRegistration />
            <h2 className='main-heading'>Types of Taxes you must know</h2>
            <div className='heading-line'></div>
            <TypesofTaxes />
            <h2 className='main-heading'>Why Choose RegisterKaro for Company Registration in Saudi Arabia?</h2>
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