import React, { useEffect } from 'react'
import Head from 'next/head'
import { Hero } from '../../components/static/society/Hero'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Process } from '../../components/static/society/Process'
import { Purpose } from '../../components/static/society/Purpose'
import { Registration } from '../../components/static/society/Registration'
import { SelectionHead } from '../../components/static/society/SelectionHead'
import { SelectionName } from '../../components/static/society/SelectionName'
import { Memorandum } from '../../components/static/society/Memorandum'
import { HowToRegister } from '../../components/static/society/HowToRegister'
import { Renewal } from '../../components/static/society/Renewal'
import { RenewSociety } from '../../components/static/society/RenewSociety'
import { Dissolution } from '../../components/static/society/Dissolution'
import { UnderstandProcess } from '../../components/static/society/UnderstandProcess'
import { WhySocietyRegi } from '../../components/static/society/WhySocietyRegi'
import { DocumentRequired } from '../../components/static/society/DocumentRequired'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { CustomDefault } from '../../components/child_components/CustomDefault'
import { useRouter } from 'next/router'

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

let faq = [
    {
        "question": "How many members required for society registration in Delhi?",
        "answer": "There is minimum seven-member requirement for establishing the board for the society where the maximum limit has no cap. Board is the governing body for regulating the operations of the Society."
    },
    {
        "question": "Who can register a society in India?",
        "answer": "Any Individual [Indian or foreigner], company, or any other society is eligible to register for the society under the Indian Legislation. Therefore, they can register themselves in to the Memorandum of Association as its member."
    },
    {
        "question": "What is the cost of society registration in India?",
        "answer": "Society registration cost in India varies from Rs 15000 to Rs 25000 varying from state to state."
    },
    {
        "question": "What is the minimum number of members in a society?",
        "answer": "There is minimum seven-member requirement for establishing the board for the society where the maximum limit has no cap. Board is the governing body for regulating the operations of the Society."
    },
    {
        "question": "Can family members be members of society?",
        "answer": "Yes, family members from a single family can also be the member to the society. The main purpose of having the members on board is the establishment of the governing or regulating body for the operations of the society."
    },
    {
        "question": "What are the benefits of registering society?",
        "answer": "There are many benefits if you proceed with Society Registration which includes trust and reliability establishment, enjoyment of benefits and tax exemption offered by the government, legal status, limited liability, etc."
    },
    {
        "question": "What are the society rules?",
        "answer": "Society Rules includes the By-laws of the society and Memorandum of Association. By-laws are set of rules that set forth the operations and functioning of the society whereas the MoA is the set of rules defining the role, duty, and obligations of the Board Members which defines their hold on the society as well."
    },
    {
        "question": "How to create a society?",
        "answer": "Society can be created by anyone, by brining set of people together for the establishment of a board in furtherance of an objective which must be in relation to the welfare of the society. The society can be both registered and unregistered."
    },
    {
        "question": "What are the steps for registering a society in India?",
        "answer": "For the successful society registration, you need to follow the given step-by-step process  Step 1. The first step begins with compilation and preparation of the paperwork including Members’ identification related documents [PAN, Aadhar Card, residency proof, affidavit] Step 2. Selection of the Society Name and then you need to verify the name with the government portal for its availability. [click here to search] Step 3. Drafting of Memorandum of Association & By-laws laying down the role and function of the members in the society, and the operation of the society Step 4. Fill in the application form for registration Step 5. Application will now be subject to assessment and verification. Once the verification process is completed, either your application will be rejected where you will have to file the application again with the correction or it will be approved. On the approval, your certification for society registration will be approved to you."
    },
    {
        "question": "Who can be a member of society?",
        "answer": "Any Individual [Indian or foreigner], company, or any other society is eligible to register for the society under the Indian Legislation. Therefore, they can register themselves in to the Memorandum of Association as its member."
    },
    {
        "question": "Can a society register for GST?",
        "answer": "According to the Indian Legislation, Society falls under the exemption list of the GST. Therefore, you do not have to register your Society for GST."
    },
    {
        "question": "What is the checklist for registration of society?",
        "answer": "All you need for registration of the society includes: PAN off the members, Aadhar card, passport size photos, MoA, By-laws, affidavit signed by the members, self-declaration by the president of the society, utility bills for address proof of the office."
    },
    {
        "question": "Is society registration mandatory in India?",
        "answer": "Society registration is not mandatory in India. You are allowed to run even an unregistered society. However, you will not be able to avail"
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

    const cityFromQuery = query?.replace('society-registration-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages society-reg'>
            <Head>
                <title>Society Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> */}
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>Get Online Society Registration in {cityName}</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h1 className='main-heading'>Purpose of Society Registration</h1>
            <div className='heading-line'></div>
            <Purpose cityName={cityName} />
            <h1 className='main-heading'>Registration of a Society In {cityName}</h1>
            <div className='heading-line'></div>
            <Registration cityName={cityName} />
            <h1 className='main-heading'>Selection of a Name and Memorandum of Association</h1>
            <div className='heading-line'></div>
            <SelectionHead cityName={cityName}/>
            <h2 className='main-heading'>Selection of Name</h2>
            <div className='heading-line'></div>
            <SelectionName cityName={cityName} />
            <h1 className='main-heading'>Memorandum of Association</h1>
            <div className='heading-line'></div>
            <Memorandum cityName={cityName} />
            <h1 className='main-heading'>Why to go for Society Registration?</h1>
            <div className='heading-line'></div>
            <WhySocietyRegi cityName={cityName} />
            <h1 className='main-heading'>Documents you will need for Society Registration</h1>
            <div className='heading-line'></div>
            <DocumentRequired cityName={cityName} />
            <h1 className='main-heading'>Understand the Process for Society Registration</h1>
            <div className='heading-line'></div>
            <UnderstandProcess cityName={cityName} />
            <h1 className='main-heading'>Dissolution of a registered Society</h1>
            <div className='heading-line'></div>
            <Dissolution cityName={cityName} />
            <h1 className='main-heading'>When to Renew Society Registration Certificate in {cityName}?</h1>
            <div className='heading-line'></div>
            <RenewSociety cityName={cityName} />
            <h1 className='main-heading'>Renewal Process for Society Registration Certificate</h1>
            <div className='heading-line'></div>
            <Renewal cityName={cityName} />
            <h1 className='main-heading'>How RegisterKaro assist you with Society Registration?</h1>
            <div className='heading-line'></div>
            <HowToRegister cityName={cityName} />
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Society Registration'} state={state} Query={'society-registration'} city={city} />
        </div>
    )
}
export default Home