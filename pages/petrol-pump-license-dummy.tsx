import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/petrol-pump-license/Hero'
import { Process } from '../components/static/petrol-pump-license/Process'
import { WhyChoose } from '../components/static/petrol-pump-license/WhyChoose'
import { Eligibility } from '../components/static/petrol-pump-license/Eligibility'
import { HowToApply } from '../components/static/petrol-pump-license/HowToApply'
import { RequiredInvestment } from '../components/static/petrol-pump-license/RequiredInvestment'
import { NeedForLand } from '../components/static/petrol-pump-license/NeedForLand'
import { LicenseCertificatedRequired } from '../components/static/petrol-pump-license/LicenseCertificatedRequired'
import { Summary } from '../components/static/petrol-pump-license/Summary'

const faq = [
    {
        "question": "What is the cost to open a petrol pump?",
        "answer": "Depending on a variety of criteria, including location, infrastructure, and kind of fuel pump, the required investment to open a gas station in India can range from ₹1 crore to ₹5 crore or more."
    },
    {
        "question": "Can I sell petrol without license?",
        "answer": "No one is permitted to transport or send petroleum to any person in India unless they are the owner of a storage license granted in accordance with these regulations, or their designated agent, a port authority, a railway administration, or an individual permitted by the Act to store petroleum without a license."
    },
    {
        "question": "How many petrol pumps can a person own?",
        "answer": 'The restriction of one pump per family will still apply to CODO pump dealers. An executive at a state oil company stated, "Rules have been relaxed to boost entrepreneurship in the sector, which is now open to private pumps."'
    },
    {
        "question": "Can I sell petrol in bottle?",
        "answer": "According to the Petroleum Act of 1934, gasoline may only be sold in glass, ceramic, or metal containers. Only those with a license to purchase gasoline may purchase it in containers made of materials that have been approved."
    },
    {
        "question": "What are the rules of petrol pump?",
        "answer": "Rules of petrol pump are as follows:",
        "list":[
            "Please refrain from smoking on the Petrol Pump property.",
            "It is forbidden to fire a matchstick inside the Petrol Pump area.",
            "When refueling, it is advisable to exit the vehicle.",
            "Carrying gasoline or fuel in glass or plastic bottles is not advised."
        ]
    },
    {
        "question": "What is petrol law?",
        "answer": "A legislation pertaining to the import, transportation, storage, production, refining, and blending of petroleum was consolidated and amended in 1934 with the passage of the Petroleum Act."
    },
    {
        "question": "Which NOC is required for petrol pump?",
        "answer": "District Administration For the storage and sale of fuels, such as gasoline, diesel, CNG, and other fuels, NOC is essential and required."
    }
]


  
const Home = () => {
    return (
        <div className='services-pages petrol-pump-license'>
            <Head>
                <title>Petrol Pump License | RegisterKaro</title>
                <meta name="description" content="In India, one of the most lucrative business ventures is operating a petrol pump. The business has experienced a surge in recent years due to the steadily rising need for fuel. Additionally, the number of cars on Indian roadways has been rising annually, which has led to an increase in consumption of fuel. Secure Your License, Unlock Opportunities by registering it at RegisterKaro." />
                <link rel="canonical" href="https://www.registerkaro.in/petrol-pump-license" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Petrol Pump License | RegisterKaro" />
                <meta property="og:description" content="In India, one of the most lucrative business ventures is operating a petrol pump. The business has experienced a surge in recent years due to the steadily rising need for fuel. Additionally, the number of cars on Indian roadways has been rising annually, which has led to an increase in consumption of fuel. Secure Your License, Unlock Opportunities by registering it at RegisterKaro." />
            </Head>
            <Hero />
            <h1 className='main-heading'>Overview on Petrol Pump License</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Eligibility for a license to operate a Petrol Pump</h2>
            <div className='heading-line'></div>
            <Eligibility />
            <h2 className='main-heading'>How to apply for Petrol Pump License?</h2>
            <div className='heading-line'></div>
            <HowToApply />
            <h2 className='main-heading'>Required Investment for the Procurement of a Fuel Pump License</h2>
            <div className='heading-line'></div>
            <RequiredInvestment />
            <h2 className='main-heading'>Need for Land to Begin a Petrol Pump</h2>
            <div className='heading-line'></div>
            <NeedForLand />
            <h2 className='main-heading'>The licenses and certificates required to open a Petrol Pump</h2>
            <div className='heading-line'></div>
            <LicenseCertificatedRequired />
            <h2 className='main-heading'>In Summary</h2>
            <div className='heading-line'></div>
            <Summary />
            <h2 className='main-heading'>How RegisterKaro helps you in getting Petrol Pump License?</h2>
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
