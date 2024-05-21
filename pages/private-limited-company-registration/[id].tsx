import React, { useEffect } from 'react'
import { Hero } from '../../components/static/pvt/Hero'
import { Process } from '../../components/static/pvt/Process'
import { DifferentTypes } from '../../components/static/pvt/DifferentTypes'
import { Benefits } from '../../components/static/pvt/Benefits'
import { Checklist } from '../../components/static/pvt/Checklist'
import { HowToRegister } from '../../components/static/pvt/HowToRegister'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { RegisterPvt } from '../../components/static/pvt/RegisterPvt'
import Head from 'next/head'
import { TimeRequired } from '../../components/static/pvt/TimeRequired'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../../components/static/pvt/DocumentRequired'
import { WhatDocument } from '../../components/static/pvt/WhatDocument'
import { TableCom } from '../../components/static/pvt/TableCom'
// import { PvtReg } from '../../components/static/producer/PvtReg'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { useRouter } from 'next/router'
import { CustomDefault } from '../../components/child_components/CustomDefault'

let state = [
    "maharashtra",
    "jharkhand",
    "kashmir",
    "puducherry",
    "karnataka",
    "madhya-pradesh",
    "andhra-pradesh",
    "himachal-pradesh",
    "tamil-nadu",
    "odisha",
    "assam",
    "arunachal-pradesh",
    "gujarat",
    "chandigarh",
    "jammu-and-kashmir",
    "manipur",
    "andaman-and-nicobar-islands",
    "bihar",
    "chhattisgarh",
    "dadra-and-nagar-haveli",
    "daman-and-diu",
    "goa",
    "haryana",
    "kerala",
    "ladakh",
    "lakshadweep",
    "meghalaya",
    "mizoram",
    "nagaland",
    "punjab",
    "rajasthan",
    "sikkim",
    "telangana",
    "tripura",
    "uttar-pradesh",
    "uttarakhand",
    "west-bengal"
]

let city = [
    "mumbai",
    "firozabad",
    "new-delhi",
    "srinagar",
    "bangalore",
    "ghaziabad",
    "hyderabad",
    "thiruvananthapuram",
    "ahmedabad",
    "chennai",
    "gorakhpur",
    "kolkata",
    "thrissur",
    "gulbarga",
    "lucknow",
    "tiruchirappalli",
    "agartala",
    "agra",
    "ahmednagar",
    "aizawl",
    "ajmer",
    "akola",
    "aligarh",
    "alwar",
    "ambala",
    "ambarnath",
    "ambattur",
    "amravati",
    "amritsar",
    "amroha",
    "anand",
    "anantapur",
    "anantapuram",
    "arrah",
    "asansol",
    "avadi",
    "bahraich",
    "bally",
    "baranagar",
    "barasat",
    "bardhaman",
    "bareilly",
    "bathinda",
    "begusarai",
    "belgaum",
    "bellary",
    "berhampore",
    "berhampur",
    "bhagalpur",
    "bhalswa-jahangir-pur",
    "bharatpur",
    "bhatpara",
    "bhavnagar",
    "bhilai",
    "bhilwara",
    "bhind",
    "bhiwandi",
    "bhiwani",
    "bhopal",
    "bhubaneswar",
    "bhusawal",
    "bidar",
    "bidhannagar",
    "bihar-sharif",
    "bikaner",
    "bilaspur",
    "bokaro",
    "bulandshahr",
    "burhanpur",
    "chandigarh",
    "chapra",
    "chittoor",
    "coimbatore",
    "cuttack",
    "darbhanga",
    "davanagere",
    "dehradun",
    "delhi",
    "deoghar",
    "dewas",
    "dhanbad",
    "dhule",
    "dindigul",
    "durg",
    "durgapur",
    "eluru",
    "erode",
    "etawah",
    "faridabad",
    "farrukhabad",
    "fatehpur",
    "gandhidham",
    "gandhinagar",
    "gaya",
    "gopalpur",
    "guntur",
    "gurgaon",
    "guwahati",
    "gwalior",
    "haldia",
    "hapur",
    "haridwar",
    "hospet",
    "gulbargahowrah",
    "hubli-dharwad",
    "ichalkaranji",
    "imphal",
    "indore",
    "jabalpur",
    "jaipur",
    "jalandhar",
    "jalgaon",
    "jalna",
    "jammu",
    "jamnagar",
    "jamshedpur",
    "jhansi",
    "jodhpur",
    "junagadh",
    "kadapa",
    "kakinada",
    "kalyan-dombivli",
    "kamarhati",
    "kanpur",
    "karawal-nagar",
    "karimnagar",
    "karnal",
    "katni",
    "khammam",
    "khandwa",
    "kharagpur",
    "khora-ghaziabad",
    "kirari-suleman-nagar",
    "kochi",
    "kolhapur",
    "kollam",
    "korba",
    "kota",
    "kozhikode",
    "kulti",
    "kurnool",
    "latur",
    "loni",
    "ludhiana",
    "madhyamgram",
    "madurai",
    "maheshtala",
    "malda",
    "malegaon",
    "mangalore",
    "mango",
    "mathura",
    "mau",
    "meerut",
    "mira-bhayandar",
    "mirzapur",
    "moradabad",
    "morbi",
    "morena",
    "munger",
    "muzaffarnagar",
    "muzaffarpur",
    "mysore",
    "nadiad",
    "nagercoil",
    "nagpur",
    "naihati",
    "nanded",
    "nandyal",
    "nangloi-jat",
    "nashik",
    "navi-mumbai",
    "nellore",
    "new-delhi",
    "nizamabad",
    "noida",
    "north-dumdum",
    "ongole",
    "orai",
    "pali",
    "pallavaram",
    "panchkula",
    "panihati",
    "panipat",
    "parbhani",
    "patiala",
    "patna",
    "pimpri-chinchwad",
    "pondicherry",
    "pune",
    "puri",
    "purnia",
    "raebareli",
    "raichur",
    "raipur",
    "rajahmundry",
    "rajkot",
    "rajpur-sonarpur",
    "ramagundam",
    "rampur",
    "ranchi",
    "ratlam",
    "rewa",
    "rohtak",
    "rourkela",
    "sagar",
    "saharanpur",
    "salem",
    "sambalpur",
    "sambhal",
    "satara",
    "satna",
    "secunderabad",
    "shahjahanpur",
    "shimoga",
    "sikar",
    "silchar",
    "siliguri",
    "singrauli",
    "solapur",
    "sonipat",
    "south-dumdum",
    "sri-ganganagar",
    "surat",
    "tenali",
    "thane",
    "thanjavur",
    "thoothukudi",
    "tirunelveli",
    "tirupati",
    "tiruppur",
    "tiruvottiyur",
    "tumkur",
    "udaipur",
    "ujjain",
    "ulhasnagar",
    "uluberia",
    "uzhavarkarai",
    "vadodara",
    "varanasi",
    "vasai-virar",
    "vijayanagaram",
    "vijayawada",
    "visakhapatnam",
    "warangal",
    "yamunanagar"
]


let faq = [
    {
        "question": "What are the documents required for a private limited company?",
        "answer": "To register a private limited company, you will need a Permanent Account Number, Governmental Identity Proof [Adhar Card, PAN Card, Passport], Bank Statement, Utility Bills such as Electricity Bills, Passport Size Photographs, a Director’s Specimen Signature, a Memorandum of Association, Article of Association, Resolution passed by Board or letter of consent."
    },
    {
        "question": "How to do the private limited company registration?",
        "answer": "To register a private limited company, follow the given steps: select the name <get the approval from MCA < obtain DSC < submission of MoA & AoA < apply for DIN using SPICe+ Form (INC-32) < apply for PAN & TAN < fee payment."
    },
    {
        "question": "What are the private limited company requirements?",
        "answer": "To register your business as a private limited company, you will need to have a minimum of one director, a Memorandum of Association, an Article of Association, paid-up capital of a minimum of 1,00,000 INR, PAN, TAN, office address, etc."
    },
    {
        "question": "What are the private limited company registration fees?",
        "answer": "Fees for private limited companies depend upon the paid-up capital of the company, varying from 1000 INR to 16,000 INR."
    },
    {
        "question": "Who is eligible for Pvt Ltd?",
        "answer": "Any individual who is running or intending to run a business in India along with an Indian Individual is eligible to register for a private limited."
    },
    {
        "question": "Can I start a Pvt Ltd company from home?",
        "answer": "Yes, you may start a private limited company from home. However, for the company registration process, you will need an office address."
    },
    {
        "question": "Can I register the Pvt Ltd company myself?",
        "answer": "Yes, you may register a private limited company yourself. However, due to the technicalities and complexities of the process, it is suggested to avail of the company registration services."
    },
    {
        "question": "Can one person open a Pvt Ltd company?",
        "answer": "One person cannot open a private limited company as there shall be a minimum of two directors on board."
    },
    {
        "question": "What is the minimum amount to start a Private Limited Company?",
        "answer": "The minimum amount to start a private limited company is 1 lakh for paid-up capital, and 25000 INR for the company registration process. There can be another cost as well, depending on the size and nature of the business along with the paid-up capital amount."
    },
    {
        "question": "Is it compulsory to write Pvt Ltd company?",
        "answer": "It is compulsory to write Pvt. Ltd. after a company name that is registered as a private limited company under Indian Legislation."
    },
    {
        "question": "What is the benefit of Pvt Ltd?",
        "answer": "There are quite a lot number of benefits for registering a private limited company including limited liability, uninterrupted existence, wide pool of investors, confidentiality, separate identity, etc."
    }
]


function formatString(input: string) {
    let words = input.split('-')
    let formattedString = words.map((word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
    return formattedString;
}

const Home = () => {
    const router = useRouter();
    const query = router.query.id as string;

    useEffect(() => {
        console.log('q', query);
    }, [query]);

    const cityFromQuery = query?.replace('private-limited-company-registration-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault/>;
    }

    return (
        <div className='services-pages pvt-reg'>
            <Head>
                <title>Private Limited Company Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> */}
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>Online Private Limited Company Registration in India – Meaning, Documents and Procedure</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            {/* <h2 className='main-heading'>What is a Private Limited Company?</h2>
            <div className='heading-line'></div>
            <PvtReg cityName={cityName} /> */}
            <h2 className="main-heading">Different types of Business Structures in India</h2>
            <div className='heading-line'></div>
            <DifferentTypes cityName={cityName} />
            <h2 className="main-heading">Benefits of Private Limited Company Registration in India</h2>
            <div className='heading-line'></div>
            <Benefits cityName={cityName} />
            <h2 className="main-heading">Checklist for Private Limited Company Registration in India</h2>
            <div className='heading-line'></div>
            <Checklist cityName={cityName} />
            <h2 className="main-heading">Documents Required for Private Limited Company Registration in India</h2>
            <div className='heading-line'></div>
            <DocumentRequired cityName={cityName} />
            <h2 className="main-heading">Procedure for Private Limited Company Registration?</h2>
            <div className='heading-line'></div>
            <HowToRegister cityName={cityName} />
            <h2 className="main-heading">Time Required for Private Limited Company Registration in India</h2>
            <div className='heading-line'></div>
            <TimeRequired cityName={cityName} />
            <h2 className="main-heading">How to Register Your Private Limited Company in India with RegisterKaro?</h2>
            <div className='heading-line'></div>
            <RegisterPvt cityName={cityName} />
            <h2 className="main-heading">What Documents will you get after Online Private Limited Company Registration in India?</h2>
            <div className='heading-line'></div>
            <WhatDocument cityName={cityName} />
            <h2 className="main-heading">Comparative List of Different Business Structures in India</h2>
            <div className='heading-line'></div>
            <TableCom cityName={cityName} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Private Limited Company Registration'} state={state} Query={'private-limited-company-registration'} city={city} />
        </div>
    )
}
export default Home