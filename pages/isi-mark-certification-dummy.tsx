import React from 'react'
import Head from 'next/head'
import { Hero } from '../components/static/isi-mark-certification/Hero'
import { Process } from '../components/static/isi-mark-certification/Process'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Benefits } from '../components/static/isi-mark-certification/Benefits'
import { PartnershipDeed } from '../components/static/isi-mark-certification/PartnershipDeed'
import { OtherAnnual } from '../components/static/isi-mark-certification/OtherAnnual'
import { EventBased } from '../components/static/isi-mark-certification/EventBased'
import { KeyInitiatives } from '../components/static/isi-mark-certification/KeyInitiatives'
import { ObjectivesChecklist } from '../components/static/isi-mark-certification/ObjectivesChecklist'
import { AdvantagesBIS } from '../components/static/isi-mark-certification/AdvantagesBIS'
import { Checklist } from '../components/static/isi-mark-certification/Checklist'
const Home = () => {
    return (
        <div className='services-pages isi-mark-certification-reg'>
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
            <h1 className='main-heading'>Get ISI Mark Certification Online in India</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Primary Objectives of ISI Certification</h1>
            <div className='heading-line'></div>
            <EventBased/>
            <h1 className='main-heading'>Key Points to Consider for ISI Mark Certification</h1>
            <div className='heading-line'></div>
            <Checklist/>
            <h1 className='main-heading'>Benefits of Obtaining ISI Mark Certification</h1>
            <div className='heading-line'></div>
            <Benefits/>
            <h1 className='main-heading'>List of Products under ISI Certification</h1>
            <div className='heading-line'></div>
            <ObjectivesChecklist/>
            <h1 className='main-heading'>Documents Required for ISI Mark Certification</h1>
            <div className='heading-line'></div>
            <KeyInitiatives/>
            <h1 className='main-heading'>Procedure for ISI Mark Certification in India</h1>
            <div className='heading-line'></div>
            <AdvantagesBIS/>
            <h1 className='main-heading'>Validity and Renewal of ISI Certificate</h1>
            <div className='heading-line'></div>
            <PartnershipDeed/>
            <h1 className='main-heading'>Reasons for ISI Application Rejection</h1>
            <div className='heading-line'></div>
            <OtherAnnual/>
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
        </div>
    )
}
export default Home