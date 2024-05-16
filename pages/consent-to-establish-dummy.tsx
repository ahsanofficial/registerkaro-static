import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/consent-to-establish/Hero'
import { Process } from '../components/static/consent-to-establish/Process'
import { Types } from '../components/static/consent-to-establish/Types'
import { Why } from '../components/static/consent-to-establish/Why'
import { DocumentRequired } from '../components/static/consent-to-establish/DocumentRequired'
import { WhyChoose } from '../components/static/consent-to-establish/WhyChoose'
import { ProcessCompany } from '../components/static/consent-to-establish/ProcessCompany'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { Advantage } from '../components/static/consent-to-establish/Advantage'
import { Consent } from '../components/static/consent-to-establish/Consent'


const faq = [
    {
      "question": "What is the primary purpose of obtaining Consent to Establish in India?",
      "answer": "The primary purpose of obtaining Consent to Establish in India is to ensure that industrial activities comply with environmental regulations and standards."
    },
    {
      "question": "Which regulatory body governs the issuance of Consent to Establish for industrial activities?",
      "answer": "The issuance of Consent to Establish for industrial activities in India is governed by the respective State Pollution Control Boards (SPCBs) under the Environment Protection Act, 1986."
    },
    {
      "question": " What factors determine whether an industrial activity requires Consent to Establish?",
      "answer": "The factors determining whether an industrial activity requires Consent to Establish include its nature, scale, and potential environmental impact."
    },
    {
      "question": " Is it mandatory for all industrial activities to obtain Consent to Establish?",
      "answer": "Yes, it is mandatory for certain categories of industrial activities, to obtain Consent to Establish before commencing operations."
    },
    {
      "question": "How does one apply for Consent to Establish in India? ",
      "answer": "One can submit an application to the concerned SPCB along with requisite documents, including project reports, environmental impact assessments, and site plans."
    },
    {
      "question": " What are the consequences of commencing industrial operations without obtaining Consent to Establish?",
      "answer": "Commencing industrial operations without obtaining Consent to Establish may lead to legal penalties, including fines, shutdown orders, or even criminal prosecution, as it constitutes a violation of environmental laws."
    },
    {
      "question": "Can Consent to Establish be transferred or modified?",
      "answer": "Consent to Establish is generally non-transferable and can only be modified or renewed through a formal application process to the relevant SPCB."
    },
    {
      "question": "How long is Consent to Establish typically valid for?",
      "answer": "Consent to Establish is typically valid for a specified period, often ranging from one to five years, after which it must be renewed to continue operations legally."
    }
  ]
  
const Home = () => {
    return (
        <div className='services-pages dubai-reg'>
            <Head>
                 <title>Consent to Establish| RegisterKaro</title> 
              <meta name="description" content="The Official RegisterKaro" /> 
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
               <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> 
            </Head>
            <Hero />
            <h1 className='main-heading'>Introduction</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>What is Consent to Establish?</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Things to know about conset to Establish(CFE)</h2>
            <div className='heading-line'></div>
            <Why />
            <h2 className='main-heading'>Documents Required for Consent to Establish (CFE)Application:</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>Procedure for Consent To Establish</h2>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h2 className='main-heading'>Advantages of Consent to Establish (NOC):</h2>
            <div className='heading-line'></div>
            <Advantage/>
            <h2 className='main-heading'>Consent to Establish a validity period shall be as follows: </h2>
            <div className='heading-line'></div>
          <Consent/>
            <h2 className='main-heading'>How RegisterKaro Can Assist You in the Franchise Agreement Process?</h2>
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