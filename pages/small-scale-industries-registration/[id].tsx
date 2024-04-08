import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/small-scale-industries-registration/Hero'
import { Process } from '../../components/static/small-scale-industries-registration/Process'
import Small from '../../components/static/small-scale-industries-registration/Small'
import Eligibility from '../../components/static/small-scale-industries-registration/Eligibility'
import Checklist from '../../components/static/small-scale-industries-registration/Checklist'
import Documents from '../../components/static/small-scale-industries-registration/Documents'
import Benefits from '../../components/static/small-scale-industries-registration/Benefits'
import { Proceed } from '../../components/static/small-scale-industries-registration/Proceed'
import HowRegisterKaro from '../../components/static/small-scale-industries-registration/HowRegisterKaro'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { CustomDefault } from '../../components/child_components/CustomDefault'

const faq =[
    {
        "question": "Who is eligible for small scale industries?",
        "answer": "According to the MSMED Act, 2006, updated in July 2020 by the Finance Ministry, small businesses in India are categorized based on their capital investment and turnover. If your industry falls into any of these categories, then you are eligible for SSI Registration. Categories include: Micro-level industries with less than Rs. 1 Crore in machinery investments should have turnover below Rs. 5 Crores. Small-level industries with less than Rs. 10 Crore in machinery investments should have turnover below Rs. 50 Crores. Medium-level industries with less than Rs. 50 Crore in machinery investments should have turnover below Rs. 250 Crores."
    },
    {
        "question": "How can I register an SME in India?",
        "answer": "Anyone wishing to start a micro, small, or medium-sized business can apply for Udyam Registration online using the Udyam Registration portal. This process is based solely on self-declaration and does not need the uploading of any paperwork, certifications, or other supporting documentation."
    },
    {
        "question": "What are the benefits under SSI Registration?",
        "answer": "There are many benefits of SSI Registration such as easy loan access, lower loan rates, government schemes, tax benefits, and government tenders, etc."
    },
    {
        "question": "Are MSME and small scale industries the same?",
        "answer": "Indeed. Previous industries that produced, manufactured, and offered services on a micro- or small-scale were registered as Small Scale Industries (SSI). The MSME (Micro, Small and Medium Enterprises) Act was subsequently passed by the government in 2006."
    },
    {
        "question": "What is the validity of an SSI certificate?",
        "answer": "Initially, a provisional registration certificate is issued and after commencement of production, a permanent registration certificate is issued. The provisional registration certificate is valid for a period of 5 years and permanent registration is given in perpetuity."
    },
    {
        "question": "What is the limit of SSI in India?",
        "answer": "A small business is one that has a sales of little more than Rs. 50 crore and invests no more than Rs. 10 crore in plant, machinery, and equipment."
    },
    {
        "question": "What is an example of a small scale industry?",
        "answer": "There are many forms of small scale industries such as bakeries, beauty parlors, small toy manufacturers, pickle manufacturing, local snacks manufacturers, etc."
    },
    {
        "question": "What are the prerequisites for the Small Scale Industry?",
        "answer": "The prerequisites for the SSI registration demands the right structure chosen for the business, along with the location, machinery & equipment, product selection, Power & water connection, etc."
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

    const cityFromQuery = query?.replace('small-scale-industries-registration-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;


    }

    return (
        <div className='services-pages small-scale-industries-reg'>
            <Head>
                <title>Small Scale Industries Registration | RegisterKaro</title>
                <meta name="description" content="Companies with Small Scale Industries Registration are offered low interest rates loan for the operations which helps them to advance the growth and operations." />
                <link rel="canonical" href="https://www.registerkaro.in/small-scale-industries-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Small Scale Industries Registration | RegisterKaro" />
                <meta property="og:description" content="Companies with Small Scale Industries Registration are offered low interest rates loan for the operations which helps them to advance the growth and operations." />
            </Head>
            <Hero cityName={cityName}/>
            <h1 className='main-heading'>What are all Small Scale Industries?</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName}/>
            <h2 className='main-heading'>Types of Small Scale Industries</h2>
            <div className='heading-line'></div>
            <Small cityName={cityName}/>
            <h2 className='main-heading'>Check your eligibility for Small Scale Industries Registration</h2>
            <div className='heading-line'></div>
            <Eligibility cityName={cityName}/>
            <h2 className='main-heading'>Checklist for the Small Scale Industries Registration</h2>
            <div className='heading-line'></div>
            <Checklist cityName={cityName}/>
            <h2 className='main-heading'>Documents you will need for Small Scale Industries Registration</h2>
            <div className='heading-line'></div>
            <Documents cityName={cityName}/>
            <h2 className='main-heading'>Benefits to avail under Small Scale Industries Registration</h2>
            <div className='heading-line'></div>
            <Benefits cityName={cityName}/>
            <h2 className='main-heading'>How to proceed with Small Scale Industries Registration?</h2>
            <div className='heading-line'></div>
            <Proceed cityName={cityName}/>
            <h2 className='main-heading'>How RegisterKaro helps you in the Registration process?</h2>
            <div className='heading-line'></div>
            <HowRegisterKaro cityName={cityName}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Small Scale Industries Registration'} state={state} Query={'small-scale-industries-registration'} city={city} />
        </div>
    )
}
export default Home