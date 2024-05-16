import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/bee-registration/Hero'
import { Process } from '../components/static/bee-registration/Process'
import { WhyChoose } from '../components/static/bee-registration/WhyChoose'
import { WhatisBee } from '../components/static/bee-registration/WhatisBee'
import { WhoNeedsBee } from '../components/static/bee-registration/WhoNeedsBee'
import { Classification } from '../components/static/bee-registration/Classification'
import { DocumentsRequired } from '../components/static/bee-registration/DocumentsRequired'
import { FeesRequired } from '../components/static/bee-registration/FeesRequired'
import { WhyNeedBee } from '../components/static/bee-registration/WhyNeedBee'
import { BenefitsBee } from '../components/static/bee-registration/BenefitsBee'
import { Penalty } from '../components/static/bee-registration/Penalty'
import { Renewal } from '../components/static/bee-registration/Renewal'
import { Withdrawal } from '../components/static/bee-registration/Withdrawal'

const faq = [
    {
        "question": "How long is the BEE license valid?",
        "answer": "The duration of the present labeling for that specific product category determines the validity of the BEE registration. For instance, the present labeling period for variable air conditioners runs from January 1, 2022, to December 31, 2024. The applicant must, before the labeling period expires, either renew or degrade its registered model under the next labeling period."
    },
    {
        "question": "How much does a typical registration cost?",
        "answer": "The model registration fee, which is Rs. 2,000 per model under the BEE star labeling program, must be paid electronically to the relevant government at the time of model registration."
    },
    {
        "question": "What is the star model? ",
        "answer": "A star label on a product serves as an energy efficiency guide for the end user before they buy a product in India. It provides multiple criteria to compare between 2 similar products but different energy efficiency."
    },
    {
        "question": "How many Voluntary products are under the scope of BEE?",
        "answer": "As of February 2022, there are 19 different products under the scope of the BEE's voluntary registration scheme, including tires and lithium-ion batteries."
    },
    {
        "question": "Who can apply for BEE Certification?",
        "answer": "Only the manufacturer, importer, or trader can apply for the license under the BEE's star labeling scheme."
    },
    {
        "question": "How long does it take to get a BEE registration?",
        "answer": "Generally, the BEE takes 4-5 weeks to approve business registration and 4-5 weeks to approve model registration."
    }
]


  
const Home = () => {
    return (
        <div className='services-pages bee-registration'>
            <Head>
                <title>BEE Registration | RegisterKaro</title>
                <meta name="description" content="Unlock Opportunities! Register Your Business with BEE Today! Become Empowered through BEE Compliance. Maximize Growth Potential. Register Now with RegisterKaro!" />
                <link rel="canonical" href="https://www.registerkaro.in/bee-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="BEE Registration | RegisterKaro" />
                <meta property="og:description" content="Unlock Opportunities! Register Your Business with BEE Today! Become Empowered through BEE Compliance. Maximize Growth Potential. Register Now with RegisterKaro!" />
            </Head>
            <Hero />
            <h1 className='main-heading'>Overview on BEE Registration in India</h1>
            <div className='heading-line'></div>
            <Process />

            <h2 className='main-heading'>What is BEE Certification?</h2>
            <div className='heading-line'></div>
            <WhatisBee/>
            <h2 className='main-heading'>Who needs a BEE Certificate?</h2>
            <div className='heading-line'></div>
            <WhoNeedsBee/>
            <h2 className='main-heading'>Classification of BEE Certification</h2>
            <div className='heading-line'></div>
            <Classification/>
            <h2 className='main-heading'>Documents required for the BEE Registration</h2>
            <div className='heading-line'></div>
            <DocumentsRequired/>
            <h2 className='main-heading'>Fees required for BEE Registration</h2>
            <div className='heading-line'></div>
            <FeesRequired/>
            <h2 className='main-heading'>Why do we need a BEE Certificate?</h2>
            <div className='heading-line'></div>
            <WhyNeedBee/>
            <h2 className='main-heading'>Benefits of BEE registration</h2>
            <div className='heading-line'></div>
            <BenefitsBee/>
            <h2 className='main-heading'>Penalty for Non- compliance with BEE guidelines</h2>
            <div className='heading-line'></div>
            <Penalty/>
            <h2 className='main-heading'>Renewal of BEE Certificate</h2>
            <div className='heading-line'></div>
            <Renewal/>
            <h2 className='main-heading'>Withdrawal of BEE Certificate by manufacturer</h2>
            <div className='heading-line'></div>
            <Withdrawal/>
            <h2 className='main-heading'>How RegisterKaro helps in the registration process?</h2>
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
