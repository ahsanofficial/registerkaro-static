import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/joint-venture-agreement/Hero'
import { Process } from '../../components/static/joint-venture-agreement/Process'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { Benefits } from '../../components/static/joint-venture-agreement/Benefits'
import WhyChooseReg from '../../components/static/joint-venture-agreement/WhyChooseReg'
import DocumentsReq from '../../components/static/joint-venture-agreement/DocumentsReq'
import { ProcessStep } from '../../components/static/joint-venture-agreement/ProcessStep'
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
        "question": "What is the importance of Joint Venture?",
        "answer": "It enables the parties to access new markets, customers, and opportunities that they may not be able to reach individually. It allows the parties to pool their resources, expertise, and networks to achieve a common goal. It reduces the risks and costs of entering a new venture by sharing them with other parties. It provides legal protection and clarity for each party in case of any disputes or issues arising from the joint venture."
    },
    {
        "question": "What are the types of joint venture agreements?",
        "answer": "Joint venture agreements can be classified into two types: equity joint ventures and contractual joint ventures. Equity joint ventures are formed by setting up a separate joint venture company where each party has a shareholding and can appoint directors to carry out a specific (and often finite) project. Equity joint ventures are subject to the laws and regulations applicable to the legal structure of the joint venture company, such as a partnership, a limited liability partnership, a private limited company, or a public limited company. Contractual joint ventures are formed by entering into a contractual arrangement where the parties agree to cooperate on a project without creating a separate legal entity. Contractual joint ventures are governed by the terms and conditions of the joint venture agreement and the general principles of contract law."
    },
    {
        "question": "How to register for a joint venture in India?",
        "answer": "To register a joint agreement in India, you need to follow these steps: Choose a suitable legal structure for your joint venture, such as a partnership, a limited liability partnership, a private limited company, or a public limited company. Each structure has its own advantages and disadvantages, depending on the nature and size of your joint venture. You can consult a legal expert to help you decide the best option for your joint venture. Draft a joint venture agreement that covers all the essential aspects of your joint venture, such as the name, objectives, duration, capital contribution, profit and loss sharing, management and control, intellectual property rights, confidentiality, dispute resolution, and termination clauses. You can use a standard template or customize it according to your specific needs. You can also seek professional assistance from RegisterKaro to draft a comprehensive and legally valid joint venture agreement. Register your joint venture agreement with the relevant authorities, such as the Registrar of Companies, the Registrar of Firms, the Income Tax Department, the Goods and Services Tax Department, and the Foreign Exchange Management Act. The registration process and requirements may vary depending on the legal structure and nature of your joint venture. You can also avail the services of RegisterKaro to handle the registration process smoothly and efficiently. Start your joint venture operations and comply with the applicable laws and regulations, such as the Companies Act, the Partnership Act, the Income Tax Act, the Goods and Services Tax Act, the Foreign Exchange Management Act, and the Contract Act. You should also maintain proper records and accounts of your joint venture activities and file the necessary returns and reports with the authorities. You can also rely on RegisterKaro to take care of your accounting and compliance needs."
    },
    {
        "question": "How to protect yourself while you are negotiating a joint venture agreement?",
        "answer": "To protect yourself while you are negotiating a joint venture agreement, you should: First, agree on a confidentiality agreement (NDA) to ensure that all negotiations are kept confidential and that neither party can use the information for any other purpose than the joint venture. Second, agree on a heads of terms document that sets out the main principles and steps for the joint venture and the documents required to get it set up. The heads of terms document should also include a clause that states that the negotiations are subject to contract and that neither party is legally bound until the joint agreement is signed. Third, agree on the joint agreement that covers all the details and terms of the joint venture and that is legally enforceable by both parties. The joint venture agreement should also include a clause that states that the joint agreement supersedes any previous agreements or understandings between the parties."
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

    const cityFromQuery = query?.replace('joint-venture-agreement-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }
    return (
        <div className='services-pages joint-venture-agreement'>
            <Head>
                <title>Joint Venture Agreement | RegisterKaro</title>
                <meta name="description" content="A joint venture agreement is a legal contract between two or more parties who agree to collaborate on a specific project or business activity." />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> */}
            </Head>
            <Hero  cityName={cityName}/>
            <h1 className='main-heading'>What is a Joint Venture Agreement?</h1>
            <div className='heading-line'></div>
            <Process  cityName={cityName}/>
            <h2 className='main-heading'>What are the Benefits of Joint Venture?</h2>
            <div className='heading-line'></div>
            <Benefits cityName={cityName}/>
            <h2 className='main-heading'>Documents Required for Joint Venture Agreement</h2>
            <div className='heading-line'></div>
            <DocumentsReq cityName={cityName}/>
            <h2 className='main-heading'>How to Register a Joint Venture Agreement in {cityName}?</h2>
            <div className='heading-line'></div>
            <ProcessStep cityName={cityName}/>
            <h2 className='main-heading'>Why choose RegisterKaro for your Joint Venture?</h2>
            <div className='heading-line'></div>
            <WhyChooseReg cityName={cityName}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Joint Venture Agreement'} state={state} Query={'joint-venture-agreement'} city={city} />
        </div>
    )
}
export default Home