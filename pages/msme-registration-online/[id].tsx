import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { BenefitsMSME } from '../../components/static/msme-registration-online/BenefitsMSME'
import { Hero } from '../../components/static/msme-registration-online/Hero'
import { NoFee } from '../../components/static/msme-registration-online/NoFee'
import { Process } from '../../components/static/msme-registration-online/Process'
import { ProcessMSME } from '../../components/static/msme-registration-online/ProcessMSME'
import { SupportingDocuments } from '../../components/static/msme-registration-online/SupportingDocuments'
import { TableCom } from '../../components/static/msme-registration-online/TableCom'
import { TypeBusiness } from '../../components/static/msme-registration-online/TypeBusiness'
import { UdyamDiffrence } from '../../components/static/msme-registration-online/UdyamDiffrence'
import { UdyamRegistration } from '../../components/static/msme-registration-online/UdyamRegistration'
import { WhatMSME } from '../../components/static/msme-registration-online/WhatMSME'
import { WhichEntities } from '../../components/static/msme-registration-online/WhichEntities'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { CustomDefault } from '../../components/child_components/CustomDefault'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

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
        "question": "What is MSME registration?",
        "answer": "It is a government initiative to classify and register Micro, Small, and Medium Enterprises, providing them with various benefits and support."
    },
    {
        "question": "Who can apply for MSME registration online?",
        "answer": "Any business falling under the Micro, Small, or Medium category can apply for registration online."
    },
    {
        "question": "How can I initiate the MSME registration process?",
        "answer": "Visit the official MSME registration portal and fill in the required details in the online registration form."
    },
    {
        "question": "What documents are needed for the registration online?",
        "answer": "Generally, you need documents like Aadhar card, business address proof, and details of the business activities."
    },
    {
        "question": "Is there a fee for MSME registration online?",
        "answer": "No, the registration process is usually free of charge."
    },
    {
        "question": "Can existing businesses apply for the registration of MSME online?",
        "answer": "Yes, both new and existing businesses can apply for the Registration of MSME online."
    },
    {
        "question": "How long does it take to get MSME registration after applying online?",
        "answer": "The registration process typically takes a few working days, but it may vary."
    },
    {
        "question": "What benefits does MSME registration offer?",
        "answer": "Benefits include easier access to credit, subsidies, and various government schemes designed to support small and medium enterprises."
    },
    {
        "question": "Can MSME registration details be updated online?",
        "answer": "Yes, you can update your registration details online by revisiting the official portal."
    },
    {
        "question": "Is MSME registration mandatory for businesses?",
        "answer": "While it’s not mandatory, but the registration is beneficial as it opens doors to numerous advantages for the business."
    },
    {
        "question": "Can a business register as both an MSME and a startup?",
        "answer": "Yes, a business can register as both an MSME and a startup, as these registrations serve different purposes."
    },
    {
        "question": "Is there a renewal process for MSME registration?",
        "answer": "No, MSME registration does not require periodic renewal."
    },
    {
        "question": "Can I check the status of my MSME registration application online?",
        "answer": "Yes, you can track the status of your registration application on the official portal."
    },
    {
        "question": "Can an MSME registration be canceled?",
        "answer": "Yes, in certain cases, registration can be canceled. However, it’s essential to understand the reasons and implications."
    },
    {
        "question": "Can a business have multiple MSME registrations?",
        "answer": "No, a business entity is generally allowed only one MSME registration."
    },
    {
        "question": "Is MSME registration available for service-based businesses?",
        "answer": "Yes, this registration is open to both manufacturing and service-oriented businesses, providing benefits to a wide range of sectors."
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

    const cityFromQuery = query?.replace('msme-registration-online-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages msme-registration-reg'>
            <Head>
                <title>MSME Registration Online  | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> */}
            </Head>
            <Hero cityName={cityName}/>
            <h1 className='main-heading'>Get MSME Registration Online in { cityName }</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h1 className='main-heading'>What are MSMEs?</h1>
            <div className='heading-line'></div>
            <WhatMSME cityName={cityName}/> 
            <h1 className='main-heading'>What type of business comes under MSME? </h1>
            <div className='heading-line'></div>
            <TypeBusiness cityName={cityName}/> 
            <h1 className='main-heading'>MSME Classification</h1>
            <div className='heading-line'></div>
            <TableCom cityName={cityName}/>
            <h1 className='main-heading'>Benefits of MSME Registration Online</h1>
            <div className='heading-line'></div>
            <BenefitsMSME cityName={cityName}/>
            <h1 className='main-heading'>What is Udyam Registration?</h1>
            <div className='heading-line'></div>
            <UdyamRegistration cityName={cityName}/> 
            <h1 className='main-heading'>What is the difference between MSME and Udyam Registration?</h1>
            <div className='heading-line'></div>
            <UdyamDiffrence cityName={cityName}/>  
            <h1 className='main-heading'>Which Entities are eligible for MSME Online?</h1>
            <div className='heading-line'></div>
            <WhichEntities cityName={cityName}/>
            <h1 className='main-heading'>Supporting Documents Required for MSME Registration Online</h1>
            <div className='heading-line'></div>
            <SupportingDocuments cityName={cityName}/>  
            <h1 className='main-heading'>Process for MSME Registration Online</h1>
            <div className='heading-line'></div>
            <ProcessMSME cityName={cityName}/>
            <h1 className='main-heading'>No Fee for Registration</h1>
            <div className='heading-line'></div>
            <NoFee cityName={cityName}/> 
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro  />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT  faqItems={faq} />
            <RegistrationLinks formattedQuery={'MSME Registration Online '} state={state} Query={'msme-registration-online'} city={city} />
        </div>
    )
}
export default Home