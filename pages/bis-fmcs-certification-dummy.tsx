import React from 'react'
import Head from 'next/head'
import { Hero } from '../components/static//bis-fmcs-certification/Hero'
import { Process } from '../components/static/bis-fmcs-certification/Process'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { EventBased } from '../components/static/bis-fmcs-certification/EventBased'
import { DocsREquired } from '../components/static/bis-fmcs-certification/DocsRequired'

import { KeyInitiatives } from '../components/static/bis-fmcs-certification/KeyInitiatives'
import { ObjectivesChecklist } from '../components/static/bis-fmcs-certification/ObjectivesChecklist'
import { AdvantagesBIS } from '../components/static/bis-fmcs-certification/AdvantagesBIS'
import { ProcedureObtaining } from '../components/static/bis-fmcs-certification/ProcedureObtaining'
import { DocRequiredBIS } from '../components/static/bis-fmcs-certification/DocRequiredBIS'



const Home = () => {
    return (
        <div className='services-pages bis-fmcs-certification-reg'>
            <Head>
                {/* <title>Private Limited Company Registration | RegisterKaro</title> */}
                {/* <meta name="description" content="The Official RegisterKaro" /> */}
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> */}
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of BIS FMCS Certification</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>What is BIS Standard Mark?</h1>
            <div className='heading-line'></div>
            <KeyInitiatives/>
            <h1 className='main-heading'>Importance of BIS FMCS Certification in India</h1>
            <div className='heading-line'></div>
            <ObjectivesChecklist/>
            <h1 className='main-heading'>List of Products Which Require BIS FMCS Certification</h1>
            <div className='heading-line'></div>
            <DocsREquired/>
            <h1 className='main-heading'>Requirements for BIS FMCS Certification</h1>
            <div className='heading-line'></div>
            <EventBased/>
            <h1 className='main-heading'>Required Documents for BIS FMCS Certification</h1>
            <div className='heading-line'></div>
            <DocRequiredBIS/>
            <h1 className='main-heading'>Procedure for Obtaining BIS FMCS Certification</h1>
            <div className='heading-line'></div>
            <ProcedureObtaining/>
            <h1 className='main-heading'>Key Guidelines for Nomination of AIR (Authorized Indian Representative) for Foreign Manufacturers</h1>
            <div className='heading-line'></div>
            <AdvantagesBIS/>
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            
        </div>
    )
}
export default Home