import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/trademark-infringement/Hero'
import { Process } from '../components/static/trademark-infringement/Process'
import { Types } from '../components/static/trademark-infringement/Types'

import { DocumentRequired } from '../components/static/trademark-infringement/DocumentRequired'
import { CapitalRequirement } from '../components/static/trademark-infringement/CapitalRequirement'
import { ProcessCompany } from '../components/static/trademark-infringement/ProcessCompany'

import { Remedies } from '../components/static/trademark-infringement/Remedies'
import { Passingoff } from '../components/static/trademark-infringement/Passingoff'

import { Difference } from '../components/static/trademark-infringement/Difference'
import { Limitation } from '../components/static/trademark-infringement/Limitation'
import { TrademarkCase } from '../components/static/trademark-infringement/TrademarkCase'
import { Pricing } from '../components/static/trademark-infringement/Pricing'

const Home = () => {
    return (
        <div className='services-pages dubai-reg'>
            <Head>
                <title>Trademark Infringement  | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://www.registerkaro.in/ads/trademark-infringement" />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is Trademark Infringement ?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Types of Trademark Infringement in India</h2>
            <div className='heading-line'></div>
            <Types />
            
            <h2 className='main-heading'>What Constitutes Trademark Infringement?</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>What does not Constitute Trademark Infringement?</h2>
            <div className='heading-line'></div>
            <CapitalRequirement />
            <h2 className='main-heading'>What Remedies are Available Against the Infringer?</h2>
            <div className='heading-line'></div>
            <Remedies/>
            <h2 className='main-heading'>What is Passing Off ?</h2>
            <div className='heading-line'></div>
            <Passingoff/>
            <h2 className='main-heading'>What is the Difference b/w Infringement and Passing Off?</h2>
            <div className='heading-line'></div>
            <Difference/>
            <h2 className='main-heading'>What is the Limitation Period for Filling the Suit?</h2>
            <div className='heading-line'></div>
            <Limitation/>
            <h2 className='main-heading'>Documents Required for Filing Trademark Infringement Case</h2>
            <div className='heading-line'></div>
            <TrademarkCase/>
            <h2 className='main-heading'>Procedure for Filing Trademark Infringement Suit</h2>
            <div className='heading-line'></div>
            <ProcessCompany /> 
            <h2 className='main-heading'>Pricing for Institution of the Suit</h2>
            <div className='heading-line'></div>
            <Pricing/>
            
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
           
        </div>
    )
}
export default Home