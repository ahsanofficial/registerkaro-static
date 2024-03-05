import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Benefits } from '../components/static/firm-registration/Benefits'
import { Documents } from '../components/static/firm-registration/Documents'
import { Hero } from '../components/static/firm-registration/Hero'
import { Process } from '../components/static/firm-registration/Process'
import { StepsForRegistering } from '../components/static/firm-registration/StepsForRegistering'
import { Structure } from '../components/static/firm-registration/Structure'

const faq = [
    {
        "question": "What is the first step in registering a firm?",
        "answer": "The first step in registering a firm is the choice of business structure- LLP, Partnership or Sole Proprietorship and checking the availability of the desired name."
    },
    {
        "question": "How do I check the availability of a business name?",
        "answer": "Availability of names can be checked via the online portal that is the MCA website or through the business office in the jurisdiction. One needs to ensure that the name chosen is unique and complies with the regulations of choosing the name."
    },
    {
        "question": "Documents required for firm registration?",
        "answer": "Documents required may vary from the business structure but common documents that are required are an Adhar Card, proof of address, LLP Agreement/ Partnership."
    },
    {
        "question": "Can I register a firm online?",
        "answer": "Yes, a firm can be registered online depending on the jurisdiction if it is allowed Registering online is a better choice and helps to streamline the process."
    },
    {
        "question": "How long does it take to register a firm?",
        "answer": "The time taken for registration depends upon the jurisdiction and the complexity of the application. It may range from a few days to a few weeks. It can be done faster if the right approach and guidance are taken."
    },
    {
        "question": "Can I register my firm without any professional assistance?",
        "answer": "Yes, a firm may be registered without any professional assistance. However, it is always advisable to seek professional help to make the process faster and make sure the process is properly complied with."
    },
    {
        "question": "Do I need to obtain a separate bank account for my firm?",
        "answer": "Though not compulsory, it is always advisable to obtain a separate bank account for the firm, doing this would maintain a clear separation between personal and professional finances."
    },
    {
        "question": "How do I renew my firm's registration?",
        "answer": "Renewal is subject to the jurisdiction of the firm, in some jurisdictions, periodic renewal is necessary whereas, in some jurisdictions, once registration is done there is no need for renewal unless significant changes are made in the business."
    }
];


const Home = () => {
    return (
        <div className='services-pages firm-reg'>
            <Head>
                {/* <title>Private Limited Company Registration | RegisterKaro</title> */}
                {/* <meta name="description" content="The Official RegisterKaro" /> */}
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> */}
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Firm Registration</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Structure of Business</h1>
            <div className='heading-line'></div>
            <Structure/>
            <h1 className='main-heading'>Documents needed for Registering a firm</h1>
            <div className='heading-line'></div>
            <Documents/>
            <h1 className='main-heading'>Steps for Registering a Firm:</h1>
            <div className='heading-line'></div>
            <StepsForRegistering/>
            <h1 className='main-heading'>Benefits of Registering a Firm</h1>
            <div className='heading-line'></div>
            <Benefits/>
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
        </div>
    )
}
export default Home