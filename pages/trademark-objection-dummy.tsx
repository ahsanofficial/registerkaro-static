import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { WhenRecieveObjection } from '../components/static/trademark-objection/WhenRecieveObjection'
import { Hero } from '../components/static/trademark-objection/Hero'
import { Process } from '../components/static/trademark-objection/Process'
import { HowToReply } from '../components/static/trademark-objection/HowToReply'
import { DocumentRequired } from '../components/static/trademark-objection/DocumentRequired'
import { WhyChoose } from '../components/static/trademark-objection/WhyChoose'

const faq = [
    {
        "question": "What is trademark objection?",
        "answer": "Trademark objection is the response to the applicant from the Indian Mark Registry in case the application has certain points that are not suitable for approval. This objection is generally raised by the general public after the date of advertisement of the same."
    },
    {
        "question": "How do you oppose a trademark?",
        "answer": "You can oppose the trademark with the registrar within four months from the date of registration application advertisement made in the trademark journal. This opposition is made through a notice in the form of TM-O, along with a fee payment."
    },
    {
        "question": "What is the objection charge for a trademark?",
        "answer": "The official fee for the objection for a trademark in class one costs around Rs 2700."
    },
    {
        "question": "How do you clear a trademark objection?",
        "answer": "To clear the trademark objection, the first thing you need to do is to file a counter statement against the statement of Objection, which should be done within two months from the date of receipt of the objection notice. If not abided by the timeline, the status for the application changes to ‘abandoned’."
    },
    {
        "question": "What is the time limit for trademark objection?",
        "answer": "The standard time limit for trademark objection is four months beginning from the date of advertisement in the Trademark Journal."
    },
    {
        "question": "Can we use a trademark after objection?",
        "answer": "Trademarks cannot be used during the objection period. The objection raised by a third party needs to be resolved first as per the rules, which demand equal opportunity for both parties to be heard. You can use a trademark when the opposition is dismissed and the trademark certificate is issued."
    },
    {
        "question": "What is Section 9 trademark objection?",
        "answer": "According to Section 9(1)(a) of the Trademark Act of 1999, a mark cannot be registered if it is not distinctive enough to set the applicant’s goods or services apart from those of others."
    },
    {
        "question": "What is Section 11 of trademark objection?",
        "answer": "According to Section 11(1), a trademark cannot be registered if it is similar to or identical to a prior trademark and both trademarks cover the same products or services."
    },
    {
        "question": "What are trademark opposition and objection?",
        "answer": "While trademark opposition is started by a third party that is hesitant to accept your mark, trademark objection is carried out by the trademark examiner. Trademark resistance and objection are commonly confused."
    },
    {
        "question": "What if an objection is raised to my trademark?",
        "answer": "By submitting a request on form TM-16, the applicant can request to amend their trademark application in order to address a disagreement over the products or services specified."
    }
]


  
const Home = () => {
    return (
        <div className='services-pages trademark-objection'>
            <Head>
                <title>Trademark Objection | RegisterKaro</title>
                <meta name="description" content="Trademark objection is the response from the Indian Trade Marks Registry when an application has issues that need approval adjustments." />
                <link rel="canonical" href="https://www.registerkaro.in/trademark-objection" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Trademark Objection | RegisterKaro" />
                <meta property="og:description" content="Trademark objection is the response from the Indian Trade Marks Registry when an application has issues that need approval adjustments." />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is Trademark Objection?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>When do you receive a trademark objection?</h2>
            <div className='heading-line'></div>
            <WhenRecieveObjection />
            <h2 className='main-heading'>How do you reply to Trademark Objections?</h2>
            <div className='heading-line'></div>
            <HowToReply />
            <h2 className='main-heading'>Documents required for the Trademark Objection</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>How can RegisterKaro help you in the process?</h2>
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