import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import Advantages from '../../components/static/franchise-agreement/Advantages'
import { DocumentRequired } from '../../components/static/franchise-agreement/DocumentRequired'
import { Hero } from '../../components/static/franchise-agreement/Hero'
import KeyElements from '../../components/static/franchise-agreement/KeyElements'
import { Process } from '../../components/static/franchise-agreement/Process'
import { ProcessCompany } from '../../components/static/franchise-agreement/ProcessCompany'
import { Types } from '../../components/static/franchise-agreement/Types'
import Various from '../../components/static/franchise-agreement/Various'
import WhatIs from '../../components/static/franchise-agreement/WhatIs'
import { WhyChoose } from '../../components/static/franchise-agreement/WhyChoose'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { CustomDefault } from '../../components/child_components/CustomDefault'
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
        "question": "What is a franchise agreement?",
        "answer": "A franchise agreement is a legal contract between a franchisor and a franchisee, outlining the terms and conditions of the franchise relationship."
    },
    {
        "question": "What are the key components of a franchise agreement?",
        "answer": "The key components typically include franchise fees, royalty payments, territory rights, training obligations, and operational standards."
    },
    {
        "question": "What are the advantages of entering into a franchise agreement?",
        "answer": "Franchise agreements offer access to established brand recognition, proven business models, ongoing support, and collective marketing efforts."
    },
    {
        "question": "How long does a franchise agreement typically last?",
        "answer": "Franchise agreements often have a term ranging from 5 to 20 years, with the possibility of renewal under specified conditions."
    },
    {
        "question": "Can a franchise agreement be terminated early?",
        "answer": "Yes, a franchise agreement can be terminated early due to breaches of contract, failure to meet performance standards, or other specified reasons outlined in the agreement."
    },
    {
        "question": "What happens if there is a dispute between the franchisor and franchisee?",
        "answer": "Disputes are typically addressed through dispute resolution mechanisms outlined in the franchise agreement, such as mediation or arbitration."
    },
    {
        "question": "Are franchisees required to follow specific operating standards?",
        "answer": "Yes, franchisees are generally required to adhere to standardized operating procedures, quality control measures, and brand standards outlined in the agreement."
    },
    {
        "question": "Can franchisees sell their franchise businesses?",
        "answer": "Yes, franchisees typically have the right to sell their franchise businesses, subject to approval from the franchisor and compliance with transfer conditions specified in the agreement."
    },
    {
        "question": "Are there any restrictions on franchisees opening additional locations?",
        "answer": "Franchise agreements may impose restrictions on franchisees opening additional locations within or outside their designated territories, depending on the terms negotiated."
    },
    {
        "question": "How does a franchise agreement protect the interests of both parties?",
        "answer": "A well-drafted franchise agreement serves to protect the interests of both parties by clearly defining rights, obligations, and expectations, thereby minimizing potential disputes and ensuring the success of the franchise relationship."
    }
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

    const cityFromQuery = query?.replace('franchise-agreement-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages qatar-reg'>
            <Head>
                <title>Franchise Agreement</title>
                <meta name="description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
                <link rel="canonical" href="https://www.registerkaro.in/franchise-agreement" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Get Started with Company Registration in Qatar" />
                <meta property="og:description" content="Get your business up and running smoothly with our Qatar company registration services. This quick guide tells you which steps to take." />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>An Overview of Franchise Agreement</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h2 className='main-heading'>What is a Franchise Agreement?</h2>
            <div className='heading-line'></div>
            <WhatIs cityName={cityName} />
            <h2 className='main-heading'>Types of Franchise Agreements</h2>
            <div className='heading-line'></div>
            <Types cityName={cityName} />
            <h2 className='main-heading'>List of Documents required for Franchise Agreement:</h2>
            <div className='heading-line'></div>
            <DocumentRequired cityName={cityName} />
            <h2 className='main-heading'>Key Elements of a Franchise Agreement</h2>
            <div className='heading-line'></div>
            <KeyElements cityName={cityName} />
            <h2 className='main-heading'>How Franchise Agreements Work</h2>
            <div className='heading-line'></div>
            <ProcessCompany cityName={cityName} />
            <h2 className='main-heading'>Advantages of Franchise Agreement</h2>
            <div className='heading-line'></div>
            <Advantages cityName={cityName} />
            <h2 className='main-heading'>Various laws that govern a Franchise Agreement in {cityName}</h2>
            <div className='heading-line'></div>
            <Various cityName={cityName} />
            <h2 className='main-heading'>How RegisterKaro Can Assist You in the Franchise Agreement Process?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={cityName} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Franchise Agreement'} state={state} Query={'franchise-agreement'} city={city} />
        </div>
    )
}
export default Home