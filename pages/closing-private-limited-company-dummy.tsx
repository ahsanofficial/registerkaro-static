import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/closing-private-limited-company/Hero'
import { Process } from '../components/static/closing-private-limited-company/Process'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { Reasons } from '../components/static/closing-private-limited-company/Reasons'
import DocumentsReq from '../components/static/closing-private-limited-company/DocumentsReq'
import Procedure from '../components/static/closing-private-limited-company/Procedure'
import { WhyChoose } from "../components/static/closing-private-limited-company/WhyChoose"

const faq = [
    {
        "question": "How do I Leave a Private Limited Company?",
        "answer": "Notify the remaining members of the board of your decision to step down through written communication. Notify additional parties such as customers, collaborators, and vendors and make sure they are provided with a new contact person. Inform Companies House of your resignation by submitting the necessary information."
    },
    {
        "question": "How can a Private Limited Company be Dissolved?",
        "answer": "A company may be put into liquidation through a court order, voluntarily by its members or creditors, or under the supervision of the court."
    },
    {
        "question": "What if I don’t close the Private Limited Company?",
        "answer": "Both the company and its officer are responsible for the penalty, where the company can be delisted and the director can be banned from acting as a director for any other company."
    },
    {
        "question": "Can I sell my Private Limited Company?",
        "answer": "Indeed, it is possible, and this practice is frequently seen in businesses seeking to generate funds by offering shares for sale. Simply keep in mind that when you sell a portion of your company, it can result in decreased control, which is determined by the specific type of shares being sold or the agreement made with the buyer."
    },
    {
        "question": "Can we remove Director from a Private Limited Company?",
        "answer": "Shareholders have the power to dismiss a director, unless the director was chosen by the government or tribunal."
    },
];



const Home = () => {
    return (
        <div className='services-pages closing-private-limited-company'>
            <Head>
                <title>Closing Private Limited Company</title>
                <meta name="description" content="A private limited company is a form of business organization in India. This business is owned by shareholders and its shares are not listed on the stock market for public trading." />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <h1 className='main-heading'>What’s Private Limited Company?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Reasons for Closing a Pvt. Ltd. Company</h2>
            <div className='heading-line'></div>
            <Reasons />
            <h2 className='main-heading'>Documents Required</h2>
            <div className='heading-line'></div>
            <DocumentsReq />
            <h2 className='main-heading'>Procedure for Closure of Pvt. Ltd. Company</h2>
            <div className='heading-line'></div>
            <Procedure />
            <h2 className='main-heading'>How RegisterKaro helps you in the Registration process?</h2>
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
export default Home;