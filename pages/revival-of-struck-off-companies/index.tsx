import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/revival-of-struck-off-companies/Hero'
import { Process } from '../../components/static/revival-of-struck-off-companies/Process'
import Revival from '../../components/static/revival-of-struck-off-companies/Revival'
import WhoCan from '../../components/static/revival-of-struck-off-companies/WhoCan'
import Strike from '../../components/static/revival-of-struck-off-companies/Strike'
import Procedure from '../../components/static/revival-of-struck-off-companies/Procedure'
import Benefits from '../../components/static/revival-of-struck-off-companies/Benefits'
import DocumentsRequired from '../../components/static/revival-of-struck-off-companies/DocumentsRequired'
import Restore from '../../components/static/revival-of-struck-off-companies/Restore'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

const faq = [
    {
        "question": "What does it mean when a company is struck off?",
        "answer": "Striking off a company means it has been removed from the official register and is no longer a legal entity."
    },
    {
        "question": "How can I revive a struck-off company?",
        "answer": "Reviving a company usually involves applying for reinstatement with the relevant authorities, settling outstanding debts, and meeting specific legal requirements."
    },
    {
        "question": "Can any struck-off company be revived?",
        "answer": "Generally, most companies can be revived within a specific period after being struck off, provided the revival criteria set by the authorities are met."
    },
    {
        "question": "What documents are required for revival?",
        "answer": "Documentation typically includes an application for restoration, evidence of cleared debts, updated company information, and any additional documents mandated by the registrar or governing body."
    },
    {
        "question": "Is court intervention necessary for revival?",
        "answer": "In some cases, especially for companies struck off for an extended period, court orders might be necessary for revival."
    },
    {
        "question": "How long does the revival process take?",
        "answer": "The timeline varies based on jurisdiction and individual circumstances. It might take several weeks to months, depending on compliance and administrative processes."
    },
    {
        "question": "Can a struck-off company still be liable for its past debts?",
        "answer": "Yes, unless specifically discharged, the liabilities of the company before dissolution generally remain. Revival doesn’t absolve the company of past obligations."
    },
    {
        "question": "Can the company retain its original name after revival?",
        "answer": "In many cases, if the name hasn’t been taken by another entity and if the registrar allows, the company can retain its original name after revival."
    },
    {
        "question": "What happens to assets and contracts after revival?",
        "answer": "Upon revival, the company can typically reclaim its assets, continue existing contracts, and resume business operations."
    },
    {
        "question": "Are there any consequences for failing to revive a company within a specific time frame?",
        "answer": "Failing to revive a company within the stipulated time frame might lead to permanent dissolution, making it more challenging or impossible to revive the entity."
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
        <div className='services-pages revival-of-struck-off-companies-reg'>
            <Head>
                <title>Revival of Struck Off Companies - RegisterKaro</title>
                <meta name="description" content="The revival of struck off companies may be done for a period of twenty years following the date of the strike-off." />
                <link rel="canonical" href="https://www.registerkaro.in/revival-of-struck-off-companies" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Revival of Struck Off Companies - RegisterKaro" />
                <meta property="og:description" content="The revival of struck off companies may be done for a period of twenty years following the date of the strike-off." />
            </Head>
            <Hero  cityName={'India'} />
            <h1 className='main-heading'>An Overview of Revival of Struck Off Companies</h1>
            <div className='heading-line'></div>
            <Process  cityName={'India'} />
            <h2 className='main-heading'>Grounds for Revival of Struck off Companies</h2>
            <div className='heading-line'></div>
            <Revival  cityName={'India'} />
            <h2 className='main-heading'>Who can apply for Revival?</h2>
            <div className='heading-line'></div>
            <WhoCan  cityName={'India'} />
            <h2 className='main-heading'>Strike off of Companies under Companies Act, 2013</h2>
            <div className='heading-line'></div>
            <Strike  cityName={'India'} />
            <h2 className='main-heading'>Procedure for revival of Struck off companies as per Companies Act, 2013</h2>
            <div className='heading-line'></div>
            <Procedure  cityName={'India'} />
            <h2 className='main-heading'>Benefits to Activate Struck Off Company</h2>
            <div className='heading-line'></div>
            <Benefits  cityName={'India'} />
            <h2 className='main-heading'>Documents Required for the Revival of Struck Off Companies</h2>
            <div className='heading-line'></div>
            <DocumentsRequired  cityName={'India'} />
            <h2 className='main-heading'>Procedure to restore struck- off companies</h2>
            <div className='heading-line'></div>
            <Restore cityName={'India'} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Revival of Struck Off Companies'} state={state} Query={'revival-of-struck-off-companies'} city={city} />
        </div>
    )
}
export default Home