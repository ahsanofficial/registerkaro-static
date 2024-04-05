import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/revival-of-struck-off-companies/Hero'
import { Process } from '../components/static/revival-of-struck-off-companies/Process'
import Revival from '../components/static/revival-of-struck-off-companies/Revival'
import WhoCan from '../components/static/revival-of-struck-off-companies/WhoCan'
import Strike from '../components/static/revival-of-struck-off-companies/Strike'
import Procedure from '../components/static/revival-of-struck-off-companies/Procedure'
import Benefits from '../components/static/revival-of-struck-off-companies/Benefits'
import DocumentsRequired from '../components/static/revival-of-struck-off-companies/DocumentsRequired'
import Restore from '../components/static/revival-of-struck-off-companies/Restore'

const faq = [
    {
        "question": "What does it mean when a company is struck off?",
        "answer": "Striking off a company means it has been removed from the official register and is no longer a legal entity."
    },
    {
        "question": "How can I revive a struck-off company?",
        "answer": "Reviving a company usually involves applying for reinstatement with the relevant authorities, settling outstanding debts, and meeting specific legal requirements."
    },
    {
        "question": "Can any struck-off company be revived?",
        "answer": "Generally, most companies can be revived within a specific period after being struck off, provided the revival criteria set by the authorities are met."
    },
    {
        "question": "What documents are required for revival?",
        "answer": "Documentation typically includes an application for restoration, evidence of cleared debts, updated company information, and any additional documents mandated by the registrar or governing body."
    },
    {
        "question": "Is court intervention necessary for revival?",
        "answer": "In some cases, especially for companies struck off for an extended period, court orders might be necessary for revival."
    },
    {
        "question": "How long does the revival process take?",
        "answer": "The timeline varies based on jurisdiction and individual circumstances. It might take several weeks to months, depending on compliance and administrative processes."
    },
    {
        "question": "Can a struck-off company still be liable for its past debts?",
        "answer": "Yes, unless specifically discharged, the liabilities of the company before dissolution generally remain. Revival doesn’t absolve the company of past obligations."
    },
    {
        "question": "Can the company retain its original name after revival?",
        "answer": "In many cases, if the name hasn’t been taken by another entity and if the registrar allows, the company can retain its original name after revival."
    },
    {
        "question": "What happens to assets and contracts after revival?",
        "answer": "Upon revival, the company can typically reclaim its assets, continue existing contracts, and resume business operations."
    },
    {
        "question": "Are there any consequences for failing to revive a company within a specific time frame?",
        "answer": "Failing to revive a company within the stipulated time frame might lead to permanent dissolution, making it more challenging or impossible to revive the entity."
    }
]




  
const Home = () => {
    return (
        <div className='services-pages revival-of-struck-off-companies-reg'>
            <Head>
                <title>Revival of Struck Off Companies - RegisterKaro</title>
                <meta name="description" content="The revival of struck off companies may be done for a period of twenty years following the date of the strike-off." />
                <link rel="canonical" href="https://www.registerkaro.in/revival-of-struck-off-companies" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Revival of Struck Off Companies - RegisterKaro" />
                <meta property="og:description" content="The revival of struck off companies may be done for a period of twenty years following the date of the strike-off." />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Revival of Struck Off Companies</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Grounds for Revival of Struck off Companies</h2>
            <div className='heading-line'></div>
            <Revival />
            <h2 className='main-heading'>Who can apply for Revival?</h2>
            <div className='heading-line'></div>
            <WhoCan />
            <h2 className='main-heading'>Strike off of Companies under Companies Act, 2013</h2>
            <div className='heading-line'></div>
            <Strike />
            <h2 className='main-heading'>Procedure for revival of Struck off companies as per Companies Act, 2013</h2>
            <div className='heading-line'></div>
            <Procedure />
            <h2 className='main-heading'>Benefits to Activate Struck Off Company</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className='main-heading'>Documents Required for the Revival of Struck Off Companies</h2>
            <div className='heading-line'></div>
            <DocumentsRequired />
            <h2 className='main-heading'>Procedure to restore struck- off companies</h2>
            <div className='heading-line'></div>
            <Restore />
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