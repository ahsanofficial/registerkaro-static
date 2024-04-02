import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/types-of-companies/Hero'
import { Process } from '../components/static/types-of-companies/Process'
import Types  from '../components/static/types-of-companies/Types'
import Understanding  from '../components/static/types-of-companies/Understanding'
import Conclusion  from '../components/static/types-of-companies/Conclusion'


const Home = () => {
    return (
        <div className='services-pages types-of-companies-reg'>
           <Head>
                <title>Different Types of Companies in India | RegisterKaro</title>
                <meta name="description" content="Before starting any business, it is vital to know the various types of companies in India for both entrepreneurs and investors" />
                <link rel="canonical" href="https://www.registerkaro.in/types-of-companies" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Different Types of Companies in India | RegisterKaro" />
                <meta property="og:description" content="Before starting any business, it is vital to know the various types of companies in India for both entrepreneurs and investors" />
            </Head>
            <Hero />
            <h1 className='main-heading'>What are the Different Types of Companies in India?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Understanding Companies</h2>
            <div className='heading-line'></div>
            <Understanding />
            <h2 className='main-heading'>Different Types of Companies in India</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Conclusion</h2>
            <div className='heading-line'></div>
            <Conclusion />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
        </div>
    )
}
export default Home