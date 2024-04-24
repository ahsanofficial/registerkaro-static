import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/environmental-auditing/Hero'
import { Process } from '../components/static/environmental-auditing/Process'
import { Types } from '../components/static/environmental-auditing/Types'
import { Why } from '../components/static/environmental-auditing/Why'
import { ProcessEnvironment} from '../components/static/environmental-auditing/ProcessEnvironment'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { Phases } from '../components/static/environmental-auditing/Phases'
import { Benifits} from '../components/static/environmental-auditing/Benifits'
import { WhyChoose} from '../components/static/environmental-auditing/WhyChoose'

const faq = [
    {
      "question": "What is environmental auditing?",
      "answer": "The systematic and formal procedure for evaluation and asssing a company’s use of natural resources and sutainable development and compliance of the environmental laws."
    },
    {
      "question": "Why is environmental auditing important for businesses?",
      "answer": "Environmental auduting is important for a business for various reasons to understand and comply with the environmental regulation, improve efficiency of the usage of natural resources and demonstrate commitment to the usage of natural resources and assist the United Nation in achieving the goals of sustainable development.",
    },
    {
      "question": "What are the key components of an environmental audit?",
      "answer": "An environmental audit generally involves assesing the legal compliance with the regulations set by the government and fairly and property passing the assessment test, conduction of inspections in the work space and analysing any issues in case of any issues in compliance or with the assessment."
    },
    {
      "question": "Who conducts environmental audits for businesses?",
      "answer": "Environmental audit for businesses is conducted by, internal saff, external member who may be appointed by the government , or auditors who have knowledge of the compliance and the regulations, it is always advisable to seek professional help to assist in case of environmental audits so as to make the process faster and smooth."
    },
    {
      "question": "What is the role of ISO 14001 in conducting environmental audits?",
      "answer": "ISO 14001 is an international standard for environmental management systems. It provides a framework for organizations to establish, implement, maintain, and continually improve their environmental performance. Compliance with ISO 14001 principles is often a focus of environmental audits."
    },
    {
      "question": "Is Dubai a good place to start a company?",
      "answer": "Due to its advantageous location, first-rate infrastructure, and welcoming business environment, Dubai has drawn investors and entrepreneurs from all over the world. Dubai also offers many tax benefits, 100% foreign ownership is allowed, and a large number of free zones."
    },
    {
      "question": "Difference between compliance and performance auditing?",
      "answer": "Compliance auditing involves, the orgnaisation compliance with the environmental laws, whereas performance auditng involves the organsiation’s effecting management system related to the environment as well as initiatives related to sustainable development."
    },
    {
      "question": "How often should an organization conduct audits?",
      "answer": "The frequency of an organisation conducting audits depends on the size of the organsation, industry it is functioning in, as well as the regulatory requirements. Generally, environmental audit is conducted annually by some organsaition annually whereas some conduct rarely or once in a while."
    }
  ]
  
const Home = () => {
    return (
        <div className='services-pages dubai-reg'>
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
            <h1 className='main-heading'>Understanding Environmental Audit</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Purpose of Environmental Audit</h2>
            <div className='heading-line'></div>
            <Types />
            <h1 className='main-heading'>Areas of Environmental Audit</h1>
            <div className='heading-line'></div>
            <Why />
            <h1 className='main-heading'>Process of Environmental Audit</h1>
            <div className='heading-line'></div>
            <ProcessEnvironment/>

            <h1 className='main-heading'>Phases</h1>
            <div className='heading-line'></div>
            <Phases/>

            

            <h1 className='main-heading'>Benefits of Environmental Audit</h1>
            <div className='heading-line'></div>
            <Benifits/>

            <h1 className='main-heading'>How does Register Karo Help ?</h1>
            <div className='heading-line'></div>
            <WhyChoose />





          {/* 
            <h1 className='main-heading'>Why Choose RegisterKaro for Company Registration in Dubai?</h1>
            <div className='heading-line'></div>
            <WhyChoose/> */}

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