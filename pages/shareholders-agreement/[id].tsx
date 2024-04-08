import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/shareholders-agreement/Hero'
import { Process } from '../../components/static/shareholders-agreement/Process'
import Importance from '../../components/static/shareholders-agreement/Importance'
import Clauses from '../../components/static/shareholders-agreement/Clauses'
import Benefits from '../../components/static/shareholders-agreement/Benefits'
import HowCreate from '../../components/static/shareholders-agreement/HowCreate'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { CustomDefault } from '../../components/child_components/CustomDefault'

const faq = [
    {
        "question": "What is a Shareholders Agreement?",
        "answer": "A Shareholders Agreement is a legally binding document that outlines the rights, responsibilities, and relationships among the shareholders of a company. It serves as a comprehensive framework for governance, covering aspects such as decision-making, ownership transfers, dispute resolution, and more."
    },
    {
        "question": "Why is a Shareholders Agreement important?",
        "answer": "A Shareholders Agreement is crucial for several reasons. It helps in preventing disputes by clearly defining the roles of shareholders, provides mechanisms for dispute resolution, protects minority interests, and establishes a framework for decision-making and business operations."
    },
    {
        "question": "Who should be involved in creating a Shareholders Agreement?",
        "answer": "The creation of an Agreement involves the active participation of all shareholders. Legal professionals with expertise in corporate law should also be engaged to ensure that the agreement complies with relevant laws and effectively addresses the unique needs of the company."
    },
    {
        "question": "What key elements should be included in an Agreement?",
        "answer": "A comprehensive Shareholders Agreement should include clauses covering ownership and transfer of shares, rights and responsibilities of shareholders, decision-making processes, dispute resolution mechanisms, exit strategies, confidentiality, and non-compete provisions."
    },
    {
        "question": "How can an Agreement protect minority shareholders?",
        "answer": "The agreement can protect minority shareholders by clearly outlining their rights, ensuring their participation in major decisions, and incorporating provisions for fair treatment in the event of share transfers, company sales, or other significant transactions."
    },
    {
        "question": "What is the process for amending a Shareholders Agreement?",
        "answer": "Amending a Shareholders Agreement typically involves the consensus of all shareholders. The process for amendments should be outlined in the agreement itself, including the requirements for notice, voting, and approval thresholds."
    },
    {
        "question": "How does an Agreement address dispute resolution?",
        "answer": "The agreement often includes provisions for dispute resolution, specifying whether disputes will be resolved through arbitration, mediation, or other alternative methods. Clarity on this front can help in expeditiously resolving conflicts among shareholders."
    },
    {
        "question": "Can an Agreement be enforced legally?",
        "answer": "Yes, a Shareholders Agreement is a legally binding document. If drafted properly and in accordance with applicable laws, it can be enforced through legal means. Engaging legal professionals in the drafting process helps ensure the agreement’s legal validity."
    },
    {
        "question": "What is the role of a mediator or arbitrator in dispute resolution?",
        "answer": "In the context of a Shareholders Agreement, a mediator or arbitrator plays a neutral role in facilitating the resolution of disputes between shareholders. They assist in finding mutually agreeable solutions and can help avoid protracted legal battles."
    },
    {
        "question": "How often should an Agreement be reviewed or updated?",
        "answer": "An Agreement should be reviewed regularly, especially when there are significant changes in the business, ownership structure, or relevant laws. Regular updates ensure that the agreement remains relevant and effective in guiding the company’s governance."
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

    const cityFromQuery = query?.replace('shareholders-agreement-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages shareholders-agreement-reg'>
            <Head>
                <title>Shareholders Agreement- Key Clauses, Benefits</title>
                <meta name="description" content="A Shareholders’ Agreement stands as a foundational document governing the relationships and operations within a company." />
                <link rel="canonical" href="https://www.registerkaro.in/shareholders-agreement" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Shareholders Agreement- Key Clauses, Benefits" />
                <meta property="og:description" content="A Shareholders’ Agreement stands as a foundational document governing the relationships and operations within a company." />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>What is a Shareholders’ Agreement?</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h2 className='main-heading'>Importance of Shareholders’ Agreement</h2>
            <div className='heading-line'></div>
            <Importance cityName={cityName} />
            <h2 className='main-heading'>Key Clauses in a Shareholders’ Agreement</h2>
            <div className='heading-line'></div>
            <Clauses cityName={cityName} />
            <h2 className='main-heading'>Benefits of a Shareholders’ Agreement</h2>
            <div className='heading-line'></div>
            <Benefits cityName={cityName} />
            <h2 className='main-heading'>How to Create a Shareholders’ Agreement?</h2>
            <div className='heading-line'></div>
            <HowCreate cityName={cityName} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Shareholders’ Agreement'} state={state} Query={'shareholders-agreement'} city={city} />
        </div>
    )
}
export default Home