import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/petroleum-and-explosive-safety-organisation/Hero'
import { Process } from '../components/static/petroleum-and-explosive-safety-organisation/Process'
import { Types } from '../components/static/petroleum-and-explosive-safety-organisation/Types'

import { DocumentRequired } from '../components/static/petroleum-and-explosive-safety-organisation/DocumentRequired'
import { WhyChoose } from '../components/static/petroleum-and-explosive-safety-organisation/WhyChoose'



const Home = () => {
    return (
        <div className='services-pages dubai-reg'>
            <Head>
                <title>PESO(Petroleum and Explosives Safety Organisation) Certification | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://www.registerkaro.in/ads/petroleum-and-explosive-safety-organisation" />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is PESO Certification ?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Process of obtaining a licence</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Documents Required</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>How does Register Karo help ?</h2>
            <div className='heading-line'></div>
            <WhyChoose/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
           
        </div>
    )
}
export default Home