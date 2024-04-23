import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/founder-agreement/Hero'
import { Process } from '../components/static/founder-agreement/Process'
import { Types } from '../components/static/founder-agreement/Types'
import { Why } from '../components/static/founder-agreement/Why'
import { DocumentRequired }  from '../components/static/founder-agreement/DocumentRequired'
import { WhyChoose } from '../components/static/founder-agreement/WhyChoose'
import { WhyChoose2 } from '../components/static/founder-agreement/WhyChoose2'
import { ProcessCompany } from '../components/static/founder-agreement/ProcessCompany'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
 
const faq = [
    {
      "question": "What is a Founders’ Agreement?",
      "answer": "It is a legal document that defines the roles, responsibilities, and ownership of each founder in a business. It also covers important aspects such as intellectual property, decision making, dispute resolution, exit strategy, and more."
    },
    {
      "question": "Why do I need an Agreement of Founders?",
      "answer": "A Founders’ Agreement is essential for any startup that wants to establish a clear and fair relationship among the co-founders and set the foundation for a successful venture. A Founders’ Agreement can help you to: Protect your rights and interests as a founder 1. Clarify the expectations and contributions of each co-founder 2. Avoid future disputes and conflicts with your partners 3. Align your vision and goals with your co-founders 4.Secure your intellectual property and confidential information 5 .Plan for contingencies and exit scenarios",
      
    },
    {
      "question": "When should I make a Founders’ Agreement?",
      "answer": "You should make a Founders’ Agreement as soon as possible, preferably before you start working on your business idea or raising funds. The earlier you make a Founders’ Agreement, the easier it will be to negotiate and agree on the terms and conditions with your co-founders."
    },
    {
      "question": "How can I make a Founders’ Agreement?",
      "answer": "You can make an Agreement with the help of a professional and affordable service like Registerkaro. We have a team of experienced and qualified lawyers who can help you draft and register your Founders’ Agreement as per your business needs and goals. You can contact us and share your business details and co-founders information, and we will take care of the rest.."
    },
    {
      "question": "What are the documents required for a Founders’ Agreement?",
      "answer": "To prepare and register your Agreement, you will need to provide us with the following documents: 1.PAN card and Aadhaar card of all the co-founders 2. Passport size photographs of all the co-founders 3.Business name and address proof 4.Business registration certificate (if applicable) 5.Business plan and financial projections 6.Any other document as per the nature and scope of your business"

      
    },
    {
      "question": "How long does it take to get an Agreement?",
      "answer": "It usually takes around 7 to 10 working days to get your Agreement done with Registerkaro. However, the exact time may vary depending on the complexity and scope of your business and the availability of the co-founders for signing the agreement."
    },
    {
      "question": "How much does it cost to get an Agreement of Founders?",
      "answer": "Depending on the kind of business and its location, different minimum investments are needed to launch one in Dubai. For the majority of firms, the Dubai Department of Economic Development (DED) has established a minimum capital requirement of AED 300,000, or roughly $82,000."
    },
    
  ]
  
const Home = () => {
    return (
        <div className='services-pages dubai-reg'>
            <Head>
                 <title>Founders’ Agreement | RegisterKaro</title> 
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
            <h1 className='main-heading'>What is Founders' Agreement</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Components of Founders’ Agreement</h1>
            <div className='heading-line'></div>
            <Types />
            <h1 className='main-heading'>Documents Required for Founders’ Agreement</h1>
            <div className='heading-line'></div>
           <DocumentRequired />
            {/* <h1 className='main-heading'>Documents you would need</h1>
            <div className='heading-line'></div>
             <Why /> */}
            <h1 className='main-heading'>Procedure for Drafting Founders’ Agreement</h1>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h1 className='main-heading'>Meaning of terminating Founder's Agreement</h1>
            <div className='heading-line'></div>
            <WhyChoose/>
            <h1 className='main-heading'>Why choose Registerkaro for Founders’ Agreement service?</h1>
            <div className='heading-line'></div>
            <WhyChoose2/>

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