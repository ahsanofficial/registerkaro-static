import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/change-of-auditor/Hero'
import { Process } from '../../components/static/change-of-auditor/Process'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { Definition } from '../../components/static/change-of-auditor/Definition'
import Appointment from '../../components/static/change-of-auditor/Appointment'
import { Role } from '../../components/static/change-of-auditor/Role'
import { HowRegisterKaro } from '../../components/static/change-of-auditor/HowRegisterKaro'
import RemovalOfAuditor from '../../components/static/change-of-auditor/RemovalOfAuditor'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

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

const faq = [
    {
        "question": "What are the Rules for Changing of Auditor?",
        "answer": "During their term of office, the company's members have the authority to dismiss an auditor or choose not to re-appoint them for another term. The company must be given a 28-day notice if they plan to propose changes to the auditor or appoint a new one during a general meeting."
    },
    {
        "question": "What are the reasons for Change of Auditor?",
        "answer": "The shift in auditors is due to internal policies, introducing new skills, meeting compliance requirements, expertise, and quality needs."
    },
    {
        "question": "What forms are required for Change of Auditor?",
        "answer": "In order to oust an auditor before the completion of his term, both a special resolution and approval from the Central Government are required. Within a month of the Board Resolution being approved, Form ADT-2 seeks approval from the Central Government for the removal of auditors. Also, MGT-14 & RD-1."
    },
    {
        "question": "Why to Change Auditor in every 5 years?",
        "answer": "Initial audits have a greater rate of failure compared to audits conducted in later years. This signifies that every five years, auditors will conduct additional audits that are inaccurate. New auditors will need time to adjust during their first year, which could result in a less effective audit."
    },
    {
        "question": "Can we Change the Auditor in AGM?",
        "answer": "In accordance with Section 140 of the Companies Act, 2013, an auditor can only be dismissed before the end of their term through the approval of a special resolution at a general meeting and with the Central Government's prior consent."
    },
];



const Home = () => {
    return (
        <div className='services-pages change-of-auditor'>
            <Head>
                <title>Change of Auditor</title>
                <meta name="description" content="Auditors are experts in finance who conduct audits by evaluating financial statements, internal procedures, and transaction documents to determine their accuracy and completeness." />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero cityName={'India'} />
            <h1 className='main-heading'>What’s an Auditor?</h1>
            <div className='heading-line'></div>
            <Process cityName={'India'} />
            <h2 className='main-heading'>Auditor of a Company</h2>
            <div className='heading-line'></div>
            <Definition cityName={'India'} />
            <h2 className='main-heading'>Role of Auditor</h2>
            <div className='heading-line'></div>
            <Role cityName={'India'} />
            <h2 className='main-heading'>Removal of Auditor</h2>
            <div className='heading-line'></div>
            <RemovalOfAuditor cityName={'India'} />
            <h2 className='main-heading'>Appointment of Auditor</h2>
            <div className='heading-line'></div>
            <Appointment cityName={'India'} />
            <h2 className='main-heading'>How RegisterKaro helps you in the Registration process?</h2>
            <div className='heading-line'></div>
            <HowRegisterKaro cityName={'India'} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Change of Auditor'} state={state} Query={'change-of-auditor'} city={city} />
        </div>
    )
}
export default Home