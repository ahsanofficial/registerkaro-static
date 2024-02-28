import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Checklist } from '../components/static/winding-up-of-a-company/Checklist'
import { DiffrentWays } from '../components/static/winding-up-of-a-company/DiffrentWays'
import { DocsREquired } from '../components/static/winding-up-of-a-company/DocsRequired'
import { Hero } from '../components/static/winding-up-of-a-company/Hero'
import { Process } from '../components/static/winding-up-of-a-company/Process'
import { VoluntaryWinding } from '../components/static/winding-up-of-a-company/VoluntaryWinding'
import { WhatIsComp } from '../components/static/winding-up-of-a-company/WhatIsComp'
import { WhatVoluntary } from '../components/static/winding-up-of-a-company/WhatVoluntary'
import { WhoCan } from '../components/static/winding-up-of-a-company/WhoCan'
import { WindingUp } from '../components/static/winding-up-of-a-company/WindingUp'
import { WindingUpThrough } from '../components/static/winding-up-of-a-company/WindingUpThrough'

const Home = () => {
    return (
        <div className='services-pages winding-up-of-a-company-reg'>
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
            <h1 className='main-heading'>Winding up of a Company: A Comprehensive Guide</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>What are the different ways of winding up of a company?</h1>
            <div className='heading-line'></div>
            <DiffrentWays/>
            <h1 className='main-heading'>What is compulsory winding up of a company?</h1>
            <div className='heading-line'></div>
            <WhatIsComp/>
            <h1 className='main-heading'>Winding up of a Company by the order of the tribunal</h1>
            <div className='heading-line'></div>
            <WindingUp/>
            <h1 className='main-heading'>Who can all file the petition for winding up of a Company by tribunal?</h1>
            <div className='heading-line'></div>
            <WhoCan/>
            <h1 className='main-heading'>Stages involved in the process of winding up of a company by tribunal</h1>
            <div className='heading-line'></div>
            <Checklist/>
            <h1 className='main-heading'>What is voluntary winding up of a company?</h1>
            <div className='heading-line'></div>
            <WhatVoluntary/>
            <h1 className='main-heading'>Voluntary winding up a company</h1>
            <div className='heading-line'></div>
            <VoluntaryWinding/>
            <h1 className='main-heading'>What is a Fast-Track Exit Scheme (FTE)?</h1>
            <div className='heading-line'></div>
            <DocsREquired/>
            <h1 className='main-heading'>Winding up of a company through FTE</h1>
            <div className='heading-line'></div>
            <WindingUpThrough/>
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
        </div>
    )
}
export default Home