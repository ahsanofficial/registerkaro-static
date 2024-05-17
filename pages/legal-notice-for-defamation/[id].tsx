import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/legal-notice-for-defamation/Hero'
import { Process } from '../../components/static/legal-notice-for-defamation/Process'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { Understanding } from '../../components/static/legal-notice-for-defamation/Understanding'
import CivilDefamation from '../../components/static/legal-notice-for-defamation/CivilDefamation'
import Definition from '../../components/static/legal-notice-for-defamation/Definition'
import { HowRegisterKaro } from '../../components/static/legal-notice-for-defamation/HowRegisterKaro'
import CriminalDefamation from '../../components/static/legal-notice-for-defamation/CriminalDefamation'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { CustomDefault } from '../../components/child_components/CustomDefault'

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
        "question": "What is Defamation?",
        "answer": "Defamation is when a person makes to another person, comments or statements that are false with the intention of causing harm. It is recognised as an offence under IPC and a party can choose civil remedy in the form of damages or an apology."
    },
    {
        "question": "What is a Defamation Notice?",
        "answer": "A defamation notice is a formal communication that is made by one party to another to make the party aware of the intention of legal proceedings, informing them of the alleged defamatory statement and also demanding action, response or apology within the notice period."
    },
    {
        "question": "What should a Defamation Notice include?",
        "answer": "A Defamation Notice must include identification of the parties involved, a description of defamatory statements, a detailed explanation of the harm caused due to the statement and the remedy the aggrieved party is seeking."
    },
    {
        "question": "Is legal notice necessary before filing a Defamation lawsuit?",
        "answer": "The necessity of sending a legal notice is dependent upon jurisdiction, in some jurisdictions, it is compulsory to send a legal notice. Even if it is not necessary to send a legal notice, it is advisable to send one because it gives the party to solve the disputes without taking legal action and also it acts as evidence, in the court that the aggrieved party had made the other party aware of the legal proceedings and the remedies sort for."
    },
    {
        "question": "What is the purpose of sending a Defamation Notice?",
        "answer": "Sending a Defamation Notice serves the purpose of a material piece of evidence, in the courts that the aggrieved party had made the other party aware of the potential legal actions he/she is about to take and this formal communication stating the intent of taking legal action may help to solve the dispute amicably without the need of a legal proceeding."
    },
    {
        "question": "Can a Defamation Notice be used as evidence in Court?",
        "answer": "Yes, a Defamation Notice can be used as evidence in the Court of Law, that the alleged party was made aware of the defamatory statement made before the Court and also had the opportunity to resolve it before the initiation of the legal proceeding."
    },
    
    {
        "question": "Can a notice be sent for online defamation?",
        "answer": "Yes, the principle of defamation applies irrespective of the medium. It can be sent if one makes defamatory comments on social media, a website or any other online platform where it can be watched by the general public or any third person."
    },
    {
        "question": "How long is the notice period in a Legal Notice of Defamation?",
        "answer": "The notice period depends upon the preference of the sender or the legal requirements. The intention of having a notice period is to give time to rectify the mistake made by the alleged party."
    },
    {
        "question": "Is a third party necessary for Defamation?",
        "answer": "Yes, a third party is a necessity for Defamation, Defamation cannot happen between two parties. It always must be done in front of another person, be it a public or an individual person."
    },
    {
        "question": "What happens if the recipient ignores the legal notice?",
        "answer": "If the recipient ignores the legal notice, then depending upon the preference of the sender, legal action may be initiated. Notice is generally sent to make the alleged party aware that the aggrieved party has the intention of legal proceedings."
    },
];



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

    const cityFromQuery = query?.replace('legal-notice-for-defamation-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }
    return (
        <div className='services-pages'>
            <Head>
                <title>Legal Notice for Defamation</title>
                <meta name="description" content="Defamation is an offence in which a person makes a false statement about another person in front of a third person by words, signs, or visible representations to cause harm and also with the knowledge that it will cause harm to the person's reputation." />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> */}
            </Head>
            <Hero  cityName={cityName} />
            <h1 className='main-heading'>Understanding Defamation</h1>
            <div className='heading-line'></div>
            <Process  cityName={cityName} />
            <h2 className='main-heading'>Understanding Legal Notices</h2>
            <div className='heading-line'></div>
            <Understanding cityName={cityName} />
            <h2 className='main-heading'>What is a Legal Defamation Notice</h2>
            <div className='heading-line'></div>
            <Definition cityName={cityName} />
            <h2 className='main-heading'>Criminal Defamation</h2>
            <div className='heading-line'></div>
            <CriminalDefamation  cityName={cityName} />
            <h2 className='main-heading'>Civil Defamation</h2>
            <div className='heading-line'></div>
            <CivilDefamation cityName={cityName} />
            <h2 className='main-heading'>How does Register Karo help?</h2>
            <div className='heading-line'></div>
            <HowRegisterKaro cityName={cityName} />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Legal Notice for Defamation'} state={state} Query={'legal-notice-for-defamation'} city={city} />
        </div>
    )
}
export default Home