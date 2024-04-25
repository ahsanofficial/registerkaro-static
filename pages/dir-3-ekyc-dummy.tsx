import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/dir-3-ekyc/Hero'
import { Process } from '../components/static/dir-3-ekyc/Process'
import { Types } from '../components/static/dir-3-ekyc/Types'
import { Why } from '../components/static/dir-3-ekyc/Why'
import { DocumentRequired } from '../components/static/dir-3-ekyc/DocumentRequired'
import { WhyChoose } from '../components/static/dir-3-ekyc/WhyChoose'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { Prerequisites } from '../components/static/dir-3-ekyc/Prerequisites'
import { TableCom } from '../components/static/dir-3-ekyc/TableCom'
import { Duedate} from '../components/static/dir-3-ekyc/Duedate'
import {Laws} from '../components/static/dir-3-ekyc/Laws'

const faq = [
    {
      "question": " Who can file eForm DIR-3 e-KYC?",
      "answer": "Any DIN holder who is filing his KYC details for the first time with MCA, must file all KYC details only through eForm DIR-3 KYC. There is no option for such a person to access the web-service for his KYC."
    },
    {
      "question": "Who can file KYC through DIR-3 KYC web-service?",
      "answer": "Any DIN holder who has already submitted eForm DIR-3 KYC in any of the previous financial years and who does not require update in any of his KYC details as submitted, may perform his annual KYC by accessing DIR-3 KYC web service."
    },
    {
      "question": "Is it mandatory to enter a unique mobile number and email ID in form DIR-3 KYC?",
      "answer": "Yes. It is mandatory to enter your personal mobile number and personal email ID in the form DIR-3 KYC and the same has to be verified by an OTP process. "
    },
    {
      "question": " Who are the signatories in the DIR-3 KYC form?",
      "answer": "The DIN holder and a professional (CA/CS/CMA) certifying the form are the two signatories in form DIR-3 KYC."
    },
    {
      "question": " Is the disqualified director required to file form DIR-3 KYC?",
      "answer": "Yes. Any person who has been allotted DIN and where the status of such DIN is ‘Approved’, is required to file form DIR-3 KYC. Hence, disqualified directors are also required to file form DIR-3 KYC.."
    },
    {
      "question": " If DIN status is ‘Deactivated’. Can he/she file form DIR-3 KYC?",
      "answer": "Form DIR-3 KYC can be filed for status ‘Deactivated due to non-filing of DIR-3 KYC’ on payment of fee as above."
    },
    {
      "question": "Whether details entered in the form DIR-3 KYC update the DIN Holders’ database?",
      "answer": "Yes. All information as entered in the form DIR-3 KYC shall be updated in the DIN holders’ database."
    },
    {
      "question": "Whether multiple filing of form DIR-3 KYC is allowed?",
      "answer": "System will not allow multiple filing of form DIR-3 KYC for an applicant."
    },
    {
      "question": "Whether non-resident directors provide Indian mobile numbers?",
      "answer": "In case DIN holder is non-resident, foreign address and foreign number shall only be allowed."
    }
    ,
    {
      "question": " I have multiple DINs and have not filed DIR-3 KYC for any of the DINs. I want to surrender the DIN but while filing the form DIR-3 KYC, the DIN is not getting prefilled. Please suggest.",
      "answer": "In case you have multiple DINs then you need to retain the oldest DIN and surrender all the latest DINs by filing DIR -5 e-form. Please download the latest form DIR-5 from portal and try again."
    }
  ]
  
const Home = () => {
    return (
        <div className='services-pages dubai-reg'>
            <Head>
                 <title>DIR-3-ekyc | RegisterKaro</title> 
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
            <h1 className='main-heading'>What is e-Form DIR-3 KYC and its purpose?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Types of e-Form DIR-3 KYC</h2>
            <div className='heading-line'></div>
            <Types />
            
            <h2 className='main-heading'>Important Check Points while filling up the Web Form</h2>
            <div className='heading-line'></div>
            <DocumentRequired /> 

            
            <h2 className='main-heading'>Instructions for Form No. DIR-3 KYC (Web) to be followed:</h2>
            <div className='heading-line'></div>
            <Why />
            <h2 className='main-heading'>Prerequisites for e-Form DIR-3 KYC</h2>
            <div className='heading-line'></div>
            <Prerequisites />
            <h2 className='main-heading'>Application Process for filing Form No. DIR-3-KYC(Web)</h2>
            <div className='heading-line'></div>
            <TableCom/>
            <h2 className='main-heading'>Due Date and Penalty Charges for Not Filing DIR 3 KYC Form</h2>
            <div className='heading-line'></div>
            <Duedate/>

            <h2 className='main-heading'>Applicable Laws and Regulations:</h2>
            <div className='heading-line'></div>
            <Laws/>
            <h2 className='main-heading'>How RegisterKaro Can Assist You in the DIR 3 eKYC Filing Process?</h2>
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