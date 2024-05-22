import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/transfer-pricing-agreement/Hero'
import { Process } from '../../components/static/transfer-pricing-agreement/Process'
import { Why } from '../../components/static/transfer-pricing-agreement/Why'
import { WhyChoose } from '../../components/static/transfer-pricing-agreement/WhyChoose'
import { Whytransfer } from '../../components/static/transfer-pricing-agreement/Whytransfer'
import { Pricingagreement } from '../../components/static/transfer-pricing-agreement/Pricingagreement'
import { Transferpricing } from '../../components/static/transfer-pricing-agreement/Transferpricing'
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

const faq = [
    {
        "question": "What are Transfer Pricing Agreement?",
        "answer": "Transfer pricing is the cost of goods and services exchanged between companies that are controlled by the same entity. For instance, when a subsidiary company sells products or provides services to its parent company or a sibling company, the cost is known as the transfer price."
    },
    {
        "question": "Example of Transfer Pricing Agreement?",
        "answer": "PQR subsidiary company of XYZ produces vehicles while purchasing the engine from STR which is also a subsidiary company of XYZ. Here the transfer price is the amount that PQR pays STR for the engine."
    },
    {
        "question": "What’s APA Transfer Pricing Agreement?",
        "answer": "An APA is a formal agreement between one or more taxpayers and one or more tax authorities that is intended to prevent transfer pricing disputes by setting criteria in advance for specific cross-border controlled transactions to ensure they meet the arm's length principle."
    },

    {
        "question": " What’s Rule of Transfer Pricing?",
        "answer":"Transfer pricing is a financial and tax strategy enabling businesses to set prices for transactions within the company and among subsidiaries under the same control or ownership.",
    },
    {
        "question": "What’s the benefit of Transfer Pricing?",
        "answer": "Transfer pricing enables the transfer of resources between countries using secure methods while avoiding steep tariffs on the transactions."
    },
] 
  
const Home = () => {
    return ( 
        <div className='services-pages transfer-pricing-agreement'>
            <Head>
                 <title> Transfer pricing agreement | RegisterKaro</title> 
                <meta name="description" content="The Official RegisterKaro" /> 
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://www.registerkaro.in/ads/transfer-pricing-agreement" /> 
            </Head>
            
            <Hero  cityName={'India'} />
            <h1 className='main-heading'>What’s Transfer Pricing Agreement?</h1>
            <div className='heading-line'></div>
            <Process  cityName={'India'} />
            <h2 className='main-heading'>Things to Know About Transfer Pricing Agreement</h2>
            <div className='heading-line'></div>
            <Why  cityName={'India'} />
            <h2 className='main-heading'>Why Transfer Pricing</h2>
            <div className='heading-line'></div>
            <Whytransfer cityName={'India'} />
             <h2 className='main-heading'>What to be there in Transfer Pricing Agreement:</h2>
            <div className='heading-line'></div>
            <Transferpricing cityName={'India'} />  
            <h2 className='main-heading'>What to Take Care in Transfer Pricing Agreement</h2>
            <div className='heading-line'></div>
            <Pricingagreement cityName={'India'} /> 
            <h2 className='main-heading'>How RegisterKaro helps you in the Registration process?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={'India'} />   
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Transfer pricing agreement'} state={state} Query={'transfer-pricing-agreement'} city={city} />
           
        </div>
    )
}
export default Home