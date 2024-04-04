import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/virtual-cfo-dummy/Hero'
import { Process } from '../../components/static/virtual-cfo-dummy/Process'
import { WhyChoose } from '../../components/static/virtual-cfo-dummy/WhyChoose'
import Functions from '../../components/static/virtual-cfo-dummy/Functions'
import CFOServices from '../../components/static/virtual-cfo-dummy/CFOServices'
import Virtual from '../../components/static/virtual-cfo-dummy/Virtual'
import Types from '../../components/static/virtual-cfo-dummy/Types'
import WhyRegisterKaroChoose from '../../components/static/virtual-cfo-dummy/WhyRegisterKaroChoose'
import OurProcess from '../../components/static/virtual-cfo-dummy/OurProcess'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { CustomDefault } from '../../components/child_components/CustomDefault'

const faq = [
    {
        "question": "What is included in virtual CFO services?",
        "answer": "Virtual CFO services include high-level financial strategy, system analysis and design, budgeting, strategizing, structuring hierarchy and growth, break-even point calculation, accounting policies and procedures, management information system reporting, payroll management, GST registration, financial management, human resource management, etc."
    },
    {
        "question": "How much does a virtual CFO cost?",
        "answer": "In India, there is the practice of signing monthly retainer contracts with full-time Virtual CFOs, which range between Rs 1,00,000 to 5,00,000 depending upon industry standards."
    },
    {
        "question": "What are the three different service levels of VCFO services?",
        "answer": "Financial budgeting services, financial management services, cashflow management services, accounting services, etc., are some types of VCFO services."
    },
    {
        "question": "Who needs virtual CFO?",
        "answer": "Any individual or businesses intending to start, expand, improve, optimize their business operations, and eventually target profit generation need Virtual CFO Services."
    },
    {
        "question": "Why hire a virtual CFO?",
        "answer": "With the help of virtual CFO services, companies can get elite financial knowledge without having to pay for a full-time executive’s expensive overhead. Companies can use these services under contract, just having to pay for the services that they really need. Companies also save money on costs like equipment, office space, and perks."
    },
    {
        "question": "What is virtual CFO concept?",
        "answer": "The acronym for virtual chief financial officer is CFO, or virtual CFO. A virtual CFO is an outsourced service provider that provides high-skill support in the financial requirements of an organization, similar to what a chief financial officer does for large firms."
    },
    {
        "question": "What are the benefits of Virtual CFO Services?",
        "answer": "Virtual CFO Services help businesses optimize their resource and financial management to enhance revenue growth. They also result in accuracy of accountings, efficient budgeting, and advanced financial projection. VCFO assists in attaining mass growth projection at a lesser cost rate than that of a CFO."
    },
    {
        "question": "What is the difference between a virtual CFO and a CFO?",
        "answer": "Virtual CFO differs from traditional CFO in many aspects such as technological advancement, flexibility in working hours, cost efficiency, scope of work, expertise, and network."
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

    const cityFromQuery = query?.replace('virtual-cfo-services-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages virtual-cfo-services-reg'>
            <Head>
                <title>virtual cfo services in {cityName} - Startups, MSME</title>
                <meta name="description" content=" Virtual CFO Services can help you manage your books, create budgets and monitor your finances. Registerkaro will help you in providing VCFO." />
                <link rel="canonical" href="https://www.registerkaro.in/virtual-cfo-services" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="virtual cfo services in {cityName} - Startups, MSME" />
                <meta property="og:description" content=" Virtual CFO Services can help you manage your books, create budgets and monitor your finances. Registerkaro will help you in providing VCFO." />
            </Head>
            <Hero  cityName={cityName}/>
            <h1 className='main-heading'>Virtual CFO Services Meaning</h1>
            <div className='heading-line'></div>
            <Process  cityName={cityName}/>
            <h2 className='main-heading'>Why to choose Virtual CFO Services over Traditional CFO Services?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={cityName}/>
            <h2 className='main-heading'>Functions of a Virtual CFO</h2>
            <div className='heading-line'></div>
            <Functions cityName={cityName}/>
            <h2 className='main-heading'>Why to avail Virtual CFO Services?</h2>
            <div className='heading-line'></div>
            <CFOServices cityName={cityName}/>
            <h2 className='main-heading'>Virtual CFO for all</h2>
            <div className='heading-line'></div>
            <Virtual cityName={cityName}/>
            <h2 className='main-heading'>Types of Virtual CFO services</h2>
            <div className='heading-line'></div>
            <Types cityName={cityName}/>
            <h2 className='main-heading'>Why RegisterKaro for Virtual CFO Services?</h2>
            <div className='heading-line'></div>
            <WhyRegisterKaroChoose cityName={cityName}/>
            <h2 className='main-heading'>Our Process to get Virtual CFO Services</h2>
            <div className='heading-line'></div>
            <OurProcess cityName={cityName}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Virtual CFO Registration'} state={state} Query={'virtual-cfo-services'} city={city} />
        </div>
    )
}
export default Home