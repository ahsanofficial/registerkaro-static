import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/fieo-registration/Hero'
import { Process } from '../components/static/fieo-registration/Process'
import { Why } from '../components/static/fieo-registration/Why'
import { WhyChoose } from '../components/static/fieo-registration/WhyChoose'
import { ProcessCompany } from '../components/static/fieo-registration/ProcessCompany'
import { Fieo } from '../components/static/fieo-registration/Fieo'


const faq = [
    {
        "question": "What’s FIEO Registration?",
        "answer": "Being a member of the Federation of Indian Export Organizations (FIEO) can be advantageous for an Indian export company. Getting registered with the FIEO can enhance your business's credibility, offer networking chances, and grant you access to a range of export promotion services."
    },
    {
        "question": " What’s the difference between FIEO & RCMC Registration?",
        "answer": "RCMC, also known as Registration-cum-Membership Certificate, is a certificate obtained by FIEO members to access the advantages of the scheme. The FIEO registration process is regulated by the Memorandum and Articles of Association of FIEO along with the Indian Foreign Trade Policy. The RCMC you receive will remain valid for a period of five years."
    },
    {
        "question": "Why is FIEO important?",
        "answer": "FIEO, also known as the Federation of Indian Export Organisations, is a group that supports and aids Indian exporters. Being a member of FIEO provides various advantages like market information access, policy lobbying, trade promotion, and networking opportunities."
    },
    {
        "question": " What’s the validity of FIEO Certificate? ",
        "answer":"The Export Promotion Councils (EPCs), Commodity boards, Development authorities, or other competent authorities in India issue certificates for a period of five financial years.",
    },
    {
        "question": " Does FIEO is a Government Company?",
        "answer": "'FIEO', also known as the Federation of Indian Export Organisations, serves as the top organization of Export Promotion Councils, Commodity Boards, and Development Authorities recognized by the Government in India. Established in 1965 by the Ministry of Commerce, Government."
    },
] 
  
const Home = () => {
    return ( 
        <div className='services-pages dubai-reg'>
            <Head>
                 <title> FIEO | RegisterKaro</title> 
              <meta name="description" content="The Official RegisterKaro" /> 
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
               <link rel="canonical" href="https://www.registerkaro.in/ads/fieo-registration" /> 
            </Head>
            
            <Hero />
            <h1 className='main-heading'>Why FIEO?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Documents Required</h2>
            <div className='heading-line'></div>
            <Why />
            <h2 className='main-heading'>How RegisterKaro helps you in the Registration process?</h2>
            <div className='heading-line'></div>
            <WhyChoose/>
            <h2 className='main-heading'>Process For FIEO Registration</h2>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h2 className='main-heading'>Know More FIEO</h2>
            <div className='heading-line'></div>
            <Fieo />
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