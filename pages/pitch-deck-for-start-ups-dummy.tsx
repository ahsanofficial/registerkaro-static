import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import Elements from '../components/static/pitch-deck-for-start-ups/Elements'
import { Hero } from '../components/static/pitch-deck-for-start-ups/Hero'
import HowPrepare from '../components/static/pitch-deck-for-start-ups/HowPrepare'
import { Process } from '../components/static/pitch-deck-for-start-ups/Process'
import { WhyChoose } from '../components/static/pitch-deck-for-start-ups/WhyChoose'
import WhyDo from '../components/static/pitch-deck-for-start-ups/WhyDo'

  
const Home = () => {
    return (
        <div className='services-pages '>
            <Head>
                <title>Pitch Deck for Start-ups | Registerkaro </title>
                <meta name="description" content="India in the last decade has witnessed an exceptional rise in entrepreneurial ventures that has led to the increase in multiple number of start-ups" />
                <link rel="canonical" href="https://www.registerkaro.in/pitch-deck-for-start-ups" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Pitch Deck for Start-ups | Registerkaro " />
                <meta property="og:description" content="India in the last decade has witnessed an exceptional rise in entrepreneurial ventures that has led to the increase in multiple number of start-ups" />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is a Pitch Deck?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Why do you need a pitch deck?</h2>
            <div className='heading-line'></div>
            <WhyDo />
            <h2 className='main-heading'>Elements</h2>
            <div className='heading-line'></div>
            <Elements />
            <h2 className='main-heading'>How to prepare a pitch deck?</h2>
            <div className='heading-line'></div>
            <HowPrepare />
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