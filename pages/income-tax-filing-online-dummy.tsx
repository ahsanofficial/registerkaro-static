import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../components/static/income-tax-filing-online/DocumentRequired'
import { Hero } from '../components/static/income-tax-filing-online/Hero'
import { Process } from '../components/static/income-tax-filing-online/Process'
import { Procedure } from '../components/static/income-tax-filing-online/Procedure'
import { Types } from '../components/static/income-tax-filing-online/Types'
import { Benefits } from '../components/static/income-tax-filing-online/Benefits'
import { Prerequisites } from '../components/static/income-tax-filing-online/Prerequisites'
import Penalty from '../components/static/income-tax-filing-online/Penalty'

  
const Home = () => {
    return (
        <div className='services-pages income-tax-filing-online-reg'>
           <Head>
                <title>Online Income Tax Filing | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/income-tax-filing-online" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Trademark Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>Income Tax Filing Online – Process, Documents, Benefits</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Different Types of ITR Forms in India</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Benefits of filing ITR Online in India</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className='main-heading'>Eligibility criteria for Income Tax Filing Online</h2>
            <div className='heading-line'></div>
            <Prerequisites />
            <h2 className='main-heading'>Documents required for ITR filing online</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>Procedure for filing Income Tax Online</h2>
            <div className='heading-line'></div>
            <Procedure />
            <h2 className='main-heading'>Penalty for late income tax filing</h2>
            <div className='heading-line'></div>
            <Penalty/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
        </div>
    )
}
export default Home