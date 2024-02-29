import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { ChooseRegisterKaro } from '../components/static/rni-registration/ChooseRegisterKaro'
import { Documents } from '../components/static/rni-registration/Documents'
import { Hero } from '../components/static/rni-registration/Hero'
import { NeedRNI } from '../components/static/rni-registration/NeedRNI'
import { Process } from '../components/static/rni-registration/Process'
import { ProcessRNI } from '../components/static/rni-registration/ProcessRNI'
import { WhyNeed } from '../components/static/rni-registration/WhyNeed'


const faq = [
    {
        "question": "How to apply for RNI registration?",
        "answer": "You may apply for RNI registration by visiting the website [www.rni.nic.in] and file an application by attaching the required documents such as personal details, PAN, TAN, affidavits of the applicant, etc."
    },
    {
        "question": "What is RNI full Form?",
        "answer": "RNI stands for Registrar of Newspapers for India (RNI) which is an extended office of the Ministry of Information and Broadcasting statued under Section 19 of the Press & Registration of Books Act, 1867."
    },
    {
        "question": "How much does RNI registration cost?",
        "answer": "Making an application is the first step in the RNI registration procedure for which the application falls somewhere around Rs 50,000 whereas for the magazines, it costs Rs 10,000."
    },
    {
        "question": "Which documents are required for RNI registration?",
        "answer": "A self declaration certificate or Affidavit, Letter of Authority for submission of the Self-declaration by Publisher/ owner, Copy of First edition and First volume which has been issued, Authenticated declaration issued by publisher or owner."
    },
    {
        "question": "Is RNI registration mandatory?",
        "answer": "Under Section 11B of the Act, Publishers are required to deliver a copy of every newspaper or periodical that is published to the Press Registrar. Therefore, in order to print any magazine or newspaper in the nation, one must first register with the RNI."
    },
    {
        "question": "What is the role of RNI?",
        "answer": "The RNI’s duties include maintaining and compiling the Register of published newspapers, giving the newspapers the RNI certificate so they can print them, checking the published contents and confirming the circulation claims."
    },
    {
        "question": "What is the validity of RNI?",
        "answer": "The owner/publisher must register the title within a year after the date of title verification, according to the revised RNI Title Guidelines that went into effect on January 1, 2021."
    },
    {
        "question": "Who is responsible for newspaper registration?",
        "answer": "Registrar of Newspaper for India is responsible for the newspaper registration in the Indian region."
    },
    {
        "question": "What are the benefits of RNI registration?",
        "answer": "There are multiple benefits if you opt for RNI registration which includes legal recognition and protection, government benefits avail, monetary advantages, etc."
    }
];


const Home = () => {
    return (
        <div className='services-pages rni-registration-reg'>
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
            <h1 className='main-heading'>What is RNI Registration?</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Why do you need RNI Registration?</h1>
            <div className='heading-line'></div>
            <WhyNeed/>
            <h1 className='main-heading'>When do you need RNI Registration?</h1>
            <div className='heading-line'></div>
            <NeedRNI/>
            <h1 className='main-heading'>Documents you might need for RNI Registration</h1>
            <div className='heading-line'></div>
            <Documents/>
            <h1 className='main-heading'>Process of RNI Registration</h1>
            <div className='heading-line'></div>
            <ProcessRNI/>
            <h1 className='main-heading'>Why Choose RegisterKaro for your RNI Registration?</h1>
            <div className='heading-line'></div>
            <ChooseRegisterKaro/>
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