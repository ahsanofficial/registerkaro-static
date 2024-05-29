import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Benefits } from '../components/static/removal-of-director/Benefits'
import { Hero } from '../components/static/removal-of-director/Hero'
import { Process } from '../components/static/removal-of-director/Process'
import { WhyChoose } from '../components/static/removal-of-director/WhyChoose'

const faq = [
    {
        "question": " How to remove a director?",
        "answer": "A director can be dismissed through a regular vote held at a meeting of shareholders by those with voting power to elect said director."
    },
    {
        "question": "What’s Section 169 of Companies Act, 2013",
        "answer": "A company can dismiss a director who was not appointed by the Tribunal under Section 242 before his term ends if given a fair chance to speak."
    },
    {
        "question":"Which Form is required for removal of director?",
        "answer": "Submission of Form DIR 12, along with a resolution for director removal and resignation, is mandatory within 30 days of cessation."
    },


    {
        "question": "Does DIR-11 required?",
        "answer": "The word 'shall' was found in Section 168(1) and Rule 16 instead of 'may', effectively eliminating the compulsory submission of DIR-11. Therefore, the director has the option to file DIR-11."
    },
    {
        "question": "Can a director remove himself?",
        "answer": "In addition to unfortunate accidents or deaths, a single director has the option to step down from their company, while companies with multiple directors can be voted out by shareholders as per the Companies Act 2006."
    },
   
   
]


  
const Home = () => {
    return (
        <div className='services-pages qatar-reg'>
            <Head>
                <title>Removal of Director</title>
                <meta name="description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
                <link rel="canonical" href="https://www.registerkaro.in/removal-of-director" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Removal of director" />
                <meta property="og:description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
            </Head>
            <Hero />
            <h1 className='main-heading'>Director’s Removal</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>How can a director be removed?</h2>
            <div className='heading-line'></div>
            <Benefits />
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