import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../../components/static/liquor-license/DocumentRequired'
import { Estimated } from '../../components/static/liquor-license/Estimated'
import { Hero } from '../../components/static/liquor-license/Hero'
import { Prerequisites } from '../../components/static/liquor-license/Prerequisites'
import { Process } from '../../components/static/liquor-license/Process'
import { ProcessCompany } from '../../components/static/liquor-license/ProcessCompany'
import { Types } from '../../components/static/liquor-license/Types'
import { WhyChoose } from '../../components/static/liquor-license/WhyChoose'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { CustomDefault } from '../../components/child_components/CustomDefault'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const faq = [
    {
        "question": "What is the cost of a liquor license in India?",
        "answer": "The price of a liquor license in India varies by state and type, ranging from ₹5,000 to ₹15,000. The cost may differ based on the type of license—retail, wholesale, or restaurant."
    },
    {
        "question": "Is it easy to get a liquor license in India?",
        "answer": "Obtaining a liquor license in India can be a challenging and complex process due to varying rules and regulations across states. The process involves submitting an application to the state excise department."
    },
    {
        "question": "How much liquor can I keep at home in Maharashtra?",
        "answer": "In Maharashtra, an individual with a permit can possess up to 12 bottles of liquor at home. Small family celebrations without a permit are allowed for up to ten guests, but larger events require a license."
    },
    {
        "question": "What is the purpose of a liquor license?",
        "answer": "A liquor license is necessary for individuals or businesses involved in the sale, distribution, or manufacturing of alcohol. It is issued by the state excise department to regulate and control the sale and consumption of alcohol."
    },
    {
        "question": "What are different types of liquor licenses?",
        "answer": "Various types of liquor licenses are issued depending on the event and the scale of alcohol consumption. Some examples include FL4, L1, L3, L5, L19, and L49 licenses."
    },
    {
        "question": "Can you carry alcohol on a dry day?",
        "answer": "On a dry day, the sale and purchase of alcohol are prohibited, and all liquor outlets are closed. However, individuals can consume alcohol if they already possess it."
    },
    {
        "question": "What documents do you need for Liquor License?",
        "answer": "Documents required for obtaining a liquor license include proof of identity and address, evidence of business location, no-objection certificates from relevant authorities, completed application forms, passport-sized photographs, affidavits declaring lack of criminal records and overdue dues."
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

    const cityFromQuery = query?.replace('liquor-license-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages liquor-license-reg'>
          <Head>
                <title>Online Liquor License -  Process, Benefits, Documents</title>
                <meta name="description" content="For selling any type of alcohol in any shop, cafe, club, bar, lounge, or any restaurant, Liquor License is mandatory." />
                <link rel="canonical" href="https://www.registerkaro.in/liquor-license" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Online Liquor License -  Process, Benefits, Documents" />
                <meta property="og:description" content="For selling any type of alcohol in any shop, cafe, club, bar, lounge, or any restaurant, Liquor License is mandatory." />
            </Head>
            <Hero cityName={cityName}/>
            <h1 className='main-heading'>Why do you need Liquor License?</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName}/>
            <h2 className='main-heading'>Types of Liquor License</h2>
            <div className='heading-line'></div>
            <Types cityName={cityName} />
            <h2 className='main-heading'>Documents required for Liquor License</h2>
            <div className='heading-line'></div>
            <DocumentRequired cityName={cityName} />
            <h2 className='main-heading'>Process for Liquor License approval</h2>
            <div className='heading-line'></div>
            <ProcessCompany cityName={cityName} />
            <h2 className='main-heading'>Estimated Costs for the license</h2>
            <div className='heading-line'></div>
            <Estimated cityName={cityName} />
            <h2 className='main-heading'>Validation, Revocation & Renewal of Liquor License</h2>
            <div className='heading-line'></div>
            <Prerequisites cityName={cityName} />
            <h2 className='main-heading'>How RegisterKaro helps you in obtaining the liquor license?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={cityName}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Online Liquor License'} state={state} Query={'liquor-license'} city={city} />
        </div>
    )
}
export default Home