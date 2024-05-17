import Head from 'next/head';
import React, { useEffect } from 'react'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT';
import {Hero} from '../../components/static/international-trademark-registration/Hero';
import {Process} from '../../components/static/international-trademark-registration/Process';
import {WhyChoose} from '../../components/static/international-trademark-registration/WhyChoose';
import {WIPO} from '../../components/static/international-trademark-registration/WIPO';
import {MadridProtocol} from '../../components/static/international-trademark-registration/MadridProtocol';
import {CheckIfCanApply} from '../../components/static/international-trademark-registration/CheckIfCanApply';
import {RequirementsToFulfil} from '../../components/static/international-trademark-registration/RequirementsToFulfil';
import {ProcessOfRegn} from '../../components/static/international-trademark-registration/ProcessOfRegn';
import {HowRegisterKaroHelps} from '../../components/static/international-trademark-registration/HowRegisterKaroHelps';

import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro';
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks';
import { useRouter } from 'next/router';
import { CustomDefault } from '../../components/child_components/CustomDefault';
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
        "question": "How can I register a trademark internationally?",
        "answer": "To register your Trademark Internationally, you need to follow the given steps: Trade Research < submit the application with the Indian registry for Trademark < application verification by registry < application verification by WIPO < trademark opposition/ objection < Trademark Certificate."
    },
    {
        "question": "How much does an international trademark cost?",
        "answer": "The price to file for an international trademark varies according to the nation or area where you file, usually between $3,000 and $5,000. Additionally, there is an annual maintenance charge of $500 or so."
    },
    {
        "question": "Is the Indian Trademark valid worldwide?",
        "answer": "The Indian trademark is not valid worldwide, although it has been registered for the Indian domain. If you want your Trademark to be valid worldwide, you should register it as an International Trademark under a special registration process."
    },
    {
        "question": "How do I check an international trademark?",
        "answer": "You may check the International Trademark through different countries’ portals such as the United States Patent and Trademark Office (USPTO)’s Trademark Electronic Search System, the European Union Intellectual Property Office (EUIPO)’s eSearch Plus, United Kingdom Intellectual Property Office (IPO)’s Trademark Search, etc."
    },
    {
        "question": "What are the benefits of international trademark registration?",
        "answer": "There are various benefits of International Trademark Registration, such as International Recognition, global market access, Universal Legal Protection, etc."
    },
    {
        "question": "How can I get an international Trademark in India?",
        "answer": "To register your Trademark Internationally while being in India, you need to follow the given steps: Trade Research < submit the application with the Indian registry for Trademark < application verification by registry < application verification by WIPO < trademark opposition/ objection < Trademark Certificate."
    },
    {
        "question": "Can I use a trademark registered in another country?",
        "answer": "Yes, you can use your Trademark in another country if your Trademark is Internationally Registered. In that regard, you may use the Trademark in countries that are signatories to the Madrid Protocol."
    },
    {
        "question": "Should I get an international trademark?",
        "answer": "If you have International Business Practice, and your business serves in different countries, you must surely get an International Trademark."
    },
    {
        "question": "Is India part of the Madrid Protocol?",
        "answer": "Yes, India is a signatory to the Madrid Protocol by becoming the 90th Member. This means that any trademark registered under any country party to the Madrid Protocol will also be recognized in India."
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

    const cityFromQuery = query?.replace('international-trademark-registration-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }
  return (
    <div className='services-pages international-tm-reg'>
        <Head>
            <title>International Trademark Registration | RegisterKaro</title>
            <meta name="description" content="International trademark registration offers legal protection to the applicant in many different countries at once." />
            <link rel="canonical" href="https://www.registerkaro.in/company-valuation-startups" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="International Trademark Registration | RegisterKaro" />
            <meta property="og:description" content="International trademark registration offers legal protection to the applicant in many different countries at once." />
        </Head>
        <Hero cityName={cityName}/>
        <h1 className="main-heading">What is International Trademark Registration?</h1>
        <div className='heading-line'></div>
        <Process cityName={cityName}/>
        <h2 className="main-heading">Why choose International Trademark Registration?</h2>
        <div className='heading-line'></div>
        <WhyChoose cityName={cityName}/>
        <h2 className="main-heading">WIPO & International Trademark Registration</h2>
        <div className='heading-line'></div>
        <WIPO cityName={cityName}/>
        <h2 className="main-heading">Madrid Protocol & Madrid Agreement</h2>
        <div className='heading-line'></div>
        <MadridProtocol cityName={cityName}/>
        <h2 className="main-heading">Check if you can apply for the International Trademark Registration</h2>
        <div className='heading-line'></div>
        <CheckIfCanApply cityName={cityName}/>
        <h2 className="main-heading">Requirements to be fulfilled for International Trademark Registration</h2>
        <div className='heading-line'></div>
        <RequirementsToFulfil cityName={cityName}/>
        <h2 className="main-heading">Process of International Trademark Registration</h2>
        <div className='heading-line'></div>
        <ProcessOfRegn cityName={cityName}/>
        <h2 className="main-heading">How RegisterKaro helps you with the International Trademark Registration?</h2>
        <div className='heading-line'></div>
        <HowRegisterKaroHelps/>
        <h2 className="main-heading">Why RegisterKaro?</h2>
        <div className='heading-line'></div>
        <WhyRegisterkaro />
        <h2 className="main-heading">FAQs</h2>
        <div className='heading-line'></div>
        <FaqTemplatePVT faqItems={faq} />
        <div className='mb-4'></div>
        <RegistrationLinks formattedQuery={'International Trademark Registration'} state={state} Query={'international-trademark-registration'} city={city} />
    </div>
  )
}

export default Home;
