import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../components/static/patent-registration/DocumentRequired'
import { Hero } from '../components/static/patent-registration/Hero'
import { Process } from '../components/static/patent-registration/Process'
import { WhyChoose } from '../components/static/patent-registration/WhyChoose'
import TypesPatents from '../components/static/patent-registration/TypesPatents'
import WhyPatent from '../components/static/patent-registration/WhyPatent'
import Forms from '../components/static/patent-registration/Forms'
import { ProcessSteps } from '../components/static/patent-registration/ProcessSteps'
import Check from '../components/static/patent-registration/Check'

const faq = [
    {
        "question": "How can a patent be registered?",
        "answer": "For registering the patent, you first need to follow given steps: conduct a thorough patent search <draft patent application < File the patent application < Objection or opposition awaited < patent examination < Patent granted."
    },
    {
        "question": "Who is eligible for patent registration?",
        "answer": "Those who fall in the given category, are eligible for patent registration: The real inventor must be the applicant, A patentable product, method, or concept needs to be innovative and one-of-a-kind, Innovation needs to have a purpose, Information about the applicant as well as their KYC, and every detail of the invention that needs to be patented."
    },
    {
        "question": "Is patent registration free?",
        "answer": "When filing your patent application to the patent office, you must pay fees of either Rs. 1600 or Rs. 8000, depending on the type of applicant as shown in the table below. The patent application will be published after 18 months if you do not submit a request for early publication (fees listed in the table below)."
    },
    {
        "question": "What are the 3 types of patents?",
        "answer": "There are three types of patents, namely: Design Patent, Utility Patent, Plant Patent."
    },
    {
        "question": "Can anyone write a patent?",
        "answer": "The real and first inventor or his assignee may file a patent application alone or together with any other person. Nonetheless, a deceased person’s legal representative may also file a patent application."
    },
    {
        "question": "Why are patents registered?",
        "answer": "Patents are registered under the law for a varied range of benefits such as legal protection against infringement, ownership status, exclusive rights establishments, monetary benefits, etc."
    },
    {
        "question": "What are examples of registered patents?",
        "answer": "There are many famous examples of patents such as Iphone design patents including home button, home screen icons, lightning charging point, dynamic island, Pfizer Covid-19 Vaccine."
    },
    {
        "question": "What are the 5 requirements of a patent?",
        "answer": "Patentable subject matter is one of the five main conditions for patentability, along with utility, novelty, nonobviousness, and enablement."
    }
]


  
const Home = () => {
    return (
        <div className='services-pages patent-registration'>
            <Head>
                <title>Patent registration online in India</title>
                <meta name="description" content="Patent Registration in India - Registerkaro provides best patent registration services in all over India at best price. Contact for patent filing in India now." />
                <link rel="canonical" href="https://www.registerkaro.in/patent-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Patent registration online in India" />
                <meta property="og:description" content="Patent Registration in India - Registerkaro provides best patent registration services in all over India at best price. Contact for patent filing in India now." />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is Patent?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Types of Patents</h2>
            <div className='heading-line'></div>
            <TypesPatents />
            <h2 className='main-heading'>Why Patent Registration? </h2>
            <div className='heading-line'></div>
            <WhyPatent />
            <h2 className='main-heading'>Check if you can proceed with Patent Registration </h2>
            <div className='heading-line'></div>
            <Check />
            <h2 className='main-heading'>Documents Required for Patent Registration</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>Forms Used in Patent Registration</h2>
            <div className='heading-line'></div>
            <Forms />
            <h2 className='main-heading'>Process for Patent Registration</h2>
            <div className='heading-line'></div>
            <ProcessSteps />
            <h2 className='main-heading'>How does RegisterKaro help you with Patent Registration?</h2>
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