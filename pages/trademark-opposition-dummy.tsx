import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { HowToDeal } from '../components/static/trademark-opposition/HowToDeal'
import { Hero } from '../components/static/trademark-opposition/Hero'
import { Process } from '../components/static/trademark-opposition/Process'
import { WhoCanOppose } from '../components/static/trademark-opposition/WhoCanOppose'
import { WhenRecieveOpposition } from '../components/static/trademark-opposition/WhenRecieveOpposition'
import { WhyChoose } from '../components/static/trademark-opposition/WhyChoose'
import { DifferenceOppositionObjection } from '../components/static/trademark-opposition/DifferenceOppositionObjection'

const faq = [
    {
        "question": "What are the grounds for opposition to the trademark?",
        "answer": "There are many grounds for trademark opposition, and a few of them are deceptive marks, inappropriate design, improper usage of symbols, prohibited content, bad faith projection, etc."
    },
    {
        "question": "How do I check if a trademark is opposed?",
        "answer": "If your trademark has been opposed by a third party, you will surely receive a notice of opposition for the same tentatively within four months from the date of advertisement or re-advertisement of the trademark in the Indian Trademark Journal."
    },
    {
        "question": "What is trademark objection in India?",
        "answer": "Trademark objection in India is the objection raised by the registrar itself in case of finding certain factors inappropriate for approval, which may include deceptive and misleading marks, inadequate information, bad faith projection, wrong form usage, application error, incorrect information, etc."
    },
    {
        "question": "What is the fee for trademark opposition?",
        "answer": "The standard fee for filing the trademark opposition in class one is Rs 2700"
    },
    {
        "question": "What is the opposition process?",
        "answer": "In order to raise for the Trademark opposition, you will have to file a form TM-O for filing the notice of opposition within four months from the date of the advertisement or rea-advertisement of the trademark in the Indian Trademark Journal, along with the fee payment."
    },
    {
        "question": "What is the difference between trademark objection and trademark opposition?",
        "answer": "Trademark opposition is raised by the third party who has an issue with the trademark proposed for registration, whereas Trademark objection is raised by the registrar on the evaluation if anything is found not in harmony with the guidelines."
    },
    {
        "question": "How do I withdraw a trademark opposition?",
        "answer": "You can withdraw the trademark opposition by filing the application for withdrawal with the Indian Trademark Registry within one month from the date of filing the notice of opposition."
    },
    {
        "question": "What is the opposition period?",
        "answer": "You are required to file the opposition for the trademark within four months from the date of advertisement or re-advertisement of the trademark in the Indian Trademark Journal."
    },
    {
        "question": "Who can file a notice of opposition?",
        "answer": "‘Any person’ can object to a trademark under Section 21 of the Trademark Act, regardless of their personal or business interest in the subject matter. A trademark can be contested by a competitor, client, member of the public, or any other individual. Additionally, the party opposing the trademark must be the previous owner of a registered trademark."
    },
    {
        "question": "What is trademark objection?",
        "answer": "Trademark objection is raised by the registrar on the evaluation if anything not in harmony with the guidelines is found, such as the mark being inadequately descriptive, misleading, inappropriate symbol usage, prohibited content, wrong form usage, application errors, etc."
    }
]


  
const Home = () => {
    return (
        <div className='services-pages trademark-opposition'>
            <Head>
                <title>Trademark Opposition | RegisterKaro</title>
                <meta name="description" content="Trademark opposition is a process where one opposes a pending trademark application, safeguarding brand integrity and preventing conflicts." />
                <link rel="canonical" href="https://www.registerkaro.in/trademark-opposition" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Trademark Opposition | RegisterKaro" />
                <meta property="og:description" content="Trademark opposition is a process where one opposes a pending trademark application, safeguarding brand integrity and preventing conflicts." />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is Trademark Opposition?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Who can oppose the trademark?</h2>
            <div className='heading-line'></div>
            <WhoCanOppose />
            <h2 className='main-heading'>When do you receive the Trademark Opposition?</h2>
            <div className='heading-line'></div>
            <WhenRecieveOpposition />
            <h2 className='main-heading'>How to deal with Trademark Opposition?</h2>
            <div className='heading-line'></div>
            <HowToDeal />
            <h2 className='main-heading'>How is trademark opposition different from Trademark Objection?</h2>
            <div className='heading-line'></div>
            <DifferenceOppositionObjection />
            <h2 className='main-heading'>How does RegisterKaro help with the Trademark Opposition?</h2>
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