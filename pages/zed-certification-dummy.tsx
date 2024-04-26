import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/zed-certification/Hero'
import { Process } from '../components/static/zed-certification/Process'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { Objectives } from '../components/static/zed-certification/Objectives'
import Certificate from '../components/static/zed-certification/Certificate'
import { ProcessStep } from '../components/static/zed-certification/ProcessStep'
import { HowRegisterKaro } from '../components/static/zed-certification/HowRegisterKaro'
import Components from '../components/static/zed-certification/Components'
import Eligibility from '../components/static/zed-certification/Eligibility'
import Subsidy from "../components/static/zed-certification/Subsidy"
import DocumentReq from '../components/static/zed-certification/DocumentReq'
import CertificationProcess from '../components/static/zed-certification/CertificationProcess'
import Surveillance from '../components/static/zed-certification/Surveillance'
import Renewal from '../components/static/zed-certification/Renewal'

const faq = [
    {
        "question": "What is MSME Sustainable (ZED) Certification scheme?",
        "answer": "The goal of the MSME Sustainable (ZED) Certification program is to raise MSMEs' awareness of Zero Defect Zero Effect (ZED) practices, inspire and reward them for obtaining ZED Certification, and encourage them to take on the role of MSME Champions. MSMEs can significantly cut waste, boost output, raise environmental awareness, conserve energy, make the best use of natural resources, grow their markets, and more by pursuing ZED Certification."
    },
    {
        "question": "Is MSME Sustainable (ZED) Certification mandatory for MSMEs?",
        "answer": "ZED Certification is a voluntary program that offers MSMEs a path to global competitiveness; government certification is not required."
    },
    {
        "question": "What advantages does the ZED Certificate offer?",
        "answer": "",
        "list": ["To boost the company's credibility.", "Financial reward for accepting the ZED pledge.", "Bank waiver for certification.", "MSMEs that are UDYAM-registered may also apply."]
    },
    {
        "question": "Who grants MSMEs a ZED Certificate?",
        "answer": "The Quality Council of India (QCI) awards ZED Certification following a comprehensive assessment of MSME."
    },
];

const Home = () => {
    return (
        <div className='services-pages zed-certification'>
            <Head>
                <title>ZED Certification</title>
                <meta name="description" content="Microfinance in India supports low-income individuals by offering microloans, micro-savings, and microinsurance through non-profit organizations." />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <h1 className='main-heading'>Overview of ZED Certification</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Phases of ZED Certification</h2>
            <div className='heading-line'></div>
            <ProcessStep />
            <h2 className='main-heading'>Objectives of ZED Certificate</h2>
            <div className='heading-line'></div>
            <Objectives />
            <h2 className='main-heading'>Components of ZED Certification</h2>
            <div className='heading-line'></div>
            <Components />
            <h2 className='main-heading'>ZED Certification Level</h2>
            <div className='heading-line'></div>
            <Certificate />
            <h2 className='main-heading'>Eligibility for ZED Certification</h2>
            <div className='heading-line'></div>
            <Eligibility />
            <h2 className='main-heading'>Subsidy on cost of certification</h2>
            <div className='heading-line'></div>
            <Subsidy />
            <h2 className='main-heading'>Documents required for ZED Certificate</h2>
            <div className='heading-line'></div>
            <DocumentReq />
            <h2 className='main-heading'>ZED Certification Process</h2>
            <div className='heading-line'></div>
            <CertificationProcess />
            <h2 className='main-heading'>Surveillance under ZED Certification</h2>
            <div className='heading-line'></div>
            <Surveillance />
            <h2 className='main-heading'>Renewal of Certificate</h2>
            <div className='heading-line'></div>
            <Renewal />
            <h2 className='main-heading'>How RegisterKaro helps in getting ZED Certificate?</h2>
            <div className='heading-line'></div>
            <HowRegisterKaro/>
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