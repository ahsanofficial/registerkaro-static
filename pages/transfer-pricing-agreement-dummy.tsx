import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/transfer-pricing-agreement/Hero'
import { Process } from '../components/static/transfer-pricing-agreement/Process'
import { Why } from '../components/static/transfer-pricing-agreement/Why'
import { WhyChoose } from '../components/static/transfer-pricing-agreement/WhyChoose'
import { Whytransfer } from '../components/static/transfer-pricing-agreement/Whytransfer'
import { Pricingagreement } from '../components/static/transfer-pricing-agreement/Pricingagreement'
import { Transferpricing } from '../components/static/transfer-pricing-agreement/Transferpricing'



const faq = [
    {
        "question": "What are Transfer Pricing Agreement?",
        "answer": "Transfer pricing is the cost of goods and services exchanged between companies that are controlled by the same entity. For instance, when a subsidiary company sells products or provides services to its parent company or a sibling company, the cost is known as the transfer price."
    },
    {
        "question": "Example of Transfer Pricing Agreement?",
        "answer": "PQR subsidiary company of XYZ produces vehicles while purchasing the engine from STR which is also a subsidiary company of XYZ. Here the transfer price is the amount that PQR pays STR for the engine."
    },
    {
        "question": "What’s APA Transfer Pricing Agreement?",
        "answer": "An APA is a formal agreement between one or more taxpayers and one or more tax authorities that is intended to prevent transfer pricing disputes by setting criteria in advance for specific cross-border controlled transactions to ensure they meet the arm's length principle."
    },

    {
        "question": " What’s Rule of Transfer Pricing?",
        "answer":"Transfer pricing is a financial and tax strategy enabling businesses to set prices for transactions within the company and among subsidiaries under the same control or ownership.",
    },
    {
        "question": "What’s the benefit of Transfer Pricing?",
        "answer": "Transfer pricing enables the transfer of resources between countries using secure methods while avoiding steep tariffs on the transactions."
    },
] 
  
const Home = () => {
    return ( 
        <div className='services-pages dubai-reg'>
            <Head>
                 <title> Transfer pricing agreement | RegisterKaro</title> 
                <meta name="description" content="The Official RegisterKaro" /> 
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://www.registerkaro.in/ads/transfer-pricing-agreement" /> 
            </Head>
            
            <Hero />
            <h1 className='main-heading'>What’s Transfer Pricing Agreement?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Things to Know About Transfer Pricing Agreement</h2>
            <div className='heading-line'></div>
            <Why />
            <h2 className='main-heading'>Why Transfer Pricing</h2>
            <div className='heading-line'></div>
            <Whytransfer/>
             <h2 className='main-heading'>What to be there in Transfer Pricing Agreement:</h2>
            <div className='heading-line'></div>
            <Transferpricing/>  
            <h2 className='main-heading'>What to Take Care in Transfer Pricing Agreement</h2>
            <div className='heading-line'></div>
            <Pricingagreement/> 
            <h2 className='main-heading'>How RegisterKaro helps you in the Registration process?</h2>
            <div className='heading-line'></div>
            <WhyChoose/>   
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