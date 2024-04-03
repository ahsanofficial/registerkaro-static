import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../components/static/ireland-company-registration/DocumentRequired'
import { Hero } from '../components/static/ireland-company-registration/Hero'
import { Process } from '../components/static/ireland-company-registration/Process'
import { ProcessCompany } from '../components/static/ireland-company-registration/ProcessCompany'
import { Types } from '../components/static/ireland-company-registration/Types'
import { WhyChoose } from '../components/static/ireland-company-registration/WhyChoose'
import { Benefits } from '../components/static/ireland-company-registration/Benefits'
import { Prerequisites } from '../components/static/ireland-company-registration/Prerequisites'

const faq = [
    {
        "question": "How much does it cost to register a company in Ireland?",
        "answer": "The cost for a simple incorporation is €99 + VAT. However, for an extra €199 + VAT a year, you might want additional services like a company secretary and registered office, depending on your particular needs."
    },
    {
        "question": "Can a foreigner set up a company in Ireland?",
        "answer": "Yes, non-EU/EEA and non-Swiss nationals may apply for authorization under the Immigration Investor Program and Start Up Entrepreneur Program to initiate a business venture or make an investment in Ireland."
    },
    {
        "question": "How are companies registered in Ireland?",
        "answer": "A constitution (a memorandum and articles of association for all other company kinds, only a single document constitution if the company is an LTD company) is prepared and filed with a Form A1. The process of incorporating a company can be completed online at core.cro.ie."
    },
    {
        "question": "What is the difference between registering a company in Ireland and the UK?",
        "answer": "In Ireland, the primary advantages of forming a business are related to tax benefits. Corporation tax rates for Irish firms are lower than those for English entities; you can benefit from this very desirable tax rate by forming a limited company in Ireland."
    },
    {
        "question": "How much tax do companies pay in Ireland?",
        "answer": "The Corporation Tax (CT) has two rates including 12.5% of trading revenue and 25% of income from a trade that is excluded (as that term is defined in Tax Consolidation Act section 2) 25% goes toward non-trading revenue, such as investment and rental income."
    },
    {
        "question": "Is it easy to start a business in Ireland?",
        "answer": "Yes, setting up a business in Ireland is quite simple. The Companies Registration Office can set up a company in as little as two to four days, and businesses can be conducted as a limited company, a partnership, or an individual trader."
    },
    {
        "question": "Why are so many companies registered in Ireland?",
        "answer": "Ireland is regarded as one of the world's most productive locations to establish a business for many reasons such as huge foreign investments, tax benefits, government schemes, skilled workforce, etc."
    },
    {
        "question": "How long does it take to register a company in Ireland?",
        "answer": "Ireland permits companies to form their organizations in 5 to 7 working days, in contrast to other EU states where it could take weeks."
    },
    {
        "question": "Do I need a business license in Ireland?",
        "answer": "Yes, all firms in Ireland—whether they are owned and operated locally or by foreigners—must obtain a company registration license before they can begin operations."
    },
    {
        "question": "Is Ireland a tax haven for companies?",
        "answer": "Ireland's economic and tax policies have earned it the moniker \"tax haven.\" The creation and functioning of businesses are greatly encouraged by law, and the business climate is generally quite friendly to all types of corporations, particularly those that make investments in R&D and innovation."
    }
]

  
const Home = () => {
    return (
        <div className='services-pages ireland-company-reg'>
           <Head>
                <title>Company Registration in Ireland | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/ireland-company-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Company Registration in Ireland | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Company Registration in Ireland</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Benefits of starting a Business in Ireland</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className='main-heading'>Types of companies for Company Registration in Ireland</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Documents to carry for registration process</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>Company Registration Process in Ireland</h2>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h2 className='main-heading'>Types of taxes applicable in Ireland</h2>
            <div className='heading-line'></div>
            <Prerequisites />
            <h2 className='main-heading'>Why Choose RegisterKaro for Company Registration in Ireland?</h2>
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