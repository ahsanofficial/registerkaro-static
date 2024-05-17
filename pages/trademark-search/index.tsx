import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import ApplicableRules from '../../components/static/trademark-search/ApplicableRules'
import DifferentTypes from '../../components/static/trademark-search/DifferentTypes'
import { Hero } from '../../components/static/trademark-search/Hero'
import ImportantPoints from '../../components/static/trademark-search/ImportantPoints'
import { Process } from '../../components/static/trademark-search/Process'
import ServicesInvolved from '../../components/static/trademark-search/ServicesInvolved'
import WhatProcess from '../../components/static/trademark-search/WhatProcess'
import WhyNecessary from '../../components/static/trademark-search/WhyNecessary'
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
        "question": "What is a trademark search?",
        "answer": "A process to check if a similar or identical trademark already exists before applying for a new one."
    },
    {
        "question": "Why is a IP India Public Search important?",
        "answer": "To avoid infringing on existing trademarks and ensure the uniqueness of your mark."
    },
    {
        "question": "Who should conduct a IP India Public Search?",
        "answer": "Individuals, businesses, or legal professionals intending to register a new trademark."
    },
    {
        "question": "Where can I conduct a IP India Public Search?",
        "answer": "Through online databases provided by trademark offices, professional search firms, or attorneys."
    },
    {
        "question": "What do I need for a IP India Public Search?",
        "answer": "Details of the proposed trademark and information on goods/services associated with it."
    },
    {
        "question": "What happens if my IP India Public Search finds a similar mark?",
        "answer": "You may need to reconsider your trademark choice or seek legal advice to assess potential risks."
    },
    {
        "question": "Can I conduct a IP India Public Search for free?",
        "answer": "Some basic search functionalities are available for free on trademark office websites, but comprehensive searches may require professional assistance or paid databases."
    },
    {
        "question": "How long does a trademark search take?",
        "answer": "It varies based on the scope and complexity of the search, ranging from a few days to a couple of weeks."
    },
    {
        "question": "Can I trademark a name that is already in use?",
        "answer": "It depends on whether the existing use conflicts with your proposed use and the distinctiveness of your mark in the same industry."
    },
    {
        "question": "Is a trademark search the same as trademark registration?",
        "answer": "No, a search determines if a mark is available, while registration involves legally protecting the mark."
    },
    {
        "question": "What is a comprehensive trademark search?",
        "answer": "A thorough search that includes various databases to identify potential conflicts beyond obvious similarities."
    },
    {
        "question": "Do I need a professional to conduct a IP India Public Search?",
        "answer": "While not mandatory, professionals offer expertise and comprehensive analysis, reducing the risk of oversight."
    },
    {
        "question": "Can a trademark search guarantee approval of my application?",
        "answer": "No, it reduces risks but cannot guarantee approval as other factors influence the registration process."
    },
    {
        "question": "What if I don’t conduct a trademark search?",
        "answer": "Risk of infringing on existing trademarks, legal disputes, and denial of trademark registration."
    },
    {
        "question": "Can I conduct a trademark search for international trademarks?",
        "answer": "Yes, searches can cover international databases, but it’s crucial to search in relevant jurisdictions."
    },
    {
        "question": "When should I conduct a trademark search?",
        "answer": "Before investing in branding or applying for trademark registration to avoid potential conflicts later."
    }
]




  
const Home = () => {
    return (
        <div className='services-pages trademark-search-reg'>
            <Head>
                <title>Get Started with Company Registration in Qatar</title>
                <meta name="description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
                <link rel="canonical" href="https://www.registerkaro.ic/trademark-search" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Get Started with Company Registration in Qatar" />
                <meta property="og:description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
            </Head>
            <Hero  cityName={'India'} />
            <h1 className='main-heading'>What is a Trademark Search?</h1>
            <div className='heading-line'></div>
            <Process  cityName={'India'} />
            <h2 className='main-heading'>Different Types of Trademark Searches</h2>
            <div className='heading-line'></div>
            <DifferentTypes cityName={'India'} />
            <h2 className='main-heading'>Applicable Rules/Acts/ Regulations</h2>
            <div className='heading-line'></div>
            <ApplicableRules cityName={'India'} />
            <h2 className='main-heading'>A description of products/services Involved</h2>
            <div className='heading-line'></div>
            <ServicesInvolved cityName={'India'} />
            <h2 className='main-heading'>Why is it necessary to do a Trademark Search in India?</h2>
            <div className='heading-line'></div>
            <WhyNecessary cityName={'India'} />
            <h2 className='main-heading'>Important Points to know for Conducting a Trademark Search Availability in India</h2>
            <div className='heading-line'></div>
            <ImportantPoints cityName={'India'} />
            <h2 className='main-heading'>What is the process to conduct a Trademark IP India Public Search?</h2>
            <div className='heading-line'></div>
            <WhatProcess cityName={'India'} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Trademark Search'} state={state} Query={'trademark-search'} city={city} />
        </div>
    )
}
export default Home