import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/trademark-rectification/Hero'
import { Process } from '../components/static/trademark-rectification/Process'
import WhoCan from '../components/static/trademark-rectification/WhoCan'
import When from '../components/static/trademark-rectification/When'
import { HowProceed } from '../components/static/trademark-rectification/HowProceed'
import Forms from '../components/static/trademark-rectification/Forms'
import HowRegisterKaro from '../components/static/trademark-rectification/HowRegisterKaro'

const faq = [
    {
        "question": "How do I correct a trademark application?",
        "answer": "You can file for trademark rectification if you have any changes to be made to your Trademark Application. You may either fill out the form “TM-16” along with the payment of the fee if you want to rectify or cancel the application. Otherwise, you may submit form “TM-M” along with the required fee payments for rectification requested by the registrar."
    },
    {
        "question": "What is the meaning of rectification filed?",
        "answer": "It means that you have filed an application requesting the changes to be made in your trademark application."
    },
    {
        "question": "Can a registered trademark be amended?",
        "answer": "Rule 98 is in addition to a provision in Section 59 that allows for trademark alterations or changes. Five copies of an updated, modified, or changed version of the Trademark should be created and submitted with the owner’s application on form TM-38."
    },
    {
        "question": "Who can file rectification in Trademark?",
        "answer": "Anyone who falls to be one of the given categories can file the trademark rectification: The aggrieved person, the trademark holder, or the third party associated with the Trademark."
    },
    {
        "question": "When can rectification be filed in Trademark?",
        "answer": "Rectification for the Trademark can be filed in the following cases: Incorrect information, inappropriate content and logo usage, misleading mark, information updated, etc."
    },
    {
        "question": "What is Section 47 of the Trademarks Act?",
        "answer": "The conditions that must be met are outlined in sub-sections 1(a) and 1(b) of Section 47, which deal with the cancellation of a trademark registration due to non-use. The aggrieved Party, referred to as the Petitioner, must meet these requirements in order to institute legal action."
    },
    {
        "question": "What is the fee for trademark correction?",
        "answer": "The following are the official fees in India for editing a trademark application: INR 1000 is required for paper filing (a non-online option). The fee for electronic filing is INR 900."
    }
]



  
const Home = () => {
    return (
        <div className='services-pages trademark-rectification-reg'>
            <Head>
                <title>Get Started with Company Registration in Qatar</title>
                <meta name="description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
                <link rel="canonical" href="https://www.registerkaro.ic/trademark-rectification" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Get Started with Company Registration in Qatar" />
                <meta property="og:description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is Trademark Rectification?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Who can file for Trademark Rectification?</h2>
            <div className='heading-line'></div>
            <WhoCan/>
            <h2 className='main-heading'>When can you file for Trademark Rectification?</h2>
            <div className='heading-line'></div>
            <When/>
            <h2 className='main-heading'>How to proceed with Trademark Rectification?</h2>
            <div className='heading-line'></div>
            <HowProceed/>
            <h2 className='main-heading'>Forms for Trademark Rectification</h2>
            <div className='heading-line'></div>
            <Forms/>
            <h2 className='main-heading'>How does RegisterKaro help with the Trademark Rectification?</h2>
            <div className='heading-line'></div>
            <HowRegisterKaro/>
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