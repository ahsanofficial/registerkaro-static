import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/nidhi-company-compliance/Hero'
import { Process } from '../components/static/nidhi-company-compliance/Process'
import What from '../components/static/nidhi-company-compliance/What'
import Advantages from '../components/static/nidhi-company-compliance/Advantages'
import Vital from '../components/static/nidhi-company-compliance/Vital'
import Incorporation from '../components/static/nidhi-company-compliance/Incorporation'
import PostIncorporation from '../components/static/nidhi-company-compliance/PostIncorporation'
import ListofAnnual from '../components/static/nidhi-company-compliance/ListofAnnual'
import Penalties from '../components/static/nidhi-company-compliance/Penalties'
import Event from '../components/static/nidhi-company-compliance/Event'
import NewComplianceRules from '../components/static/nidhi-company-compliance/NewComplianceRules'


const Home = () => {
    return (
        <div className='services-pages nidhi-comp-compliance-reg'>
            <Head>
                <title>Trademark Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/trademark-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Trademark Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>Nidhi Company Compliance – A Complete Analysis</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>What are Nidhi Companies?</h2>
            <div className='heading-line'></div>
            <What />
            <h2 className='main-heading'>Key Advantages of a Nidhi Company in India</h2>
            <div className='heading-line'></div>
            <Advantages />
            <h2 className='main-heading'>Some Vital Nidhi Company Compliance</h2>
            <div className='heading-line'></div>
            <Vital />
            <h2 className='main-heading'>Pre-Incorporation Compliance</h2>
            <div className='heading-line'></div>
            <Incorporation />
            <h2 className='main-heading'>Post-Incorporation Nidhi Company Compliance</h2>
            <div className='heading-line'></div>
            <PostIncorporation />
            <h2 className='main-heading'>List of Annual Nidhi Company Compliance</h2>
            <div className='heading-line'></div>
            <ListofAnnual />
            <h2 className='main-heading'>Penalties</h2>
            <div className='heading-line'></div>
            <Penalties />
            <h2 className='main-heading'>Event-Based Compliance</h2>
            <div className='heading-line'></div>
            <Event />
            <h2 className='main-heading'>New Compliance Rules for Nidhi Companies</h2>
            <div className='heading-line'></div>
            <NewComplianceRules />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
        </div>
    )
}
export default Home