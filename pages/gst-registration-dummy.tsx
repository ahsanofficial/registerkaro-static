import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/gst-registration/Hero'
import { Process } from '../components/static/gst-registration/Process'
import { DifferentTable } from '../components/static/gst-registration/DifferentTable'
import Benefits from '../components/static/gst-registration/Benefits'
import Who from '../components/static/gst-registration/Who'
import VitalDocuments from '../components/static/gst-registration/VitalDocuments'
import { RegistrationProcess } from '../components/static/gst-registration/RegistrationProcess'
import GSTReturn from '../components/static/gst-registration/GSTReturn'
import Penalty from '../components/static/gst-registration/Penalty'
import Voluntary from '../components/static/gst-registration/Voluntary'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import Exemption from '../components/static/gst-registration/Exemption'

const faq = [
    {
        "question": "What is GST registration?",
        "answer": "GST registration is the process of enrolling a business under the Goods and Services Tax (GST) system, allowing it to collect and remit GST on the sale of goods and services."
    },
    {
        "question": "Who needs to register for GST?",
        "answer": "Any business with an annual turnover exceeding the GST threshold limit, which varies by country, must register for GST."
    },
    {
        "question": "What is the GST threshold limit?",
        "answer": "The threshold limit for GST registration varies by country, but it is typically based on annual turnover. It’s essential to check the specific threshold for your region."
    },
    {
        "question": "Can I voluntarily register for GST even if my turnover is below the threshold?",
        "answer": "Yes, you can voluntarily register for GST, even if your turnover is below the threshold. This can have benefits, such as claiming input tax credits."
    },
    {
        "question": "What documents are required for GST registration?",
        "answer": "Commonly required documents include PAN card, Aadhar card, business address proof, bank statements, and photographs of the business owner(s)."
    },
    {
        "question": "How can I apply for GST registration?",
        "answer": "You can apply for GST registration online through the official GST portal of your country."
    },
    {
        "question": "What is the GSTIN?",
        "answer": "GSTIN (Goods and Services Tax Identification Number) is a unique 15-digit alphanumeric code assigned to each registered taxpayer."
    },
    {
        "question": "How long does it take to get a GST Registration Certificate?",
        "answer": "The processing time for GST registration varies by country and can take anywhere from a few days to a few weeks."
    },
    {
        "question": "Is GST registration valid across India?",
        "answer": "Yes, GST registration is valid across the entire country."
    },
    {
        "question": "Do I need a separate GST registration for each business location?",
        "answer": "Yes, each business location or place of business may require a separate GST registration."
    },
    {
        "question": "What is the GST composition scheme?",
        "answer": "The composition scheme is for small businesses with a turnover below a certain limit. They can pay a fixed percentage of their turnover as tax instead of the regular GST rates."
    },
    {
        "question": "What are the benefits of GST registration?",
        "answer": "Benefits include input tax credit, legal recognition, the ability to collect GST from customers, and compliance with tax laws."
    },
    {
        "question": "What is the penalty for not registering for GST when required?",
        "answer": "Penalties for non-registration can include fines and legal action, depending on your country’s GST laws."
    },
    {
        "question": "Can I cancel my GST registration?",
        "answer": "Yes, you can cancel your GST registration if your business is no longer liable to be registered under GST."
    },
    {
        "question": "What is the GST return filing frequency?",
        "answer": "The frequency of GST return filing depends on your turnover and the country’s GST laws, with monthly, quarterly, or annual filing options."
    },
    {
        "question": "What happens if I don’t file my GST returns on time?",
        "answer": "Late filing of GST returns can lead to penalties and interest charges, so it’s essential to comply with the filing deadlines."
    }
]

const Home = () => {
    return (
        <div className='services-pages gst-registration'>
              <Head>
                <title>Apply for GST Registration with Registerkaro</title>
                <meta name="description" content="Want GST Registration in India or want to know complete details regarding GST in India? Contact RegisterKaro Now!" />
                <link rel="canonical" href="https://www.registerkaro.in/gst-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Apply for GST Registration with Registerkaro" />
                <meta property="og:description" content="Want GST Registration in India or want to know complete details regarding GST in India? Contact RegisterKaro Now!" />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of GST Registration</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>What are the Different Types of GST in India?</h2>
            <div className='heading-line'></div>
            <DifferentTable/>
            <h2 className='main-heading'>Benefits of GST Registration in India</h2>
            <div className='heading-line'></div>
            <Benefits/>
            <h2 className='main-heading'>Who can apply for GST Registration in India?</h2>
            <div className='heading-line'></div>
            <Who/>
            <h2 className='main-heading'>List of Vital Documents Required for GST Registration in India</h2>
            <div className='heading-line'></div>
            <VitalDocuments/>
            <h2 className='main-heading'>Online GST Registration Process with RegisterKaro</h2>
            <div className='heading-line'></div>
            <RegistrationProcess/>
            <h2 className='main-heading'>GST Return Filing</h2>
            <div className='heading-line'></div>
            <GSTReturn/>
            <h2 className='main-heading'>Penalty for Not Getting GST in India</h2>
            <div className='heading-line'></div>
            <Penalty/>
            <h2 className='main-heading'>Voluntary Registration under GST</h2>
            <div className='heading-line'></div>
            <Voluntary/>
            <h2 className='main-heading'>Exemption on GST Registration in India</h2>
            <div className='heading-line'></div>
            <Exemption/>
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