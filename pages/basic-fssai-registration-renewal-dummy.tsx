import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/basic-fssai-registration-renewal/Hero'
import { Process } from '../components/static/basic-fssai-registration-renewal/Process'
import Requires from '../components/static/basic-fssai-registration-renewal/Requires'
import DocumentsNeeded from '../components/static/basic-fssai-registration-renewal/DocumentsNeeded'
import Benefits from '../components/static/basic-fssai-registration-renewal/Benefits'
import {Procedure}  from '../components/static/basic-fssai-registration-renewal/Procedure'
import Consequences from '../components/static/basic-fssai-registration-renewal/Consequences'
import Types from '../components/static/basic-fssai-registration-renewal/Types'


const Home = () => {
    return (
        <div className='services-pages basic-fssai-registration-renewal-reg'>
            <Head>
                <title>Registration Renewal | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/basic-fssai-registration-renewal" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Registration Renewal | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>FSSAI Registration Renewal</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className="main-heading">Who requires a FSSAI Registration Renewal?</h2>
            <div className='heading-line'></div>
            <Requires />
            <h2 className="main-heading">Types of Renewal Of Food License</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className="main-heading">Benefits of FSSAI License</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className="main-heading">Documents needed for Food License Renewal</h2>
            <div className='heading-line'></div>
            <DocumentsNeeded />
            <h2 className="main-heading">Procedure for Renewing FSSAI License</h2>
            <div className='heading-line'></div>
            <Procedure />
            <h2 className="main-heading">Consequences if FSSAI Renewal is not done within the specified time</h2>
            <div className='heading-line'></div>
            <Consequences />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
        </div>
    )
}
export default Home