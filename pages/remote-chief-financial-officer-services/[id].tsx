import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Benefits } from '../../components/static/remote-chief-financial-officer-services/Benefits'
import { Hero } from '../../components/static/remote-chief-financial-officer-services/Hero'
import { Process } from '../../components/static/remote-chief-financial-officer-services/Process'
import { WhyChoose } from '../../components/static/remote-chief-financial-officer-services/WhyChoose'
import WhatIs from '../../components/static/remote-chief-financial-officer-services/WhatIs'
import Function from '../../components/static/remote-chief-financial-officer-services/Function'
import NeedOfStartup from '../../components/static/remote-chief-financial-officer-services/NeedOfStartup'
import NeedOfMsme from '../../components/static/remote-chief-financial-officer-services/NeedOfMsme'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { CustomDefault } from '../../components/child_components/CustomDefault'

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
        "question": "What does a remote CFO do?",
        "answer": "A remote CFO is a senior financial specialist who works part-time or through an outsourcing arrangement to offer CFO-level services to companies."
    },
    {
        "question": "How may my company profit from remote CFO services?",
        "answer": "It helps your company by providing professional financial advice, strategic planning, and affordable solutions without requiring a full-time CFO."
    },
    {
        "question": "For what kinds of companies are remote CFO services advantageous?",
        "answer": "Starting up, growing SMEs, and MSMEs are just a few of the business categories that can benefit from remote CFO services. These programs address their particular financial difficulties and demands."
    },
    {
        "question": "What financial estimates and assessments can a remote CFO assist with?",
        "answer": "A remote CFO analyzes important financial metrics and performance indicators while doing thorough financial assessments. Through the process of forecasting future revenue and cash flows, they enable organizations to make well-informed decisions and implement efficient financial plans."
    },
    {
        "question": "How can a remote CFO help organizations become more profitable?",
        "answer": "Remote CFO Services analyze a business's assets and pinpoint inefficiencies to boost total output, which boosts profitability through effective financial administration."
    },
    {
        "question": "Can a remote CFO support decision-making for expanding a company?",
        "answer": "Indeed, through the identification of critical operational indicators and the evaluation of financial data, remote CFOs contribute significantly to corporate decision-making. This helps companies make growth-promoting strategic decisions."
    }
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

    const cityFromQuery = query?.replace('remote-chief-financial-officer-services-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages '>
            <Head>
                <title>Remote Chief Financial Officer (CFO) Services</title>
                <meta name="description" content="Remote CFO Services: Gain Financial Insight Anywhere. Expert Guidance, Anytime, Anywhere. Optimize Finances from Any Corner of the Globe. Unlock Growth Potential with Remote CFO Expertise at RegisterKaro." />
                <link rel="canonical" href="https://www.registerkaro.in/remote-chief-financial-officer-services" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Remote Chief Financial Officer (CFO) Services" />
                <meta property="og:description" content="Remote CFO Services: Gain Financial Insight Anywhere. Expert Guidance, Anytime, Anywhere. Optimize Finances from Any Corner of the Globe. Unlock Growth Potential with Remote CFO Expertise at RegisterKaro." />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>An Overview of Remote CFO Services</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h2 className='main-heading'>What is the need for Remote CFO?</h2>
            <div className='heading-line'></div>
            <WhatIs cityName={cityName} />
            <h2 className='main-heading'>Benefits of Employing Remote CFO Services:</h2>
            <div className='heading-line'></div>
            <Benefits cityName={cityName} />
            <h2 className='main-heading'>Functions of Remote CFO</h2>
            <div className='heading-line'></div>
            <Function cityName={cityName} />
            <h2 className='main-heading'>Need of Remote CFO for startups:</h2>
            <div className='heading-line'></div>
            <NeedOfStartup cityName={cityName} />
            <h2 className='main-heading'>Need of Remote CFO for MSMEs:</h2>
            <div className='heading-line'></div>
            <NeedOfMsme cityName={cityName} />
            <h2 className='main-heading'>How RegisterKaro helps in the Remote CFO Services?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={cityName} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Remote Chief Financial Officer (CFO) Services'} state={state} Query={'remote-chief-financial-officer-services'} city={city} />
        </div>
    )
}
export default Home