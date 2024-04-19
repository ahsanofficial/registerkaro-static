import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/memorandum-of-understanding-mou/Hero'
import { Process } from '../components/static/memorandum-of-understanding-mou/Process'
import { WhyChoose } from '../components/static/memorandum-of-understanding-mou/WhyChoose'
import NeedMemorandum from '../components/static/memorandum-of-understanding-mou/NeedMemorandum'
import Points from '../components/static/memorandum-of-understanding-mou/Points'

const faq = [
    {
        "question": "What is a memorandum of understanding for?",
        "answer": "MoU plays the role for establishing a mutual understanding between the parties involved pertaining to the successful completion of the respective task or project. MoU helps in outlining the parties’ operations including the responsibilities and expectations of the parties."
    },
    {
        "question": "Is MOU legally binding in India?",
        "answer": "MoU is a form of mutual agreement between the parties established in the written format. However, MoU does not hold a legal status under the Indian Legislation, there is non-binding and non-enforceable in the Indian Jurisdiction."
    },
    {
        "question": "What is the validity period of MOU in India?",
        "answer": "On the day of signing, the MOU shall come into effect. The MOU is supposed to be in effect for three years. If no party gives six months’ written notice in advance that it intends to terminate the MOU, it should automatically be renewed for additional periods of three years."
    },
    {
        "question": "What documents are required for MOU?",
        "answer": "In general, no particular paperwork is needed to draft or carry out the memorandum of understanding. However, in order to verify the names and permanent residences of the parties that need to be closely examined, you must supply proof of identification for each of the parties involved."
    },
    {
        "question": "Does MOU need to be notarized?",
        "answer": "A Notary Public attests to each party’s signature, making the MOU legally binding in the event of a disagreement. It is imperative to notarize the MOU in order to protect the rights and interests of each participant."
    },
    {
        "question": "Is notarized MOU valid in India?",
        "answer": "The MOU is legally enforceable in the event of a disagreement and is made so by having a Notary Public witness each party’s signature. In order to safeguard the rights and interests of each party to the MOU, it is crucial to notarize the document."
    }
]




  
const Home = () => {
    return (
        <div className='services-pages mou-reg'>
            <Head>
                <title>Get Memorandum of understanding online in India</title>
                <meta name="description" content=" A memorandum of Understanding is a document that helps parties come to mutual agreements. and it specifies duties & expectations." />
                <link rel="canonical" href="https://www.registerkaro.in/memorandum-of-understanding-mou" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="  Get Memorandum of understanding online in India" />
                <meta property="og:description" content=" A memorandum of Understanding is a document that helps parties come to mutual agreements. and it specifies duties & expectations." />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is Memorandum of Understanding?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Why do you need Memorandum of Understanding?</h2>
            <div className='heading-line'></div>
            <NeedMemorandum/>
            <h2 className='main-heading'>Points to remember while writing a Memorandum of Understanding (MoU)</h2>
            <div className='heading-line'></div>
            <Points/>
            <h2 className='main-heading'>How RegisterKaro makes your process easier?</h2>
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