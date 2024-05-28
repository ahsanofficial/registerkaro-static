import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/foreign-subsidiary-company-registration/Hero'
import { Process } from '../components/static/foreign-subsidiary-company-registration/Process'
import { Understanding } from '../components/static/foreign-subsidiary-company-registration/Understanding'
import { Benefits } from '../components/static/foreign-subsidiary-company-registration/Benefits'
import { Examples } from '../components/static/foreign-subsidiary-company-registration/Examples'
import { Difference } from '../components/static/foreign-subsidiary-company-registration/Difference'
import { DocumentReq } from '../components/static/foreign-subsidiary-company-registration/DocumentReq'
import { RegistrationProcess } from '../components/static/foreign-subsidiary-company-registration/RegistrationProcess'
import { ComplianceReq } from '../components/static/foreign-subsidiary-company-registration/ComplianceReq'
import { ApplicableTaxes } from '../components/static/foreign-subsidiary-company-registration/ApplicableTaxes'
import { CostsInclude } from '../components/static/foreign-subsidiary-company-registration/CostsInclude'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'


const faq = [
    {
        "question": "What is a foreign subsidiary company?",
        "answer": "A foreign subsidiary company is a company that is owned and controlled by a parent company based in another country. The parent company holds a majority of the subsidiary's shares and can influence its operations and policies."
    },
    {
        "question": "What are the benefits of registering a foreign subsidiary company?",
        "answer": "Registering a foreign subsidiary company offers numerous benefits, including access to new markets, local market insights, tax advantages, limited liability protection, and enhanced credibility with customers and partners in the host country."
    },
    {
        "question": "What are the legal requirements for registering a foreign subsidiary company?",
        "answer": "The legal requirements vary by country but generally include selecting a business name, preparing incorporation documents, appointing directors, registering with local authorities, obtaining necessary licences, and adhering to local regulations and tax laws."
    },
    {
        "question": "How long does it take to register a foreign subsidiary company?",
        "answer": "The registration process duration can vary depending on the country and the complexity of the business. Typically, it can take anywhere from a few weeks to several months to complete all necessary steps and obtain approval."
    },
    {
        "question": "What documents are required to register a foreign subsidiary company?",
        "answer": "Commonly required documents include the parent company’s certificate of incorporation, articles of association, resolution of the board of directors approving the subsidiary formation, identification and proof of address of directors, and a registered office address in the host country."
    },
    {
        "question": "Do I need a local director to register a foreign subsidiary company?",
        "answer": "Many countries require at least one local director or representative. This individual must be a resident of the country where the subsidiary is being registered and will act as a liaison between the company and local authorities."
    },
    {
        "question": "What is the minimum capital requirement for a foreign subsidiary company?",
        "answer": "The minimum capital requirement varies by country and the type of business. Some countries have no minimum capital requirement, while others may require a specific amount to demonstrate financial stability."
    },
    {
        "question": "What taxes will a foreign subsidiary company be subject to?",
        "answer": "A foreign subsidiary company is subject to local taxes, which can include corporate income tax, value-added tax (VAT), payroll taxes, and other applicable local taxes. The parent company may also be subject to withholding taxes on dividends and other income repatriated from the subsidiary."
    },
    {
        "question": "Can a foreign subsidiary repatriate profits to the parent company?",
        "answer": "Yes, a foreign subsidiary can repatriate profits to the parent company, but this process is subject to local tax regulations and any applicable withholding taxes. It is important to comply with local regulations and tax treaties to avoid double taxation."
    },
    {
        "question": "Do I need to file annual reports for a foreign subsidiary company?",
        "answer": "Yes, most countries require foreign subsidiary companies to file annual reports and financial statements with local authorities. This includes providing details on the company's financial performance, compliance with local regulations, and any changes in ownership or management."
    },
]

const Home = () => {
    return (
        <div className='services-pages foreign-subsidiary-company-registration'>
            <Head>
                <title>Foreign Subsidiary Company Registration | RegisterKaro</title>
                <meta name="description" content="Setting up a subsidiary company in India is a strategic avenue for international companies which aspire to establish a foothold in the Indian market." />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <h1 className='main-heading'>Overview of Foreign Subsidiary Company Registration</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Understanding Foreign Subsidiary Company Registration</h2>
            <div className='heading-line'></div>
            <Understanding />
            <h2 className='main-heading'>Benefits of Registering a Foreign Subsidiary in India</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className='main-heading'>Examples of Some Foreign Subsidiary Companies in India</h2>
            <div className='heading-line'></div>
            <Examples />
            <h2 className='main-heading'>Difference between Foreign Branch and Subsidiary</h2>
            <div className='heading-line'></div>
            <Difference />
            <h2 className='main-heading'>Essential Documents for Registration</h2>
            <div className='heading-line'></div>
            <DocumentReq />
            <h2 className='main-heading'>Registration Process</h2>
            <div className='heading-line'></div>
            <RegistrationProcess />
            <h2 className='main-heading'>Compliance Requirements for Foreign Subsidiary</h2>
            <div className='heading-line'></div>
            <ComplianceReq />
            <h2 className='main-heading'>Applicable Taxes on Foreign Subsidiary in India</h2>
            <div className='heading-line'></div>
            <ApplicableTaxes />
            <h2 className='main-heading'>Costs included in Registering a Subsidiary in India</h2>
            <div className='heading-line'></div>
            <CostsInclude />
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