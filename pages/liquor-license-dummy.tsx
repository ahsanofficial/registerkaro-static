import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../components/static/liquor-license/DocumentRequired'
import { Hero } from '../components/static/liquor-license/Hero'
import { Process } from '../components/static/liquor-license/Process'
import { ProcessCompany } from '../components/static/liquor-license/ProcessCompany'
import { Types } from '../components/static/liquor-license/Types'
import { WhyChoose } from '../components/static/liquor-license/WhyChoose'
import { Benefits } from '../components/static/liquor-license/Benefits'
import { Prerequisites } from '../components/static/liquor-license/Prerequisites'
import { Estimated } from '../components/static/liquor-license/Estimated'

const faq = [
    {
        "question": "What is the cost of a liquor license in India?",
        "answer": "The price of a liquor license in India varies by state and type, ranging from ₹5,000 to ₹15,000. The cost may differ based on the type of license—retail, wholesale, or restaurant."
    },
    {
        "question": "Is it easy to get a liquor license in India?",
        "answer": "Obtaining a liquor license in India can be a challenging and complex process due to varying rules and regulations across states. The process involves submitting an application to the state excise department."
    },
    {
        "question": "How much liquor can I keep at home in Maharashtra?",
        "answer": "In Maharashtra, an individual with a permit can possess up to 12 bottles of liquor at home. Small family celebrations without a permit are allowed for up to ten guests, but larger events require a license."
    },
    {
        "question": "What is the purpose of a liquor license?",
        "answer": "A liquor license is necessary for individuals or businesses involved in the sale, distribution, or manufacturing of alcohol. It is issued by the state excise department to regulate and control the sale and consumption of alcohol."
    },
    {
        "question": "What are different types of liquor licenses?",
        "answer": "Various types of liquor licenses are issued depending on the event and the scale of alcohol consumption. Some examples include FL4, L1, L3, L5, L19, and L49 licenses."
    },
    {
        "question": "Can you carry alcohol on a dry day?",
        "answer": "On a dry day, the sale and purchase of alcohol are prohibited, and all liquor outlets are closed. However, individuals can consume alcohol if they already possess it."
    },
    {
        "question": "What documents do you need for Liquor License?",
        "answer": "Documents required for obtaining a liquor license include proof of identity and address, evidence of business location, no-objection certificates from relevant authorities, completed application forms, passport-sized photographs, affidavits declaring lack of criminal records and overdue dues."
    }
]
            

  
const Home = () => {
    return (
        <div className='services-pages liquor-license-reg'>
          <Head>
                <title>Trademark Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/trademark-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Trademark Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>Why do you need Liquor License?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Types of Liquor License</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Documents required for Liquor License</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>Process for Liquor License approval</h2>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h2 className='main-heading'>Estimated Costs for the license</h2>
            <div className='heading-line'></div>
            <Estimated />
            <h2 className='main-heading'>Validation, Revocation & Renewal of Liquor License</h2>
            <div className='heading-line'></div>
            <Prerequisites />
            <h2 className='main-heading'>How RegisterKaro helps you in obtaining the liquor license?</h2>
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