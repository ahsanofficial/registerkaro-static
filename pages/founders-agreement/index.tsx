import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/founders-agreement/Hero'
import { Process } from '../../components/static/founders-agreement/Process'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { Components } from '../../components/static/founders-agreement/Components'
import WhyChooseReg from '../../components/static/founders-agreement/WhyChooseReg'
import DocumentsReq from '../../components/static/founders-agreement/DocumentsReq'
import { ProcessStep } from '../../components/static/founders-agreement/ProcessStep'
import TerminateMeaning from '../../components/static/founders-agreement/TerminateMeaning'
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
        "question": "What is a Founders’ Agreement?",
        "answer": "It is a legal document that defines the roles, responsibilities, and ownership of each founder in a business. It also covers important aspects such as intellectual property, decision making, dispute resolution, exit strategy, and more."
    },
    {
        "question": "Why do I need an Agreement of Founders?",
        "answer": "A Founders’ Agreement is essential for any startup that wants to establish a clear and fair relationship among the co-founders and set the foundation for a successful venture. A Founders’ Agreement can help you to: Protect your rights and interests as a founder. Clarify the expectations and contributions of each co-founder. Avoid future disputes and conflicts with your partners. Align your vision and goals with your co-founders. Secure your intellectual property and confidential information. Plan for contingencies and exit scenarios."
    },
    {
        "question": "When should I make a Founders’ Agreement?",
        "answer": "You should make a Founders’ Agreement as soon as possible, preferably before you start working on your business idea or raising funds. The earlier you make a Founders’ Agreement, the easier it will be to negotiate and agree on the terms and conditions with your co-founders."
    },
    {
        "question": "How can I make a Founders’ Agreement?",
        "answer": "You can make an Agreement with the help of a professional and affordable service like Registerkaro. We have a team of experienced and qualified lawyers who can help you draft and register your Founders’ Agreement as per your business needs and goals. You can contact us and share your business details and co-founders information, and we will take care of the rest."
    },
    {
        "question": "What are the documents required for a Founders’ Agreement?",
        "answer": "To prepare and register your Agreement, you will need to provide us with the following documents: PAN card and Aadhaar card of all the co-founders. Passport size photographs of all the co-founders. Business name and address proof. Business registration certificate (if applicable). Business plan and financial projections. Any other document as per the nature and scope of your business."
    },
    {
        "question": "How long does it take to get an Agreement?",
        "answer": "It usually takes around 7 to 10 working days to get your Agreement done with Registerkaro. However, the exact time may vary depending on the complexity and scope of your business and the availability of the co-founders for signing the agreement."
    },
    
    {
        "question": "How much does it cost to get an Agreement of Founders?",
        "answer": "The cost of getting an Agreement with Registerkaro depends on the number of co-founders and the type and size of your business. You can contact us and get a free quote for your Agreement service. We assure you that we offer the most competitive and reasonable prices in the market."
    },
];



const Home = () => {
    return (
        <div className='services-pages founders-agreement'>
            <Head>
                <title>Founders’ Agreement | RegisterKaro</title>
                <meta name="description" content="A Founders’ Agreement is a legal document that defines the roles, responsibilities, and ownership of each founder in a business." />
                <link rel="canonical" href="https://www.registerkaro.in/founders-agreement" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Founders’ Agreement | RegisterKaro" />
                <meta property="og:description" content="A Founders’ Agreement is a legal document that defines the roles, responsibilities, and ownership of each founder in a business." />
            </Head>
            <Hero  cityName={'India'}/>
            <h1 className='main-heading'>What is Founders’ Agreement?</h1>
            <div className='heading-line'></div>
            <Process  cityName={'India'}/>
            <h2 className='main-heading'>Components of Founders’ Agreement</h2>
            <div className='heading-line'></div>
            <Components cityName={'India'}/>
            <h2 className='main-heading'>Documents Required for Founders’ Agreement</h2>
            <div className='heading-line'></div>
            <DocumentsReq cityName={'India'}/>
            <h2 className='main-heading'>Procedure for Drafting Founders’ Agreement</h2>
            <div className='heading-line'></div>
            <ProcessStep cityName={'India'}/>
            <h2 className='main-heading'>Meaning of Terminating Founders’ Agreement</h2>
            <div className='heading-line'></div>
            <TerminateMeaning cityName={'India'}/>
            <h2 className='main-heading'>Why choose Registerkaro for Founders’ Agreement service?</h2>
            <div className='heading-line'></div>
            <WhyChooseReg cityName={'India'}/>
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Founders’ Agreement'} state={state} Query={'founders-agreement'} city={city} />
        </div>
    )
}
export default Home