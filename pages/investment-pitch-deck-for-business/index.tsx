import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/investment-pitch-deck-for-business/Hero'
import HowDeck from '../../components/static/investment-pitch-deck-for-business/HowDeck'
import InvestorDeck from '../../components/static/investment-pitch-deck-for-business/InvestorDeck'
import MoreFacts from '../../components/static/investment-pitch-deck-for-business/MoreFacts'
import { Process } from '../../components/static/investment-pitch-deck-for-business/Process'
import { WhyChoose } from '../../components/static/investment-pitch-deck-for-business/WhyChoose'
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
        "question": "What makes a pitch deck perfect?",
        "answer": "Your pitch deck needs to consist of 10 components: the issue, your answer, important product characteristics, market suitability, rival environment, income and functioning models, your progress, your forecasts, your crew, and your funding demand."
    },
    {
        "question": "What’s deck in investment?",
        "answer": "A broker's deck refers to the total amount of active orders being managed by a broker at a given moment. A broker must effectively match buyers and sellers for securities on a large deck to avoid orders being cancelled."
    },
    {
        "question": "Does a pitch deck only for investors?",
        "answer": "When delivering a pitch deck, your audience may consist of investors... or fellow entrepreneurs, students, mentors, or members of the public. When reviewing an investor presentation, your audience should only include investors who are interested in your company and want to learn more."
    },
    {
        "question": "What’s investment pitch?",
        "answer": "A concise summary of your business plan that piques the interest of potential investors is essential for an investment pitch presentation. Don't focus solely on promoting your product; remember that it is just one part of your overall business strategy."
    },
    {
        "question": "What investors get in Return?",
        "answer": "An investor's returns are determined by the kind of investment they make, such as dividends, interest, rents, rights, benefits, or other cash payments."
    }
]



  
const Home = () => {
    return (
        <div className='services-pages qatar-reg'>
            <Head>
                <title>Investment Pitch Deck for Business</title>
                <meta name="description" content="A pitch deck is a short presentation that provides potential investors or clients with a summary of your business plan, products, services, and growth progress. As an entrepreneur, you are likely aware that your company or concept requires funding. Frequently, this funding will be sourced externally, meaning individuals who are not friends or family members provide it." />
                <link rel="canonical" href="https://www.registerkaro.in/investment-pitch-deck-for-business" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Investment Pitch Deck for Business" />
                <meta property="og:description" content="A pitch deck is a short presentation that provides potential investors or clients with a summary of your business plan, products, services, and growth progress. As an entrepreneur, you are likely aware that your company or concept requires funding. Frequently, this funding will be sourced externally, meaning individuals who are not friends or family members provide it." />
            </Head>
            <Hero cityName={'India'} />
            <h1 className='main-heading'>What’s Pitch Deck?</h1>
            <div className='heading-line'></div>
            <Process cityName={'India'} />
            <h2 className='main-heading'>Investor Deck vs Pitch Deck</h2>
            <div className='heading-line'></div>
            <InvestorDeck cityName={'India'} />
            <h2 className='main-heading'>How to create a Pitch Deck</h2>
            <div className='heading-line'></div>
            <HowDeck cityName={'India'} />
            <h2 className='main-heading'>More Facts About Investment Pitch Deck</h2>
            <div className='heading-line'></div>
            <MoreFacts cityName={'India'} />
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
            <RegistrationLinks formattedQuery={'Investment Pitch Deck for Business'} state={state} Query={'investment-pitch-deck-for-business'} city={city} />
        </div>
    )
}
export default Home