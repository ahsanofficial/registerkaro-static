import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/wpc-certificate/Hero'
import { Process } from '../components/static/wpc-certificate/Process'
import { Types } from '../components/static/wpc-certificate/Types'
import { Why } from '../components/static/wpc-certificate/Why'
import { DocumentRequired } from '../components/static/wpc-certificate/DocumentRequired'
import { WhyChoose } from '../components/static/wpc-certificate/WhyChoose'
import { ProcessCompany } from '../components/static/wpc-certificate/ProcessCompany'
import { Advantage } from '../components/static/wpc-certificate/Advantage'
import { Consent } from '../components/static/wpc-certificate/Consent'
import { Fees } from '../components/static/wpc-certificate/Fees'


  
const Home = () => {
    return (
        <div className='services-pages wpc-certificate-reg'>
            <Head>
                 <title>WPC certificate| RegisterKaro</title> 
              <meta name="description" content="The Official RegisterKaro" /> 
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
               <link rel="canonical" href="https://www.registerkaro.in/ads/wpc-certificate" /> 
            </Head>
            <Hero />
            <h1 className='main-heading'>Overview of Wireless Planning and Coordination (WPC) Certificate:</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>What is WPC certificate?</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>List of products which requires a WPC Certificate for import:</h2>
            <div className='heading-line'></div>
            <Why />
            <h2 className='main-heading'>What are the types of WPC Certificate?</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>Required Documents for WPC Certification</h2>
            <div className='heading-line'></div>
            <Advantage/>
            <h2 className='main-heading'>How to Apply Certificate or WPC License </h2>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h2 className='main-heading'>Importance of WPC License </h2>
            <div className='heading-line'></div>
            <Consent/>
            <h2 className='main-heading'>WPC Certificate Fees </h2>
            <div className='heading-line'></div>
            <Fees/>
            <h2 className='main-heading'>How RegisterKaro Can Assist You in the WPC Certificate Fees process?</h2>
            <div className='heading-line'></div>
            <WhyChoose/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
           
        </div>
    )
}
export default Home