import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/master-service-agreement/Hero'
import { Process } from '../components/static/master-service-agreement/Process'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { Importance } from '../components/static/master-service-agreement/Importance'
import ThingsInMSA from '../components/static/master-service-agreement/ThingsInMSA'
import { ProcessStep } from '../components/static/master-service-agreement/ProcessStep'
import { WhyChoose } from "../components/static/master-service-agreement/WhyChoose"

const faq = [
    {
        "question": "Main purpose of MSA?",
        "answer": "MSA is an agreement among two or more parties that sets the terms and conditions for all present and upcoming activities and responsibilities. It aids in future planning and expedites the approval of future agreements."
    },
    {
        "question": "What’s the difference between MSA & SLA agreement?",
        "answer": "MSAs tend to be broader compared to SLAs, which are more specific and precise in terms of service level agreements."
    },
    {
        "question": "What’s included in MSA?",
        "answer": "An MSA, essential for businesses, defines responsibilities and obligations of all parties. This contract establishes the terms of a service agreement, covering services, pricing, payment, ownership, and other details."
    },
    {
        "question": "What’s does an MSA do?",
        "answer": "An MSA, essential for businesses, defines responsibilities and obligations of all parties. This contract establishes the terms of a service agreement, covering services, pricing, payment, ownership, and other details."
    },
    {
        "question": "Does a service agreement legal in India?",
        "answer": "Service agreements in India are just as binding as any other contract, following the general principles of contract laid out in the Indian Contract Act 1872, as long as they adhere to current laws and public policy."
    },
];



const Home = () => {
    return (
        <div className='services-pages master-service-agreement'>
            <Head>
                <title>Master Service Agreement</title>
                <meta name="description" content="An essential contract, known as a master service agreement (MSA), outlines the relationship scope between two parties, including terms and conditions for current and future activities and responsibilities." />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <h1 className='main-heading'>Master Service Agreement</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Why MSA is important</h2>
            <div className='heading-line'></div>
            <Importance />
            <h2 className='main-heading'>Things to be Present in MSA</h2>
            <div className='heading-line'></div>
            <ThingsInMSA />
            <h2 className='main-heading'>How to Make MSA?</h2>
            <div className='heading-line'></div>
            <ProcessStep />
            <h2 className='main-heading'>How RegisterKaro helps you in the Registration process?</h2>
            <div className='heading-line'></div>
            <WhyChoose />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
        </div>
    )
}
export default Home;