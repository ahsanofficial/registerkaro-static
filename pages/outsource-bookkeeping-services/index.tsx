import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/outsource-bookkeeping-services/Hero'
import { Process } from '../../components/static/outsource-bookkeeping-services/Process'
import { WhyChoose } from '../../components/static/outsource-bookkeeping-services/WhyChoose'
import Services from '../../components/static/outsource-bookkeeping-services/Services'
import WhyOutsource from '../../components/static/outsource-bookkeeping-services/WhyOutsource'
import WhatHappen from '../../components/static/outsource-bookkeeping-services/WhatHappen'
import OurProcess from '../../components/static/outsource-bookkeeping-services/OurProcess'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

const faq = [
    {
        "question": "How much does it cost to outsource a bookkeeper?",
        "answer": "The average cost for outsourcing a bookkeeper is relatively smaller than that of the in-house bookkeeping services. The cost for an experienced and qualified bookkeeper falls between $50 and $70 per hour, which is quite cheaper if it is being served for 10 to 20 hours a month."
    },
    {
        "question": "How do I outsource my bookkeeping?",
        "answer": "If you are looking to outsource your bookkeeping services, you may reach out to the firms, companies, or freelancers offering such services, which must surely be listed on google. If you want to skip the research part, you may contact RegisterKaro to outsource the Bookkeeping services."
    },
    {
        "question": "Is it cheaper to outsource accounting?",
        "answer": "Yes, the cost of outsourcing accounting is relatively cheaper than the in-house Bookkeeping services."
    },
    {
        "question": "Is freelance bookkeeping profitable?",
        "answer": "Freelance or outsourced bookkeeping is profitable in comparison to that of full-time or in-house bookkeeping services. The freelancers or outsourced service providers cost less than the traditional ones, that is, with additional technological advancement."
    },
    {
        "question": "Why should I outsource my bookkeeping?",
        "answer": "You should outsource your bookkeeping as the process is cost-effective, qualitative, backed by technological advancement, expert assistance, and timeless services."
    },
    {
        "question": "Is it possible to do your own bookkeeping?",
        "answer": "It is definitely possible to do your own bookkeeping; however, the process is quite complex and time-consuming. Moreover, in certain aspects, you would need the Chartered Accountant’s assistance for documentation purposes."
    },
    {
        "question": "Is outsourcing costly?",
        "answer": "No, Outsourcing bookkeeping is relatively cheaper when compared to traditional or in-house bookkeeping."
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
        <div className='services-pages outsource-bookkeeping-services'>
            <Head>
                <title>Outsource bookkeeping services in India</title>
                <meta name="description" content="Our outsource bookkeeping services use industry-leading software, making your bookkeeping seamless and efficient" />
                <link rel="canonical" href="https://www.registerkaro.in/outsource-bookkeeping-services" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Outsource bookkeeping services in India" />
                <meta property="og:description" content="Our outsource bookkeeping services use industry-leading software, making your bookkeeping seamless and efficient" />
            </Head>
            <Hero  cityName={'India'}/>
            <h1 className='main-heading'>What is a Bookkeeping Service?</h1>
            <div className='heading-line'></div>
            <Process  cityName={'India'}/>
            <h2 className='main-heading'>Services included in Outsourcing Bookkeeping</h2>
            <div className='heading-line'></div>
            <Services cityName={'India'}/>
            <h2 className='main-heading'>Why outsource bookkeeping services?</h2>
            <div className='heading-line'></div>
            <WhyOutsource cityName={'India'}/>
            <h2 className='main-heading'>What happen if you do not outsource bookkeeping services?</h2>
            <div className='heading-line'></div>
            <WhatHappen cityName={'India'}/>
            <h2 className='main-heading'>Our Process for Outsource Bookkeeping Services</h2>
            <div className='heading-line'></div>
            <OurProcess cityName={'India'}/>
            <h2 className='main-heading'>Why to choose RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={'India'}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Outsource bookkeeping services'} state={state} Query={'outsource-bookkeeping-services'} city={city} />
        </div>
    )
}
export default Home