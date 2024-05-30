import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Benefits } from '../../components/static/tax-consultancy-services/Benefits'
import { BenefitsGst } from '../../components/static/tax-consultancy-services/BenefitsGst'
import { DocumentRequired } from '../../components/static/tax-consultancy-services/DocumentRequired'
import { Hero } from '../../components/static/tax-consultancy-services/Hero'
import { Process } from '../../components/static/tax-consultancy-services/Process'
import { Types } from '../../components/static/tax-consultancy-services/Types'
import { WhyChoose } from '../../components/static/tax-consultancy-services/WhyChoose'
import { ProfessionalTax } from '../../components/static/tax-consultancy-services/ProffessionalTax'
import { Advantages } from '../../components/static/tax-consultancy-services/Advantages'
import { EligibilityProfessional } from '../../components/static/tax-consultancy-services/EligibilityProfessional'
import { TDS } from '../../components/static/tax-consultancy-services/TDS'
import { BenefitsTds } from '../../components/static/tax-consultancy-services/BenefitsTds'
import { CriteriaTds } from '../../components/static/tax-consultancy-services/CriteriaTds'
import { IncomeTaxReturn } from '../../components/static/tax-consultancy-services/IncomeTaxReturn'
import { BenefitsITR } from '../../components/static/tax-consultancy-services/BenefitsITR'
import { EligibilityFiling } from '../../components/static/tax-consultancy-services/EligibilityFiling'
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
        <div className='services-pages qatar-reg'>
            <Head>
                <title>Tax Consultancy Services</title>
                <meta name="description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
                <link rel="canonical" href="https://www.registerkaro.in/tax-consultancy-services" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Get Started with Company Registration in Qatar" />
                <meta property="og:description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
            </Head>
            <Hero  cityName={'India'} />
            <h1 className='main-heading'>Overview of Tax Consultancy Services for Startups</h1>
            <div className='heading-line'></div>
            <Process  cityName={'India'} />
            <h2 className='main-heading'>Benefits for Start-ups in India</h2>
            <div className='heading-line'></div>
            <Benefits  cityName={'India'} />
            <h2 className='main-heading'>GST Registration and Advisory Services</h2>
            <div className='heading-line'></div>
            <Types  cityName={'India'} />
            <h2 className='main-heading'>Benefits of GST Registration</h2>
            <div className='heading-line'></div>
            <BenefitsGst  cityName={'India'} />


            <h2 className='main-heading'>Eligibility for GST Registration</h2>
            <div className='heading-line'></div>
            <DocumentRequired  cityName={'India'} />
          
          
             <h2 className='main-heading'>Professional Tax Registration</h2>
            <div className='heading-line'></div>
            <ProfessionalTax  cityName={'India'} />
            <h2 className='main-heading'>Advantages of Professional Tax Registration</h2>
            <div className='heading-line'></div>
            <Advantages cityName={'India'} />
            <h2 className='main-heading'>Eligibility for Professional Tax Registration</h2>
            <div className='heading-line'></div>
            <EligibilityProfessional  cityName={'India'} />
            <h2 className='main-heading'>TDS Return Filing</h2>
            <div className='heading-line'></div>
            <TDS  cityName={'India'} />
            <h2 className='main-heading'>Benefits of TDS Return Filling</h2>
            <div className='heading-line'></div>
            <BenefitsTds cityName={'India'} />
            <h2 className='main-heading'>Eligibility Criteria for TDS Deduction in India</h2>
            <div className='heading-line'></div>
            <CriteriaTds cityName={'India'} />

            <h2 className='main-heading'>Income Tax Return Filing</h2>
            <div className='heading-line'></div>

            <IncomeTaxReturn  cityName={'India'} />
            <h2 className='main-heading'>Benefits of ITR Filing</h2>
            <div className='heading-line'></div>
            <BenefitsITR  cityName={'India'} />
            <h2 className='main-heading'>Eligibility for Filing Income Tax Returns in India</h2>
            <div className='heading-line'></div>
            < EligibilityFiling  cityName={'India'} />
            <h2 className='main-heading'>What Tax Consultancy Services for Startups are Being Offered by RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={'India'} />


            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Tax Consultancy Services'} state={state} Query={'tax-consultancy-services'} city={city} />


          
        </div>
    )
}
export default Home