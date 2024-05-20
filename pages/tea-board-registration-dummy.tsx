import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/tea-board-registration/Hero'
import { Process } from '../components/static/tea-board-registration/Process'
import { WhatIsTeaBoard } from '../components/static/tea-board-registration/WhatIsTeaBoard'
import { TypesOfLicenses } from '../components/static/tea-board-registration/TypesOfLicenses'
import { TypesOfRegn } from '../components/static/tea-board-registration/TypesOfRegn'
import { RCMC } from '../components/static/tea-board-registration/RCMC'
import { Cancellation } from '../components/static/tea-board-registration/Cancellation'
import { Pricing } from '../components/static/tea-board-registration/Pricing'
  
const Home = () => {
    return (
        <div className='services-pages tea-board-registration'>
            <Head>
                <title>Tea Board Registration</title>
                <meta name="description" content="The Tea Board of India, established in 1954 under the Tea Act of 1953, serves as the governing body overseeing the tea industry in India. It regulates tea cultivation and enforces quality standards on producers, processors, and exporters of tea. To operate legally, businesses must obtain the applicable licence and registration such as export and distributor licence, manufacturing unit, buyers and flavour registration etc." />
                <link rel="canonical" href="https://www.registerkaro.in/tea-board-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Tea Board Registration" />
                <meta property="og:description" content="The Tea Board of India, established in 1954 under the Tea Act of 1953, serves as the governing body overseeing the tea industry in India. It regulates tea cultivation and enforces quality standards on producers, processors, and exporters of tea. To operate legally, businesses must obtain the applicable licence and registration such as export and distributor licence, manufacturing unit, buyers and flavour registration etc." />
            </Head>
            <Hero />
            <h1 className='main-heading'>Tea Board Registration</h1>
            <div className='heading-line'></div>
            <Process />

            <h2 className="main-heading">What is Tea Board of India?</h2>
            <div className='heading-line'></div>
            <WhatIsTeaBoard />
            <h2 className='main-heading'>Types of Licenses granted by the Tea Board</h2>
            <div className='heading-line'></div>
            <TypesOfLicenses/>
            <h2 className='main-heading'>Types of Registration granted by the Tea Board</h2>
            <div className='heading-line'></div>
            <TypesOfRegn/>
            <h2 className='main-heading'>Registration Cum Membership Certificate (RCMC)</h2>
            <div className='heading-line'></div>
            <RCMC/>
            <h2 className="main-heading">Cancellation Of Licenses or Registrations</h2>
            <div className='heading-line'></div>
            <Cancellation />
            <h2 className="main-heading">Pricing for Licences and Registrations</h2>
            <div className='heading-line'></div>
            <Pricing />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
        </div>
    )
}
export default Home
