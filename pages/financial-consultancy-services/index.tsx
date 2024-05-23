import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/financial-consultancy-services/Hero'
import { Process } from '../../components/static/financial-consultancy-services/Process'
import { BestFCS } from '../../components/static/financial-consultancy-services/BestFCS'
import { KeyNotes } from '../../components/static/financial-consultancy-services/KeyNotes'
import {WhyChoose} from '../../components/static/financial-consultancy-services/WhyChoose'
import {WhyRKforFCS} from '../../components/static/financial-consultancy-services/WhyRKforFCS'
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
        "question": "What’s the role of Financial Consultancy?",
        "answer": "Financial advisors usually offer guidance to individuals on various financial matters such as budgeting, saving for major expenses, planning for retirement, making investments, and managing trusts and estates."
    },
    {
        "question": "What’s the Example of Financial Consultancy?",
        "answer": "Individuals focus on personal finance areas such as retirement planning, investment plans, provident funds, stock options, and portfolio management based on their financial goals."
    },
    {
        "question": "What’s the difference between Financial Advisor & Financial Consultancy?",
        "answer": "The main distinction is in the range of services offered. Financial advisors usually provide complete financial planning services and continuous management, whereas financial consultants tend to focus on specific fields of finance and may give advice for a specific project or short-term objective."
    },
    {
        "question": "Who needs Financial Consultancy?",
        "answer": "If you are a person with a high level of wealth, you may require someone to provide tailored guidance and manage financial choices for you."
    },
    {
        "question": "Is Financial Consultancy being a Job?",
        "answer": "A financial consultancy assists a company in enhancing shareholder value and boosting capital efficiency. They may be responsible for creating a mergers and acquisition (M&A) deal or developing a pay plan for company leaders. A lot of consultants are employed in the corporate finance department of a company."
    },
]


  
const Home = () => {
    return (
        <div className='services-pages financial-consultancy-services'>
            <Head>
                <title>Financial Consultancy Services</title>
                <meta name="description" content="A financial consultant is basically synonymous with a financial advisor. Their financial advice is tailored to the individual client's needs and goals, and they frequently provide a variety of services. Sometimes, a financial consultant may possess a greater amount of financial planning expertise compared to the average financial advisor. Financial advisors typically offer investment assistance as part of their services." />
                <link rel="canonical" href="https://www.registerkaro.in/financial-consultancy-services" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Financial Consultancy Services" />
                <meta property="og:description" content="A financial consultant is basically synonymous with a financial advisor. Their financial advice is tailored to the individual client's needs and goals, and they frequently provide a variety of services. Sometimes, a financial consultant may possess a greater amount of financial planning expertise compared to the average financial advisor. Financial advisors typically offer investment assistance as part of their services." />
            </Head>
            <Hero cityName={'India'} />
            <h1 className='main-heading'>Financial Consultancy Services</h1>
            <div className='heading-line'></div>
            <Process cityName={'India'} />
            <h2 className='main-heading'>Key Notes for Financial Consultancy Services</h2>
            <div className='heading-line'></div>
            <KeyNotes cityName={'India'} />
            <h2 className='main-heading'>What could be the Best Financial Consultancy Services?</h2>
            <div className='heading-line'></div>
            <BestFCS cityName={'India'} />
            <h2 className='main-heading'>Why RegisterKaro is Perfect for Financial Consultancy Services</h2>
            <div className='heading-line'></div>
            <WhyRKforFCS cityName={'India'} />
            <h2 className='main-heading'>How RegisterKaro helps you in the Registration process?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={'India'} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Financial Consultancy Services'} state={state} Query={'financial-consultancy-services'} city={city} />
        </div>
    )
}
export default Home
