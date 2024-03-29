import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/hallmark-registration/Hero'
import { Process } from '../../components/static/hallmark-registration/Process'
import Importance from '../../components/static/hallmark-registration/Importance'
import ListDifferent from '../../components/static/hallmark-registration/ListDifferent'
import NewMethods from '../../components/static/hallmark-registration/NewMethods'
import DocumentRequired from '../../components/static/hallmark-registration/DocumentRequired'
import Types from '../../components/static/hallmark-registration/Types'
import { DifferentTable } from '../../components/static/hallmark-registration/DifferentTable'
import { Procedure } from '../../components/static/hallmark-registration/Procedure'
import { Fees } from '../../components/static/hallmark-registration/Fees'
import Benefits from '../../components/static/hallmark-registration/Benefits'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

const faq = [
    {
        "question": "What is a Hallmark?",
        "answer": "A hallmark is a mark or symbol used to identify the source or quality of a product. It is often associated with authenticity, quality, and ownership."
    },
    {
        "question": "Why should I register a hallmark?",
        "answer": "Registering a hallmark provides legal protection and exclusive rights to use that mark for your brand or product. It helps prevent others from using it without your permission."
    },
    {
        "question": "What can be registered as a hallmark?",
        "answer": "Logos, symbols, words, phrases, or a combination thereof that distinguishes your brand or product can be registered as a hallmark."
    },
    {
        "question": "How long does hallmark registration take?",
        "answer": "The duration varies by country, but it can take several months to a few years for the registration process to complete."
    },
    {
        "question": "What rights do I get after hallmark registration?",
        "answer": "Registration grants you exclusive rights to use the mark for the specified goods/services and the ability to take legal action against unauthorized use."
    },
    {
        "question": "Can I use a hallmark without registration?",
        "answer": "Yes, you can use a hallmark without registration, but registration provides stronger legal protection and benefits."
    },
    {
        "question": "Can a hallmark be changed after registration?",
        "answer": "Changes to a registered hallmark can be made, but they often require a new application or amendment to the existing registration."
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
        <div className='services-pages hallmark-regi'>
              <Head>
                <title>Hallmark Registration- Process | Documents Required</title>
                <meta name="description" content="Are you looking for Hallmark Registration in India? Then, you are at the right place. We offer Hallmark Registration at an affordable cost." />
                <link rel="canonical" href="https://www.registerkaro.in/hallmark-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Hallmark Registration- Process | Documents Required" />
                <meta property="og:description" content="Are you looking for Hallmark Registration in India? Then, you are at the right place. We offer Hallmark Registration at an affordable cost." />
            </Head>
            <Hero cityName={'India'}/>
            <h1 className='main-heading'>Apply for Hallmark Registration Online in India </h1>
            <div className='heading-line'></div>
            <Process cityName={'India'} />
            <h2 className='main-heading'>Importance of Hallmark Registration Certification</h2>
            <div className='heading-line'></div>
            <Importance cityName={'India'}/>
            <h2 className='main-heading'>List of Different marks of a BIS Hallmark? Old Methods of Hallmarking</h2>
            <div className='heading-line'></div>
            <ListDifferent cityName={'India'}/>
            <h2 className='main-heading'>New Methods of Hallmarking</h2>
            <div className='heading-line'></div>
            <NewMethods cityName={'India'}/>
            <h2 className='main-heading'>Types of BIS Hallmarking Certificate</h2>
            <div className='heading-line'></div>
            <Types cityName={'India'}/>
            <h2 className='main-heading'>Different Types of Forms for Hallmark Registration</h2>
            <div className='heading-line'></div>
            <DifferentTable cityName={'India'}/>
            <h2 className='main-heading'>Documents Required for Hallmark Registration</h2>
            <div className='heading-line'></div>
            <DocumentRequired cityName={'India'}/>
            <h2 className='main-heading'>Procedure for Hallmark Registration in India</h2>
            <div className='heading-line'></div>
            <Procedure cityName={'India'}/>
            <h2 className='main-heading'>Hallmark Registration Fees</h2>
            <div className='heading-line'></div>
            <Fees cityName={'India'}/>
            <h2 className='main-heading'>Benefits of Hallmarked Gold</h2>
            <div className='heading-line'></div>
            <Benefits cityName={'India'}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Hallmark Registration Process'} state={state} Query={'hallmark-registration'} city={city} />
        </div>
    )
}
export default Home