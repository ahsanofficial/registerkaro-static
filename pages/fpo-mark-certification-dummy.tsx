import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { DocumentsRequired } from '../components/static/fpo-mark-certification/DocumentsRequired'
import { FPOMark } from '../components/static/fpo-mark-certification/FPOMark '
import { FoodProduct } from '../components/static/fpo-mark-certification/FoodProduct'
import { Hero } from '../components/static/fpo-mark-certification/Hero'
import { HowMuchTime } from '../components/static/fpo-mark-certification/HowMuchTime'
import { ProcedureGetFPO } from '../components/static/fpo-mark-certification/ProcedureGetFPO'
import { Process } from '../components/static/fpo-mark-certification/Process'
const faq = [
    {
        "question": "What is the FPO mark?",
        "answer": "The FPO mark is a certification granted in India, indicating that a food product complies with the standards set by the food products order"
    },
    {
        "question": "Who grants the FPO mark certification?",
        "answer": "The certification is typically granted by the Directorate of Marketing and Inspection under the Ministry of Agriculture and Farmers Welfare in India."
    },
    {
        "question": "Which products require the FPO mark?",
        "answer": "Various processed or packaged food products, including certain types of fruits and vegetables, dairy products, cereal products, spices, and more, many require the FPO mark."
    },
    {
        "question": "How long does it take to obtain the FPO mark?",
        "answer": "The duration varies based on the completeness of the application, product complexity, and the review process, typically taking a few months."
    }
]

const Home = () => {
    return (
        <div className='services-pages fpo-mark-certification-reg'>
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
            <h1 className='main-heading'>Get Online FPO Mark Certification in India</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Food Products Requiring FPO Mark</h1>
            <div className='heading-line'></div>
            <FoodProduct/>
            <h1 className='main-heading'>FPO Mark Certification Application</h1>
            <div className='heading-line'></div>
            <FPOMark/>
            <h1 className='main-heading'>Documents required for FPO Mark Certification</h1>
            <div className='heading-line'></div>
            <DocumentsRequired/>
            <h1 className='main-heading'>Procedure to get FPO Mark Certification</h1>
            <div className='heading-line'></div>
            <ProcedureGetFPO/>
            <h1 className='main-heading'>How much time does it takes to obtain the FPO mark?</h1>
            <div className='heading-line'></div>
            <HowMuchTime/>
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