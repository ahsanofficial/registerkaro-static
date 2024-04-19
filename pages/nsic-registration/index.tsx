import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/nsic-registration/Hero'
import { Process } from '../../components/static/nsic-registration/Process'
import { WhyChoose } from '../../components/static/nsic-registration/WhyChoose'
import { ProcessNSIC } from '../../components/static/nsic-registration/ProcessNSIC'
import  Documents  from '../../components/static/nsic-registration/Documents'
import  Schemes  from '../../components/static/nsic-registration/Schemes'
import  Challenges  from '../../components/static/nsic-registration/Challenges'
import  Eligible  from '../../components/static/nsic-registration/Eligible'
import  Benefits  from '../../components/static/nsic-registration/Benefits'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

const faq = [
    {
        "question": "Who is eligible for NSIC registration?",
        "answer": "One falling into the given category is eligible for NSIC registration: Micro and Small Businesses who hold an EM Part-II (Optional), Udyog Aadhaar Memorandum (UAM), nascent businesses, Micro & Small Enterprises that have initiated their commercial production but have not yet reached their one-year anniversary of establishment."
    },
    {
        "question": "What is the difference between NSIC and Udyam registration?",
        "answer": "In contrast to Udyam, NSIC levies a small registration cost that is determined by turnover. It is not true that Udyam registration is required in order to register your firm with NSIC. According to certification: Every benefit provided by an NSIC certificate is also covered by an Udyam MSME certificate."
    },
    {
        "question": "What is the difference between MSME and NSIC?",
        "answer": "Since NSIC is a corporation under the Ministry of MSME, the MSME’s purview is expanded. NSIC is primarily concerned with the commercial expansion of micro and small businesses in the nation, while the Ministry of MSME serves the many business demands of all small-scale organizations."
    },
    {
        "question": "What are NSIC registration fees?",
        "answer": "The fee for NSIC registration falls to somewhere Rs 3000 for companies with 1 crore in revenue whereas small businesses with revenue under 1 crore are assessed a fee of Rs. 5000."
    },
    {
        "question": "What is the benefit of NSIC registration?",
        "answer": "NSIC registration allows the company to enjoy the benefits offered under the government schemes, free issuance of the tender sets, waiver of the need to pay an earnest money deposit (EMD), Participating MSEs in the tender who quote prices within the L1+15 percent price band may also supply up to 25% of the requirement by lowering their prices to L1 price, provided that L1 is made up of non-MSEs, etc."
    },
    {
        "question": "Is an NSIC certificate useful?",
        "answer": "Yes, NSIC Certificate helps you in availing different benefits offered by the government under different schemes, under the law, etc."
    },
    {
        "question": "Is NSIC a MSME?",
        "answer": "Under the Ministry of Micro, Small, and Medium Enterprises (MSME), National Small Industries Corporation (NSIC) is a Government of India enterprise certified under ISO 9001:2015. NSIC has been tasked with encouraging, supporting, and growing the nation’s micro, small, and medium-sized businesses. 1 crore in revenue is assessed a fee of Rs. 3000, whilst small businesses with revenue under 1 crore are assessed a fee of Rs. 5000."
    },
    {
        "question": "What is the purpose of NSIC?",
        "answer": "The NSIC was established to advance and grow the nation’s small-scale industries. The Government of India owns the business, which was later converted into a wholly-owned government entity and granted ISO 9001-2015 certification."
    },
    {
        "question": "What is the validity of NSIC registration?",
        "answer": "The NSIC Certificate awarded to MSMEs under Single Point Registration is valid for two years, after which it is renewed. It’s important to remember that the one-year validity of the provisional NSIC certificate awarded to MSMEs with a financial ceiling of INR 5 lakhs begins on the day the certificate is issued."
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
        <div className='services-pages nsic-reg'>
            <Head>
                <title>Get online NSIC Registration in India</title>
                <meta name="description" content="Micro and Small Enterprises can participate in Govt. procurement by opting for NSIC Registration under the Single Point Registration Scheme." />
                <link rel="canonical" href="https://www.registerkaro.in/nsic-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Get online NSIC Registration in India" />
                <meta property="og:description" content="Micro and Small Enterprises can participate in Govt. procurement by opting for NSIC Registration under the Single Point Registration Scheme." />
            </Head>
            <Hero  cityName={'India'}/>
            <h1 className='main-heading'>What is NSIC?</h1>
            <div className='heading-line'></div>
            <Process  cityName={'India'}/>
            <h2 className='main-heading'>Benefits of NSIC Registration</h2>
            <div className='heading-line'></div>
            <Benefits cityName={'India'}/>
            <h2 className='main-heading'>Check if you are eligible for NSIC Registration</h2>
            <div className='heading-line'></div>
            <Eligible cityName={'India'}/>
            <h2 className='main-heading'>Challenges to experience in NSIC registration</h2>
            <div className='heading-line'></div>
            <Challenges cityName={'India'}/>
            <h2 className='main-heading'>Schemes pertaining to NSIC</h2>
            <div className='heading-line'></div>
            <Schemes cityName={'India'}/>
            <h2 className='main-heading'>Documents to carry with you</h2>
            <div className='heading-line'></div>
            <Documents cityName={'India'}/>
            <h2 className='main-heading'>Process of NSIC Registration</h2>
            <div className='heading-line'></div>
            <ProcessNSIC cityName={'India'}/>
            <h2 className='main-heading'>Why Choose RegisterKaro for NSIC Registration?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={'India'}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Get online NSIC Registration '} state={state} Query={'nsic-registration'} city={city} />
        </div>
    )
}
export default Home