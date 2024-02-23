import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { AdvantagesAcquiring } from '../components/static/fssai-central-license/AdvantagesAcquiring'
import { BusinessesRequiring } from '../components/static/fssai-central-license/BusinessesRequiring'
import { FundamentalDuties } from '../components/static/fssai-central-license/FundamentalDuties'
import { Hero } from '../components/static/fssai-central-license/Hero'
import { ProceduresObtaining } from '../components/static/fssai-central-license/ProceduresObtaining'
import { Process } from '../components/static/fssai-central-license/Process'
import { RequiredDocuments } from '../components/static/fssai-central-license/RequiredDocuments'
import { RequirementsObtaining } from '../components/static/fssai-central-license/RequirementsObtaining'
import { ValidityRenewal } from '../components/static/fssai-central-license/ValidityRenewal'

const faq =
[
    {
        "question": "What is the FSSAI Central License, and who needs to obtain it?",
        "answer": "The FSSAI Central License is a mandatory license issued by the Food Safety and Standards Authority of India (FSSAI). It is required for businesses involved in food manufacturing, processing, packaging, storage, distribution, and wholesale with an annual turnover exceeding Rs. 20 crores."
    },
    {
        "question": "How long is the FSSAI Central License valid, and how can it be renewed?",
        "answer": "The FSSAI Central License is typically issued for a period ranging from 1 to 5 years. To renew the license, businesses must submit the necessary documents and fees to the FSSAI before the expiration date."
    },
    {
        "question": "What are the key activities covered under the FSSAI Central License?",
        "answer": "The license covers a broad spectrum of food-related activities, including manufacturing, processing, packaging, storage, transportation, distribution, and wholesale. It ensures that businesses at various stages of the food supply chain adhere to prescribed standards."
    },
    {
        "question": "What are the compliance requirements for obtaining an FSSAI Central License?",
        "answer": "Businesses must comply with Good Manufacturing Practices (GMP), Good Hygienic Practices (GHP), and implement a Food Safety Management System (FSMS). Adherence to these standards is crucial for obtaining and maintaining the license."
    },
    {
        "question": "How does the FSSAI Central License contribute to food safety and quality control?",
        "answer": "The license mandates regular inspections, audits, and quality control measures to ensure that food products meet the specified standards. It also requires the implementation of traceability systems for quick recall in case of safety concerns."
    },
    {
        "question": "Is the FSSAI Central License applicable to all businesses in the food industry?",
        "answer": "No, the FSSAI Central License is specifically applicable to businesses with an annual turnover exceeding Rs. 20 crores. Smaller businesses may need to obtain the FSSAI State License or the Basic Registration, depending on their scale of operations."
    },
    {
        "question": "What are the consequences of not obtaining or renewing the FSSAI Central License?",
        "answer": "Non-compliance with the FSSAI regulations, including failure to obtain or renew the FSSAI Central License, can result in severe penalties, including fines and closure of the business. It is essential for businesses to adhere to the regulatory requirements to avoid legal complications."
    },
    {
        "question": "How does having an FSSAI Central License benefit businesses in the food industry?",
        "answer": "Holding an FSSAI Central License enhances consumer confidence, facilitates market access and expansion, ensures legal compliance, and is often a prerequisite for international trade. It serves as a mark of credibility and reliability in the food industry."
    },
    {
        "question": "What role does labeling play in FSSAI Central License compliance?",
        "answer": "The license mandates strict adherence to labeling requirements, including providing accurate information about ingredients, nutritional content, allergens, and other essential details on the food packaging. Clear and comprehensive labeling contributes to informed consumer choices."
    },
    {
        "question": "Can businesses engaged in food export benefit from the FSSAI Central License?",
        "answer": "Yes, businesses involved in the export of food products can benefit from the FSSAI Central License, as it enhances the acceptability of Indian food products in the global market. It demonstrates compliance with international standards and regulations."
    }
]


const Home = () => {
    return (
        <div className='services-pages fssai-central-license-reg'>
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
            <h1 className='main-heading'>FSSAI Central License</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Fundamental Duties and Functions performed by FSSAI</h1>
            <div className='heading-line'></div>
            <FundamentalDuties/>
            <h1 className='main-heading'>Businesses Requiring Mandatory FSSAI License</h1>
            <div className='heading-line'></div>
            <BusinessesRequiring/>  
            <h1 className='main-heading'>Advantages of Acquiring an FSSAI Central License</h1>
            <div className='heading-line'></div>
            <AdvantagesAcquiring/>
            <h1 className='main-heading'>Requirements for Obtaining FSSAI Central License</h1>
            <div className='heading-line'></div>
            <RequirementsObtaining/>
            <h1 className='main-heading'>Required Documents for Obtaining FSSAI Central License</h1>
            <div className='heading-line'></div>
            <RequiredDocuments/>
            <h1 className='main-heading'>Procedures for Obtaining FSSAI Central License</h1>
            <div className='heading-line'></div>
            <ProceduresObtaining/>
            <h1 className='main-heading'>Validity and Renewal of FSSAI Central License</h1>
            <div className='heading-line'></div>
            <ValidityRenewal/>
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