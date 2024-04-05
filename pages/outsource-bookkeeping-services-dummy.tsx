import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/outsource-bookkeeping-services/Hero'
import { Process } from '../components/static/outsource-bookkeeping-services/Process'
import { WhyChoose } from '../components/static/outsource-bookkeeping-services/WhyChoose'
import Services from '../components/static/outsource-bookkeeping-services/Services'
import WhyOutsource from '../components/static/outsource-bookkeeping-services/WhyOutsource'
import WhatHappen from '../components/static/outsource-bookkeeping-services/WhatHappen'
import OurProcess from '../components/static/outsource-bookkeeping-services/OurProcess'

const faq = [
    {
        "question": "How much does it cost to outsource a bookkeeper?",
        "answer": "The average cost for outsourcing a bookkeeper is relatively smaller than that of the in-house bookkeeping services. The cost for an experienced and qualified bookkeeper falls between $50 and $70 per hour, which is quite cheaper if it is being served for 10 to 20 hours a month."
    },
    {
        "question": "How do I outsource my bookkeeping?",
        "answer": "If you are looking to outsource your bookkeeping services, you may reach out to the firms, companies, or freelancers offering such services, which must surely be listed on google. If you want to skip the research part, you may contact RegisterKaro to outsource the Bookkeeping services."
    },
    {
        "question": "Is it cheaper to outsource accounting?",
        "answer": "Yes, the cost of outsourcing accounting is relatively cheaper than the in-house Bookkeeping services."
    },
    {
        "question": "Is freelance bookkeeping profitable?",
        "answer": "Freelance or outsourced bookkeeping is profitable in comparison to that of full-time or in-house bookkeeping services. The freelancers or outsourced service providers cost less than the traditional ones, that is, with additional technological advancement."
    },
    {
        "question": "Why should I outsource my bookkeeping?",
        "answer": "You should outsource your bookkeeping as the process is cost-effective, qualitative, backed by technological advancement, expert assistance, and timeless services."
    },
    {
        "question": "Is it possible to do your own bookkeeping?",
        "answer": "It is definitely possible to do your own bookkeeping; however, the process is quite complex and time-consuming. Moreover, in certain aspects, you would need the Chartered Accountant’s assistance for documentation purposes."
    },
    {
        "question": "Is outsourcing costly?",
        "answer": "No, Outsourcing bookkeeping is relatively cheaper when compared to traditional or in-house bookkeeping."
    }
]


  
const Home = () => {
    return (
        <div className='services-pages outsource-bookkeeping-services'>
            <Head>
                <title>Outsource bookkeeping services in India</title>
                <meta name="description" content="Our outsource bookkeeping services use industry-leading software, making your bookkeeping seamless and efficient" />
                <link rel="canonical" href="https://www.registerkaro.in/outsource-bookkeeping-services" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Outsource bookkeeping services in India" />
                <meta property="og:description" content="Our outsource bookkeeping services use industry-leading software, making your bookkeeping seamless and efficient" />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is a Bookkeeping Service?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Services included in Outsourcing Bookkeeping</h2>
            <div className='heading-line'></div>
            <Services/>
            <h2 className='main-heading'>Why outsource bookkeeping services?</h2>
            <div className='heading-line'></div>
            <WhyOutsource/>
            <h2 className='main-heading'>What happen if you do not outsource bookkeeping services?</h2>
            <div className='heading-line'></div>
            <WhatHappen/>
            <h2 className='main-heading'>Our Process for Outsource Bookkeeping Services</h2>
            <div className='heading-line'></div>
            <OurProcess/>
            <h2 className='main-heading'>Why to choose RegisterKaro?</h2>
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