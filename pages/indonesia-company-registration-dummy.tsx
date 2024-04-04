import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../components/static/indonesia-company-registration/DocumentRequired'
import { Hero } from '../components/static/indonesia-company-registration/Hero'
import { Process } from '../components/static/indonesia-company-registration/Process'
import { ProcessCompany } from '../components/static/indonesia-company-registration/ProcessCompany'
import { Types } from '../components/static/indonesia-company-registration/Types'
import { WhyChoose } from '../components/static/indonesia-company-registration/WhyChoose'
import { Benefits } from '../components/static/indonesia-company-registration/Benefits'
import { Prerequisites } from '../components/static/indonesia-company-registration/Prerequisites'

const faq = [
    {
        "question": "How much does it cost to register a company in Indonesia?",
        "answer": "The incorporation of a PT firm in Indonesia may cost about IDR 17,000,000. On the other hand, PT PMA firm incorporation could cost up to IDR 30,000,000."
    },
    {
        "question": "Can foreigners set up a company in Indonesia?",
        "answer": "Yes, foreigners can register a company in Indonesia. However, based on the nature of the business and the nationality of the foreigner, other rules and specifications may apply. It frequently entails forming a partnership with a local organization or a PT PMA (Foreign-Owned Limited Liability Company)."
    },
    {
        "question": "How do I verify a company in Indonesia?",
        "answer": "The simplest method is to search for a company name at https://companieshouse.id. If the firm is not present, it is either not yet registered or is undergoing a reorganization."
    },
    {
        "question": "How much is Indonesian company tax?",
        "answer": "For the fiscal year 2023, Indonesia has set a corporate income tax rate of 22%. The Harmonized Tax Law, which has completely redesigned the nation's tax code, governs the system. Indonesia's tax system has been redesigned under Law No. 7/2021, often known as the Harmonized Tax Law (HTL)."
    },
    {
        "question": "Is Indonesia a good country to start a business?",
        "answer": "With a middle class that is expanding, a population of over 270 million, and a nominal GDP of over USD 1 trillion, Indonesia is a very alluring place to launch a business because of its sizable, easily accessible, and expanding market."
    },
    {
        "question": "How long does it take to register a company in Indonesia?",
        "answer": "Establishing a PT PMA typically takes One to six months. A PT PMA needs a minimum capital of IDR 110 billion and requires a flat deposit of IDR 10 billion upfront. To establish a foreign owned company (PT PMA), the following paperwork is needed- Approved name of the company."
    },
    {
        "question": "Can you own a company in Indonesia?",
        "answer": "Foreigners are prohibited from opening any company structure that is permitted by Indonesian law. In reality, there are just three company forms that would enable you to operate a business in Indonesia as a foreigner and generate revenue from it."
    },
    {
        "question": "What is LLC in Indonesia?",
        "answer": "The most popular kind of company entity utilized by locals to conduct business in Indonesia is the Indonesian LLC (Perseroan Terbatas). I) At least one director, two native Indonesian shareholders, and one commissioner are necessary for an Indonesian PT where the commissioner may not be a resident of the area."
    },
    {
        "question": "Why start a business in Indonesia?",
        "answer": "With a GDP of US$1319.10 billion in 2022, Indonesia has one of the biggest economies in all of Asia. Numerous economic prospects are made possible by the nation's abundance of natural resources and raw commodities, which include gas, oil, palm oil, and coffee."
    }
]

  
const Home = () => {
    return (
        <div className='services-pages indonesia-company-reg'>
           <Head>
                <title>Company Indonesia in Ireland | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/indonesia-company-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Company Registration in Ireland | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Company Registration in Indonesia</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Benefits of Starting a Business in Indonesia</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className='main-heading'>Types of Companies for Company Registration in Indonesia</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Documents to carry for registration process</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>Company Registration Process in Indonesia</h2>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h2 className='main-heading'>Types of taxes applicable in Indonesia</h2>
            <div className='heading-line'></div>
            <Prerequisites />
            <h2 className='main-heading'>Why Choose RegisterKaro for Company Registration in Indonesia?</h2>
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