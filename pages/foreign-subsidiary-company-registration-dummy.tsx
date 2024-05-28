import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/foreign-subsidiary-company-registration/Hero'
import { Process } from '../components/static/foreign-subsidiary-company-registration/Process'
import { Understanding } from '../components/static/foreign-subsidiary-company-registration/Understanding'
import { Benefits } from '../components/static/foreign-subsidiary-company-registration/Benefits'
import { Examples } from '../components/static/foreign-subsidiary-company-registration/Examples'
import { Difference } from '../components/static/foreign-subsidiary-company-registration/Difference'
import { DocumentReq } from '../components/static/foreign-subsidiary-company-registration/DocumentReq'
import { RegistrationProcess } from '../components/static/foreign-subsidiary-company-registration/RegistrationProcess'
import { ComplianceReq } from '../components/static/foreign-subsidiary-company-registration/ComplianceReq'
import { ApplicableTaxes } from '../components/static/foreign-subsidiary-company-registration/ApplicableTaxes'
import { CostsInclude } from '../components/static/foreign-subsidiary-company-registration/CostsInclude'



const Home = () => {
    return (
        <div className='services-pages foreign-subsidiary-company-registration'>
            <Head>
                <title>Foreign Subsidiary Company Registration | RegisterKaro</title>
                <meta name="description" content="Setting up a subsidiary company in India is a strategic avenue for international companies which aspire to establish a foothold in the Indian market." />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <h1 className='main-heading'>Overview of Foreign Subsidiary Company Registration</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Understanding Foreign Subsidiary Company Registration</h2>
            <div className='heading-line'></div>
            <Understanding />
            <h2 className='main-heading'>Benefits of Registering a Foreign Subsidiary in India</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className='main-heading'>Examples of Some Foreign Subsidiary Companies in India</h2>
            <div className='heading-line'></div>
            <Examples />
            <h2 className='main-heading'>Difference between Foreign Branch and Subsidiary</h2>
            <div className='heading-line'></div>
            <Difference />
            <h2 className='main-heading'>Essential Documents for Registration</h2>
            <div className='heading-line'></div>
            <DocumentReq />
            <h2 className='main-heading'>Registration Process</h2>
            <div className='heading-line'></div>
            <RegistrationProcess />
            <h2 className='main-heading'>Compliance Requirements for Foreign Subsidiary</h2>
            <div className='heading-line'></div>
            <ComplianceReq />
            <h2 className='main-heading'>Applicable Taxes on Foreign Subsidiary in India</h2>
            <div className='heading-line'></div>
            <ApplicableTaxes />
            <h2 className='main-heading'>Costs included in Registering a Subsidiary in India</h2>
            <div className='heading-line'></div>
            <CostsInclude />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
        </div>
    )
}
export default Home