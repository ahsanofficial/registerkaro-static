import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/psara-license/Hero'
import { Process } from '../../components/static/psara-license/Process'
import Agency from '../../components/static/psara-license/Agency'
import Significant from '../../components/static/psara-license/Significant'
import Benefits from '../../components/static/psara-license/Benefits'
import Eligible from '../../components/static/psara-license/Eligible'
import DocumentsRequired from '../../components/static/psara-license/DocumentsRequired'
import HowApply from '../../components/static/psara-license/HowApply'
import Timeframe from '../../components/static/psara-license/Timeframe'
import Appointment from '../../components/static/psara-license/Appointment'
import Contact from '../../components/static/psara-license/Contact'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { CustomDefault } from '../../components/child_components/CustomDefault'

const faq = [
    {
        "question": "What is a PSARA license?",
        "answer": "A PSARA license, governed by the Private Security Agencies (Regulation) Act, 2005, is a legal authorization required for individuals or entities intending to operate as private security agencies in India."
    },
    {
        "question": "Who needs to obtain a PSARA license?",
        "answer": "Any business or individual providing private security services, including security agencies and their employees, must obtain a PSARA license to operate legally in India."
    },
    {
        "question": "What documents are required for obtaining a PSARA license?",
        "answer": "Necessary documents include PAN, GSTIN, Provident Fund Registration, ESIC Registration, identity proof of directors and employees, Income Tax Returns of Directors, and various registration certificates."
    },
    {
        "question": "How long does it take to obtain a PSARA license?",
        "answer": "The time frame for obtaining a PSARA license varies, typically taking around 60 days from the date of application submission. The exact duration depends on the processing efficiency of the state authority."
    },
    {
        "question": "Is training mandatory for security guards under PSARA?",
        "answer": "Yes, training is a mandatory requirement for security guards under PSARA. Private security agencies must enter into a Memorandum of Understanding (MOU) with a training institute to ensure proper training of their personnel."
    },
    {
        "question": "Can an individual apply for a PSARA license, or is it restricted to companies only?",
        "answer": "Both individuals and various types of business entities, including sole proprietorships, partnerships, and private limited companies, are eligible to apply for a PSARA license."
    },
    {
        "question": "What is the role of supervisors in the PSARA licensing process?",
        "answer": "Supervisors play a vital role in overseeing and directing the operations of a private security agency, particularly in relation to the work of security guards. They are required to have at least three years of work experience in the army or navy."
    },
    {
        "question": "What happens during the police verification process in the PSARA licensing procedure?",
        "answer": "After filing the application, the police verification process is initiated. This involves verifying the antecedents of the applicants, and in the case of a partnership or company, directors are also subject to police verification."
    },
    {
        "question": "Can ex-servicemen benefit from any relaxations in PSARA training requirements?",
        "answer": "Yes, ex-servicemen may receive certain relaxations and exemptions related to training requirements when pursuing careers in private security agencies."
    },
    {
        "question": "What happens if the PSARA license application is rejected?",
        "answer": "If the application is accompanied by a No Objection Certificate (NOC) from the police after verification, the authority will examine the application and either grant the PSARA License in Form-IV or reject it based on the circumstances."
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

function formatString(input: string) {
    let words = input.split('-')
    let formattedString = words.map((word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
    return formattedString;
}

const Home = () => {
    const router = useRouter();
    const query = router.query.id as string;
  
    useEffect(() => {
        console.log('q', query);
    }, [query]);

    const cityFromQuery = query?.replace('psara-license-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages psara-license-reg'>
            <Head>
                <title> PSARA License - Eligibility, documents and Procedure</title>
                <meta name="description" content="Secure your PSARA license hassle-free with our expert guidance. From application to approval, trust our team to navigate the process smoothly." />
                <link rel="canonical" href="https://www.registerkaro.in/psara-license" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content=" PSARA License - Eligibility, documents and Procedure" />
                <meta property="og:description" content="description-Get your business up and running smoothly with our Saudi Arabia company registration services. This quick guide tells you which steps to take." />
            </Head>
            <Hero cityName={cityName}/>
            <h1 className='main-heading'>What is a PSARA License?</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName}/>
            <h2 className='main-heading'>What is a Private Security Agency?</h2>
            <div className='heading-line'></div>
            <Agency cityName={cityName} />
            <h2 className='main-heading'>Significant Role Played by Private Security Agencies in {cityName}</h2>
            <div className='heading-line'></div>
            <Significant cityName={cityName} />
            <h2 className='main-heading'>What are the Benefits of PSARA License?</h2>
            <div className='heading-line'></div>
            <Benefits cityName={cityName} />
            <h2 className='main-heading'>Who is Eligible for PSARA?</h2>
            <div className='heading-line'></div>
            <Eligible cityName={cityName} />
            <h2 className='main-heading'>Documents Required for PSARA License</h2>
            <div className='heading-line'></div>
            <DocumentsRequired cityName={cityName} />
            <h2 className='main-heading'>How to apply for PSARA License?</h2>
            <div className='heading-line'></div>
            <HowApply cityName={cityName} />
            <h2 className='main-heading'>Timeframe for Obtaining a PSARA License</h2>
            <div className='heading-line'></div>
            <Timeframe cityName={cityName} />
            <h2 className='main-heading'>Appointment of Supervisors</h2>
            <div className='heading-line'></div>
            <Appointment cityName={cityName} />
            <h2 className='main-heading'>Contact RegisterKaro’s Experts for Premium Support on PSARA License</h2>
            <div className='heading-line'></div>
            <Contact cityName={cityName} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'PSARA License'} state={state} Query={'psara-license'} city={city} />
        </div>
    )
}
export default Home