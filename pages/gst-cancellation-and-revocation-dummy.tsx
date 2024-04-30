import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import Elements from '../components/static/gst-cancellation-and-revocation/Elements'
import { Hero } from '../components/static/gst-cancellation-and-revocation/Hero'
import HowPrepare from '../components/static/gst-cancellation-and-revocation/HowPrepare'
import { Process } from '../components/static/gst-cancellation-and-revocation/Process'
import { WhyChoose } from '../components/static/gst-cancellation-and-revocation/WhyChoose'
import WhyDo from '../components/static/gst-cancellation-and-revocation/WhyDo'
import WhoCancel from '../components/static/gst-cancellation-and-revocation/WhoCancel'
import ReasonsCancel from '../components/static/gst-cancellation-and-revocation/ReasonsCancel'
import ProcedureCancellation from '../components/static/gst-cancellation-and-revocation/ProcedureCancellation'
import WhatRevocation from '../components/static/gst-cancellation-and-revocation/WhatRevocation'
import TimeLimit from '../components/static/gst-cancellation-and-revocation/TimeLimit'
import ProcedureRevocation from '../components/static/gst-cancellation-and-revocation/ProcedureRevocation'
import Unqualified from '../components/static/gst-cancellation-and-revocation/Unqualified'
import FeesCancellation from '../components/static/gst-cancellation-and-revocation/FeesCancellation'

const Home = () => {
    return (
        <div className='services-pages '>
            <Head>
                <title>GST Cancellation and Revocation</title>
                <meta name="description" content="The process of GST registration cancellation and revocation is essential for businesses under the Goods and Services Tax regime. Cancellation can occur voluntarily or involuntarily, with specific procedures and reasons outlined for each." />
                <link rel="canonical" href="https://www.registerkaro.in/gst-cancellation-and-revocation" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="GST Cancellation and Revocation" />
                <meta property="og:description" content="The process of GST registration cancellation and revocation is essential for businesses under the Goods and Services Tax regime. Cancellation can occur voluntarily or involuntarily, with specific procedures and reasons outlined for each." />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is Cancellation of GST Registration?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Who can Cancel the GST Registration?</h2>
            <div className='heading-line'></div>
            <WhoCancel/>
            <h2 className='main-heading'>Reasons for Cancellation of GST Registration</h2>
            <div className='heading-line'></div>
            <ReasonsCancel />
            <h2 className='main-heading'>Procedure for Cancellation of Registration</h2>
            <div className='heading-line'></div>
            <ProcedureCancellation />
            <h2 className='main-heading'>What is Revocation of Cancellation Registration?</h2>
            <div className='heading-line'></div>
            <WhatRevocation />
            <h2 className='main-heading'>Time Limit for filling the revocation application</h2>
            <div className='heading-line'></div>
            <TimeLimit />
            <h2 className='main-heading'>Procedure for Revocation</h2>
            <div className='heading-line'></div>
            <ProcedureRevocation />
            <h2 className='main-heading'>Unqualified Applicants</h2>
            <div className='heading-line'></div>
            < Unqualified/>
            <h2 className='main-heading'>Fees for Cancellation and Revocation of GST Registration</h2>
            <div className='heading-line'></div>
            <FeesCancellation/>
            <h2 className='main-heading'>How does Register Karo help?</h2>
            <div className='heading-line'></div>
            <WhyChoose/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
        </div>
    )
}
export default Home