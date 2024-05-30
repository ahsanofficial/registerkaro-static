import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/make-in-india-certification/Hero'
import { Process } from '../components/static/make-in-india-certification/Process'
import { Benefits } from '../components/static/make-in-india-certification/Benefits'
import { WhyChoose } from '../components/static/make-in-india-certification/WhyChoose'
import { DocumentsRequired } from '../components/static/make-in-india-certification/DocumentsRequired'
import { RegistrationProcess } from '../components/static/make-in-india-certification/RegistrationProcess'
import { CostOfCertification } from '../components/static/make-in-india-certification/CostOfCertification'



const Home = () => {
    return (
        <div className='services-pages make-in-india-certification'>
            <Head>
                <title>Make in India Certification | RegisterKaro</title>
                <meta name="description" content="To help boost the economy, a country needs to promote industrialisation in their domestic regions, a certification is one way to ensure that the products associated with a particular company pass certain qualifications and meet certain criteria and make-in India is one of them. Make-in-India certification was introduced to build the concept of initiating or encouraging various commercial sectors to manufacture their products in India and sell them worldwide across multiple countries. This would help in increasing the economy of India by providing employment opportunities and promoting industrialisation to some extent in India" />
                <link rel="canonical" href="https://www.registerkaro.in/make-in-india-certification" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Make in India Certification | RegisterKaro" />
                <meta property="og:description" content="To help boost the economy, a country needs to promote industrialisation in their domestic regions, a certification is one way to ensure that the products associated with a particular company pass certain qualifications and meet certain criteria and make-in India is one of them. Make-in-India certification was introduced to build the concept of initiating or encouraging various commercial sectors to manufacture their products in India and sell them worldwide across multiple countries. This would help in increasing the economy of India by providing employment opportunities and promoting industrialisation to some extent in India" />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is Make in India Certification?</h1>
            <div className='heading-line'></div>
            <Process />
            
            <h2 className='main-heading'>Benefits</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className='main-heading'>Registration Process</h2>
            <div className='heading-line'></div>
            <RegistrationProcess />
            <h2 className='main-heading'>Documents Required</h2>
            <div className='heading-line'></div>
            <DocumentsRequired />
            <h2 className='main-heading'>Cost of certification</h2>
            <div className='heading-line'></div>
            <CostOfCertification />
            <h2 className='main-heading'>How does RegisterKaro help?</h2>
            <div className='heading-line'></div>
            <WhyChoose />

            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
        </div>
    )
}
export default Home
