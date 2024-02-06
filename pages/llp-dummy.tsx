import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Benefits } from '../components/static/llp/Benefits'
import { Characteristics } from '../components/static/llp/Characteristics'
import { Checklist } from '../components/static/llp/Checklist'
import { DifferentTypes } from '../components/static/llp/DifferentTypes'
import { DocumentRequired } from '../components/static/llp/DocumentRequired'
import { Hero } from '../components/static/llp/Hero'
import { HowToRegister } from '../components/static/llp/HowToRegister'
import { LLPReg } from '../components/static/llp/LLPReg'
import { Process } from '../components/static/llp/Process'
import { TableCom } from '../components/static/llp/TableCom'

let faq = 
[
    {
        "question": "Is LLP Registration compulsory in India?",
        "answer": "Yes, LLP Registration in India is compulsory. An LLP must obtain Registration under LLP Act to be a legally valid entity."
    },
    {
        "question": "What is an LLP Agreement?",
        "answer": "This Agreement is made between the Partners and the LLP. An LLP Agreement in India generally includes management guidelines, provisions regarding adding new Partners, methods for formulating policy, etc."
    },
    {
        "question": "Is GST Registration required for LLP?",
        "answer": "Yes, GST Registration is required for all Limited Liability Partnerships in India depending on the type of products or services they offer. Also, LLPs are required to file GST Returns on a regular basis."
    },
    {
        "question": "Can Foreign Nationals or NRIs be designated Partners in LLP?",
        "answer": "An NRI or Foreign National can be a designated Partner in LLP if he or she has DPIN. However, at least one Partner should be an Indian Resident."
    },
    {
        "question": "How many Partners are required to start an LLP in India?",
        "answer": "At least 2 Partners are required to start an LLP in India."
    },
    {
        "question": "What is the minimum capital requirement for LLP?",
        "answer": "There is no minimum capital requirement for LLP in India."
    },
    {
        "question": "What’s the maximum tax rate for LLP in India?",
        "answer": "Limited Liability Partnerships are taxed separately & pay a fixed rate of 30% in income tax on their earnings. Moreover, the AMT or Alternate Minimum Tax at a rate of 18.5% of a Limited Liability Partnership’s adjusted total revenue may also apply."
    },
    {
        "question": "Is LLP better than Company?",
        "answer": "In India, an LLP is easier to start & manage as it has fewer formalities and it has a lesser registration cost as compared to Company Registration cost."
    },
    {
        "question": "Can a Limited Liability Partnership be converted into a Private Limited Company?",
        "answer": "An LLP can be converted into a Private Limited Company as per provisions under Section 366 of the Companies Act, 2013 & Companies (Authorized to Register) Rules, 2014."
    },
    {
        "question": "Does LLP require MoA & AoA?",
        "answer": "No, MoA & AoA are required for companies registered under Companies Act. The LLP Agreement governs the LLP and not MoA & AoA."
    },
    {
        "question": "What is DPIN?",
        "answer": "DPIN stands for Designated Partner Identification Number is a unique number given by the Ministry of Corporate Affairs (MCA) to the designated Partner of an LLP."
    },
    {
        "question": "Who can be a Partner in an LLP?",
        "answer": "Any corporate body or individual can be a Partner in an LLP."
    },
    {
        "question": "Whether a body corporate can be a designated Partner in an LLP?",
        "answer": "Yes, a body corporate can be a designated Partner in an LLP in India."
    },
    {
        "question": "Are there any minimum requirements for LLP Registration in India?",
        "answer": "No, there are no minimum requirements for LLP Registration in India."
    },
    {
        "question": "Is FDI allowed in an LLP?",
        "answer": "Yes, FDI or Foreign Direct Investment is allowed in an LLP under the automatic route in the various sectors allowed by the FIPB."
    }
]


const Home = () => {
    return (
        <div className='services-pages llp-reg'>
            <Head>
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <h1 className='main-heading'>Limited Liability Partnership (LLP) Registration Online in India</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>What is a “Limited Liability Partnership” or “LLP”?</h1>
            <div className='heading-line'></div>
            <LLPReg />
            <h1 className="main-heading">What are the characteristics of an LLP in India?</h1>
            <div className='heading-line'></div>
            <Characteristics />
            <h1 className="main-heading">Benefits of LLP Registration in India</h1>
            <div className='heading-line'></div>
            <Benefits />
            <h1 className="main-heading">What are the Different Types of LLP Forms in India?</h1>
            <div className='heading-line'></div>
            <DifferentTypes />
            <h1 className="main-heading">Checklist for the Registration of LLP</h1>
            <div className='heading-line'></div>
            <Checklist />
            <h1 className="main-heading">What are the vital documents required for LLP Registration in India?</h1>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h1 className="main-heading">Procedure for LLP Registration in India</h1>
            <div className='heading-line'></div>
            <HowToRegister />
            <h1 className="main-heading">LLP Compliance</h1>
            <div className='heading-line'></div>
            <TableCom />
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