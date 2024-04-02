import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/copyright-registration/Hero'
import { Process } from '../../components/static/copyright-registration/Process'
import Copyright from '../../components/static/copyright-registration/Copyright'
import {DocumentsRequired} from '../../components/static/copyright-registration/DocumentsRequired'
import Benefits from '../../components/static/copyright-registration/Benefits'
import Eligible from '../../components/static/copyright-registration/Eligible'
import { CopyRightProcess } from '../../components/static/copyright-registration/CopyRightProcess'
import HowDoes from '../../components/static/copyright-registration/HowDoes'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

const faq =[
    {
        "question": "What is the process of copyright registration?",
        "answer": "For Copyright registration, you need to follow the given process: File an application < attach the documents < pay the requisite fee < verifier and evaluate the application < wait period for Objection < address objection if received < and grant copyright certificate."
    },
    {
        "question": "How do you create a copyright?",
        "answer": "You can create a copyright over creation or work that is deemed to be protected by filing a copyright application with the Indian Registrar of Copyright."
    },
    {
        "question": "Is copyright registration free in India?",
        "answer": "Copyright registration is not free in India. However, the fee required is quite minimal so that each class can afford the same."
    },
    {
        "question": "How do I register for free copyright?",
        "answer": "You cannot register the copyright for a fee, as there is a certain fee required to be paid while filing the copyright application. This fee varies as per the kind of work is to be copyrighted."
    },
    {
        "question": "Who is the owner of the copyright?",
        "answer": "Any person who holds the rights to the work under his name by obtaining the copyright certificate in his name is the legal owner of the copyright."
    },
    {
        "question": "Can we register copyright?",
        "answer": "Yes, you may register your work for copyright on your own without taking external assistance. However, the process is quite tedious and complex. Therefore, it is suggested that you get professional help."
    },
    {
        "question": "What are the 3 limitations of copyright?",
        "answer": "Though the benefits are quite wide to cover the limitations, there are still some to be addressed, such as limited access, market failure, reduced usage, etc."
    },
    {
        "question": "Which form is used for copyright registration?",
        "answer": "Form IV – Application for Registration of Copyright is used to file for copyright registration."
    },
    {
        "question": "Can I apply for copyright by myself?",
        "answer": "Yes, you may register your work for copyright on your own without taking external assistance. However, the process is quite tedious and complex. Therefore, it is suggested that you get professional help."
    },
    {
        "question": "What is the purpose of the copyright?",
        "answer": "Copyright safeguards the creator’s work and rights over that work with respect to distribution, sale, rent, etc. Moreover, copyright registration creates authenticity to the work and, therefore, trust and reliability."
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
        <div className='services-pages copyright-reg'>
              <Head>
                <title>Copyright Registration Process and Procedure | Registerkaro</title>
                <meta name="description" content="Get Copyright Registration online in India for books, music, film, photography and software applications and etc. through RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/copyright-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Copyright Registration Process and Procedure | Registerkaro" />
                <meta property="og:description" content="Get Copyright Registration online in India for books, music, film, photography and software applications and etc. through RegisterKaro" />
            </Head>
            <Hero   cityName={'India'}/>
            <h1 className='main-heading'>What is Copyright Registration?</h1>
            <div className='heading-line'></div>
            <Process  cityName={'India'} />
            <h2 className='main-heading'>What is Copyright?</h2>
            <div className='heading-line'></div>
            <Copyright  cityName={'India'}/>
            <h2 className='main-heading'>Benefits of Copyright Registration</h2>
            <div className='heading-line'></div>
            <Benefits  cityName={'India'}/>
            <h2 className='main-heading'>Are you eligible for Copyright Registration?</h2>
            <div className='heading-line'></div>
            <Eligible  cityName={'India'}/>
            <h2 className='main-heading'>Process for Copyright Registration</h2>
            <div className='heading-line'></div>
            <CopyRightProcess  cityName={'India'}/>
            <h2 className='main-heading'>Documents Required for Copyright Registration</h2>
            <div className='heading-line'></div>
            <DocumentsRequired  cityName={'India'}/>
            <h2 className='main-heading'>How does RegisterKaro help you with Copyright Registration?</h2>
            <div className='heading-line'></div>
            <HowDoes  cityName={'India'}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Copyright Registration Process and Procedure'} state={state} Query={'copyright-registration'} city={city} />
        </div>
    )
}
export default Home