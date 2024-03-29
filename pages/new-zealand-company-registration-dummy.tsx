import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../components/static/new-zealand-company-registration/DocumentRequired'
import { Hero } from '../components/static/new-zealand-company-registration/Hero'
import { Process } from '../components/static/new-zealand-company-registration/Process'
import { ProcessCompany } from '../components/static/new-zealand-company-registration/ProcessCompany'
import { Types } from '../components/static/new-zealand-company-registration/Types'
import { WhyChoose } from '../components/static/new-zealand-company-registration/WhyChoose'
import { Prerequisites } from '../components/static/new-zealand-company-registration/Prerequisites'
import { WhyBene } from '../components/static/new-zealand-company-registration/WhyBene'

const faq =[
    {
        "question": "Can Foreigner register a company in New Zealand?",
        "answer": "Yes, foreigners who are not citizens are allowed to form companies and conduct business in New Zealand. But in order to invest or launch a business in the nation, you'll need to obtain the necessary visa, which can mean moving there first."
    },
    {
        "question": "What are the benefits of registering a company in New Zealand?",
        "answer": "There are various benefits of starting a business in New Zealand such as its economic stability, strategic location, highly tech infrastructure, government schemes, policies, etc."
    },
    {
        "question": "How much does it cost to start a business in New Zealand?",
        "answer": "The average cost for company registration in New Zealand costs somewhere $200 which does not include professional fees. The costing might differ under certain circumstances depending on the nature of the business, type of business, etc."
    },
    {
        "question": "What is a New Zealand Companies Register number?",
        "answer": "All Kiwi firms can obtain a New Zealand Business Number (NZBN), which is an internationally unique identity. NZBNs have been assigned to registered companies, and they are immediately listed on the NZBN Register. Your NZBN can be located by searching nzbn.govt.nz or by looking through the Companies Register."
    },
    {
        "question": "Do foreign companies pay tax in NZ?",
        "answer": "New Zealand companies do pay taxes on their worldwide income, however, the non-resident companies along with the branch offices do pay taxes only for the New Zealand sources income depending on the DTA applicability."
    },
    {
        "question": "How long does it take to register a company in NZ?",
        "answer": "One has 20 working days to finish the incorporation of your New Zealand company after reserving a name. This involves submitting consent forms that have been signed by each director and shareholder."
    },
    {
        "question": "What are the types of companies in New Zealand?",
        "answer": "There are various forms of companies in New Zealand such as Limited Partnership, Public limited Company, Private Limited Company, Branch Office, etc."
    },
    {
        "question": "How much is GST in NZ?",
        "answer": "Tāke hokohoko/Goods and services tax, or GST of 15% is applicable on business in New Zealand if you are a seller of goods or service."
    }
]


  
const Home = () => {
    return (
        <div className='services-pages new-zealand-comp-reg'>
            <Head>
                <title>Company Registration in New Zealand</title>
                <meta name="description" content="Get your business up and running in New Zealand seamlessly with our professional company registration services. Start your venture with Registerkaro." />
                <link rel="canonical" href="https://www.registerkaro.in/new-zealand-company-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Company Registration in New Zealand" />
                <meta property="og:description" content="Get your business up and running in New Zealand seamlessly with our professional company registration services. Start your venture with Registerkaro." />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Company Registration in New Zealand</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Why start a business in New Zealand?</h2>
            <div className='heading-line'></div>
            <WhyBene />
            <h2 className='main-heading'>Types of companies for Company Registration in New Zealand</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Documents to carry for registration process</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>Company registration Process in New Zealand</h2>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h2 className='main-heading'>Prerequisites of Company Registration </h2>
            <div className='heading-line'></div>
            <Prerequisites />
            <h2 className='main-heading'>Why Choose RegisterKaro for Company Registration in New Zealand?</h2>
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