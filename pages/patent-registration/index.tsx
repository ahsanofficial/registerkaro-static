import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../../components/static/patent-registration/DocumentRequired'
import { Hero } from '../../components/static/patent-registration/Hero'
import { Process } from '../../components/static/patent-registration/Process'
import { WhyChoose } from '../../components/static/patent-registration/WhyChoose'
import TypesPatents from '../../components/static/patent-registration/TypesPatents'
import WhyPatent from '../../components/static/patent-registration/WhyPatent'
import Forms from '../../components/static/patent-registration/Forms'
import { ProcessSteps } from '../../components/static/patent-registration/ProcessSteps'
import Check from '../../components/static/patent-registration/Check'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

const faq = [
    {
        "question": "How can a patent be registered?",
        "answer": "For registering the patent, you first need to follow given steps: conduct a thorough patent search <draft patent application < File the patent application < Objection or opposition awaited < patent examination < Patent granted."
    },
    {
        "question": "Who is eligible for patent registration?",
        "answer": "Those who fall in the given category, are eligible for patent registration: The real inventor must be the applicant, A patentable product, method, or concept needs to be innovative and one-of-a-kind, Innovation needs to have a purpose, Information about the applicant as well as their KYC, and every detail of the invention that needs to be patented."
    },
    {
        "question": "Is patent registration free?",
        "answer": "When filing your patent application to the patent office, you must pay fees of either Rs. 1600 or Rs. 8000, depending on the type of applicant as shown in the table below. The patent application will be published after 18 months if you do not submit a request for early publication (fees listed in the table below)."
    },
    {
        "question": "What are the 3 types of patents?",
        "answer": "There are three types of patents, namely: Design Patent, Utility Patent, Plant Patent."
    },
    {
        "question": "Can anyone write a patent?",
        "answer": "The real and first inventor or his assignee may file a patent application alone or together with any other person. Nonetheless, a deceased person’s legal representative may also file a patent application."
    },
    {
        "question": "Why are patents registered?",
        "answer": "Patents are registered under the law for a varied range of benefits such as legal protection against infringement, ownership status, exclusive rights establishments, monetary benefits, etc."
    },
    {
        "question": "What are examples of registered patents?",
        "answer": "There are many famous examples of patents such as Iphone design patents including home button, home screen icons, lightning charging point, dynamic island, Pfizer Covid-19 Vaccine."
    },
    {
        "question": "What are the 5 requirements of a patent?",
        "answer": "Patentable subject matter is one of the five main conditions for patentability, along with utility, novelty, nonobviousness, and enablement."
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
  
const Home = () => {
    return (
        <div className='services-pages patent-registration'>
            <Head>
                <title>Patent registration online in India</title>
                <meta name="description" content="Patent Registration in India - Registerkaro provides best patent registration services in all over India at best price. Contact for patent filing in India now." />
                <link rel="canonical" href="https://www.registerkaro.in/patent-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Patent registration online in India" />
                <meta property="og:description" content="Patent Registration in India - Registerkaro provides best patent registration services in all over India at best price. Contact for patent filing in India now." />
            </Head>
            <Hero  cityName={'India'}/>
            <h1 className='main-heading'>What is Patent?</h1>
            <div className='heading-line'></div>
            <Process  cityName={'India'}/>
            <h2 className='main-heading'>Types of Patents</h2>
            <div className='heading-line'></div>
            <TypesPatents  cityName={'India'}/>
            <h2 className='main-heading'>Why Patent Registration? </h2>
            <div className='heading-line'></div>
            <WhyPatent  cityName={'India'}/>
            <h2 className='main-heading'>Check if you can proceed with Patent Registration </h2>
            <div className='heading-line'></div>
            <Check  cityName={'India'}/>
            <h2 className='main-heading'>Documents Required for Patent Registration</h2>
            <div className='heading-line'></div>
            <DocumentRequired  cityName={'India'}/>
            <h2 className='main-heading'>Forms Used in Patent Registration</h2>
            <div className='heading-line'></div>
            <Forms  cityName={'India'}/>
            <h2 className='main-heading'>Process for Patent Registration</h2>
            <div className='heading-line'></div>
            <ProcessSteps  cityName={'India'}/>
            <h2 className='main-heading'>How does RegisterKaro help you with Patent Registration?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={'India'}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Patent registration'} state={state} Query={'patent-registration'} city={city} />
        </div>
    )
}
export default Home