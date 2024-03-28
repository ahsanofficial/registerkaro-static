import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import DocumentsRequired from '../components/static/change-in-director/DocumentsRequired'
import Eligibility from '../components/static/change-in-director/Eligibility'
import { Hero } from '../components/static/change-in-director/Hero'
import Meaning from '../components/static/change-in-director/Meaning'
import { Process } from '../components/static/change-in-director/Process'
import Role from '../components/static/change-in-director/Role'
import { Step } from '../components/static/change-in-director/Step'


const Home = () => {
    return (
        <div className='services-pages change-in-director '>
           <Head>
                <title>Change in Director of a Company | RegisterKaro</title>
                <meta name="description" content="Simplify director transitions with our seamless process. Apply now for expert support in changing directors and ensure a smooth corporate journey." />
                <link rel="canonical" href="https://www.registerkaro.in/trademark-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Change in Director of a Company | RegisterKaro" />
                <meta property="og:description" content="Simplify director transitions with our seamless process. Apply now for expert support in changing directors and ensure a smooth corporate journey." />
            </Head>

            <Hero />
            <h1 className='main-heading'>Change in Director of a Company – An Overview</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Change in Director – Meaning </h2>
            <div className='heading-line'></div>
            <Meaning/>
            <h2 className='main-heading'>What is the Role of a Company Director? </h2>
            <div className='heading-line'></div>
            <Role/>
            <h2 className='main-heading'>Eligibility Criteria to become a Director </h2>
            <div className='heading-line'></div>
            <Eligibility/>
            <h2 className='main-heading'>Documents Required for Change in Director of a Company</h2>
            <div className='heading-line'></div>
            <DocumentsRequired/>
            <h2 className='main-heading'>Step-by-step procedure for change in director of a Company</h2>
            <div className='heading-line'></div>
            <Step/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
        </div>
    )
}
export default Home