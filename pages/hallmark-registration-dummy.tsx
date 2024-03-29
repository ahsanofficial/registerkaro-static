import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/hallmark-registration/Hero'
import { Process } from '../components/static/hallmark-registration/Process'
import Importance from '../components/static/hallmark-registration/Importance'
import ListDifferent from '../components/static/hallmark-registration/ListDifferent'
import NewMethods from '../components/static/hallmark-registration/NewMethods'
import DocumentRequired from '../components/static/hallmark-registration/DocumentRequired'
import Types from '../components/static/hallmark-registration/Types'
import { DifferentTable } from '../components/static/hallmark-registration/DifferentTable'
import { Procedure } from '../components/static/hallmark-registration/Procedure'
import { Fees } from '../components/static/hallmark-registration/Fees'
import Benefits from '../components/static/hallmark-registration/Benefits'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'

const faq = [
    {
        "question": "What is a Hallmark?",
        "answer": "A hallmark is a mark or symbol used to identify the source or quality of a product. It is often associated with authenticity, quality, and ownership."
    },
    {
        "question": "Why should I register a hallmark?",
        "answer": "Registering a hallmark provides legal protection and exclusive rights to use that mark for your brand or product. It helps prevent others from using it without your permission."
    },
    {
        "question": "What can be registered as a hallmark?",
        "answer": "Logos, symbols, words, phrases, or a combination thereof that distinguishes your brand or product can be registered as a hallmark."
    },
    {
        "question": "How long does hallmark registration take?",
        "answer": "The duration varies by country, but it can take several months to a few years for the registration process to complete."
    },
    {
        "question": "What rights do I get after hallmark registration?",
        "answer": "Registration grants you exclusive rights to use the mark for the specified goods/services and the ability to take legal action against unauthorized use."
    },
    {
        "question": "Can I use a hallmark without registration?",
        "answer": "Yes, you can use a hallmark without registration, but registration provides stronger legal protection and benefits."
    },
    {
        "question": "Can a hallmark be changed after registration?",
        "answer": "Changes to a registered hallmark can be made, but they often require a new application or amendment to the existing registration."
    }
]


const Home = () => {
    return (
        <div className='services-pages hallmark-regi'>
              <Head>
                <title>Hallmark Registration- Process | Documents Required</title>
                <meta name="description" content="Are you looking for Hallmark Registration in India? Then, you are at the right place. We offer Hallmark Registration at an affordable cost." />
                <link rel="canonical" href="https://www.registerkaro.in/increase-authorized-capital" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Hallmark Registration- Process | Documents Required" />
                <meta property="og:description" content="Are you looking for Hallmark Registration in India? Then, you are at the right place. We offer Hallmark Registration at an affordable cost." />
            </Head>
            <Hero />
            <h1 className='main-heading'>Apply for Hallmark Registration Online in India </h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Importance of Hallmark Registration Certification</h2>
            <div className='heading-line'></div>
            <Importance/>
            <h2 className='main-heading'>List of Different marks of a BIS Hallmark? Old Methods of Hallmarking</h2>
            <div className='heading-line'></div>
            <ListDifferent/>
            <h2 className='main-heading'>New Methods of Hallmarking</h2>
            <div className='heading-line'></div>
            <NewMethods/>
            <h2 className='main-heading'>Types of BIS Hallmarking Certificate</h2>
            <div className='heading-line'></div>
            <Types/>
            <h2 className='main-heading'>Different Types of Forms for Hallmark Registration</h2>
            <div className='heading-line'></div>
            <DifferentTable/>
            <h2 className='main-heading'>Documents Required for Hallmark Registration</h2>
            <div className='heading-line'></div>
            <DocumentRequired/>
            <h2 className='main-heading'>Procedure for Hallmark Registration in India</h2>
            <div className='heading-line'></div>
            <Procedure/>
            <h2 className='main-heading'>Hallmark Registration Fees</h2>
            <div className='heading-line'></div>
            <Fees/>
            <h2 className='main-heading'>Benefits of Hallmarked Gold</h2>
            <div className='heading-line'></div>
            <Benefits/>
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