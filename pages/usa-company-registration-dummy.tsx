import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/usa-company-registration/Hero'
import { Process } from '../components/static/usa-company-registration/Process'
import { Benefits } from '../components/static/usa-company-registration/Benefits'
import { Types } from '../components/static/usa-company-registration/Types'
import { LLC } from '../components/static/usa-company-registration/LLC'
import { InfoAndDoc } from '../components/static/usa-company-registration/InfoAndDoc'
import { InformationRequired } from '../components/static/usa-company-registration/InformationRequired'
import { DocumentsRequired } from '../components/static/usa-company-registration/DocumentsRequired'
import { Business } from '../components/static/usa-company-registration/Business'




const Home = () => {
    return (
        <div className='services-pages usa-company-reg'>
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
            <h1 className='main-heading'>Get Online USA Company Registration</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Benefits of USA Company Registration</h1>
            <div className='heading-line'></div>
            <Benefits/>
            <h1 className='main-heading'>Types for USA Company Registration</h1>
            <div className='heading-line'></div>
            <Types/>
            <h1 className='main-heading'>LLC or C-Corporation: Choosing the Right Entity for Your Business</h1>
            <div className='heading-line'></div>
            <LLC/>
            <h1 className='main-heading'>Information and Documents Required for USA Company Registration</h1>
            <div className='heading-line'></div>
            <InfoAndDoc/>
            <h1 className='main-heading'>Information Required</h1>
            <div className='heading-line'></div>
            <InformationRequired/>
            <h1 className='main-heading'>Documents Required</h1>
            <div className='heading-line'></div>
            <DocumentsRequired/>
            <h1 className='main-heading'>Related Business Registrations</h1>
            <div className='heading-line'></div>
            <Business/>
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
        </div>
    )
}
export default Home