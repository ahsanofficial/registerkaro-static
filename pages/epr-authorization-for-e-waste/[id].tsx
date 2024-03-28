import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { BenefitsOfState } from '../../components/static/epr-authorization-for-e-waste/BenefitsOfState'
import DocumentsRequired from '../../components/static/epr-authorization-for-e-waste/DocumentsRequired'
import { Hero } from '../../components/static/epr-authorization-for-e-waste/Hero'
import { Process } from '../../components/static/epr-authorization-for-e-waste/Process'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import EWaste from '../../components/static/epr-authorization-for-e-waste/EWaste'
import { Registration } from '../../components/static/epr-authorization-for-e-waste/Registration'
import Renewal from '../../components/static/epr-authorization-for-e-waste/Renewal'
import { TypeOF } from '../../components/static/epr-authorization-for-e-waste/TypeOF'
import { WhatIs } from '../../components/static/epr-authorization-for-e-waste/WhatIs'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { CustomDefault } from '../../components/child_components/CustomDefault'

const faq = [
    {
        "question": "What is EPR authorization for e-waste?",
        "answer": "Extended Producer Responsibility (EPR) for e-waste involves making manufacturers responsible for the end-of-life disposal and management of electronic products they produce."
    },
    {
        "question": "Why is EPR authorization important for e-waste?",
        "answer": "It ensures that manufacturers take responsibility for the environmental impact of their products, recycling, and reducing the negative effects of e-waste on the environment."
    },
    {
        "question": "Who is responsible under EPR authorization?",
        "answer": "Manufacturers, producers, and sometimes retailers are typically responsible for complying with EPR regulations for e-waste in different jurisdictions."
    },
    {
        "question": "How does EPR authorization benefit the environment?",
        "answer": "It promotes proper recycling, reduces landfill waste, prevents hazardous materials from harming the environment, and encourages sustainable practices in managing electronic waste."
    },
    {
        "question": "What are the challenges in implementing EPR authorization for e-waste?",
        "answer": "Challenges can include setting up collection systems, ensuring compliance among producers, and establishing effective recycling infrastructures."
    },
    {
        "question": "Does EPR authorization vary by region?",
        "answer": "Yes, regulations and requirements for EPR authorization can differ significantly based on the country, state, or local laws governing e-waste management."
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

    const cityFromQuery = query?.replace('epr-authorization-for-e-waste-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages epr-authorization-for-e-waste'>
           <Head>
                <title> Get Online EPR Authorization for E-Waste in {cityName} | RegisterKaro</title>
                <meta name="description" content="EPR Authorization for e-waste involves making manufactures liable for the end of life disposal & management of electronic items they produce." />
                <link rel="canonical" href="https://www.registerkaro.in/epr-authorization-for-e-waste" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Get Online EPR Authorization for E-Waste in India | RegisterKaro" />
                <meta property="og:description" content="EPR Authorization for e-waste involves making manufactures liable for the end of life disposal & management of electronic items they produce." />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>Get EPR Authorization for E-Waste Online</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h2 className='main-heading'>What is E-Waste?</h2>
            <div className='heading-line'></div>
            <WhatIs cityName={cityName}/>
            <h2 className='main-heading'>Types of E-Waste</h2>
            <div className='heading-line'></div>
            <TypeOF cityName={cityName}/>
            <h2 className='main-heading'>E-waste Management Rules 2022</h2>
            <div className='heading-line'></div>
            <EWaste cityName={cityName}/>
            <h2 className='main-heading'>Documents Required for EPR Authorisation for E-waste</h2>
            <div className='heading-line'></div>
            <DocumentsRequired cityName={cityName}/>
            <h2 className='main-heading'>Registration process for E-Waste EPR Authorisation</h2>
            <div className='heading-line'></div>
            <Registration cityName={cityName}/>
            <h2 className='main-heading'>Renewal of EPR Authorisation</h2>
            <div className='heading-line'></div>
            <Renewal cityName={cityName}/>
            <h2 className='main-heading'>Benefits of EPR Registration for e-waste</h2>
            <div className='heading-line'></div>
            <BenefitsOfState cityName={cityName}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Get Online EPR Authorization for E-Waste in India'} state={state} Query={'epr-authorization-for-e-waste'} city={city} />
        </div>
    )
}
export default Home