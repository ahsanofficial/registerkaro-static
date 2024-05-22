import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/bee-registration/Hero'
import { Process } from '../../components/static/bee-registration/Process'
import { WhyChoose } from '../../components/static/bee-registration/WhyChoose'
import { WhatisBee } from '../../components/static/bee-registration/WhatisBee'
import { WhoNeedsBee } from '../../components/static/bee-registration/WhoNeedsBee'
import { Classification } from '../../components/static/bee-registration/Classification'
import { DocumentsRequired } from '../../components/static/bee-registration/DocumentsRequired'
import { FeesRequired } from '../../components/static/bee-registration/FeesRequired'
import { WhyNeedBee } from '../../components/static/bee-registration/WhyNeedBee'
import { BenefitsBee } from '../../components/static/bee-registration/BenefitsBee'
import { Penalty } from '../../components/static/bee-registration/Penalty'
import { Renewal } from '../../components/static/bee-registration/Renewal'
import { Withdrawal } from '../../components/static/bee-registration/Withdrawal'
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
        "question": "How long is the BEE license valid?",
        "answer": "The duration of the present labeling for that specific product category determines the validity of the BEE registration. For instance, the present labeling period for variable air conditioners runs from January 1, 2022, to December 31, 2024. The applicant must, before the labeling period expires, either renew or degrade its registered model under the next labeling period."
    },
    {
        "question": "How much does a typical registration cost?",
        "answer": "The model registration fee, which is Rs. 2,000 per model under the BEE star labeling program, must be paid electronically to the relevant government at the time of model registration."
    },
    {
        "question": "What is the star model? ",
        "answer": "A star label on a product serves as an energy efficiency guide for the end user before they buy a product in India. It provides multiple criteria to compare between 2 similar products but different energy efficiency."
    },
    {
        "question": "How many Voluntary products are under the scope of BEE?",
        "answer": "As of February 2022, there are 19 different products under the scope of the BEE's voluntary registration scheme, including tires and lithium-ion batteries."
    },
    {
        "question": "Who can apply for BEE Certification?",
        "answer": "Only the manufacturer, importer, or trader can apply for the license under the BEE's star labeling scheme."
    },
    {
        "question": "How long does it take to get a BEE registration?",
        "answer": "Generally, the BEE takes 4-5 weeks to approve business registration and 4-5 weeks to approve model registration."
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

    const cityFromQuery = query?.replace('bee-registration-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages bee-registration'>
            <Head>
                <title>BEE Registration | RegisterKaro</title>
                <meta name="description" content="Unlock Opportunities! Register Your Business with BEE Today! Become Empowered through BEE Compliance. Maximize Growth Potential. Register Now with RegisterKaro!" />
                <link rel="canonical" href="https://www.registerkaro.in/bee-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="BEE Registration | RegisterKaro" />
                <meta property="og:description" content="Unlock Opportunities! Register Your Business with BEE Today! Become Empowered through BEE Compliance. Maximize Growth Potential. Register Now with RegisterKaro!" />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>Overview on BEE Registration in {cityName}</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h2 className='main-heading'>What is BEE Certification?</h2>
            <div className='heading-line'></div>
            <WhatisBee cityName={cityName} />
            <h2 className='main-heading'>Who needs a BEE Certificate?</h2>
            <div className='heading-line'></div>
            <WhoNeedsBee cityName={cityName} />
            <h2 className='main-heading'>Classification of BEE Certification</h2>
            <div className='heading-line'></div>
            <Classification cityName={cityName} />
            <h2 className='main-heading'>Documents required for the BEE Registration</h2>
            <div className='heading-line'></div>
            <DocumentsRequired cityName={cityName} />
            <h2 className='main-heading'>Fees required for BEE Registration</h2>
            <div className='heading-line'></div>
            <FeesRequired cityName={cityName} />
            <h2 className='main-heading'>Why do we need a BEE Certificate?</h2>
            <div className='heading-line'></div>
            <WhyNeedBee cityName={cityName} />
            <h2 className='main-heading'>Benefits of BEE registration</h2>
            <div className='heading-line'></div>
            <BenefitsBee cityName={cityName} />
            <h2 className='main-heading'>Penalty for Non- compliance with BEE guidelines</h2>
            <div className='heading-line'></div>
            <Penalty cityName={cityName} />
            <h2 className='main-heading'>Renewal of BEE Certificate</h2>
            <div className='heading-line'></div>
            <Renewal cityName={cityName} />
            <h2 className='main-heading'>Withdrawal of BEE Certificate by manufacturer</h2>
            <div className='heading-line'></div>
            <Withdrawal cityName={cityName} />
            <h2 className='main-heading'>How RegisterKaro helps in the registration process?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={cityName} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'BEE Registration'} state={state} Query={'bee-registration'} city={city} />
        </div>
    )
}
export default Home
