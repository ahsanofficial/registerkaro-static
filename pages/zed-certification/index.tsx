import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/zed-certification/Hero'
import { Process } from '../../components/static/zed-certification/Process'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { Objectives } from '../../components/static/zed-certification/Objectives'
import Certificate from '../../components/static/zed-certification/Certificate'
import { ProcessStep } from '../../components/static/zed-certification/ProcessStep'
import { HowRegisterKaro } from '../../components/static/zed-certification/HowRegisterKaro'
import Components from '../../components/static/zed-certification/Components'
import Eligibility from '../../components/static/zed-certification/Eligibility'
import Subsidy from "../../components/static/zed-certification/Subsidy"
import DocumentReq from '../../components/static/zed-certification/DocumentReq'
import CertificationProcess from '../../components/static/zed-certification/CertificationProcess'
import Surveillance from '../../components/static/zed-certification/Surveillance'
import Renewal from '../../components/static/zed-certification/Renewal'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

const faq = [
    {
        "question": "What is MSME Sustainable (ZED) Certification scheme?",
        "answer": "The goal of the MSME Sustainable (ZED) Certification program is to raise MSMEs' awareness of Zero Defect Zero Effect (ZED) practices, inspire and reward them for obtaining ZED Certification, and encourage them to take on the role of MSME Champions. MSMEs can significantly cut waste, boost output, raise environmental awareness, conserve energy, make the best use of natural resources, grow their markets, and more by pursuing ZED Certification."
    },
    {
        "question": "Is MSME Sustainable (ZED) Certification mandatory for MSMEs?",
        "answer": "ZED Certification is a voluntary program that offers MSMEs a path to global competitiveness; government certification is not required."
    },
    {
        "question": "What advantages does the ZED Certificate offer?",
        "answer": "",
        "list": ["To boost the company's credibility.", "Financial reward for accepting the ZED pledge.", "Bank waiver for certification.", "MSMEs that are UDYAM-registered may also apply."]
    },
    {
        "question": "Who grants MSMEs a ZED Certificate?",
        "answer": "The Quality Council of India (QCI) awards ZED Certification following a comprehensive assessment of MSME."
    },
];

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
        <div className='services-pages zed-certification'>
            <Head>
                <title>ZED Certification</title>
                <meta name="description" content="Microfinance in India supports low-income individuals by offering microloans, micro-savings, and microinsurance through non-profit organizations." />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero cityName={'India'} />
            <h1 className='main-heading'>Overview of ZED Certification</h1>
            <div className='heading-line'></div>
            <Process cityName={'India'} />
            <h2 className='main-heading'>Phases of ZED Certification</h2>
            <div className='heading-line'></div>
            <ProcessStep cityName={'India'} />
            <h2 className='main-heading'>Objectives of ZED Certificate</h2>
            <div className='heading-line'></div>
            <Objectives cityName={'India'} />
            <h2 className='main-heading'>Components of ZED Certification</h2>
            <div className='heading-line'></div>
            <Components cityName={'India'} />
            <h2 className='main-heading'>ZED Certification Level</h2>
            <div className='heading-line'></div>
            <Certificate cityName={'India'} />
            <h2 className='main-heading'>Eligibility for ZED Certification</h2>
            <div className='heading-line'></div>
            <Eligibility cityName={'India'} />
            <h2 className='main-heading'>Subsidy on cost of certification</h2>
            <div className='heading-line'></div>
            <Subsidy cityName={'India'} />
            <h2 className='main-heading'>Documents required for ZED Certificate</h2>
            <div className='heading-line'></div>
            <DocumentReq cityName={'India'} />
            <h2 className='main-heading'>ZED Certification Process</h2>
            <div className='heading-line'></div>
            <CertificationProcess cityName={'India'} />
            <h2 className='main-heading'>Surveillance under ZED Certification</h2>
            <div className='heading-line'></div>
            <Surveillance cityName={'India'} />
            <h2 className='main-heading'>Renewal of Certificate</h2>
            <div className='heading-line'></div>
            <Renewal cityName={'India'} />
            <h2 className='main-heading'>How RegisterKaro helps in getting ZED Certificate?</h2>
            <div className='heading-line'></div>
            <HowRegisterKaro cityName={'India'}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'ZED Certification'} state={state} Query={'zed-certification'} city={city} />
        </div>
    )
}
export default Home