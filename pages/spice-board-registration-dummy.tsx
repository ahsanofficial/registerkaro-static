import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/spice-board-registration/Hero'
import { Process } from '../components/static/spice-board-registration/Process'
import { WhyChoose } from '../components/static/spice-board-registration/WhyChoose'
import { WhyBeneficial } from '../components/static/spice-board-registration/WhyBeneficial'
import { DocumentsRequired } from '../components/static/spice-board-registration/DocumentsRequired'
import { HowRegister } from '../components/static/spice-board-registration/HowRegister'
import { ListOfSpices } from '../components/static/spice-board-registration/ListOfSpices'

const faq = [
    {
        "question": "What’s the certification required for Export of Spices?",
        "answer": "When exporting or importing spices/spice products, having a Certificate of Registration as an Exporter of Spices from the Board is required along with an Importer Exporter Code (IEC). The Spices Board grants Certificate of Registration as Exporter of Spices [CRES] in accordance with Section 11 of the Spices Board Act."
    },
    {
        "question": "What’s the Role of Spice Board?",
        "answer": "The main role of the Board involves the growth of both small and large cardamom, advertising, growth, oversight of spice exports, and ensuring quality of exported spices. The Indian Cardamom Research Institute also conducts research on both small and large cardamom varieties, in collaboration with the Spices Board."
    },
    {
        "question": " What’s Spice Board?",
        "answer": "Spices Board, under the Ministry of Commerce and Industry, Government of India, is the leading body dedicated to promoting and advancing Indian spices globally. The Board acts as a global connection between Indian exporters and foreign importers."
    },
    {
        "question": "Where’s the headquarter of Spice Board of India?",
        "answer": "The headquarters of the board is located in Kochi, Kerala. The brand 'Flavourit' sells spices. The Spices Board of India has launched an online initiative named the Spice Train to inform Indians about the nation's extensive spice history."
    },
    {
        "question": "What’s the duration of Spice Board Certificate?",
        "answer": "The Exporter of Spices (CRES) Certificate of Registration stays legitimate for a duration of three years. In order to renew the Certificate, the person must complete Form-1 and pay the required fee to the appropriate authority."
    },
]


  
const Home = () => {
    return (
        <div className='services-pages spice-board-registration'>
            <Head>
                <title>Spice Board Registration | RegisterKaro</title>
                <meta name="description" content="Spices Board was established on 26th February 1987 as per the Spices Board Act 1986 (No. 10 of 1986) by merging the former Cardamom Board (1968) and Spices Export Promotion Council (1960). Spices Board operates as one of the five Commodity Boards that operate under the Ministry of Commerce & Industry. It is a self-governing organization in charge of promoting the export of the 52 specified spices and advancing Cardamom (Small & Large) growth." />
                <link rel="canonical" href="https://www.registerkaro.in/spice-board-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Spice Board Registration | RegisterKaro" />
                <meta property="og:description" content="Spices Board was established on 26th February 1987 as per the Spices Board Act 1986 (No. 10 of 1986) by merging the former Cardamom Board (1968) and Spices Export Promotion Council (1960). Spices Board operates as one of the five Commodity Boards that operate under the Ministry of Commerce & Industry. It is a self-governing organization in charge of promoting the export of the 52 specified spices and advancing Cardamom (Small & Large) growth." />
            </Head>
            <Hero />
            <h1 className='main-heading'>Spice Board Registration</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Why it’s Beneficial?</h2>
            <div className='heading-line'></div>
            <WhyBeneficial/>
            <h2 className='main-heading'>Documents Required</h2>
            <div className='heading-line'></div>
            <DocumentsRequired/>
            <h2 className='main-heading'>How To Register?</h2>
            <div className='heading-line'></div>
            <HowRegister/>
            <h2 className='main-heading'>List Of Spices for Registration</h2>
            <div className='heading-line'></div>
            <ListOfSpices/>
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
