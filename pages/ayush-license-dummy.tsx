import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/ayush-license/Hero'
import { Process } from '../components/static/ayush-license/Process'
import { Why } from '../components/static/ayush-license/Why'
import { WhyChoose } from '../components/static/ayush-license/WhyChoose'
import { ProcessCompany } from '../components/static/ayush-license/ProcessCompany'
import { Types } from '../components/static/ayush-license/Types'
const faq = [
    {
        "question": "What’s AYUSH License certification?",
        "answer": "An AYUSH license certification is mandatory for traditional medicine practitioners in India, issued by the Ministry of AYUSH to confirm that they have completed the required training and meet the standards to practice traditional medicine in the country."
    },
    {
        "question": "What types of drug get AYUSH License?",
        "answer": "The medications eligible for an AYUSH License are specified in Section 33 B of the Drug and Cosmetic Act, 1940, including Ayurvedic, Unani, and Siddha products, as well as herbal products, drug products, and cosmetics."
    },
    {
        "question": "Who can sell ayurvedic medicine in India?",
        "answer": "One who has the AYUSH Retail License has full authority to sell ayurvedic medicine, if found selling of such ayurvedic medicine without license then he shall liable to such penalties."
    },
    {
        "question": " What’s the full form of AYUSH?.",
        "answer":" AYUSH stands for Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy.",
    },
    {
        "question": " How to get AYUSH License?",
        "answer": "You have the option to submit your AYUSH License application digitally on the e-aushadhi platform. Simply download the appropriate form, complete it, upload the scanned copy, and include the required attachments and fees."
    },
] 
  
const Home = () => {
    return (
        <div className='services-pages dubai-reg'>
            <Head>
                 <title>AYUSH License | RegisterKaro</title> 
              <meta name="description" content="The Official RegisterKaro" /> 
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
               <link rel="canonical" href="https://www.registerkaro.in/ads/ayush-license" /> 
            </Head>
            
            <Hero />
            <h1 className='main-heading'> An Overview of Ayush license</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Types of AYUSH License</h1>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Documents Required</h2>
            <div className='heading-line'></div>
            <Why />
            <h2 className='main-heading'>How to Get AYUSH License</h2>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h2 className='main-heading'>How RegisterKaro helps you in the Registration process?</h2>
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