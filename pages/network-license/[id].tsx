import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Benefits } from '../../components/static/network-license/Benefits'
import { DocumentRequired } from '../../components/static/network-license/DocumentRequired'
import Eligibility from '../../components/static/network-license/Eligibility'
import { Hero } from '../../components/static/network-license/Hero'
import { Process } from '../../components/static/network-license/Process'
import { ProcessCompany } from '../../components/static/network-license/ProcessCompany'
import ProcessObtain from '../../components/static/network-license/ProcessObtain'
import WhatIs from '../../components/static/network-license/WhatIs'
import { WhyChoose } from '../../components/static/network-license/WhyChoose'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { CustomDefault } from '../../components/child_components/CustomDefault'

const faq = [
    {
        "question": "What is a network license registration?",
        "answer": "Network license registration is a process through which multiple users can access software or services within a network using a single license."
    },
    {
        "question": "How does network license registration differ from individual licenses?",
        "answer": "Network license registration allows multiple users to share a single license, while individual licenses are typically assigned to one user."
    },
    {
        "question": "What are the advantages of network license registration?",
        "answer": "Network license registration offers cost-effectiveness, centralized management, and scalability for businesses with multiple users."
    },
    {
        "question": "Can network license registration be customized to fit the needs of my business?",
        "answer": "Yes, network license registration can be tailored to accommodate your organization's specific requirements and size."
    },
    {
        "question": "What steps are involved in the network license registration process?",
        "answer": "The network license registration process typically involves purchasing the appropriate license, installing the license server, and configuring user access."
    },
    {
        "question": "Are there any compliance considerations to be aware of during network license registration?",
        "answer": "Yes, it's important to ensure that your network license registration complies with the terms and conditions set forth by the software provider and any relevant regulatory requirements."
    },
    {
        "question": "How can I monitor and manage network license usage?",
        "answer": "Network license registration often includes tools for monitoring usage, managing permissions, and generating usage reports to optimize license allocation."
    },
    {
        "question": "Can network license registration be upgraded or expanded as my business grows?",
        "answer": "Yes, network license registration solutions are designed to be scalable, allowing for easy upgrades or expansions to accommodate your business's evolving needs."
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
  
    const cityFromQuery = query?.replace('network-license-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }
  
    return (
        <div className='services-pages '>
            <Head>
                <title>Network License | Registerkaro</title>
                <meta name="description" content="Effortless License Management with RegisterKaro by Simplifying Licensing, Amplifying Success!" />
                <link rel="canonical" href="https://www.registerkaro.in/network-license" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Network License | Registerkaro" />
                <meta property="og:description" content="Effortless License Management with RegisterKaro by Simplifying Licensing, Amplifying Success!" />
            </Head>
            <Hero cityName={cityName}  />
            <h1 className='main-heading'>An Overview of Network License</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName}  />
            <h2 className='main-heading'>What is a Network License?</h2>
            <div className='heading-line'></div>
            <WhatIs cityName={cityName}  />
            <h2 className='main-heading'>Eligibility Criteria for Network License in {cityName}</h2>
            <div className='heading-line'></div>
            <Eligibility cityName={cityName}  />
            <h2 className='main-heading'>Documents required for the Network License in {cityName}</h2>
            <div className='heading-line'></div>
            <DocumentRequired cityName={cityName}  />
            <h2 className='main-heading'>Process to Obtain Network License</h2>
            <div className='heading-line'></div>
            <ProcessObtain cityName={cityName}  />
            <h2 className='main-heading'>Network licensing offers four main benefits:</h2>
            <div className='heading-line'></div>
            <Benefits cityName={cityName}  />
            <h2 className='main-heading'>Stepwise Process for Setting up Network Licensing:</h2>
            <div className='heading-line'></div>
            <ProcessCompany cityName={cityName}  />
            <h2 className='main-heading'>How RegisterKaro Can Assist You in the Network Licensing Process?</h2>
            <div className='heading-line'></div>
            <WhyChoose  cityName={cityName}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Network License'} state={state} Query={'network-license'} city={city} />
        </div>
    )
}
export default Home