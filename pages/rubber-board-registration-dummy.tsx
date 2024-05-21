import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/rubber-board-registration/Hero'
import { Process } from '../components/static/rubber-board-registration/Process'
import { Types } from '../components/static/rubber-board-registration/Types'
import { DocumentRequired } from '../components/static/rubber-board-registration/DocumentRequired'
import { CapitalRequirement } from '../components/static/rubber-board-registration/CapitalRequirement'
import { WhyChoose } from '../components/static/rubber-board-registration/WhyChoose'
import { ProcessRegistration } from '../components/static/rubber-board-registration/ProcessRegistration'
import { Benefits } from '../components/static/rubber-board-registration/Benefits'



const Home = () => {
    return (
        <div className='services-pages dubai-reg'>
            <Head>
                <title>Rubber Board Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://www.registerkaro.in/ads/rubber-board-registration" />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is Rubber Board Registration ?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Eligibility</h2>
            <div className='heading-line'></div>
            <Types />
           
            <h2 className='main-heading'>Process</h2>
            <div className='heading-line'></div>
            <ProcessRegistration />

            <h2 className='main-heading'>Documents Required</h2>
            <div className='heading-line'></div>
            <DocumentRequired />

            <h2 className='main-heading'>Types</h2>
            <div className='heading-line'></div>
            <CapitalRequirement />

            <h2 className='main-heading'>Benefits</h2>
            <div className='heading-line'></div>
            <Benefits />


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