import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { WhatIsGSP } from '../components/static/gsp-registration/WhatIsGSP'
// import { DocumentRequired } from '../components/static/gsp-registration/DocumentRequired'
import { Hero } from '../components/static/gsp-registration/Hero'
import { Process } from '../components/static/gsp-registration/Process'
// import { ProcessCompany } from '../components/static/gsp-registration/ProcessCompany'
// import { Types } from '../components/static/gsp-registration/Types'
import { WhyChoose } from '../components/static/gsp-registration/WhyChoose'
import { WhoIssues } from '../components/static/gsp-registration/WhoIssues'
import { Cumulation } from '../components/static/gsp-registration/Cumulation'
import { RegionalCumulation } from '../components/static/gsp-registration/RegionalCumulation'
import { RegionalCumulationGroups } from '../components/static/gsp-registration/RegionalCumulationGroups'
import { Procedure } from '../components/static/gsp-registration/Procedure'
import { DocumentRequired } from '../components/static/gsp-registration/DocumentRequired'
import { Benefits } from '../components/static/gsp-registration/Benefits'
import { DifferenceGSPnUsual } from '../components/static/gsp-registration/DifferenceGSPnUsual'

const faq = [
    {
        "question": "What is GSP registration?",
        "answer": "GSP registration allows eligible exporters to access preferential tariff treatment for their products in certain markets."
    },
    {
        "question": "Is GSP registration mandatory for all exporters?",
        "answer": "No, GSP registration is voluntary and depends on whether exporters want to avail themselves of preferential tariff benefits."
    },
    {
        "question": "Are all products eligible for GSP benefits?",
        "answer": "No, only products originating from beneficiary countries and meeting the rules of origin criteria qualify for GSP benefits."
    },
    {
        "question": "Is there a specific application process for GSP registration?",
        "answer": "Yes, exporters need to apply through the designated platform provided by the relevant authorities."
    },
    {
        "question": "Can any exporting company apply for GSP registration?",
        "answer": "Yes, as long as the company's products meet the eligibility criteria for GSP benefits."
    },
    {
        "question": "Is there a fee associated with GSP registration?",
        "answer": "No, GSP registration typically does not involve any fees."
    },
    {
        "question": "Are there any ongoing compliance requirements after obtaining GSP registration?",
        "answer": "Yes, exporters must ensure continued adherence to rules of origin and other regulatory requirements."
    },
    {
        "question": "Does GSP registration guarantee preferential treatment in all beneficiary countries?",
        "answer": "No, GSP benefits vary by country, and exporters must check the specific requirements of each market."
    },
    {
        "question": "Is GSP registration a one-time process?",
        "answer": "No, exporters may need to renew their GSP registration periodically, depending on the regulations of the importing country."
    },
    {
        "question": "Can GSP registration be revoked?",
        "answer": "Yes, if exporters fail to comply with ongoing regulatory requirements, their GSP registration may be revoked."
    }
]


  
const Home = () => {
    return (
        <div className='services-pages gsp-registration'>
            <Head>
                <title>GSP Registration (Generalised System of Preference)</title>
                <meta name="description" content="Attention Exporters! Unlock unparalleled opportunities in global trade with GSP Registration through RegisterKaro." />
                <link rel="canonical" href="https://www.registerkaro.in/gsp-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="GSP Registration (Generalised System of Preference)" />
                <meta property="og:description" content="Attention Exporters! Unlock unparalleled opportunities in global trade with GSP Registration through RegisterKaro." />
            </Head>
            <Hero />
            <h1 className='main-heading'>Introduction to GSP</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>What is GSP?</h2>
            <div className='heading-line'></div>
            <WhatIsGSP />
            <h2 className='main-heading'>Who issues GSP Certificate of Origin in India?</h2>
            <div className='heading-line'></div>
            <WhoIssues />
            <h2 className='main-heading'>Cumulation</h2>
            <div className='heading-line'></div>
            <Cumulation />
            <h2 className='main-heading'>Regional cumulation of origin</h2>
            <div className='heading-line'></div>
            <RegionalCumulation />
            <RegionalCumulationGroups />
            <h2 className='main-heading'>Procedure for online application</h2>
            <div className='heading-line'></div>
            <Procedure />
            <h2 className='main-heading'>Documents Required for GSP</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>Benefits of GSP</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className='main-heading'>Difference between GSP and the Usual Trade Law</h2>
            <div className='heading-line'></div>
            <DifferenceGSPnUsual />
            <h2 className='main-heading'>How RegisterKaro Can Assist You in the GSP Registration Process?</h2>
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
