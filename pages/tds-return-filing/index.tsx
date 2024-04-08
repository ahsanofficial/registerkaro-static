import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/tds-return-filing/Hero'
import { Process } from '../../components/static/tds-return-filing/Process'
import Deadlines from '../../components/static/tds-return-filing/Deadlines'
import { ProcessBtn } from '../../components/static/tds-return-filing/ProcessBtn'
import Rates from '../../components/static/tds-return-filing/Rates'
import Happens from '../../components/static/tds-return-filing/Happens'
import Eligible from '../../components/static/tds-return-filing/Eligible'
import Forms from '../../components/static/tds-return-filing/Forms'
import HowDoes from '../../components/static/tds-return-filing/HowDoes'
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
        "question": "How is the TDS return filed?",
        "answer": "",
        "list":[
            "Step 1- Check the official e-filing portal and tap on ‘Login Here.’",
            "Step 2- Enter either your TAN or user ID with a password.",
            "Step 3- Click ‘Login,’ click on the ‘TDS’ section, and select ‘Upload TDS.’",
            "Step 4- In the given form, check the relevant statement details [such as the FVU version, Form name, financial year, upload type, quarter]",
            "Step 5- Select ‘Validate’ to check the statement details.",
            "Step 6- Upload the TDS statement along with your DSC (Digital Signature Certificate).",
            "Step 7- Upload the ZIP file for the TDS statement.",
            "Step 8- Attach a signature file and Click ‘Upload.’",
        ]
    },
    {
        "question": "What are the four types of TDS return?",
        "answer": "Four types of TDS include TDS at Salary Income, TDS at non-salary income, TDS at payment against immovable property, and TDS at income from interest, dividends, etc.",
    },
    {
        "question": "What is 24Q and 26Q?",
        "answer": "",
        "list":["Form 24Q: Used as a statement of TDS on Salary Income","Form 26Q: Used as a statement of TDS on non-salary Income"]
    },
    {
        "question": "Who is eligible for a TDS refund?",
        "answer": "If you have made financial declarations at the beginning of the year, which tend to be lower than the investment bucket at the end of the year, then you are eligible to file a claim for a TDS Refund."
    },
    {
        "question": "How to file TDS step by step?",
        "answer": "",
        "list":[
            "Step 1- Check the official e-filing portal and tap on ‘Login Here.’",

            "Step 2- Enter either your TAN or user ID with a password.",
            
            "Step 3- Click ‘Login,’ click on the ‘TDS’ section, and select ‘Upload TDS.’",
            
            "Step 4- In the given form, check the relevant statement details [such as the FVU version, Form name, financial year, upload type, quarter]",
            
            "Step 5- Select ‘Validate’ to check the statement details.",
            
            "Step 6- Upload the TDS statement along with your DSC (Digital Signature Certificate).",
            
            "Step 7- Upload the ZIP file for the TDS statement.",
            
            "Step 8- Attach a signature file and Click ‘Upload.’",
        ]
    },
    {
        "question": "What is the TDS rule?",
        "answer": "TDS was introduced by the government to collect the tax at the very source of income that is rendered to the receiver. A person or deductor who is liable to pay the deductee a certain amount of money in return for service then remits the deducted amount to the account of the central government on behalf of the deductee."
    },
    {
        "question": "Is TDS filed every month?",
        "answer": "No, TDS is only filed quarterly following the months of July, October, January, and May."
    },
    {
        "question": "What is the TDS in salary?",
        "answer": "TDS is a practice of deducting Tax by the employer before crediting the salary of the employees and then remitting it to the government on behalf of the employees. This is known as TDS in Salary."
    },
    {
        "question": "In which month TDS is filed?",
        "answer": "TDS can be filed quarterly following the given due dates:",
        "list":[
            "Quarter 1: 31st July",
            "Quarter 2: 31st October",
            "Quarter 3: 31st Jan",
            "Quarter 4: 31st May",
        ]
    },
    {
        "question": "What happens if I file TDS late?",
        "answer": "In case you do not file a TDS return or delay in filing the TDS Return, then you’ll be liable to pay late fees under Section 234E and a penalty as per Section 271H."
    }
]


  
const Home = () => {
    return (
        <div className='services-pages tds-return-filing-reg'>
            <Head>
                <title>Tds return filing- Eligibility and Process</title>
                <meta name="description" content="Complete your TDS return filing on-time and avoid penalties. E-filing done by Top Accountants and TAX experts" />
                <link rel="canonical" href="https://www.registerkaro.in/tds-return-filing" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Tds return filing- Eligibility and Process" />
                <meta property="og:description" content="Complete your TDS return filing on-time and avoid penalties. E-filing done by Top Accountants and TAX experts" />
            </Head>
            <Hero  cityName={'India'} />
            <h1 className='main-heading'>Understand TDS Return filing</h1>
            <div className='heading-line'></div>
            <Process  cityName={'India'} />
            <h2 className='main-heading'>Are you eligible for a TDS Return?</h2>
            <div className='heading-line'></div>
            <Eligible  cityName={'India'} />
            <h2 className='main-heading'>Forms you need to know for TDS Return Filing</h2>
            <div className='heading-line'></div>
            <Forms  cityName={'India'} />
            <h2 className='main-heading'>Check the deadlines</h2>
            <div className='heading-line'></div>
            <Deadlines  cityName={'India'} />
            <h2 className='main-heading'>Process of TDS Return filing</h2>
            <div className='heading-line'></div>
            <ProcessBtn  cityName={'India'} />
            <h2 className='main-heading'>Few common TDS Rates</h2>
            <div className='heading-line'></div>
            <Rates  cityName={'India'} />
            <h2 className='main-heading'>What happens when you do late TDS Filing?</h2>
            <div className='heading-line'></div>
            <Happens  cityName={'India'} />
            <h2 className='main-heading'>How does RegisterKaro help in the process?</h2>
            <div className='heading-line'></div>
            <HowDoes  cityName={'India'} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'TDS Return filing'} state={state} Query={'tds-return-filing'} city={city} />
        </div>
    )
}
export default Home