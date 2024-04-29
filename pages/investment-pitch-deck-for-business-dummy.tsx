import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/investment-pitch-deck-for-business/Hero'
import HowDeck from '../components/static/investment-pitch-deck-for-business/HowDeck'
import InvestorDeck from '../components/static/investment-pitch-deck-for-business/InvestorDeck'
import MoreFacts from '../components/static/investment-pitch-deck-for-business/MoreFacts'
import { Process } from '../components/static/investment-pitch-deck-for-business/Process'
import { WhyChoose } from '../components/static/investment-pitch-deck-for-business/WhyChoose'

const faq = [
    {
        "question": "What makes a pitch deck perfect?",
        "answer": "Your pitch deck needs to consist of 10 components: the issue, your answer, important product characteristics, market suitability, rival environment, income and functioning models, your progress, your forecasts, your crew, and your funding demand."
    },
    {
        "question": "What’s deck in investment?",
        "answer": "A broker's deck refers to the total amount of active orders being managed by a broker at a given moment. A broker must effectively match buyers and sellers for securities on a large deck to avoid orders being cancelled."
    },
    {
        "question": "Does a pitch deck only for investors?",
        "answer": "When delivering a pitch deck, your audience may consist of investors... or fellow entrepreneurs, students, mentors, or members of the public. When reviewing an investor presentation, your audience should only include investors who are interested in your company and want to learn more."
    },
    {
        "question": "What’s investment pitch?",
        "answer": "A concise summary of your business plan that piques the interest of potential investors is essential for an investment pitch presentation. Don't focus solely on promoting your product; remember that it is just one part of your overall business strategy."
    },
    {
        "question": "What investors get in Return?",
        "answer": "An investor's returns are determined by the kind of investment they make, such as dividends, interest, rents, rights, benefits, or other cash payments."
    }
]



  
const Home = () => {
    return (
        <div className='services-pages qatar-reg'>
            <Head>
                <title>Investment Pitch Deck for Business</title>
                <meta name="description" content="A pitch deck is a short presentation that provides potential investors or clients with a summary of your business plan, products, services, and growth progress. As an entrepreneur, you are likely aware that your company or concept requires funding. Frequently, this funding will be sourced externally, meaning individuals who are not friends or family members provide it." />
                <link rel="canonical" href="https://www.registerkaro.in/investment-pitch-deck-for-business" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Investment Pitch Deck for Business" />
                <meta property="og:description" content="A pitch deck is a short presentation that provides potential investors or clients with a summary of your business plan, products, services, and growth progress. As an entrepreneur, you are likely aware that your company or concept requires funding. Frequently, this funding will be sourced externally, meaning individuals who are not friends or family members provide it." />
            </Head>
            <Hero />
            <h1 className='main-heading'>What’s Pitch Deck?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Investor Deck vs Pitch Deck</h2>
            <div className='heading-line'></div>
            <InvestorDeck />
            <h2 className='main-heading'>How to create a Pitch Deck</h2>
            <div className='heading-line'></div>
            <HowDeck />
            <h2 className='main-heading'>More Facts About Investment Pitch Deck</h2>
            <div className='heading-line'></div>
            <MoreFacts />
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