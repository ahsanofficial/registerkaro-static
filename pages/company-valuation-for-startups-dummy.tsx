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
        <div className='services-pages company-valuation-startups mb-5'>
            <Head>
                <title>Company Valuation for Startups | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> */}
            </Head>
            <Hero />
            <h1 className='main-heading'>What is the Meaning of Company Valuation for Startups?</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Methods Used for Company Valuation of Startups</h1>
            <div className='heading-line'></div>
            <MethodsUsed />
            <h1 className='main-heading'>Factors Affecting Company Valuation for Startups in India</h1>
            <div className='heading-line'></div>
            <FactorsAffectingValuation />
            <h1 className='main-heading'>Challenges in Startup Valuation in India</h1>
            <div className='heading-line'></div>
            <ChallengesInValuation />
            <h1 className='main-heading'>Why RegisterKaro for Startup Valuation?</h1>
            <div className='heading-line'></div>
            <WhyForStartupEvaluation />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
        </div>
    )
}
export default Home