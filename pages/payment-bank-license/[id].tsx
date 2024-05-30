import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/payment-bank-license/Hero'
import { Process } from '../../components/static/payment-bank-license/Process'
import { Features } from '../../components/static/payment-bank-license/Features'
import { RequirementsToObtain } from '../../components/static/payment-bank-license/RequirementsToObtain'
import { Procedure } from '../../components/static/payment-bank-license/Procedure'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhatisPBL } from '../../components/static/payment-bank-license/WhatisPBL'
import InformationRequired from '../../components/static/payment-bank-license/InformationRequired'
import { BusinessPlanReq } from '../../components/static/payment-bank-license/BusinessPlanReq'
import { ScopeOfActivities } from '../../components/static/payment-bank-license/ScopeOfActivities'
import { WhoCanObtain } from '../../components/static/payment-bank-license/WhoCanObtain'
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
        "question": "How does a Payment Bank differ from a traditional bank?",
        "answer": "Payment banks and traditional banks have these two notable distinctions:",
        "list": [
            "Deposit Limit : Payment banks accept deposits up to Rs. 1 lakh, whereas traditional banks don't have such restrictions",
            "Credit Services: While Payments Banks provide debit cards, they don't offer credit cards or loans."
        ]
    },
    {
        "question": "Do Payment Banks offer interest on deposits?",
        "answer": "Payment Banks aim for financial inclusion, primarily through savings accounts and payment services. Currently, they offer interest rates comparable to traditional banks. However, RBI guidelines prevent Payment Banks from accepting fixed or recurring deposits."
    },
    {
        "question": "Can Payment Banks accept demand deposits?",
        "answer": "Payment Banks are limited to accepting demand deposits, offering remittance services, internet banking, and specific services. They are not permitted to provide lending services."
    },
    {
        "question": "What's the purpose of Payment Banks?",
        "answer": "Payment Banks primarily aim to foster financial inclusion by providing remittance and payment services to underserved communities."
    },
    {
        "question": "Can Payment Banks issue ATM cards?",
        "answer": "Yes, Payment Banks can issue ATM or debit cards to customers"
    },
    {
        "question": "Do Payment Banks provide credit cards?",
        "answer": "No, Payment Banks are not authorized to issue credit cards to customers."
    },
    {
        "question": "Can Payment Banks offer Mutual Funds?",
        "answer": "Yes, Payment Banks can offer simple financial products like Mutual Funds."
    },
    {
        "question": "Can Payment Banks provide Insurance Products?",
        "answer": "Yes, Payment Banks are permitted to offer Insurance Products."
    },
    {
        "question": "What is the Minimum Paid-up Capital required for a Payment Bank License?",
        "answer": "According to RBI regulations, a minimum capital of 100 crores is required to establish a Payment Bank."
    },
    {
        "question": "Is Foreign Shareholding allowed in Payment Banks?",
        "answer": "Yes, Foreign Shareholding is permitted in Payment Banks for Foreign Direct Investment in private banks in India."
    },
    {
        "question": "What are some examples of Payment Banks in India?",
        "answer": "Renowned Payment Banks in India include Airtel M Commerce Service Limited, Fino Paytech Limited, National Securities Depository Limited, Reliance Industries Limited, Distribution Services Limited, Vodafone M-Pesa Limited, Department of Posts Aditya Birla Nuvo Limited, and Paytm Payments Bank."
    },
    {
        "question": "Can Non-Resident Indians deposit funds in Payment Banks?",
        "answer": "No, Non-Resident Indians are not permitted to make deposits in Payment Banks."
    },
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

    const cityFromQuery = query?.replace('payment-bank-license-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }
    return (
        <div className='services-pages payment-bank-license'>
            <Head>
                <title>Payment Bank License | RegisterKaro</title>
                <meta name="description" content="In the dynamic landscape of banking, Payment Banks have emerged as a transformative force, offering accessible financial services to all. Originating from the vision of the Reserve Bank of India in 2013, these banks stand as beacons of inclusion, bridging the gap between traditional banking and the unbanked masses. With a focus on simplicity and digital innovation, Payment Banks pave the way for seamless transactions and financial empowerment. However, gaining a Payment Bank License is no small feat, requiring meticulous planning, adherence to regulatory standards, and a commitment to serving underprivileged regions. From the initial screening to the establishment of outlets and adherence to strict operational guidelines, the journey of a Payment Bank is fraught with challenges and opportunities." />
                <link rel="canonical" href="https://www.registerkaro.in/payment-bank-license" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Payment Bank License | RegisterKaro" />
                <meta property="og:description" content="In the dynamic landscape of banking, Payment Banks have emerged as a transformative force, offering accessible financial services to all. Originating from the vision of the Reserve Bank of India in 2013, these banks stand as beacons of inclusion, bridging the gap between traditional banking and the unbanked masses. With a focus on simplicity and digital innovation, Payment Banks pave the way for seamless transactions and financial empowerment. However, gaining a Payment Bank License is no small feat, requiring meticulous planning, adherence to regulatory standards, and a commitment to serving underprivileged regions. From the initial screening to the establishment of outlets and adherence to strict operational guidelines, the journey of a Payment Bank is fraught with challenges and opportunities." />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>What is Payment Banks?</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            
            <h2 className='main-heading'>What is a Payment Bank Licence?</h2>
            <div className='heading-line'></div>
            <WhatisPBL cityName={cityName} />
            <h2 className='main-heading'>Features of a Licensed Payments Bank</h2>
            <div className='heading-line'></div>
            <Features cityName={cityName} />
            <h2 className='main-heading'>What are the Requirements to Obtain a Payment Bank License?</h2>
            <div className='heading-line'></div>
            <RequirementsToObtain cityName={cityName} />
            <h2 className='main-heading'>Who can Obtain a Payment Banks License?</h2>
            <div className='heading-line'></div>
            <WhoCanObtain cityName={cityName} />
            <h2 className='main-heading'>What Information is Required for Obtaining Payment Bank Licence?</h2>
            <div className='heading-line'></div>
            <InformationRequired cityName={cityName} />
            <h2 className='main-heading'>Business Plan Requirements for Payment Bank</h2>
            <div className='heading-line'></div>
            <BusinessPlanReq cityName={cityName} />
            <h2 className='main-heading'>Procedure to Obtain a Payment Bank License</h2>
            <div className='heading-line'></div>
            <Procedure cityName={cityName} />
            <h2 className='main-heading'>Scope of Activities After Obtaining Payment Bank License</h2>
            <div className='heading-line'></div>
            <ScopeOfActivities cityName={cityName} />

            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Payment Bank License'} state={state} Query={'payment-bank-license'} city={city} />
        </div>
    )
}
export default Home
