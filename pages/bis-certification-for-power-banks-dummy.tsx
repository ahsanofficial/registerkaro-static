import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/bis-certification-for-power-banks/Hero'
import { Process } from '../components/static/bis-certification-for-power-banks/Process'
import Applicable from '../components/static/bis-certification-for-power-banks/Applicable'
import Eligibility  from '../components/static/bis-certification-for-power-banks/Eligibility'
import Description from '../components/static/bis-certification-for-power-banks/Description'
import Types from '../components/static/bis-certification-for-power-banks/Types'
import DocumentsRequired from '../components/static/bis-certification-for-power-banks/DocumentsRequired'
import {Procedure} from '../components/static/bis-certification-for-power-banks/Procedure'
import Cancellation from '../components/static/bis-certification-for-power-banks/Cancellation'
import Revocation from '../components/static/bis-certification-for-power-banks/Revocation'
import Mandatory from '../components/static/bis-certification-for-power-banks/Mandatory'
import WhyRegisterKaroBIS from '../components/static/bis-certification-for-power-banks/WhyRegisterKaroBIS'

const faq =[
    {
        "question": "What is BIS CRS Certification?",
        "answer": "BIS CRS Certification is a mandatory requirement for selling certain electronic and IT products in the Indian market. It is a scheme introduced by the Bureau of Indian Standards (BIS) and the Ministry of Electronics and Information Technology (MeitY) to ensure that the products meet the standards of safety, reliability, and performance."
    },
    {
        "question": "Which products are covered under the BIS CRS Certification scheme?",
        "answer": "The BIS CRS Certification scheme covers 44 categories of electronic and IT products, such as power banks, mobile phones, laptops, LED lights, smartwatches, CCTV cameras, etc. The complete list of products can be found on the BIS website."
    },
    {
        "question": "How to obtain BIS CRS Certification for a product?",
        "answer": "To obtain BIS CRS Certification for a product, you need to follow these steps:",
        "list":[
            "Send your product samples to a BIS recognized lab for testing as per the relevant Indian Standard",
            "Apply for BIS CRS Registration on the BIS portal and upload the required documents and fee payment receipt",
            "Receive the BIS CRS Registration number and certificate from BIS within 15 working days",
            "Affix the BIS Standard Mark on your product and packaging as per the BIS guidelines",
            "Maintain the quality and safety of your product as per the BIS standards and comply with the BIS surveillance and inspection requirements",
        ]
    },
    {
        "question": "What are the benefits of BIS CRS Certification for a product?",
        "answer": "BIS CRS Certification for a product has the following benefits:",
        "list":["It ensures the compliance with the legal and regulatory requirements of the Indian market",
           "It enhances the brand reputation and customer trust of the product",
           "It avoids the penalties, customs issues, and consumer complaints of the product",
           "It facilitates the export of the product to other countries that recognize the BIS standards"]
           
    },
    {
        "question": "What are the fees and charges for BIS CRS Certification for a product?",
        "answer": "The fees and charges for BIS CRS Certification for a product vary depending on the type and quantity of the product. The BIS fee structure can be found on the BIS website. The fee includes the registration fee, the testing fee, the annual fee, and the surveillance fee. The fee is payable online through the BIS portal or offline through a demand draft or a bank transfer."
    }
]
  
const Home = () => {
    return (
        <div className='services-pages bis-certification-for-power-banks-reg'>
            <Head>
                <title>BIS CRS Certification for Power Banks | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/bis-certification-for-power-banks" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Trademark Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>Get Online BIS Certification for Power Banks in India</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Applicable Rules/ Acts/Regulations</h2>
            <div className='heading-line'></div>
            <Applicable />
            <h2 className='main-heading'>Eligibility for BIS Certification for Power Banks</h2>
            <div className='heading-line'></div>
            <Eligibility />
            <h2 className='main-heading'>A detailed description of the Power Banks</h2>
            <div className='heading-line'></div>
            <Description />
            <h2 className='main-heading'>Types and distinctions of Licenses/Services involved</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Documents Required for BIS Certification for Power Banks</h2>
            <div className='heading-line'></div>
            <DocumentsRequired />
            <h2 className='main-heading'>Procedure for BIS Certification for Power Banks</h2>
            <div className='heading-line'></div>
            <Procedure />
            <h2 className='main-heading'>Cancellation/Validity/ Renewal of certification</h2>
            <div className='heading-line'></div>
            <Cancellation />
            <h2 className='main-heading'>Cancellation/Suspension/Revocation of certification</h2>
            <div className='heading-line'></div>
            <Revocation />
            <h2 className='main-heading'>Mandatory Compliance for BIS Certification for Power Banks</h2>
            <div className='heading-line'></div>
            <Mandatory />
            <h2 className='main-heading'>Why RegisterKaro for BIS CRS Certification?</h2>
            <div className='heading-line'></div>
            <WhyRegisterKaroBIS />
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