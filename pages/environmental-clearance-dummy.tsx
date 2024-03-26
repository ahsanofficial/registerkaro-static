import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../components/static/environmental-clearance/DocumentRequired'
import { Hero } from '../components/static/environmental-clearance/Hero'
import { Process } from '../components/static/environmental-clearance/Process'
import { Types } from '../components/static/environmental-clearance/Types'
import { Prerequisites } from '../components/static/environmental-clearance/Prerequisites'
import Procedure from '../components/static/environmental-clearance/Procedure'
import Certificate from '../components/static/environmental-clearance/Certificate'
import Applicable from '../components/static/environmental-clearance/Applicable'

const faq = [
    {
        "question": "What is environmental clearance?",
        "answer": "Environmental clearance is a regulatory process that assesses the potential environmental impact of a proposed project before it is approved, ensuring compliance with environmental regulations."
    },
    {
        "question": "Why is environmental clearance necessary for projects?",
        "answer": "Environmental clearance is crucial to identify and mitigate potential adverse environmental effects, promoting sustainable development and minimizing ecological harm."
    },
    {
        "question": "Who grants environmental clearance for projects?",
        "answer": "Environmental clearances are typically granted by designated regulatory bodies or environmental agencies at the national or local level, depending on the jurisdiction."
    },
    {
        "question": "When should the application for environmental clearance be submitted?",
        "answer": "The application for environmental clearance should be submitted at the early stages of project planning to integrate environmental considerations into the decision-making process."
    },
    {
        "question": "What factors are considered during the environmental clearance process?",
        "answer": "The environmental clearance process evaluates factors such as the project’s impact on air and water quality, biodiversity, soil health, and the overall ecosystem, among other environmental aspects."
    },
    {
        "question": "How long does it take to obtain environmental clearance?",
        "answer": "The time frame for obtaining environmental clearance varies, but it generally involves a thorough review process, including public consultations, and may take several months depending on the complexity of the project."
    },
    {
        "question": "Is public participation a part of the environmental clearance process?",
        "answer": "Yes, public participation is often a crucial component of the environmental clearance process, allowing stakeholders and the community to express their concerns and opinions."
    },
    {
        "question": "What happens if a project is initiated without obtaining environmental clearance?",
        "answer": "Initiating a project without environmental clearance is a violation of regulations and may lead to legal consequences, fines, or even project suspension until proper clearance is obtained."
    },
    {
        "question": "Can conditions be attached to the environmental clearance?",
        "answer": "Yes, environmental clearances often come with conditions and safeguards to ensure that the project adheres to specified environmental standards and minimizes its impact on the ecosystem."
    },
    {
        "question": "Is environmental clearance a one-time process for a project?",
        "answer": "Environmental clearance may be required at different stages of a project, especially if there are significant modifications or expansions. Regular compliance checks may also be conducted during and after project implementation to ensure ongoing adherence to environmental standards."
    }
]

  
const Home = () => {
    return (
        <div className='services-pages environmental-clearance-reg'>
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
            <h1 className='main-heading'>Get Online Environmental Clearance in India</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Applicable Rules/Acts/Regulations</h1>
            <div className='heading-line'></div>
            <Applicable />
            <h1 className='main-heading'>Eligibility/Pre-Licensing/Mandatory Pre-Requisites</h1>
            <div className='heading-line'></div>
            <Prerequisites />
            <h1 className='main-heading'>Different types of Environmental Clearance services we offer</h1>
            <div className='heading-line'></div>
            <Types />
            <h1 className='main-heading'>Documents Required for Environmental Clearance</h1>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h1 className='main-heading'>Procedure to get Environmental Clearance</h1>
            <div className='heading-line'></div>
            <Procedure />
            <h1 className='main-heading'>Cancellation/Validity/ Renewal of the Environment Clearance Certificate</h1>
            <div className='heading-line'></div>
            <Certificate />
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