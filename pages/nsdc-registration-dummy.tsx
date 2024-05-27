import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/nsdc-registration/Hero'
import { Process } from '../components/static/nsdc-registration/Process'
import { WhatDo } from '../components/static/nsdc-registration/WhatDo'
import { CoursesAvailable } from '../components/static/nsdc-registration/CoursesAvailable'
import { HowGet } from '../components/static/nsdc-registration/HowGet'
import { NonFunded } from '../components/static/nsdc-registration/NonFunded'
import { Schemes } from '../components/static/nsdc-registration/Schemes'



const Home = () => {
    return (
        <div className='services-pages nsdc-registration'>
            <Head>
                <title>National Skill Development Corporation (NSDC) Registration | RegisterKaro</title>
                <meta name="description" content="The National Skill Development Corporation (NSDC) is a not-for-profit company which was established by the Ministry of Finance under Section 25 of the Companies Act, 1956 (similar to Section 8 of the Companies Act, 2013) on July 31, 2008." />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <h1 className='main-heading'>Overview of NSDC</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>What does NSDC do?</h2>
            <div className='heading-line'></div>
            <WhatDo />
            <h2 className='main-heading'>NSDC Courses Available in India</h2>
            <div className='heading-line'></div>
            <CoursesAvailable />
            <h2 className='main-heading'>How to Get an NSDC Affiliation?</h2>
            <div className='heading-line'></div>
            <HowGet />
            <h2 className='main-heading'>Non-Funded Affiliation</h2>
            <div className='heading-line'></div>
            <NonFunded />
            <h2 className='main-heading'>NSDC’s Schemes and Initiatives</h2>
            <div className='heading-line'></div>
            <Schemes />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
        </div>
    )
}
export default Home