import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/payment-gateway-licence/Hero'
import { Process } from '../components/static/payment-gateway-licence/Process'
import { Types } from '../components/static/payment-gateway-licence/Types'

import { DocumentRequired } from '../components/static/payment-gateway-licence/DocumentRequired'
import { CapitalRequirement } from '../components/static/payment-gateway-licence/CapitalRequirement'
import { WhyChoose } from '../components/static/payment-gateway-licence/WhyChoose'
import { ProcessCompany } from '../components/static/payment-gateway-licence/ProcessCompany'



const Home = () => {
    return (
        <div className='services-pages dubai-reg'>
            <Head>
                <title>Payment Gateway Licence | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://www.registerkaro.in/ads/payment-gateway-licence" />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is a payment gateway licence ?</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Benefits:</h1>
            <div className='heading-line'></div>
            <Types />
            <h1 className='main-heading'>Procedure</h1>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h1 className='main-heading'>Documents Required:</h1>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h1 className='main-heading'>Capital Requirements for licence:</h1>
            <div className='heading-line'></div>
            <CapitalRequirement />
            <h1 className='main-heading'>How does Register Karo help ?</h1>
            <div className='heading-line'></div>
            <WhyChoose/>
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
           
        </div>
    )
}
export default Home