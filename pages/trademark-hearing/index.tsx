import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/trademark-hearing/Hero'
import { Process } from '../../components/static/trademark-hearing/Process'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { TerritorialJurisdictions } from '../../components/static/trademark-hearing/TerritorialJurisdictions'
import DocumentReq from '../../components/static/trademark-hearing/DocumentReq'
import { ProcessStep } from '../../components/static/trademark-hearing/ProcessStep'
import { WhyChoose } from '../../components/static/trademark-hearing/WhyChoose'
import Reason from '../../components/static/trademark-hearing/Reason'
import RecentDevelopments from '../../components/static/trademark-hearing/RecentDevelopments'
import KeyConsiderations from "../../components/static/trademark-hearing/KeyConsiderations"
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
        "question": "What is the burden of proof required to demonstrate trademark infringement during the hearing?",
        "answer": "The burden of proof in a trademark infringement hearing rests on the plaintiff, who must demonstrate a likelihood of confusion between the allegedly infringing mark and their trademark."
    },
    {
        "question": "Can evidence of prior use of the trademark be presented to strengthen the case during the hearing?",
        "answer": "Yes, evidence of prior use of the trademark can be presented during the hearing to bolster the plaintiff's case and establish the validity and strength of their trademark rights."
    },
    {
        "question": "Are there specific procedural steps that must be followed during the trademark hearing?",
        "answer": "Yes, specific procedural steps must be followed during the trademark hearing, including pre-trial discovery, submission of evidence, witness testimony, and adherence to court rules and procedures."
    },
    {
        "question": "Is expert testimony admissible to support trademark infringement claims during the hearing?",
        "answer": "Yes, expert testimony is often admissible to support claims of trademark infringement during the hearing, particularly to provide insights on consumer perception, market practices, and other relevant factors influencing the likelihood of confusion."
    },
    {
        "question": "What factors does the hearing officer consider when assessing the distinctiveness of the trademark?",
        "answer": "The hearing officer considers various factors when assessing the distinctiveness of a trademark, including its inherent strength, evidence of acquired distinctiveness through use, the degree of similarity to other marks, and the level of consumer recognition or association with the goods or services."
    },
    {
        "question": "Can the registration status of the trademark affect the outcome of the hearing?",
        "answer": "Yes, the registration status of the trademark can significantly impact the outcome of the hearing, as a registered trademark enjoys a presumption of validity and ownership, providing stronger legal protection and potential remedies for infringement compared to unregistered marks."
    },
    
    {
        "question": "How does the principle of territoriality influence the jurisdiction of the hearing?",
        "answer": "The principle of territoriality influences the jurisdiction of the hearing by dictating that trademark rights are typically limited to the geographical area where the mark is used or registered, thus affecting the scope of protection and enforcement available within that jurisdiction."
    },
    {
        "question": "Are there any defenses available to the respondent in a trademark hearing?",
        "answer": "Yes, several defenses may be available to the respondent in a trademark hearing, including fair use, genericness, abandonment, laches, and challenging the validity of the plaintiff's trademark registration."
    },
    {
        "question": "What remedies can be sought by the prevailing party after the trademark hearing?",
        "answer": "After the trademark hearing, the prevailing party may seek various remedies, including injunctive relief to stop further infringement, damages or monetary compensation for losses incurred, attorney's fees, and in some cases, destruction of infringing goods or corrective advertising."
    },
];



const Home = () => {
    return (
        <div className='services-pages trademark-hearing'>
            <Head>
                <title>Trademark Hearing</title>
                <meta name="description" content="Trademark hearings play a crucial role in protecting intellectual property rights and making favourable decisions for resolving disputes for getting Trademark registered." />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> */}
            </Head>
            <Hero cityName={'India'} />
            <h1 className='main-heading'>Introduction</h1>
            <div className='heading-line'></div>
            <Process cityName={'India'} />
            <h2 className='main-heading'>Territorial Jurisdictions of Trademark Regional Offices</h2>
            <div className='heading-line'></div>
            <TerritorialJurisdictions cityName={'India'} />
            <h2 className='main-heading'>Reason for Hearing Notices on Trademark</h2>
            <div className='heading-line'></div>
            <Reason cityName={'India'} />
            <h2 className='main-heading'>Understanding the Trademark Hearing</h2>
            <div className='heading-line'></div>
            <ProcessStep cityName={'India'} />
            <h2 className='main-heading'>What are the Key Considerations for a Successful Hearing?</h2>
            <div className='heading-line'></div>
            <KeyConsiderations cityName={'India'} />
            <h2 className='main-heading'>List of documents required for Trademark Hearing</h2>
            <div className='heading-line'></div>
            <DocumentReq cityName={'India'} />
            <h2 className='main-heading'>Recent Developments and Emerging Trends</h2>
            <div className='heading-line'></div>
            <RecentDevelopments cityName={'India'} />
            <h2 className='main-heading'>How RegisterKaro Can Assist You in the Franchise Agreement Process?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={'India'} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Trademark Hearing'} state={state} Query={'trademark-hearing'} city={city} />
        </div>
    )
}
export default Home