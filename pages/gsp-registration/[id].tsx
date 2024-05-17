import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { WhatIsGSP } from '../../components/static/gsp-registration/WhatIsGSP'
import { Hero } from '../../components/static/gsp-registration/Hero'
import { Process } from '../../components/static/gsp-registration/Process'
import { WhyChoose } from '../../components/static/gsp-registration/WhyChoose'
import { WhoIssues } from '../../components/static/gsp-registration/WhoIssues'
import { Cumulation } from '../../components/static/gsp-registration/Cumulation'
import { RegionalCumulation } from '../../components/static/gsp-registration/RegionalCumulation'
import { RegionalCumulationGroups } from '../../components/static/gsp-registration/RegionalCumulationGroups'
import { Procedure } from '../../components/static/gsp-registration/Procedure'
import { DocumentRequired } from '../../components/static/gsp-registration/DocumentRequired'
import { Benefits } from '../../components/static/gsp-registration/Benefits'
import { DifferenceGSPnUsual } from '../../components/static/gsp-registration/DifferenceGSPnUsual'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { CustomDefault } from '../../components/child_components/CustomDefault'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const faq = [
    {
        "question": "What is GSP registration?",
        "answer": "GSP registration allows eligible exporters to access preferential tariff treatment for their products in certain markets."
    },
    {
        "question": "Is GSP registration mandatory for all exporters?",
        "answer": "No, GSP registration is voluntary and depends on whether exporters want to avail themselves of preferential tariff benefits."
    },
    {
        "question": "Are all products eligible for GSP benefits?",
        "answer": "No, only products originating from beneficiary countries and meeting the rules of origin criteria qualify for GSP benefits."
    },
    {
        "question": "Is there a specific application process for GSP registration?",
        "answer": "Yes, exporters need to apply through the designated platform provided by the relevant authorities."
    },
    {
        "question": "Can any exporting company apply for GSP registration?",
        "answer": "Yes, as long as the company's products meet the eligibility criteria for GSP benefits."
    },
    {
        "question": "Is there a fee associated with GSP registration?",
        "answer": "No, GSP registration typically does not involve any fees."
    },
    {
        "question": "Are there any ongoing compliance requirements after obtaining GSP registration?",
        "answer": "Yes, exporters must ensure continued adherence to rules of origin and other regulatory requirements."
    },
    {
        "question": "Does GSP registration guarantee preferential treatment in all beneficiary countries?",
        "answer": "No, GSP benefits vary by country, and exporters must check the specific requirements of each market."
    },
    {
        "question": "Is GSP registration a one-time process?",
        "answer": "No, exporters may need to renew their GSP registration periodically, depending on the regulations of the importing country."
    },
    {
        "question": "Can GSP registration be revoked?",
        "answer": "Yes, if exporters fail to comply with ongoing regulatory requirements, their GSP registration may be revoked."
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
  
    const cityFromQuery = query?.replace('gsp-registration-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }
  
    return (
        <div className='services-pages gsp-registration'>
            <Head>
                <title>GSP Registration (Generalised System of Preference)</title>
                <meta name="description" content="Attention Exporters! Unlock unparalleled opportunities in global trade with GSP Registration through RegisterKaro." />
                <link rel="canonical" href="https://www.registerkaro.in/gsp-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="GSP Registration (Generalised System of Preference)" />
                <meta property="og:description" content="Attention Exporters! Unlock unparalleled opportunities in global trade with GSP Registration through RegisterKaro." />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>Introduction to GSP</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h2 className='main-heading'>What is GSP?</h2>
            <div className='heading-line'></div>
            <WhatIsGSP cityName={cityName} />
            <h2 className='main-heading'>Who issues GSP Certificate of Origin in {cityName}?</h2>
            <div className='heading-line'></div>
            <WhoIssues cityName={cityName} />
            <h2 className='main-heading'>Cumulation</h2>
            <div className='heading-line'></div>
            <Cumulation cityName={cityName} />
            <h2 className='main-heading'>Regional cumulation of origin</h2>
            <div className='heading-line'></div>
            <RegionalCumulation cityName={cityName}/>
            <RegionalCumulationGroups cityName={cityName} />
            <h2 className='main-heading'>Procedure for online application</h2>
            <div className='heading-line'></div>
            <Procedure cityName={cityName} />
            <h2 className='main-heading'>Documents Required for GSP</h2>
            <div className='heading-line'></div>
            <DocumentRequired cityName={cityName} />
            <h2 className='main-heading'>Benefits of GSP</h2>
            <div className='heading-line'></div>
            <Benefits cityName={cityName} />
            <h2 className='main-heading'>Difference between GSP and the Usual Trade Law</h2>
            <div className='heading-line'></div>
            <DifferenceGSPnUsual cityName={cityName} />
            <h2 className='main-heading'>How RegisterKaro Can Assist You in the GSP Registration Process?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={cityName}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'GSP Registration'} state={state} Query={'gsp-registration'} city={city} />
            
        </div>
    )
}
export default Home
