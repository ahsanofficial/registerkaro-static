import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/tan-registration/Hero'
import { Process } from '../components/static/tan-registration/Process'
import { Types } from '../components/static/tan-registration/Types'
import { Why } from '../components/static/tan-registration/Why'
import { DocumentRequired } from '../components/static/tan-registration/DocumentRequired'
import { WhyChoose } from '../components/static/tan-registration/WhyChoose'
import { ProcessCompany } from '../components/static/tan-registration/ProcessCompany'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { Managing } from '../components/static/tan-registration/Managing'
import { Publiclimited } from '../components/static/tan-registration/Publiclimited'
import { Appointment } from '../components/static/tan-registration/Appointment'
import { Apply } from '../components/static/tan-registration/Apply'
import { Registration } from '../components/static/tan-registration/Registration'


const faq = [
    {
      "question": "What is TAN?",
      "answer": "The Income Tax Department issues TANs, or Tax Deduction and Collection Account Numbers, which are 10-digit alphanumeric codes for organizations that deduct or collect taxes at source."
    },
    {
      "question": "Who needs a TAN?",
      "answer": "A TAN is necessary for every person or organization that has to deduct or collect taxes at the source. This covers companies, nonprofits, and branches that pay certain amounts."
    },
    {
      "question": " Why is TAN important?",
      "answer": "Since TAN is to be referenced in all TDS/TCS transactions, returns, and associated paperwork, it is crucial for legal compliance. The consequences of non-compliance are possible."
    },
    {
      "question": " What is the TAN's validity? ",
      "answer": "A TAN doesn't need to be renewed or reapplied for; it is valid for life"
    },
    {
      "question": "Is TAN required for TDS payments?",
      "answer": "Yes, when paying Tax Deducted at Source (TDS) to a bank that has been approved, TAN needs to be mentioned."
    },
    {
      "question": "Do owners require TAN?",
      "answer": "If a sole proprietorship is eligible to deduct taxes at source, the proprietor must get TAN."
    },
    {
      "question": " What advantages come with registering with TAN?",
      "answer": "In addition to simplifying tax operations and enabling simple monitoring and reconciliation of tax transactions, TAN registration guarantees legal compliance."
    },
    {
      "question": "What documentation is required to register a TAN?",
      "answer": "A legal document, a passport-size photo, the company's PAN card, proof of address for the registered office, and the TAN application form are among the required materials."
    },
    {
      "question": "In India, how do I register for TAN?",
      "answer": "TAN registration is available online through the NSDL website or offline at any Protean TIN-Facilitation Center (TIN-FC) by submitting Form 49B."
    }
  ]
  
const Home = () => {
    return (
        <div className='services-pages dubai-reg'>
            <Head>
                 <title>Tan Registration | RegisterKaro</title> 
              <meta name="description" content="The Official RegisterKaro" /> 
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
               <link rel="canonical" href="https://www.registerkaro.in/ads/tan-registration" /> 
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of TAN Registration</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>TAN: What is it?</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>TAN Number: Meaning and Configuration</h2>
            <div className='heading-line'></div>
            <Why />
            <h2 className='main-heading'>Who Needs to Get a TAN?</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>The importance of Obtaining a TAN Number</h2>
            <div className='heading-line'></div>
            <Managing />
            <h2 className='main-heading'>TAN Registration</h2>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h2 className='main-heading'>Characteristics of TAN Registration</h2>
            <div className='heading-line'></div>
            <Publiclimited />
            <h2 className='main-heading'>Benefits of TAN Registration </h2>
            <div className='heading-line'></div>
            <Appointment />
            <h2 className='main-heading'>Documents Required for TAN Registration    </h2>
            <div className='heading-line'></div>
            <Registration />  
            <h2 className='main-heading'>Process to apply for TAN Registration</h2>
            <div className='heading-line'></div>
            <Apply /> 
            <h2 className='main-heading'>How RegisterKaro helps you in the registration process?</h2>
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
