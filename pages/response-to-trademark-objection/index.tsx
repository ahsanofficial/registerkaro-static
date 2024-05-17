import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Benefits } from '../../components/static/response-to-trademark-objection/Benefits'
import { DocumentRequired } from '../../components/static/response-to-trademark-objection/DocumentRequired'
import { Hero } from '../../components/static/response-to-trademark-objection/Hero'
import { Process } from '../../components/static/response-to-trademark-objection/Process'
import { ProcessCompany } from '../../components/static/response-to-trademark-objection/ProcessCompany'
import ReasonTrademark from '../../components/static/response-to-trademark-objection/ReasonTrademark'
import TrademarkObjection from '../../components/static/response-to-trademark-objection/TrademarkObjection'
import WhatTrademar from '../../components/static/response-to-trademark-objection/WhatTrademar'
import { WhyChoose } from '../../components/static/response-to-trademark-objection/WhyChoose'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

const faq = [
    {
        "question": "What is a trademark objection response?",
        "answer": "A trademark objection response is a formal reply submitted to the Trademark Registry addressing concerns or objections raised against a trademark application."
    },
    {
        "question": "What are common grounds for trademark objections?",
        "answer": "Common grounds for trademark objections include similarity to existing trademarks, lack of distinctiveness, and violation of trademark rules."
    },
    {
        "question": "How long do I have to respond to a trademark objection in India?",
        "answer": "The response to a trademark objection must be filed within 30 days from the date of receipt of the objection notice."
    },
    {
        "question": "What documents are required for a response to a trademark objection?",
        "answer": "Documents such as evidence of prior use, details of distinctiveness, and supporting legal arguments are typically required for a response to a trademark objection."
    },
    {
        "question": "Can I amend my trademark application during the objection response process?",
        "answer": "Yes, amendments to the trademark application can be made during the objection response process to address concerns raised by the Trademark Registry."
    },
    {
        "question": "What happens if I do not respond to a trademark objection?",
        "answer": "Failure to respond to a trademark objection may result in the abandonment of the trademark application."
    },
    {
        "question": "How long does it take for the Trademark Registry to review the response to an objection?",
        "answer": "The Trademark Registry typically reviews the response to an objection within a few months of submission."
    },
    {
        "question": "Can I appeal the decision of the Trademark Registry following a response to an objection?",
        "answer": "Yes, if the objection is not resolved satisfactorily, the applicant has the option to appeal the decision of the Trademark Registry."
    },
    {
        "question": "Is it possible to settle a trademark objection through negotiation with third parties?",
        "answer": "Yes, parties involved in a trademark objection may choose to negotiate and reach a settlement to resolve the objection amicably."
    },
    {
        "question": "What are the potential outcomes of a successful response to a trademark objection?",
        "answer": "A successful response to a trademark objection may lead to the acceptance and registration of the trademark application by the Trademark Registry."
    }
]

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

  
const Home = () => {
    return (
        <div className='services-pages'>
            <Head>
                <title>Response To Trademark Objection | Registerkaro</title>
                <meta name="description" content="Overcome Trademark Objections with Confidence with the help of Registerkaro!" />
                <link rel="canonical" href="https://www.registerkaro.in/response-to-trademark-objection" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Response To Trademark Objection | Registerkaro" />
                <meta property="og:description" content="Overcome Trademark Objections with Confidence with the help of Registerkaro!" />
            </Head>
            <Hero cityName={'India'} />
            <h1 className='main-heading'>An Overview of Response To Trademark Objection</h1>
            <div className='heading-line'></div>
            <Process cityName={'India'} />
            <h2 className='main-heading'>What is trademark objection?</h2>
            <div className='heading-line'></div>
            <WhatTrademar cityName={'India'} />
            <h2 className='main-heading'>Reason for Trademark Objection?</h2>
            <div className='heading-line'></div>
            <ReasonTrademark cityName={'India'} />
            <h2 className='main-heading'>What are the steps of a Trademark Objection reply?</h2>
            <div className='heading-line'></div>
            <ProcessCompany cityName={'India'} />
            <h2 className='main-heading'>The benefit of Trademark objection Reply?</h2>
            <div className='heading-line'></div>
            <Benefits cityName={'India'} />
            <h2 className='main-heading'>Documents required for a trademark objection response includes:</h2>
            <div className='heading-line'></div>
            <DocumentRequired cityName={'India'} />
            <h2 className='main-heading'>Trademark Objection Response: Overcoming Challenges under Sections 9 & 11</h2>
            <div className='heading-line'></div>
            <TrademarkObjection cityName={'India'} />
            <h2 className='main-heading'>How RegisterKaro Can Assist You in the Network Licensing Process?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={'India'}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro  />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Response To Trademark Objection'} state={state} Query={'response-to-trademark-objection'} city={city} />
        </div>
    )
}
export default Home