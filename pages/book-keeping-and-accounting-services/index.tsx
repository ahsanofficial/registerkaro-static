import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/book-keeping-and-accounting-services/Hero'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { Process } from '../../components/static/book-keeping-and-accounting-services/Process'
import { WhoMandates } from '../../components/static/book-keeping-and-accounting-services/WhoMandates'
import { WhyBookkeeping } from '../../components/static/book-keeping-and-accounting-services/WhyBookkeeping'
import { WhyOutsources } from '../../components/static/book-keeping-and-accounting-services/WhyOutsources'
import { HowRegisterkaro } from '../../components/static/book-keeping-and-accounting-services/HowRegisterkaro'


const faq = [
    {
        "question": "What is the difference between accounting and bookkeeping?",
        "answer": "Bookkeeping involves recording financial transactions, while accounting encompasses a broader analysis of these transactions to generate financial statements and provide insights."
    },
    {
        "question": "Why is accurate bookkeeping important for businesses?",
        "answer": "Accurate bookkeeping is crucial for tracking income and expenses, maintaining compliance with tax laws, making informed financial decisions, and demonstrating the financial health of a business."
    },
    {
        "question": "How often should I reconcile my bank statements?",
        "answer": "It’s advisable to reconcile bank statements monthly. This helps identify discrepancies, ensures accuracy, and allows for timely correction of any errors."
    },
    {
        "question": "Can I handle my own bookkeeping without professional assistance?",
        "answer": "While some businesses manage basic bookkeeping internally, hiring a professional ensures accuracy, compliance, and frees up time for business owners to focus on core operations."
    },
    {
        "question": "What accounting software do you recommend for small businesses?",
        "answer": "Popular choices include QuickBooks, Xero, and FreshBooks. The best software depends on your business needs, size, and industry."
    },
    {
        "question": "How does outsourcing bookkeeping services benefit my business?",
        "answer": "Outsourcing bookkeeping can reduce costs, provide access to specialized expertise, ensure compliance, and allow businesses to focus on core competencies."
    },
    {
        "question": "What documents should I keep for tax purposes?",
        "answer": "Keep records of invoices, receipts, bank statements, expense reports, and any supporting documentation for income and expenses. Retain these documents for the duration required by tax authorities."
    },
    {
        "question": "How do you ensure the security of financial data?",
        "answer": "We employ secure, encrypted systems, restrict access to authorized personnel only, regularly update software, and follow industry best practices to safeguard financial information."
    },
    {
        "question": "What is the role of a Certified Public Accountant (CPA) in my business?",
        "answer": "A CPA provides higher-level financial analysis, tax planning, and auditing services. They bring expertise and can help navigate complex financial situations."
    },
    {
        "question": "How do you customize your services to meet the unique needs of my business?",
        "answer": "We conduct a thorough assessment of your business, tailor our services to your specific requirements, and maintain open communication to adapt to changes in your financial needs."
    }
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
        <div className='services-pages consumer-complaint-reg'>
            <Head>
                <title>Bookkeeping and Accounting Services | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> */}
            </Head>
            <Hero cityName={'India'}/>
            <h1 className='main-heading'>Bookkeeping and Accounting Services</h1>
            <div className='heading-line'></div>
            <Process cityName={'India'}/>
            <h1 className='main-heading'>Who mandates Bookkeeping and Accounting Services?</h1>
            <div className='heading-line'></div>
            <WhoMandates cityName={'India'}/>
            <h1 className='main-heading'>Why Bookkeeping and Accounting Services?</h1>
            <div className='heading-line'></div>
            <WhyBookkeeping cityName={'India'}/>
            <h1 className='main-heading'>Why Outsource Accounting and Bookkeeping Services in India?</h1>
            <div className='heading-line'></div>
            <WhyOutsources cityName={'India'}/>
            <h1 className='main-heading'>How RegisterKaro helps you in Accounting and Bookkeeping Services?</h1>
            <div className='heading-line'></div>
            <HowRegisterkaro cityName={'India'}/>
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Bookkeeping and Accounting Services'} state={state} Query={'book-keeping-and-accounting-services'} city={city} />
        </div>
    )
}
export default Home