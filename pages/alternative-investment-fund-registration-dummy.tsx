import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Benefits } from '../components/static/alternative-Investment-Fund-Registration/Benefits'
import { DocumentRequired } from '../components/static/alternative-Investment-Fund-Registration/DocumentRequired'
import { Hero } from '../components/static/alternative-Investment-Fund-Registration/Hero'
import { Process } from '../components/static/alternative-Investment-Fund-Registration/Process'
import { Types } from '../components/static/alternative-Investment-Fund-Registration/Types'
import { WhyChoose } from '../components/static/alternative-Investment-Fund-Registration/WhyChoose'
import { AlternativeFunds } from '../components/static/alternative-Investment-Fund-Registration/AlternativeFunds'



  
const Home = () => {
    return (
        <div className='services-pages qatar-reg'>
            <Head>
                <title>Alternative Investment Fund Registration</title>
                <meta name="description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
                <link rel="canonical" href="https://www.registerkaro.in/alternative-investment-fund-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Get Started with Alternative investment fund registration " />
                <meta property="og:description" content="Alternative investment fund registration ." />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is Alternative Investment Fund(AIF) Registration?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Categories</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Benefits</h2>
            <div className='heading-line'></div>
            <Benefits />     
            <h2 className='main-heading'>Eligibility</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>How to Register for Alternative Funds?</h2>
            <div className='heading-line'></div>
            <AlternativeFunds />
           
            <h2 className='main-heading'>How does Register Karo help?</h2>
            <div className='heading-line'></div>
            <WhyChoose/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
         
        </div>
    )
}
export default Home