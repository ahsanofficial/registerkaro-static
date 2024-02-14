import React from 'react'
import Head from 'next/head'
import { Hero } from '../components/static/bis-crs-certification/Hero'
import { Process } from '../components/static/bis-crs-certification/Process'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { OtherAnnual } from '../components/static/bis-crs-certification/OtherAnnual'
import { EventBased } from '../components/static/bis-crs-certification/EventBased'
import { MandatoryCompilance } from '../components/static/bis-crs-certification/MandatoryCompilance'
import { DocsREquired } from '../components/static/bis-crs-certification/DocsRequired'
import { Evaolution } from '../components/static/bis-crs-certification/Evaolution'
import { Decoding } from '../components/static/bis-crs-certification/Decoding'
import { Product } from '../components/static/bis-crs-certification/Product'
import { Eligibility } from '../components/static/bis-crs-certification/Eligibility'
import { Documents } from '../components/static/bis-crs-certification/Documents'



const Home = () => {
    return (
        <div className='services-pages bis-certification-reg'>
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
            <h1 className='main-heading'>Get BIS CRS Certification Online in India</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Evolution of CRS and Product Expansion: A Regulatory Timeline</h1>
            <div className='heading-line'></div>
            <Evaolution/>
            <h1 className='main-heading'>Decoding CRS: Compulsory Registration Scheme Unveiled</h1>
            <div className='heading-line'></div>
            <Decoding/>
            <h1 className='main-heading'>Product Catalog under Compulsory Registration Scheme</h1>
            <div className='heading-line'></div>
            <Product/>
            <h1 className='main-heading'>Eligibility for BIS CRS Certification: Unveiling the Criteria</h1>
            <div className='heading-line'></div>
            <Eligibility/>
            <h1 className='main-heading'>Documents Crucial for BIS CRS Certification</h1>
            <div className='heading-line'></div>
            <Documents/>
            <h1 className='main-heading'>BIS CRS Certification Process: A Step-by-Step Guide</h1>
            <div className='heading-line'></div>
            <EventBased/>
            <h1 className='main-heading'>Guidelines for Electronic Labeling within the BIS CRS Certification Scheme</h1>
            <div className='heading-line'></div>
            <DocsREquired/>
            <h1 className='main-heading'>Market Surveillance within the BIS CRS Certification Scheme: Ensuring Quality Compliance</h1>
            <div className='heading-line'></div>
            <MandatoryCompilance/>
            <h1 className='main-heading'>Implementation Steps for Surveillance Process</h1>
            <div className='heading-line'></div>
            <OtherAnnual/>
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
        </div>
    )
}
export default Home