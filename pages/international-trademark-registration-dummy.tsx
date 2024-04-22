import Head from 'next/head';
import React from 'react'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT';
import {Hero} from '../components/static/international-trademark-registration/Hero';
import {Process} from '../components/static/international-trademark-registration/Process';
import {WhyChoose} from '../components/static/international-trademark-registration/WhyChoose';
import {WIPO} from '../components/static/international-trademark-registration/WIPO';
import {MadridProtocol} from '../components/static/international-trademark-registration/MadridProtocol';
import {CheckIfCanApply} from '../components/static/international-trademark-registration/CheckIfCanApply';
import {RequirementsToFulfil} from '../components/static/international-trademark-registration/RequirementsToFulfil';
import {ProcessOfRegn} from '../components/static/international-trademark-registration/ProcessOfRegn';
import {HowRegisterKaroHelps} from '../components/static/international-trademark-registration/HowRegisterKaroHelps';

import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro';

const faq = [
    {
        "question": "How can I register a trademark internationally?",
        "answer": "To register your Trademark Internationally, you need to follow the given steps: Trade Research < submit the application with the Indian registry for Trademark < application verification by registry < application verification by WIPO < trademark opposition/ objection < Trademark Certificate."
    },
    {
        "question": "How much does an international trademark cost?",
        "answer": "The price to file for an international trademark varies according to the nation or area where you file, usually between $3,000 and $5,000. Additionally, there is an annual maintenance charge of $500 or so."
    },
    {
        "question": "Is the Indian Trademark valid worldwide?",
        "answer": "The Indian trademark is not valid worldwide, although it has been registered for the Indian domain. If you want your Trademark to be valid worldwide, you should register it as an International Trademark under a special registration process."
    },
    {
        "question": "How do I check an international trademark?",
        "answer": "You may check the International Trademark through different countries’ portals such as the United States Patent and Trademark Office (USPTO)’s Trademark Electronic Search System, the European Union Intellectual Property Office (EUIPO)’s eSearch Plus, United Kingdom Intellectual Property Office (IPO)’s Trademark Search, etc."
    },
    {
        "question": "What are the benefits of international trademark registration?",
        "answer": "There are various benefits of International Trademark Registration, such as International Recognition, global market access, Universal Legal Protection, etc."
    },
    {
        "question": "How can I get an international Trademark in India?",
        "answer": "To register your Trademark Internationally while being in India, you need to follow the given steps: Trade Research < submit the application with the Indian registry for Trademark < application verification by registry < application verification by WIPO < trademark opposition/ objection < Trademark Certificate."
    },
    {
        "question": "Can I use a trademark registered in another country?",
        "answer": "Yes, you can use your Trademark in another country if your Trademark is Internationally Registered. In that regard, you may use the Trademark in countries that are signatories to the Madrid Protocol."
    },
    {
        "question": "Should I get an international trademark?",
        "answer": "If you have International Business Practice, and your business serves in different countries, you must surely get an International Trademark."
    },
    {
        "question": "Is India part of the Madrid Protocol?",
        "answer": "Yes, India is a signatory to the Madrid Protocol by becoming the 90th Member. This means that any trademark registered under any country party to the Madrid Protocol will also be recognized in India."
    }
]

const Home = () => {
  return (
    <div className='services-pages international-tm-reg'>
        <Head>
            <title>International Trademark Registration | RegisterKaro</title>
            <meta name="description" content="The Official RegisterKaro" />
            <link rel="canonical" href="https://www.registerkaro.in/international-trademark-registration" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="International Trademark Registration | RegisterKaro" />
            <meta property="og:description" content="The Official RegisterKaro" />
        </Head>
        <Hero />
        <h1 className="main-heading">What is International Trademark Registration?</h1>
        <div className='heading-line'></div>
        <Process />
        <h2 className="main-heading">Why choose International Trademark Registration?</h2>
        <div className='heading-line'></div>
        <WhyChoose />
        <h2 className="main-heading">WIPO & International Trademark Registration</h2>
        <div className='heading-line'></div>
        <WIPO />
        <h2 className="main-heading">Madrid Protocol & Madrid Agreement</h2>
        <div className='heading-line'></div>
        <MadridProtocol />
        <h2 className="main-heading">Check if you can apply for the International Trademark Registration</h2>
        <div className='heading-line'></div>
        <CheckIfCanApply />
        <h2 className="main-heading">Requirements to be fulfilled for International Trademark Registration</h2>
        <div className='heading-line'></div>
        <RequirementsToFulfil />
        <h2 className="main-heading">Process of International Trademark Registration</h2>
        <div className='heading-line'></div>
        <ProcessOfRegn />
        <h2 className="main-heading">How RegisterKaro helps you with the International Trademark Registration?</h2>
        <div className='heading-line'></div>
        <HowRegisterKaroHelps />
        <h2 className="main-heading">Why RegisterKaro?</h2>
        <div className='heading-line'></div>
        <WhyRegisterkaro />
        <h2 className="main-heading">FAQs</h2>
        <div className='heading-line'></div>
        <FaqTemplatePVT faqItems={faq} />
    </div>
  )
}

export default Home;
