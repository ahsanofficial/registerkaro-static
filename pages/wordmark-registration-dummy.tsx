import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/wordmark-registration/Hero'
import { Process } from '../components/static/wordmark-registration/Process'
import Registration from '../components/static/wordmark-registration/Registration'
import Validity from '../components/static/wordmark-registration/Validity'
import Renewal from '../components/static/wordmark-registration/Renewal'
import Cancellation from '../components/static/wordmark-registration/Cancellation'
import DocumentsRequired from '../components/static/wordmark-registration/DocumentsRequired'
import Products from '../components/static/wordmark-registration/Products'
import Wordmark from '../components/static/wordmark-registration/Wordmark'

const faq = [
    {
        "question": "What is a wordmark?",
        "answer": "A wordmark is a type of trademark that consists solely of words, letters, or numerals."
    },
    {
        "question": "Why should I register a wordmark in India?",
        "answer": "Registration provides legal protection, and exclusive rights, and helps prevent unauthorized use of your brand identity."
    },
    {
        "question": "How long does it take to register a wordmark in India?",
        "answer": "The registration process typically takes around 18-24 months, but this can vary based on various factors."
    },
    {
        "question": "Can I register multiple classes under a single wordmark application?",
        "answer": "Yes, it’s possible to register a wordmark across multiple classes of goods or services."
    },
    {
        "question": "What is the validity period of a registered wordmark in India?",
        "answer": "A registered wordmark in India is initially valid for ten years and can be renewed indefinitely for successive ten-year periods."
    },
    {
        "question": "Can I use my wordmark before obtaining registration?",
        "answer": "Yes, you can use the TM symbol to claim rights, but the ® symbol can only be used after successful registration."
    },
    {
        "question": "What happens if someone opposes my wordmark application?",
        "answer": "Opposition proceedings involve a legal challenge to your application. Both parties will present their cases before a decision is made."
    },
    {
        "question": "Can I modify my wordmark after filing the application?",
        "answer": "Minor modifications are possible, but substantial changes might require filing a new application."
    },
    {
        "question": "Is a trademark search necessary before applying for registration?",
        "answer": "Yes, conducting a comprehensive trademark search is crucial to avoid conflicts with existing trademarks."
    },
    {
        "question": "What is the role of the Registrar during the registration process?",
        "answer": "The Registrar examines the application, issues objections if necessary, and oversees the registration process."
    },
    {
        "question": "Can I transfer my registered wordmark to another party?",
        "answer": "Yes, a registered wordmark can be assigned or licensed to another party through a legal process."
    },
    {
        "question": "What happens if I don’t renew my wordmark registration?",
        "answer": "Failure to renew within the specified timeframe can result in the removal of the wordmark from the register."
    },
    {
        "question": "What is the significance of using a wordmark in commerce?",
        "answer": "Continuous and genuine use of the wordmark helps maintain its validity and protection against challenges of non-use."
    },
    {
        "question": "Can I protect my wordmark internationally through Indian registration?",
        "answer": "No, Indian registration protects the wordmark only within India. For international protection, separate applications are needed in each country or through international treaties like the Madrid Protocol."
    },
    {
        "question": "What should I do if someone infringes upon my registered wordmark?",
        "answer": "Seek legal advice immediately to enforce your rights and take appropriate legal action against the infringing party."
    }
]


  
const Home = () => {
    return (
        <div className='services-pages wordmark-registration-reg'>
            <Head>
                <title>Trademark Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/wordmark-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Trademark Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Wordmark Registration</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>What is the Eligibility for the Registration of Wordmark Online in India?</h2>
            <div className='heading-line'></div>
            <Wordmark />
            <h2 className='main-heading'>A description of products/services Involved</h2>
            <div className='heading-line'></div>
            <Products />
            <h2 className='main-heading'>What are the Documents Required for Wordmark Registration?</h2>
            <div className='heading-line'></div>
            <DocumentsRequired />
            <h2 className='main-heading'>Wordmark Registration Process in India</h2>
            <div className='heading-line'></div>
            <Registration />
            <h2 className='main-heading'>Validity of Wordmark Registration</h2>
            <div className='heading-line'></div>
            <Validity />
            <h2 className='main-heading'>Renewal of Wordmark Registration Certificate</h2>
            <div className='heading-line'></div>
            <Renewal />
            <h2 className='main-heading'>Cancellation of Wordmark Registration Application</h2>
            <div className='heading-line'></div>
            <Cancellation />
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