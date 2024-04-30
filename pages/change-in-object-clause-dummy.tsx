import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/change-in-object-clause/Hero'
import { Process } from '../components/static/change-in-object-clause/Process'
import { LegalSignificance } from '../components/static/change-in-object-clause/LegalSignificance'
import { ReasonsForChanging } from '../components/static/change-in-object-clause/ReasonsForChanging'
import {WhyChoose} from '../components/static/change-in-object-clause/WhyChoose'
import {ProcessOfChanging} from '../components/static/change-in-object-clause/ProcessOfChanging'



  
const Home = () => {
    return (
        <div className='services-pages change-in-object-clause'>
            <Head>
                <title>Change in Object Clause</title>
                <meta name="description" content="The object clause in a contract mainly discusses the primary purpose for which the contract was entered. In today's world, where businesses work in a very fast-paced environment, the business structures and the area of business keep changing with time after it has been incorporated with a particular purpose." />
                <link rel="canonical" href="https://www.registerkaro.in/change-in-object-clause" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Change in Object Clause" />
                <meta property="og:description" content="The object clause in a contract mainly discusses the primary purpose for which the contract was entered. In today's world, where businesses work in a very fast-paced environment, the business structures and the area of business keep changing with time after it has been incorporated with a particular purpose." />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is an object clause?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Legal Significance of Object Clause</h2>
            <div className='heading-line'></div>
            <LegalSignificance/>
            <h2 className='main-heading'>Reasons for changing the object clause</h2>
            <div className='heading-line'></div>
            <ReasonsForChanging/>
            <h2 className='main-heading'>Process of changing an object clause:</h2>
            <div className='heading-line'></div>
            <ProcessOfChanging/>
            <h2 className='main-heading'>How does RegisterKaro help?</h2>
            <div className='heading-line'></div>
            <WhyChoose/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
        </div>
    )
}
export default Home
