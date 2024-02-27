import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Eligibility } from '../components/static/bis-crs-certification/Eligibility'
import { Challenges } from '../components/static/consumer-complaints/Challenges'
import { Hero } from '../components/static/consumer-complaints/Hero'
import { HowCanRegisterKaro } from '../components/static/consumer-complaints/HowCanRegisterKaro'
import { Process } from '../components/static/consumer-complaints/Process'
import { StepsForFilling } from '../components/static/consumer-complaints/StepsForFilling'


const faq = [
    {
        "question": "Who can file a Consumer complaint?",
        "answer": "Any individual, a group of individuals, relatives/legal heirs of a deceased consumer, company, registered volunteer organization, or central/state government rendering a service or purchasing a product from a vendor is eligible to file a consumer complaint."
    },
    {
        "question": "When can a consumer file a complaint?",
        "answer": "In the event of the purchase of a product or services rendered, a consumer can file a complaint if faced with any dissatisfaction, harm to self, body, image, etc."
    },
    {
        "question": "Does RegisterKaro also help file cases in consumer court?",
        "answer": "Yes, RegisterKaro helps in filing cases in consumer court. The filing of the case depends upon the matter, nature, and claim of the case, meaning to which court the case will be filed."
    },
    {
        "question": "Can a Consumer court decision be challenged?",
        "answer": "Yes, the decisions rendered by the consumer court can be challenged if any party feels dissatisfaction with the judgment rendered. The case may be challenged in the Supreme Court within thirty days of the order passed, which is the limitation period for the challenge of the judgment rendered by the consumer court."
    },
    {
        "question": "What are the punishments under the Consumer Protection Act?",
        "answer": "In case of a case filed against a vendor or supplier, and the court renders a judgment against the respective company or individual, then in such circumstances, then such party will be subject to imprisonment for one month, which can extend up to three years, varying as per the gravity of the case."
    },
    {
        "question": "Can a customer claim compensation from a company?",
        "answer": "Yes, a customer can claim compensation from a company in case the customer has availed their services of a purchased product and is dissatisfied with the quality of the same."
    },
    {
        "question": "Where to register consumer complaints?",
        "answer": "You can file your case in the consumer court or the forum. The selection of the forum for filing the complaint depends on the nature and claim of the consumer complaint."
    },
    {
        "question": "Do you need any proof to support your consumer complaint?",
        "answer": "Yes, there is a requirement of proof up to a certain level, which is used to substantiate your matter to be proven before the forum."
    },
    {
        "question": "Within how much time do I need to challenge the judgment passed by the consumer court?",
        "answer": "You have to file a challenge to the judgment passed by the consumer court in the supreme court within the limitation period, which is 30 days from the date of the judgment passed."
    }
]

const Home = () => {
    return (
        <div className='services-pages consumer-complaint-reg'>
            <Head>
                {/* <title>Private Limited Company Registration | RegisterKaro</title> */}
                {/* <meta name="description" content="The Official RegisterKaro" /> */}
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> */}
            </Head>
            <Hero />
            <h1 className='main-heading'>Know a brief on Consumer Complaints</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Eligibility to file a complaint</h1>
            <div className='heading-line'></div>
            <Eligibility/>
            <h1 className='main-heading'>Challenges you might face in filing a Consumer complaint</h1>
            <div className='heading-line'></div>
            <Challenges/>
            <h1 className='main-heading'>Steps for filing a Consumer Complaint</h1>
            <div className='heading-line'></div>
            <StepsForFilling/>
            <h1 className='main-heading'>How can RegisterKaro assist you?</h1>
            <div className='heading-line'></div>
            <HowCanRegisterKaro/>
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
        </div>
    )
}
export default Home