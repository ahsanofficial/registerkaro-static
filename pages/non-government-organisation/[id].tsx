import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Benefits } from '../../components/static/non-government-organisation/Benefits'
import { Eligibility } from '../../components/static/non-government-organisation/Eigibility'
import { Hero } from '../../components/static/non-government-organisation/Hero'
import { Process } from '../../components/static/non-government-organisation/Process'
import { ProcessCompany } from '../../components/static/non-government-organisation/ProcessCompany'
import { Types } from '../../components/static/non-government-organisation/Types'
import { WhyChoose } from '../../components/static/non-government-organisation/WhyChoose'
import{Why} from '../../components/static/non-government-organisation/Why'
import { Registration_Ngo } from '../../components/static/non-government-organisation/Registration_Ngo'
import { TableCom } from '../../components/static/non-government-organisation/TableCom';
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { CustomDefault } from '../../components/child_components/CustomDefault'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

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
        "question": " What are the eligibility criteria for registering an NGO?",
        "answer": "Mainly, NGOs must primarily engage in charitable activities for the public good. Eligibility criteria vary based on the chosen legal structure."
    },
    {
        "question": "Can foreign nationals establish NGOs in India?",
        "answer": "Yes, foreign nationals can establish NGOs in India, subject to compliance with Foreign Contribution (Regulation) Act (FCRA) regulations."
    },
    {
        "question": "What are the tax benefits available to registered NGOs?",
        "answer": "Registered NGOs are eligible for tax exemptions under sections 12A, 80G, and 35AC of the Income Tax Act, 1961, for donations received and income generated."
    },
    {
        "question": " What are the documents required for NGO registration?",
        "answer": "Documents typically include identity and address proofs of founders, Memorandum and Articles of Association, and proof of registered office address."
    },
    {
        "question": " How long does it take to register an NGO in India?",
        "answer": "The registration process may take anywhere from a few weeks to a few months, depending on the chosen legal structure and the efficiency of the regulatory authority"
    },
    {
        "question": "Can an NGO be registered for specific purposes or activities?",
        "answer": "Yes, NGOs can be registered for specific purposes or activities aligned with their charitable objectives, as outlined in the governing documents"
    },
    {
        "question": "Are there any compliance requirements post-registration?",
        "answer": "Yes, registered NGOs must comply with statutory filing requirements, maintain proper accounts and records, and adhere to regulations under FCRA, if applicable."
    },
    {
        "question": "Can an NGO change its legal structure after registration?   ",
        "answer": "Yes, subject to compliance with legal requirements and obtaining necessary approvals, NGOs can change their legal structure through a process of conversion or re-registratio"
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

    const cityFromQuery = query?.replace('non-government-organisation-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages qatar-reg'>
            <Head>
                <title>Non-Government Organisation (NGO)</title>
                <meta name="description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
                <link rel="canonical" href="https://www.registerkaro.in/qatar-company-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Get Started with Company Registration in Qatar" />
                <meta property="og:description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>An Overview Icegate Registration</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h2 className='main-heading'>Legal Framework for NGOs in {cityName}:</h2>
            <div className='heading-line'></div>
            <Benefits cityName={cityName} />
            <h2 className='main-heading'>Different Types of NGOs:</h2>
            <div className='heading-line'></div>
            <Types cityName={cityName} />
            <h2 className='main-heading'>What eligibility criteria should be for the formation of an NGO?</h2>
            <div className='heading-line'></div>
            <Eligibility cityName={cityName} />
            <h2 className='main-heading'>Online Registration Process for NGOs:</h2>
            <div className='heading-line'></div>
            <ProcessCompany cityName={cityName} />
            <h2 className='main-heading'>List of Documents Needed for NGO Registration:</h2>
            <div className='heading-line'></div>
            <Why cityName={cityName} />
            <h2 className='main-heading'>Benefits of Registration NGOs:</h2>
            <div className='heading-line'></div>
            <Registration_Ngo cityName={cityName} />
            <h2 className='main-heading'>Differences between trusts, societies, and Section 8 companies.</h2>
            <div className='heading-line'></div>
            <TableCom cityName={cityName} />

            <h2 className='main-heading'>How RegisterKaro Can Assist You in the ISP Licence Registration Process?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={cityName} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Non-Government Organisation (NGO)'} state={state} Query={'non-government-organisation'} city={city} />
        </div>
    )
}
export default Home