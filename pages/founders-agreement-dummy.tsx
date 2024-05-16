import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/founders-agreement/Hero'
import { Process } from '../components/static/founders-agreement/Process'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { Components } from '../components/static/founders-agreement/Components'
import WhyChooseReg from '../components/static/founders-agreement/WhyChooseReg'
import DocumentsReq from '../components/static/founders-agreement/DocumentsReq'
import { ProcessStep } from '../components/static/founders-agreement/ProcessStep'
import TerminateMeaning from '../components/static/founders-agreement/TerminateMeaning'

const faq = [
    {
        "question": "What is a Founders’ Agreement?",
        "answer": "It is a legal document that defines the roles, responsibilities, and ownership of each founder in a business. It also covers important aspects such as intellectual property, decision making, dispute resolution, exit strategy, and more."
    },
    {
        "question": "Why do I need an Agreement of Founders?",
        "answer": "A Founders’ Agreement is essential for any startup that wants to establish a clear and fair relationship among the co-founders and set the foundation for a successful venture. A Founders’ Agreement can help you to: Protect your rights and interests as a founder. Clarify the expectations and contributions of each co-founder. Avoid future disputes and conflicts with your partners. Align your vision and goals with your co-founders. Secure your intellectual property and confidential information. Plan for contingencies and exit scenarios."
    },
    {
        "question": "When should I make a Founders’ Agreement?",
        "answer": "You should make a Founders’ Agreement as soon as possible, preferably before you start working on your business idea or raising funds. The earlier you make a Founders’ Agreement, the easier it will be to negotiate and agree on the terms and conditions with your co-founders."
    },
    {
        "question": "How can I make a Founders’ Agreement?",
        "answer": "You can make an Agreement with the help of a professional and affordable service like Registerkaro. We have a team of experienced and qualified lawyers who can help you draft and register your Founders’ Agreement as per your business needs and goals. You can contact us and share your business details and co-founders information, and we will take care of the rest."
    },
    {
        "question": "What are the documents required for a Founders’ Agreement?",
        "answer": "To prepare and register your Agreement, you will need to provide us with the following documents: PAN card and Aadhaar card of all the co-founders. Passport size photographs of all the co-founders. Business name and address proof. Business registration certificate (if applicable). Business plan and financial projections. Any other document as per the nature and scope of your business."
    },
    {
        "question": "How long does it take to get an Agreement?",
        "answer": "It usually takes around 7 to 10 working days to get your Agreement done with Registerkaro. However, the exact time may vary depending on the complexity and scope of your business and the availability of the co-founders for signing the agreement."
    },
    
    {
        "question": "How much does it cost to get an Agreement of Founders?",
        "answer": "The cost of getting an Agreement with Registerkaro depends on the number of co-founders and the type and size of your business. You can contact us and get a free quote for your Agreement service. We assure you that we offer the most competitive and reasonable prices in the market."
    },
];



const Home = () => {
    return (
        <div className='services-pages founders-agreement'>
            <Head>
                <title>Founders’ Agreement | RegisterKaro</title>
                <meta name="description" content="A Founders’ Agreement is a legal document that defines the roles, responsibilities, and ownership of each founder in a business." />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> */}
            </Head>
            <Hero />
            <h1 className='main-heading'>What is Founders’ Agreement?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Components of Founders’ Agreement</h2>
            <div className='heading-line'></div>
            <Components/>
            <h2 className='main-heading'>Documents Required for Founders’ Agreement</h2>
            <div className='heading-line'></div>
            <DocumentsReq/>
            <h2 className='main-heading'>Procedure for Drafting Founders’ Agreement</h2>
            <div className='heading-line'></div>
            <ProcessStep/>
            <h2 className='main-heading'>Meaning of Terminating Founders’ Agreement</h2>
            <div className='heading-line'></div>
            <TerminateMeaning/>
            <h2 className='main-heading'>Why choose Registerkaro for Founders’ Agreement service?</h2>
            <div className='heading-line'></div>
            <WhyChooseReg/>
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