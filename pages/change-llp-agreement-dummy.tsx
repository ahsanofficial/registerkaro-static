import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/change-llp-agreement/Hero'
import { Process } from '../components/static/change-llp-agreement/Process'
import Primary from '../components/static/change-llp-agreement/Primary'
import HowCan from '../components/static/change-llp-agreement/HowCan'
import Changing from '../components/static/change-llp-agreement/Changing'
import DocumentsRequired from '../components/static/change-llp-agreement/DocumentsRequired'


const Home = () => {
    return (
        <div className='services-pages change-llp-agreement-reg'>
            <Head>
                <title>Change in LLP Agreement Online</title>
                <meta name="description" content="LLP Agreement is the capital contribution & profit-sharing ratio. We assist the LLP in making any change LLP Agreement." />
                <link rel="canonical" href="https://www.registerkaro.in/change-llp-agreement" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Change in LLP Agreement Online" />
                <meta property="og:description" content="LLP Agreement is the capital contribution & profit-sharing ratio. We assist the LLP in making any change LLP Agreement." />
            </Head>
            <Hero />
            <h1 className='main-heading'>Change LLP Agreement</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Primary Reasons – Change LLP Agreement</h2>
            <div className='heading-line'></div>
            <Primary />
            <h2 className='main-heading'>What are the documents required to change LLP agreement?</h2>
            <div className='heading-line'></div>
            <DocumentsRequired />
            <h2 className='main-heading'>What is the process of changing an LLP agreement?</h2>
            <div className='heading-line'></div>
            <Changing />
            <h2 className='main-heading'>How Can We Help You?</h2>
            <div className='heading-line'></div>
            <HowCan />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
        </div>
    )
}
export default Home