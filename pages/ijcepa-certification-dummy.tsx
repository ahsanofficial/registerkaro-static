import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/ijcepa-certification/Hero'
import { Process } from '../components/static/ijcepa-certification/Process'
import { Benefits } from '../components/static/ijcepa-certification/Benefits'
import { FreeTradeAgreements } from '../components/static/ijcepa-certification/FreeTradeAgreements'
import { EligibilityCriteria } from '../components/static/ijcepa-certification/EligibilityCriteria'
import { DocumentReq } from '../components/static/ijcepa-certification/DocumentReq'
import { Procedure } from '../components/static/ijcepa-certification/Procedure'
import { Fees } from '../components/static/ijcepa-certification/Fees'
import { Renewal } from '../components/static/ijcepa-certification/Renewal'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'


const faq = [
    {
        "question": "What is the validity period of an IJCEPA Certificate?",
        "answer": "IJCEPA Certificate is valid for 12 months from the date of issue."
    },
    {
        "question": "What are other countries with which India has a Comprehensive Economic Preferential Agreement?",
        "answer": "India has signed the Comprehensive Economic Preferential Agreement with other countries also such as Singapore and South Korea, apart from Japan."
    },
    {
        "question": "What are the categories of Certificates of Origin?",
        "answer": "The categories of Certificate of Origin include the following— Preferential and Non-preferential."
    },
    {
        "question": "What is the purpose of a preferential Certificate of origin?",
        "answer": "A preferential Certificate of Origin is required to export to countries that are involved in trade agreements."
    },
    {
        "question": "What is the purpose behind obtaining an IJCEPA Certificate?",
        "answer": "Importers have to submit an IJCEPA Certificate issued by any competent authority of the exporting Party to claim preferential tariff treatment. And also, in order to claim preferential tariff treatment under GSP, the importers are required to submit a valid IJCEPA Certificate issued by the competent authority of the beneficiary party/country."
    },
    {
        "question": "What does it mean by importer?",
        "answer": "Importers are natural or judicial persons who import goods to the importing Party."
    },
    {
        "question": "What is the meaning of Fungible originating materials of a party?",
        "answer": "The Fungible Originating materials of a party means originating goods or materials of a party that are interchangeable for commercial purposes & whose properties are essentially identical."
    },
    {
        "question": "What is the eligibility criteria for IJCEPA certification?",
        "answer": "Goods must either be entirely obtained or produced in India or Japan or have a qualifying value content of at least 35% with all non-originating materials undergoing a change in tariff classification."
    },
    {
        "question": "What are the fees for obtaining IJCEPA registration?",
        "answer": "The government fee for IJCEPA registration is Rs. 736, along with a one-time registration fee of Rs. 500. Additionally, professional fees may range from Rs. 2000 to 3000."
    },
    {
        "question": "What is the procedure for obtaining the IJCEPA Certificate?",
        "answer": "The procedure involves application submission with necessary documents, payment of fees, and issuance of the certificate by the appropriate authority."
    },
]


const Home = () => {
    return (
        <div className='services-pages ijcepa-certification'>
            <Head>
                <title>IJCEPA CERTIFICATION | RegisterKaro</title>
                <meta name="description" content="The India-Japan Comprehensive Economic Partnership Agreement (IJCEPA) is a bilateral trade deal between India and Japan aimed at boosting economic cooperation, improving trade relations, and creating a favourable investment environment." />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <h1 className='main-heading'>Overview of the IJCEPA Certificate</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Benefits of the IJCEPA Certificate</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className='main-heading'>Other Free Trade Agreements</h2>
            <div className='heading-line'></div>
            <FreeTradeAgreements />
            <h2 className='main-heading'>Eligibility Criteria for the IJCEPA Certificate</h2>
            <div className='heading-line'></div>
            <EligibilityCriteria />
            <h2 className='main-heading'>Documents and Information Required for IJCEPA Certificate</h2>
            <div className='heading-line'></div>
            <DocumentReq />
            <h2 className='main-heading'>Procedure for Obtaining IJCEPA Certificate</h2>
            <div className='heading-line'></div>
            <Procedure />
            <h2 className='main-heading'>Fees for IJCEPA Registration</h2>
            <div className='heading-line'></div>
            <Fees />
            <h2 className='main-heading'>Import Export Code Validity and Renewal</h2>
            <div className='heading-line'></div>
            <Renewal />
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