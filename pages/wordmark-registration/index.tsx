import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/wordmark-registration/Hero'
import { Process } from '../../components/static/wordmark-registration/Process'
import Registration from '../../components/static/wordmark-registration/Registration'
import Validity from '../../components/static/wordmark-registration/Validity'
import Renewal from '../../components/static/wordmark-registration/Renewal'
import Cancellation from '../../components/static/wordmark-registration/Cancellation'
import DocumentsRequired from '../../components/static/wordmark-registration/DocumentsRequired'
import Products from '../../components/static/wordmark-registration/Products'
import Wordmark from '../../components/static/wordmark-registration/Wordmark'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

const faq = [
    {
        "question": "What is a wordmark?",
        "answer": "A wordmark is a type of trademark that consists solely of words, letters, or numerals."
    },
    {
        "question": "Why should I register a wordmark in India?",
        "answer": "Registration provides legal protection, and exclusive rights, and helps prevent unauthorized use of your brand identity."
    },
    {
        "question": "How long does it take to register a wordmark in India?",
        "answer": "The registration process typically takes around 18-24 months, but this can vary based on various factors."
    },
    {
        "question": "Can I register multiple classes under a single wordmark application?",
        "answer": "Yes, it’s possible to register a wordmark across multiple classes of goods or services."
    },
    {
        "question": "What is the validity period of a registered wordmark in India?",
        "answer": "A registered wordmark in India is initially valid for ten years and can be renewed indefinitely for successive ten-year periods."
    },
    {
        "question": "Can I use my wordmark before obtaining registration?",
        "answer": "Yes, you can use the TM symbol to claim rights, but the ® symbol can only be used after successful registration."
    },
    {
        "question": "What happens if someone opposes my wordmark application?",
        "answer": "Opposition proceedings involve a legal challenge to your application. Both parties will present their cases before a decision is made."
    },
    {
        "question": "Can I modify my wordmark after filing the application?",
        "answer": "Minor modifications are possible, but substantial changes might require filing a new application."
    },
    {
        "question": "Is a trademark search necessary before applying for registration?",
        "answer": "Yes, conducting a comprehensive trademark search is crucial to avoid conflicts with existing trademarks."
    },
    {
        "question": "What is the role of the Registrar during the registration process?",
        "answer": "The Registrar examines the application, issues objections if necessary, and oversees the registration process."
    },
    {
        "question": "Can I transfer my registered wordmark to another party?",
        "answer": "Yes, a registered wordmark can be assigned or licensed to another party through a legal process."
    },
    {
        "question": "What happens if I don’t renew my wordmark registration?",
        "answer": "Failure to renew within the specified timeframe can result in the removal of the wordmark from the register."
    },
    {
        "question": "What is the significance of using a wordmark in commerce?",
        "answer": "Continuous and genuine use of the wordmark helps maintain its validity and protection against challenges of non-use."
    },
    {
        "question": "Can I protect my wordmark internationally through Indian registration?",
        "answer": "No, Indian registration protects the wordmark only within India. For international protection, separate applications are needed in each country or through international treaties like the Madrid Protocol."
    },
    {
        "question": "What should I do if someone infringes upon my registered wordmark?",
        "answer": "Seek legal advice immediately to enforce your rights and take appropriate legal action against the infringing party."
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
        <div className='services-pages wordmark-registration-reg'>
            <Head>
                <title> Wordmark registration- Documents required, Procedure, Process</title>
                <meta name="description" content="wordmark registration is the process of legally protecting a unique textual representation of a brand name, logo, or slogan used in commerce." />
                <link rel="canonical" href="https://www.registerkaro.in/wordmark-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content=" Wordmark registration- Documents required, Procedure, Process" />
                <meta property="og:description" content="wordmark registration is the process of legally protecting a unique textual representation of a brand name, logo, or slogan used in commerce." />
            </Head>
            <Hero  cityName={'India'} />
            <h1 className='main-heading'>An Overview of Wordmark Registration</h1>
            <div className='heading-line'></div>
            <Process  cityName={'India'} />
            <h2 className='main-heading'>What is the Eligibility for the Registration of Wordmark Online in India?</h2>
            <div className='heading-line'></div>
            <Wordmark  cityName={'India'} />
            <h2 className='main-heading'>A description of products/services Involved</h2>
            <div className='heading-line'></div>
            <Products  cityName={'India'} />
            <h2 className='main-heading'>What are the Documents Required for Wordmark Registration?</h2>
            <div className='heading-line'></div>
            <DocumentsRequired  cityName={'India'} />
            <h2 className='main-heading'>Wordmark Registration Process in India</h2>
            <div className='heading-line'></div>
            <Registration  cityName={'India'} />
            <h2 className='main-heading'>Validity of Wordmark Registration</h2>
            <div className='heading-line'></div>
            <Validity  cityName={'India'} />
            <h2 className='main-heading'>Renewal of Wordmark Registration Certificate</h2>
            <div className='heading-line'></div>
            <Renewal  cityName={'India'} />
            <h2 className='main-heading'>Cancellation of Wordmark Registration Application</h2>
            <div className='heading-line'></div>
            <Cancellation  cityName={'India'} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Wordmark Registration'} state={state} Query={'wordmark-registration'} city={city} />
        </div>
    )
}
export default Home