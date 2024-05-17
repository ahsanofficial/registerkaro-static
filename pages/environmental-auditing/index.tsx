import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/environmental-auditing/Hero'
import { Process } from '../../components/static/environmental-auditing/Process'
import { Types } from '../../components/static/environmental-auditing/Types'
import { Why } from '../../components/static/environmental-auditing/Why'
import { ProcessEnvironment} from '../../components/static/environmental-auditing/ProcessEnvironment'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { Phases } from '../../components/static/environmental-auditing/Phases'
import { Benifits} from '../../components/static/environmental-auditing/Benifits'
import { WhyChoose} from '../../components/static/environmental-auditing/WhyChoose'
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
      "question": "What is environmental auditing?",
      "answer": "The systematic and formal procedure for evaluation and asssing a company’s use of natural resources and sutainable development and compliance of the environmental laws."
    },
    {
      "question": "Why is environmental auditing important for businesses?",
      "answer": "Environmental auduting is important for a business for various reasons to understand and comply with the environmental regulation, improve efficiency of the usage of natural resources and demonstrate commitment to the usage of natural resources and assist the United Nation in achieving the goals of sustainable development.",
    },
    {
      "question": "What are the key components of an environmental audit?",
      "answer": "An environmental audit generally involves assesing the legal compliance with the regulations set by the government and fairly and property passing the assessment test, conduction of inspections in the work space and analysing any issues in case of any issues in compliance or with the assessment."
    },
    {
      "question": "Who conducts environmental audits for businesses?",
      "answer": "Environmental audit for businesses is conducted by, internal saff, external member who may be appointed by the government , or auditors who have knowledge of the compliance and the regulations, it is always advisable to seek professional help to assist in case of environmental audits so as to make the process faster and smooth."
    },
    {
      "question": "What is the role of ISO 14001 in conducting environmental audits?",
      "answer": "ISO 14001 is an international standard for environmental management systems. It provides a framework for organizations to establish, implement, maintain, and continually improve their environmental performance. Compliance with ISO 14001 principles is often a focus of environmental audits."
    },
    {
      "question": "Difference between compliance and performance auditing?",
      "answer": "Compliance auditing involves, the orgnaisation compliance with the environmental laws, whereas performance auditng involves the organsiation’s effecting management system related to the environment as well as initiatives related to sustainable development."
    },
    {
      "question": "How often should an organization conduct audits?",
      "answer": "The frequency of an organisation conducting audits depends on the size of the organsation, industry it is functioning in, as well as the regulatory requirements. Generally, environmental audit is conducted annually by some organsaition annually whereas some conduct rarely or once in a while."
    }
]
  
const Home = () => {
    return (
        <div className='services-pages '>
            <Head>
                 <title>Environmental Auditing | RegisterKaro</title> 
                <meta name="description" content="The Official RegisterKaro" /> 
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                 <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> 
            </Head>
            <Hero  cityName={'India'} />
            <h1 className='main-heading'>Understanding Environmental Audit</h1>
            <div className='heading-line'></div>
            <Process  cityName={'India'} />
            <h2 className='main-heading'>Purpose of Environmental Audit</h2>
            <div className='heading-line'></div>
            <Types  cityName={'India'} />
            <h2 className='main-heading'>Areas of Environmental Audit</h2>
            <div className='heading-line'></div>
            <Why  cityName={'India'} />
            <h2  className='main-heading'>Process of Environmental Audit</h2 >
            <div className='heading-line'></div>
            <ProcessEnvironment cityName={'India'} />

            <h2 className='main-heading'>Phases</h2>
            <div className='heading-line'></div>
            <Phases cityName={'India'} />

            <h2  className='main-heading'>Benefits of Environmental Audit</h2 >
            <div className='heading-line'></div>
            <Benifits cityName={'India'} />

            <h2 className='main-heading'>How does Register Karo Help ?</h2 >
            <div className='heading-line'></div>
            <WhyChoose cityName={'India'} />

            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Environmental Auditing'} state={state} Query={'environmental-auditing'} city={city} />
        </div>
    )
}
export default Home