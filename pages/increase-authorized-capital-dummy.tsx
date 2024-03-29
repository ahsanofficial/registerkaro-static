import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/incrase-authorized-capital/Hero'
import { Process } from '../components/static/incrase-authorized-capital/Process'
import { ProcessIncrease } from '../components/static/incrase-authorized-capital/StateFSSAILicense'
import Meaning from '../components/static/incrase-authorized-capital/Meaning'
import Primary from '../components/static/incrase-authorized-capital/Primary'
import Advantages from '../components/static/incrase-authorized-capital/Advantages'


const Home = () => {
    return (
        <div className='services-pages increase-authorized-capital'>
              <Head>
                <title>Increase Authorized Share Capital | RegisterKaro</title>
                <meta name="description" content="It is important to conduct a Board Meeting by providing notice to the Director to increase Authorized Capital" />
                <link rel="canonical" href="https://www.registerkaro.in/increase-authorized-capital" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Increase Authorized Share Capital | RegisterKaro" />
                <meta property="og:description" content="It is important to conduct a Board Meeting by providing notice to the Director to increase Authorized Capital" />
            </Head>
            <Hero /> 
            <h1 className='main-heading'>How to Increase Authorized Capital?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Authorized Capital – Meaning</h2>
            <div className='heading-line'></div>
            <Meaning/>
            <h2 className='main-heading'>What are the primary components of Authorized Capital?</h2>
            <div className='heading-line'></div>
            <Primary/>
            <h2 className='main-heading'>What are the Advantages of Increasing Authorized Capital?</h2>
            <div className='heading-line'></div>
            <Advantages/>
            <h2 className='main-heading'>What is the process to Increase Authorized Capital of a Company?</h2>
            <div className='heading-line'></div>
            <ProcessIncrease/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro /> 
        </div>
    )
}
export default Home