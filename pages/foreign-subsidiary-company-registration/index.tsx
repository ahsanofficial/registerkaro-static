import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/foreign-subsidiary-company-registration/Hero'
import { Process } from '../../components/static/foreign-subsidiary-company-registration/Process'
import { Understanding } from '../../components/static/foreign-subsidiary-company-registration/Understanding'
import { Benefits } from '../../components/static/foreign-subsidiary-company-registration/Benefits'
import { Examples } from '../../components/static/foreign-subsidiary-company-registration/Examples'
import { Difference } from '../../components/static/foreign-subsidiary-company-registration/Difference'
import { DocumentReq } from '../../components/static/foreign-subsidiary-company-registration/DocumentReq'
import { RegistrationProcess } from '../../components/static/foreign-subsidiary-company-registration/RegistrationProcess'
import { ComplianceReq } from '../../components/static/foreign-subsidiary-company-registration/ComplianceReq'
import { ApplicableTaxes } from '../../components/static/foreign-subsidiary-company-registration/ApplicableTaxes'
import { CostsInclude } from '../../components/static/foreign-subsidiary-company-registration/CostsInclude'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
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
        "question": "What is a foreign subsidiary company?",
        "answer": "A foreign subsidiary company is a company that is owned and controlled by a parent company based in another country. The parent company holds a majority of the subsidiary's shares and can influence its operations and policies."
    },
    {
        "question": "What are the benefits of registering a foreign subsidiary company?",
        "answer": "Registering a foreign subsidiary company offers numerous benefits, including access to new markets, local market insights, tax advantages, limited liability protection, and enhanced credibility with customers and partners in the host country."
    },
    {
        "question": "What are the legal requirements for registering a foreign subsidiary company?",
        "answer": "The legal requirements vary by country but generally include selecting a business name, preparing incorporation documents, appointing directors, registering with local authorities, obtaining necessary licences, and adhering to local regulations and tax laws."
    },
    {
        "question": "How long does it take to register a foreign subsidiary company?",
        "answer": "The registration process duration can vary depending on the country and the complexity of the business. Typically, it can take anywhere from a few weeks to several months to complete all necessary steps and obtain approval."
    },
    {
        "question": "What documents are required to register a foreign subsidiary company?",
        "answer": "Commonly required documents include the parent company’s certificate of incorporation, articles of association, resolution of the board of directors approving the subsidiary formation, identification and proof of address of directors, and a registered office address in the host country."
    },
    {
        "question": "Do I need a local director to register a foreign subsidiary company?",
        "answer": "Many countries require at least one local director or representative. This individual must be a resident of the country where the subsidiary is being registered and will act as a liaison between the company and local authorities."
    },
    {
        "question": "What is the minimum capital requirement for a foreign subsidiary company?",
        "answer": "The minimum capital requirement varies by country and the type of business. Some countries have no minimum capital requirement, while others may require a specific amount to demonstrate financial stability."
    },
    {
        "question": "What taxes will a foreign subsidiary company be subject to?",
        "answer": "A foreign subsidiary company is subject to local taxes, which can include corporate income tax, value-added tax (VAT), payroll taxes, and other applicable local taxes. The parent company may also be subject to withholding taxes on dividends and other income repatriated from the subsidiary."
    },
    {
        "question": "Can a foreign subsidiary repatriate profits to the parent company?",
        "answer": "Yes, a foreign subsidiary can repatriate profits to the parent company, but this process is subject to local tax regulations and any applicable withholding taxes. It is important to comply with local regulations and tax treaties to avoid double taxation."
    },
    {
        "question": "Do I need to file annual reports for a foreign subsidiary company?",
        "answer": "Yes, most countries require foreign subsidiary companies to file annual reports and financial statements with local authorities. This includes providing details on the company's financial performance, compliance with local regulations, and any changes in ownership or management."
    },
]

const Home = () => {
    return (
        <div className='services-pages foreign-subsidiary-company-registration'>
            <Head>
                <title>Foreign Subsidiary Company Registration | RegisterKaro</title>
                <meta name="description" content="Setting up a subsidiary company in India is a strategic avenue for international companies which aspire to establish a foothold in the Indian market." />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero cityName={'India'} />
            <h1 className='main-heading'>Overview of Foreign Subsidiary Company Registration</h1>
            <div className='heading-line'></div>
            <Process cityName={'India'} />
            <h2 className='main-heading'>Understanding Foreign Subsidiary Company Registration</h2>
            <div className='heading-line'></div>
            <Understanding cityName={'India'} />
            <h2 className='main-heading'>Benefits of Registering a Foreign Subsidiary in India</h2>
            <div className='heading-line'></div>
            <Benefits cityName={'India'} />
            <h2 className='main-heading'>Examples of Some Foreign Subsidiary Companies in India</h2>
            <div className='heading-line'></div>
            <Examples cityName={'India'} />
            <h2 className='main-heading'>Difference between Foreign Branch and Subsidiary</h2>
            <div className='heading-line'></div>
            <Difference cityName={'India'} />
            <h2 className='main-heading'>Essential Documents for Registration</h2>
            <div className='heading-line'></div>
            <DocumentReq cityName={'India'} />
            <h2 className='main-heading'>Registration Process</h2>
            <div className='heading-line'></div>
            <RegistrationProcess cityName={'India'} />
            <h2 className='main-heading'>Compliance Requirements for Foreign Subsidiary</h2>
            <div className='heading-line'></div>
            <ComplianceReq cityName={'India'} />
            <h2 className='main-heading'>Applicable Taxes on Foreign Subsidiary in India</h2>
            <div className='heading-line'></div>
            <ApplicableTaxes cityName={'India'} />
            <h2 className='main-heading'>Costs included in Registering a Subsidiary in India</h2>
            <div className='heading-line'></div>
            <CostsInclude cityName={'India'} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Foreign Subsidiary Company Registration'} state={state} Query={'foreign-subsidiary-company-registration'} city={city} />
        </div>
    )
}
export default Home