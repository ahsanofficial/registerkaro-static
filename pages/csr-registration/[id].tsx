import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../../components/static/csr-registration/DocumentRequired'
import FactsCsr from '../../components/static/csr-registration/FactsCsr'
import { Hero } from '../../components/static/csr-registration/Hero'
import { Process } from '../../components/static/csr-registration/Process'
import { WhyChoose } from '../../components/static/csr-registration/WhyChoose'
import ProcedureCsr from '../../components/static/csr-registration/ProcedureCsr'
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
        "question": "What’s the Purpose of CSR-1?",
        "answer": "As per the Companies (Corporate Social Responsibility Policy) Amendment Rules, 2021, a company has the option to carry out CSR initiatives either directly or through entities specified in Rule 4 sub rule (1). These companies/entities must register with the central government by submitting the e-form CSR-1 with the Registrar in order to engage in any CSR activities."
    },
    {
        "question": "How to apply for CSR funds in India?",
        "answer": "In order to request CSR funding in India, NGOs must adhere to these steps. Initially, collect all necessary paperwork for CSR-1 enrollment. Next, make sure to accurately complete the CSR-1 E-form from the MCA website and remember to attach any required certificates. Get certified by a Chartered Accountant, Company Secretary, or Cost & Management Accountant. Send the form through the MCA portal online and get a receipt containing a traceable SRN. Once the ROC verifies it, the NGO will receive a special CSR Registration Number which allows them to carry out CSR projects in India."
    },
    {
        "question": "How CSR-1 application is processed?",
        "answer": "The STP method is used to process the CSR-1 form for NGO registration. There is no need for any human involvement throughout the entire process."
    },
    {
        "question": "What’s the fees for CSR-1 registration?",
        "answer": "The fee we charge is specified in the upper part of this page. Currently, there is no specified government fee for the CSR-1 Filing."
    },
    {
        "question": "What happens once CSR registered?",
        "answer": "Upon successful completion of processing a CSR-1 form, the user will receive an email acknowledgement at the entity's email address. Additionally, the FO User will receive a digitally signed approval letter, along with the CSR Registration number in the format CSRXXXXXXXX, where X is a unique sequential number generated by the system. This information will also be sent to the email address provided in the eform."
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

    const cityFromQuery = query?.replace('csr-registration-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages qatar-reg'>
            <Head>
                <title>CSR Registration  | RegisterKaro</title>
                <meta name="description" content="The Ministry of Corporate Affairs, Government of India made the Companies Act, 2013 into law which was a major initiative in making CSR mandatory for companies by requiring them to engage in social welfare projects" />
                <link rel="canonical" href="https://www.registerkaro.in/csr-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="CSR Registration  | RegisterKaro" />
                <meta property="og:description" content="The Ministry of Corporate Affairs, Government of India made the Companies Act, 2013 into law which was a major initiative in making CSR mandatory for companies by requiring them to engage in social welfare projects" />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>Know About CSR Registration</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h2 className='main-heading'>Documents Required</h2>
            <div className='heading-line'></div>
            <DocumentRequired cityName={cityName} />
            <h2 className='main-heading'>Procedure to File CSR</h2>
            <div className='heading-line'></div>
            <ProcedureCsr cityName={cityName} />
            <h2 className='main-heading'>Facts About CSR</h2>
            <div className='heading-line'></div>
            <FactsCsr cityName={cityName} />
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
            <RegistrationLinks formattedQuery={'CSR Registration'} state={state} Query={'csr-registration'} city={city} />
        </div>
    )
}
export default Home