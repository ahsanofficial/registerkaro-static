import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/gst-cancellation-and-revocation/Hero'
import { Process } from '../../components/static/gst-cancellation-and-revocation/Process'
import { WhyChoose } from '../../components/static/gst-cancellation-and-revocation/WhyChoose'
import WhoCancel from '../../components/static/gst-cancellation-and-revocation/WhoCancel'
import ReasonsCancel from '../../components/static/gst-cancellation-and-revocation/ReasonsCancel'
import ProcedureCancellation from '../../components/static/gst-cancellation-and-revocation/ProcedureCancellation'
import WhatRevocation from '../../components/static/gst-cancellation-and-revocation/WhatRevocation'
import TimeLimit from '../../components/static/gst-cancellation-and-revocation/TimeLimit'
import ProcedureRevocation from '../../components/static/gst-cancellation-and-revocation/ProcedureRevocation'
import Unqualified from '../../components/static/gst-cancellation-and-revocation/Unqualified'
import FeesCancellation from '../../components/static/gst-cancellation-and-revocation/FeesCancellation'
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
  
const Home = () => {
    return (
        <div className='services-pages '>
            <Head>
                <title>GST Cancellation and Revocation</title>
                <meta name="description" content="The process of GST registration cancellation and revocation is essential for businesses under the Goods and Services Tax regime. Cancellation can occur voluntarily or involuntarily, with specific procedures and reasons outlined for each." />
                <link rel="canonical" href="https://www.registerkaro.in/gst-cancellation-and-revocation" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="GST Cancellation and Revocation" />
                <meta property="og:description" content="The process of GST registration cancellation and revocation is essential for businesses under the Goods and Services Tax regime. Cancellation can occur voluntarily or involuntarily, with specific procedures and reasons outlined for each." />
            </Head>
            <Hero  cityName={'India'} />
            <h1 className='main-heading'>What is Cancellation of GST Registration?</h1>
            <div className='heading-line'></div>
            <Process  cityName={'India'} />
            <h2 className='main-heading'>Who can Cancel the GST Registration?</h2>
            <div className='heading-line'></div>
            <WhoCancel cityName={'India'} />
            <h2 className='main-heading'>Reasons for Cancellation of GST Registration</h2>
            <div className='heading-line'></div>
            <ReasonsCancel  cityName={'India'} />
            <h2 className='main-heading'>Procedure for Cancellation of Registration</h2>
            <div className='heading-line'></div>
            <ProcedureCancellation  cityName={'India'} />
            <h2 className='main-heading'>What is Revocation of Cancellation Registration?</h2>
            <div className='heading-line'></div>
            <WhatRevocation  cityName={'India'} />
            <h2 className='main-heading'>Time Limit for filling the revocation application</h2>
            <div className='heading-line'></div>
            <TimeLimit  cityName={'India'} />
            <h2 className='main-heading'>Procedure for Revocation</h2>
            <div className='heading-line'></div>
            <ProcedureRevocation  cityName={'India'} />
            <h2 className='main-heading'>Unqualified Applicants</h2>
            <div className='heading-line'></div>
            < Unqualified cityName={'India'} />
            <h2 className='main-heading'>Fees for Cancellation and Revocation of GST Registration</h2>
            <div className='heading-line'></div>
            <FeesCancellation cityName={'India'} />
            <h2 className='main-heading'>How does Register Karo help?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={'India'} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro/>
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'GST Cancellation and Revocation'} state={state} Query={'gst-cancellation-and-revocation'} city={city} />
        </div>
    )
}
export default Home