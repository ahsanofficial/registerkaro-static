import Head from 'next/head'
import {Hero} from '../components/static/company-valuation-for-startups/Hero'
import {Process} from '../components/static/company-valuation-for-startups/Process'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { MethodsUsed } from '../components/static/company-valuation-for-startups/MethodsUsed'
import { FactorsAffectingValuation } from '../components/static/company-valuation-for-startups/FactorsAffectingValuation'
import { ChallengesInValuation } from '../components/static/company-valuation-for-startups/ChallengesInValuation'
import { WhyForStartupEvaluation } from '../components/static/company-valuation-for-startups/WhyForStartupEvaluation'

const faq = [
    
]


  
const Home = () => {
    return (
        <div className='services-pages company-valuation-startups'>
            <Head>
                <title>Company Valuation for Startups | RegisterKaro</title>
                <meta name="description" content="Company valuation for startups in India is a critical aspect that determines the worth of a company based on various factors." />
                <link rel="canonical" href="https://www.registerkaro.in/company-valuation-startups" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Company Valuation for Startups | RegisterKaro" />
                <meta property="og:description" content="Company valuation for startups in India is a critical aspect that determines the worth of a company based on various factors." />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is the Meaning of Company Valuation for Startups?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Methods Used for Company Valuation of Startups</h2>
            <div className='heading-line'></div>
            <MethodsUsed />
            <h2 className='main-heading'>Factors Affecting Company Valuation for Startups in India</h2>
            <div className='heading-line'></div>
            <FactorsAffectingValuation />
            <h2 className='main-heading'>Challenges in Startup Valuation in India</h2>
            <div className='heading-line'></div>
            <ChallengesInValuation />
            <h2 className='main-heading'>Why RegisterKaro for Startup Valuation?</h2>
            <div className='heading-line'></div>
            <WhyForStartupEvaluation />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
        </div>
    )
}
export default Home