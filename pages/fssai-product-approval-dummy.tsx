import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import Approval from '../components/static/fssai-product-approval/Approval'
import { Benefits } from '../components/static/fssai-product-approval/Benefits'
import { DocumentRequired } from '../components/static/fssai-product-approval/DocumentRequired'
import EarlierRules from '../components/static/fssai-product-approval/EarlierRules'
import { Hero } from '../components/static/fssai-product-approval/Hero'
import Procedure from '../components/static/fssai-product-approval/Procedure'
import { Process } from '../components/static/fssai-product-approval/Process'
import Require from '../components/static/fssai-product-approval/Require'
import System from '../components/static/fssai-product-approval/System'
import WhoCan from '../components/static/fssai-product-approval/WhoCan'

const faq = [
    {
        "question": "What is FSSAI product approval?",
        "answer": "It is a process by which the Food Safety and Standards Authority of India (FSSAI) evaluate the safety and compliance of a food product before it is introduced into the market."
    },
    {
        "question": "Who needs product approval?",
        "answer": "Food businesses that innovate or introduce new food products or ingredients that aren’t covered under existing FSSAI regulations might need to seek product approval."
    },
    {
        "question": "How can I apply for product approval under FSSAI?",
        "answer": "You’ll need to submit an application to the FSSAI with detailed information about the product, its ingredients, manufacturing process, safety data, and other relevant documentation."
    },
    {
        "question": "How long does it take to get product approval under FSSAI?",
        "answer": "The duration can vary based on the completeness of the application, the complexity of the product, and the review process, but generally, it can take a few months to receive approval."
    },
    {
        "question": "Is product approval mandatory for all food products?",
        "answer": "No, not all food products require product approval. Many products fall under existing FSSAI regulations and standards, so it’s essential to check if your product needs this specific approval."
    }
]


  
const Home = () => {
    return (
        <div className='services-pages fssai-product-approval-reg'>
           <Head>
                <title>FSSAI Product Approval | Documents Required | Procedure</title>
                <meta name="description" content="FSSAI Product Approval is a procedure in which FSSAI deems products fit for consumption/use in future food production capacity." />
                <link rel="canonical" href="https://www.registerkaro.in/fssai-product-approval" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="FSSAI Product Approval | Documents Required | Procedure" />
                <meta property="og:description" content="FSSAI Product Approval is a procedure in which FSSAI deems products fit for consumption/use in future food production capacity." />
            </Head>
            <Hero />
            <h1 className='main-heading'>Get FSSAI Product Approval Online</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>FSSAI Product Approval Online System</h2>
            <div className='heading-line'></div>
            <System />
            <h2 className='main-heading'>Which Food products require product approval?</h2>
            <div className='heading-line'></div>
            <Require />
            <h2 className='main-heading'>Earlier Rules and Regulations for FSSAI Product Approval</h2>
            <div className='heading-line'></div>
            <EarlierRules />
            <h2 className='main-heading'>When do you need product approval in India?</h2>
            <div className='heading-line'></div>
            <Approval />
            <h2 className='main-heading'>Benefits of getting product approval</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className='main-heading'>Who can apply?</h2>
            <div className='heading-line'></div>
            <WhoCan />
            <h2 className='main-heading'>Documents required for obtaining FSSAI Product Approval</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>Procedure for getting Product Approval in India</h2>
            <div className='heading-line'></div>
            <Procedure />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
        </div>
    )
}
export default Home