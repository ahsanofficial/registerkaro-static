import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../components/static/rera-registration/DocumentRequired'
import Eligibility from '../components/static/rera-registration/Eligibility'
import { Hero } from '../components/static/rera-registration/Hero'
import { Process } from '../components/static/rera-registration/Process'
import { ProcessCompany } from '../components/static/rera-registration/ProcessCompany'
import { WhyChoose } from '../components/static/rera-registration/WhyChoose'
import WhyOpt from '../components/static/rera-registration/WhyOpt'

const faq = [
    {
        "question": "What is RERA registration fees in Maharashtra?",
        "answer": "The project registration fees at RERA Maharashtra for individual real estate brokers are Rs. 10,000 for up to 1000 sq. m. or 12 units."
    },
    {
        "question": "What are the requirements for up RERA registration?",
        "answer": "You need following documents for RERA Registration: PAN Card, Previous balance sheet year, Income Tax Returns over the last three years, Copy of the project plan, The project’s parking lot count, the promoter’s or land’s title deed, Impediment a certificate pertaining to the project or the property it is built on."
    },
    {
        "question": "What are the benefits of RERA registered agent?",
        "answer": "There are many benefits of RERA Registered Agent such as gaining the trust and confidence of buyers, enhanced transparency in real estate transactions, authorized aid for the real estate market, etc."
    },
    {
        "question": "What are the disadvantages of RERA for builders?",
        "answer": "Few of disadvantages faced by a RERA includes loss of interest of builders in Real estate projects due to tight rules and limited profit. Although real estate has significant employability potential, job possibilities are lost because developers are discouraged by RERA."
    },
    {
        "question": "Is RERA approval enough to buy property?",
        "answer": "For buyers of real estate, RERA clearance is crucial since it provides responsibility, transparency, and protection. By upholding the predetermined requirements, the approval criteria are intended to guarantee the highest calibre of the property."
    },
    {
        "question": "What happens if RERA is rejected?",
        "answer": "Rejecting a developer’s RERA application may cause delays in the project’s launch. Financial losses may arise from this delay, particularly if the developer has already committed a significant amount of resources."
    },
    {
        "question": "What if RERA is expired?",
        "answer": "If a sale deed is completed after the RERA registration has ended but before this registration has been extended, what will happen to it? A sale agreement that is completed after the RERA registration has ended but before this registration has been extended is deemed void. It is not enforceable."
    },
    {
        "question": "What is RERA and its benefits?",
        "answer": "In the Indian real estate industry, RERA, or the Real Estate Regulatory Authority, has changed the game. As an oversight organisation that guarantees openness, responsibility, and safeguarding of real estate purchasers, it is essential in defending the interests of all parties involved in the house-buying procedure."
    },
    {
        "question": "Why do we need RERA?",
        "answer": "By requiring builders and developers to furnish timely, accurate, and thorough information about the project so that buyers can make an informed decision when purchasing any property, RERA ensures the highest level of transparency in every real estate transaction."
    },
    {
        "question": "Why is RERA certificate important?",
        "answer": "The builder’s trustworthiness is enhanced by the RERA certificate. provide details on the real estate project or the property. makes certain that developers and builders adhere to the guidelines that they specify."
    }
]


  
const Home = () => {
    return (
        <div className='services-pages rera-reg'>
           <Head>
                <title>Rera Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/trademark-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Trademark Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Online RERA Registration in India</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Why to opt for RERA Registration Certificate?</h2>
            <div className='heading-line'></div>
            <WhyOpt />
            <h2 className='main-heading'>Check your Eligibility for RERA Registration Certificate</h2>
            <div className='heading-line'></div>
            <Eligibility />
            <h2 className='main-heading'>Documents Required for RERA Registration</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>RERA Registration Process</h2>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h2 className='main-heading'>Why to choose RegisterKaro?</h2>
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