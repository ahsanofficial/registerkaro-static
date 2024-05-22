import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/spice-board-registration/Hero'
import { Process } from '../../components/static/spice-board-registration/Process'
import { WhyChoose } from '../../components/static/spice-board-registration/WhyChoose'
import { WhyBeneficial } from '../../components/static/spice-board-registration/WhyBeneficial'
import { DocumentsRequired } from '../../components/static/spice-board-registration/DocumentsRequired'
import { HowRegister } from '../../components/static/spice-board-registration/HowRegister'
import { ListOfSpices } from '../../components/static/spice-board-registration/ListOfSpices'
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
        "question": "What’s the certification required for Export of Spices?",
        "answer": "When exporting or importing spices/spice products, having a Certificate of Registration as an Exporter of Spices from the Board is required along with an Importer Exporter Code (IEC). The Spices Board grants Certificate of Registration as Exporter of Spices [CRES] in accordance with Section 11 of the Spices Board Act."
    },
    {
        "question": "What’s the Role of Spice Board?",
        "answer": "The main role of the Board involves the growth of both small and large cardamom, advertising, growth, oversight of spice exports, and ensuring quality of exported spices. The Indian Cardamom Research Institute also conducts research on both small and large cardamom varieties, in collaboration with the Spices Board."
    },
    {
        "question": " What’s Spice Board?",
        "answer": "Spices Board, under the Ministry of Commerce and Industry, Government of India, is the leading body dedicated to promoting and advancing Indian spices globally. The Board acts as a global connection between Indian exporters and foreign importers."
    },
    {
        "question": "Where’s the headquarter of Spice Board of India?",
        "answer": "The headquarters of the board is located in Kochi, Kerala. The brand 'Flavourit' sells spices. The Spices Board of India has launched an online initiative named the Spice Train to inform Indians about the nation's extensive spice history."
    },
    {
        "question": "What’s the duration of Spice Board Certificate?",
        "answer": "The Exporter of Spices (CRES) Certificate of Registration stays legitimate for a duration of three years. In order to renew the Certificate, the person must complete Form-1 and pay the required fee to the appropriate authority."
    },
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

    const cityFromQuery = query?.replace('spice-board-registration-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages spice-board-registration'>
            <Head>
                <title>Spice Board Registration | RegisterKaro</title>
                <meta name="description" content="Spices Board was established on 26th February 1987 as per the Spices Board Act 1986 (No. 10 of 1986) by merging the former Cardamom Board (1968) and Spices Export Promotion Council (1960). Spices Board operates as one of the five Commodity Boards that operate under the Ministry of Commerce & Industry. It is a self-governing organization in charge of promoting the export of the 52 specified spices and advancing Cardamom (Small & Large) growth." />
                <link rel="canonical" href="https://www.registerkaro.in/spice-board-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Spice Board Registration | RegisterKaro" />
                <meta property="og:description" content="Spices Board was established on 26th February 1987 as per the Spices Board Act 1986 (No. 10 of 1986) by merging the former Cardamom Board (1968) and Spices Export Promotion Council (1960). Spices Board operates as one of the five Commodity Boards that operate under the Ministry of Commerce & Industry. It is a self-governing organization in charge of promoting the export of the 52 specified spices and advancing Cardamom (Small & Large) growth." />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>Spice Board Registration</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h2 className='main-heading'>Why it’s Beneficial?</h2>
            <div className='heading-line'></div>
            <WhyBeneficial cityName={cityName} />
            <h2 className='main-heading'>Documents Required</h2>
            <div className='heading-line'></div>
            <DocumentsRequired cityName={cityName} />
            <h2 className='main-heading'>How To Register?</h2>
            <div className='heading-line'></div>
            <HowRegister cityName={cityName} />
            <h2 className='main-heading'>List Of Spices for Registration</h2>
            <div className='heading-line'></div>
            <ListOfSpices cityName={cityName} />
            <h2 className='main-heading'>How RegisterKaro helps you in the Registration process?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={cityName} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Spice Board Registration'} state={state} Query={'spice-board-registration'} city={city} />
        </div>
    )
}
export default Home
