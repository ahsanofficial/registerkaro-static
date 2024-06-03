import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/llp-strike-off/Hero'
import { Process } from '../components/static/llp-strike-off/Process'
import { Types } from '../components/static/llp-strike-off/Types'
import { Procedure } from '../components/static/llp-strike-off/Procedure'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhenToStrike } from '../components/static/llp-strike-off/WhenToStrike'
import { WhyChoose } from '../components/static/llp-strike-off/WhyChoose'
import { DocumentsRequired } from '../components/static/llp-strike-off/DocumentsRequired'


const faq = [
    {
        "question": "What does LLP Strike Off means?",
        "answer": "Closing down a LLP without active business operations for over one year can be easily done by removing the name of the inactive LLP through striking off. A LLP can be closed through either a voluntary winding up or winding-up by tribunal processes."
    },
    {
        "question": "How to Strike Off an LLP’s name?",
        "answer": "With the approval of all partners, an LLP can request the Registrar to remove its name from the register if it has not been engaged in any business or operation for at least one year."
    },
    {
        "question": "Can LLP be Strike Off without Annual Filing?",
        "answer": "There is no option to be excused from submitting the electronic forms (LLP-8 and LLP-11) for the closure of LLP as per regulations. Every LLP is required to file annual paperwork prior to the LLP's strike off date."
    },
    {
        "question": "How much time it take for Striking Off an LLP?",
        "answer": "An application requesting the closure of the LLP will be submitted to the ROC, who typically grants approval for Strike Off and dissolution of the LLP within approximately 3 months."
    },
    {
        "question": "What’s the difference between Strike-Off & Wind-Up?",
        "answer": "The main distinction between winding up and strike off is their relevance to different types of companies. Strike off is only for companies that are not active and have no assets or debts, whereas winding up is for companies that are actively operating with assets, debts, and a requirement for a formal closure."
    },
]

const Home = () => {
    return (
        <div className='services-pages llp-strike-off'>
            <Head>
                <title>LLP Strike OFF | RegisterKaro</title>
                <meta name="description" content="If an LLP was created to conduct business activities, such as providing services, and if it stops operating for one year or longer from the date of incorporation or the end of the last financial year, it must request the relevant ROC to remove the LLP from the Register of LLP." />
                <link rel="canonical" href="https://www.registerkaro.in/llp-strike-off" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="LLP Strike OFF | RegisterKaro" />
                <meta property="og:description" content="If an LLP was created to conduct business activities, such as providing services, and if it stops operating for one year or longer from the date of incorporation or the end of the last financial year, it must request the relevant ROC to remove the LLP from the Register of LLP." />
            </Head>
            <Hero />
            <h1 className='main-heading'>Striking Off LLP</h1>
            <div className='heading-line'></div>
            <Process />
            
            <h2 className='main-heading'>When to Strike Off an LLP</h2>
            <div className='heading-line'></div>
            <WhenToStrike />
            <h2 className='main-heading'>Documents Required</h2>
            <div className='heading-line'></div>
            <DocumentsRequired />
            <h2 className='main-heading'>Types of Strike Off</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Procedure to Striking Off an LLP</h2>
            <div className='heading-line'></div>
            <Procedure />
            <h2 className='main-heading'>How RegisterKaro helps in the registration process?</h2>
            <div className='heading-line'></div>
            <WhyChoose />
            
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
