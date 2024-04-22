import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Benefits } from '../../components/static/qatar-company-registration/Benefits'
import { DocumentRequired } from '../../components/static/qatar-company-registration/DocumentRequired'
import { Hero } from '../../components/static/qatar-company-registration/Hero'
import { Process } from '../../components/static/qatar-company-registration/Process'
import { ProcessCompany } from '../../components/static/qatar-company-registration/ProcessCompany'
import { Types } from '../../components/static/neha-dummy-company/Types'
import { WhyChoose } from '../../components/static/qatar-company-registration/WhyChoose'

const faq = [
    {
        "question": "What is your name?",
        "answer": "My name is Neha Bisht."
    },
    {
        "question": "How much does it cost to register a company in Qatar?",
        "answer": "The cost of registering a company in Qatar varies on the basis of type of the company. However, the average cost lies between 10,000 Qatari Riyal to 20,000 Qatari Riyal."
    },
    {
        "question": "How can I register my business in Qatar?",
        "answer": "You can register your company in Qatar either on your own by visiting the official website of the Ministry of Commerce and Industry. Prepare all the documents prescribed above and file them along with the registration application. The other way to register your business is to avail professional assistance."
    },
    {
        "question": "Can a foreigner own a company in Qatar?",
        "answer": "To conduct business in Qatar, foreign investors and entrepreneurs can establish a private Limited Liability Company (LLC). The business needs two owners and a minimum authorized share capital of QAR 200,000."
    },
    {
        "question": "Can you own 100% of a company in Qatar?",
        "answer": "Yes, the maximum investment limitations under Qatar's Investment Law No. 13 of 2000 are 49% of the capital of the company. Nonetheless, the legislation permits 100% ownership in specific circumstances across a range of industries and with previous authorization from the government."
    },
    {
        "question": "Can an Indian open a bank account in Qatar?",
        "answer": "NRIs in Qatar who wish to create an NRE account can apply online at the bank's website or by going to the closest branch. Moreover, NRIs can manage and retain their overseas income in Indian rupees through the use of an NRE account."
    },
    {
        "question": "What is an LLC in Qatar?",
        "answer": "In Qatar, a Limited Liability Company, often known as an LLC or WLL, is the most popular and widely used business structure. In an LLC, Qatari nationals must own the majority of the business—their shares must total 51%"
    },
    {
        "question": "How long does it take to open a company in Qatar?",
        "answer": "The average time taken for company registration in Qatar is on average 6-8 weeks, which might extend if the application faces multiple rejections due to errors made."
    },
    {
        "question": "Is home business allowed in Qatar?",
        "answer": "Recognizing HbBs as a developing economic sector, Qatar enacted new laws allowing for the practice of business at home. The government's attention and support for the HbB sector in Qatar have increased with the implementation of new rules."
    }
]


  
const Home = () => {
    return (
        <div className='services-pages qatar-reg'>
            <Head>
                <title>Get Started with Company Registration in Qatar</title>
                <meta name="description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
                <link rel="canonical" href="https://www.registerkaro.in/qatar-company-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Get Started with Company Registration in Qatar" />
                <meta property="og:description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Company Registration in Qatar</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Benefits of starting a Business in Qatar</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className='main-heading'>Types of companies for Company Registration in Qatar</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Documents to carry for registration process</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>Company registration Process in Qatar</h2>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h2 className='main-heading'>Why Choose RegisterKaro for Company Registration in Qatar?</h2>
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