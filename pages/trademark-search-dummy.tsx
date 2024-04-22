import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import ApplicableRules from '../components/static/trademark-search/ApplicableRules'
import DifferentTypes from '../components/static/trademark-search/DifferentTypes'
import { Hero } from '../components/static/trademark-search/Hero'
import ImportantPoints from '../components/static/trademark-search/ImportantPoints'
import { Process } from '../components/static/trademark-search/Process'
import ServicesInvolved from '../components/static/trademark-search/ServicesInvolved'
import WhatProcess from '../components/static/trademark-search/WhatProcess'
import WhyNecessary from '../components/static/trademark-search/WhyNecessary'

const faq = [
    {
        "question": "What is a trademark search?",
        "answer": "A process to check if a similar or identical trademark already exists before applying for a new one."
    },
    {
        "question": "Why is a IP India Public Search important?",
        "answer": "To avoid infringing on existing trademarks and ensure the uniqueness of your mark."
    },
    {
        "question": "Who should conduct a IP India Public Search?",
        "answer": "Individuals, businesses, or legal professionals intending to register a new trademark."
    },
    {
        "question": "Where can I conduct a IP India Public Search?",
        "answer": "Through online databases provided by trademark offices, professional search firms, or attorneys."
    },
    {
        "question": "What do I need for a IP India Public Search?",
        "answer": "Details of the proposed trademark and information on goods/services associated with it."
    },
    {
        "question": "What happens if my IP India Public Search finds a similar mark?",
        "answer": "You may need to reconsider your trademark choice or seek legal advice to assess potential risks."
    },
    {
        "question": "Can I conduct a IP India Public Search for free?",
        "answer": "Some basic search functionalities are available for free on trademark office websites, but comprehensive searches may require professional assistance or paid databases."
    },
    {
        "question": "How long does a trademark search take?",
        "answer": "It varies based on the scope and complexity of the search, ranging from a few days to a couple of weeks."
    },
    {
        "question": "Can I trademark a name that is already in use?",
        "answer": "It depends on whether the existing use conflicts with your proposed use and the distinctiveness of your mark in the same industry."
    },
    {
        "question": "Is a trademark search the same as trademark registration?",
        "answer": "No, a search determines if a mark is available, while registration involves legally protecting the mark."
    },
    {
        "question": "What is a comprehensive trademark search?",
        "answer": "A thorough search that includes various databases to identify potential conflicts beyond obvious similarities."
    },
    {
        "question": "Do I need a professional to conduct a IP India Public Search?",
        "answer": "While not mandatory, professionals offer expertise and comprehensive analysis, reducing the risk of oversight."
    },
    {
        "question": "Can a trademark search guarantee approval of my application?",
        "answer": "No, it reduces risks but cannot guarantee approval as other factors influence the registration process."
    },
    {
        "question": "What if I don’t conduct a trademark search?",
        "answer": "Risk of infringing on existing trademarks, legal disputes, and denial of trademark registration."
    },
    {
        "question": "Can I conduct a trademark search for international trademarks?",
        "answer": "Yes, searches can cover international databases, but it’s crucial to search in relevant jurisdictions."
    },
    {
        "question": "When should I conduct a trademark search?",
        "answer": "Before investing in branding or applying for trademark registration to avoid potential conflicts later."
    }
]




  
const Home = () => {
    return (
        <div className='services-pages trademark-search-reg'>
            <Head>
                <title>Get Started with Company Registration in Qatar</title>
                <meta name="description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
                <link rel="canonical" href="https://www.registerkaro.ic/trademark-search" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Get Started with Company Registration in Qatar" />
                <meta property="og:description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is a Trademark Search?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Different Types of Trademark Searches</h2>
            <div className='heading-line'></div>
            <DifferentTypes/>
            <h2 className='main-heading'>Applicable Rules/Acts/ Regulations</h2>
            <div className='heading-line'></div>
            <ApplicableRules/>
            <h2 className='main-heading'>A description of products/services Involved</h2>
            <div className='heading-line'></div>
            <ServicesInvolved/>
            <h2 className='main-heading'>Why is it necessary to do a Trademark Search in India?</h2>
            <div className='heading-line'></div>
            <WhyNecessary/>
            <h2 className='main-heading'>Important Points to know for Conducting a Trademark Search Availability in India</h2>
            <div className='heading-line'></div>
            <ImportantPoints/>
            <h2 className='main-heading'>What is the process to conduct a Trademark IP India Public Search?</h2>
            <div className='heading-line'></div>
            <WhatProcess/>
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