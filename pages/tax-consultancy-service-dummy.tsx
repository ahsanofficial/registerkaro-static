import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Benefits } from '../components/static/tax-consultancy-services/Benefits'
import { BenefitsGst } from '../components/static/tax-consultancy-services/BenefitsGst'
import { DocumentRequired } from '../components/static/tax-consultancy-services/DocumentRequired'
import { Hero } from '../components/static/tax-consultancy-services/Hero'
import { Process } from '../components/static/tax-consultancy-services/Process'
import { Types } from '../components/static/tax-consultancy-services/Types'
import { WhyChoose } from '../components/static/tax-consultancy-services/WhyChoose'
import { ProfessionalTax } from '../components/static/tax-consultancy-services/ProffessionalTax'
import { Advantages } from '../components/static/tax-consultancy-services/Advantages'
import { EligibilityProfessional } from '../components/static/tax-consultancy-services/EligibilityProfessional'
import { TDS } from '../components/static/tax-consultancy-services/TDS'
import { BenefitsTds } from '../components/static/tax-consultancy-services/BenefitsTds'
import { CriteriaTds } from '../components/static/tax-consultancy-services/CriteriaTds'
import { IncomeTaxReturn } from '../components/static/tax-consultancy-services/IncomeTaxReturn'
import { BenefitsITR } from '../components/static/tax-consultancy-services/BenefitsITR'
import { EligibilityFiling } from '../components/static/tax-consultancy-services/EligibilityFiling'




  
const Home = () => {
    return (
        <div className='services-pages qatar-reg'>
            <Head>
                <title>Tax Consultancy Services</title>
                <meta name="description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
                <link rel="canonical" href="https://www.registerkaro.in/tax-consultancy-services" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Get Started with Company Registration in Qatar" />
                <meta property="og:description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
            </Head>
            <Hero />
            <h1 className='main-heading'>Overview of Tax Consultancy Services for Startups</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Benefits for Start-ups in India</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className='main-heading'>GST Registration and Advisory Services</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Benefits of GST Registration</h2>
            <div className='heading-line'></div>
            <BenefitsGst />


            <h2 className='main-heading'>Eligibility for GST Registration</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
          
          
             <h2 className='main-heading'>Professional Tax Registration</h2>
            <div className='heading-line'></div>
            <ProfessionalTax />
            <h2 className='main-heading'>Advantages of Professional Tax Registration</h2>
            <div className='heading-line'></div>
            <Advantages/>
            <h2 className='main-heading'>Eligibility for Professional Tax Registration</h2>
            <div className='heading-line'></div>
            <EligibilityProfessional />
            <h2 className='main-heading'>TDS Return Filing</h2>
            <div className='heading-line'></div>
            <TDS />
            <h2 className='main-heading'>Benefits of TDS Return Filling</h2>
            <div className='heading-line'></div>
            <BenefitsTds/>
            <h2 className='main-heading'>Eligibility Criteria for TDS Deduction in India</h2>
            <div className='heading-line'></div>
            <CriteriaTds/>

            <h2 className='main-heading'>Income Tax Return Filing</h2>
            <div className='heading-line'></div>

            <IncomeTaxReturn />
            <h2 className='main-heading'>Benefits of ITR Filing</h2>
            <div className='heading-line'></div>
            <BenefitsITR />
            <h2 className='main-heading'>Eligibility for Filing Income Tax Returns in India</h2>
            <div className='heading-line'></div>
            < EligibilityFiling />
           <h2 className='main-heading'>What Tax Consultancy Services for Startups are Being Offered by RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyChoose/>


            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />


          
        </div>
    )
}
export default Home