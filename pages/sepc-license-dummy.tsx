import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/sepc-license/Hero'
import { Process } from '../components/static/sepc-license/Process'
import { Why } from '../components/static/sepc-license/Why'
import { WhyChoose } from '../components/static/sepc-license/WhyChoose'
import { ProcessCompany } from '../components/static/sepc-license/ProcessCompany'
import { TableCom } from '../components/static/sepc-license/TableCom'
import { Tablerenewal } from '../components/static/sepc-license/Tablerenewal'



const faq = [
    {
        "question": "What are the benefits provided to Businesses through SEPC?",
        "answer": "Advantages consist of genuine trade opportunities, online networking, assistance from Indian Embassies, engagement in global gatherings, and rewards offered through different programs."
    },
    {
        "question": "What’s SEPC and why is it so important for Exporting Businesses?",
        "answer": "SEPC, also known as Services Export Promotion Council, plays a vital role for Indian service exporters by acting as a link between government and industry, assisting in exports and offering policy suggestions."
    },
    {
        "question": "Does SEPC registration is mandatory?",
        "answer": "One of the necessary documents needed is RCMC to claim export incentives and subsidies from schemes such as SEIS, Advance License, and EPCG."
    },
    {
        "question": "Is SEPC is a govt. company?",
        "answer":"SEPC, a council established by the Ministry of Commerce and Industry in India, has played a key role in assisting Indian service exporters and presenting India as a trustworthy provider of top-notch services.",
    },
    {
        "question": "What does SEPC do?",
        "answer": "SEPC Limited functions as a company that provides engineering services. The Company offers complete design, engineering, procurement, construction, and project management solutions for renewable energy projects, process and metallurgical plants, and municipal service sectors, as well as produces wind turbine generators."
    },
] 
  
const Home = () => {
    return ( 
        <div className='services-pages dubai-reg'>
            <Head>
                 <title> SEPC License | RegisterKaro</title> 
              <meta name="description" content="The Official RegisterKaro" /> 
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
               <link rel="canonical" href="https://www.registerkaro.in/ads/sepc-license" /> 
            </Head>
            <Hero />
            <h1 className='main-heading'>All You Need to Know About SEPC License</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Documents Required</h2>
            <div className='heading-line'></div>
            <Why />
            <h2 className='main-heading'>Process to get SEPC License </h2>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h2 className='main-heading'>Fees for New Membership</h2>
            <div className='heading-line'></div>
            <TableCom/>  
            <h2 className='main-heading'>Fees for Renewal of Membership</h2>
            <div className='heading-line'></div>
            <Tablerenewal/>   
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