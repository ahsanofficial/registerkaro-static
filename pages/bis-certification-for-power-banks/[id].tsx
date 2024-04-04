import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/bis-certification-for-power-banks/Hero'
import { Process } from '../../components/static/bis-certification-for-power-banks/Process'
import Applicable from '../../components/static/bis-certification-for-power-banks/Applicable'
import Eligibility  from '../../components/static/bis-certification-for-power-banks/Eligibility'
import Description from '../../components/static/bis-certification-for-power-banks/Description'
import Types from '../../components/static/bis-certification-for-power-banks/Types'
import DocumentsRequired from '../../components/static/bis-certification-for-power-banks/DocumentsRequired'
import {Procedure} from '../../components/static/bis-certification-for-power-banks/Procedure'
import Cancellation from '../../components/static/bis-certification-for-power-banks/Cancellation'
import Revocation from '../../components/static/bis-certification-for-power-banks/Revocation'
import Mandatory from '../../components/static/bis-certification-for-power-banks/Mandatory'
import WhyRegisterKaroBIS from '../../components/static/bis-certification-for-power-banks/WhyRegisterKaroBIS'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { CustomDefault } from '../../components/child_components/CustomDefault'

const faq =[
    {
        "question": "What is BIS CRS Certification?",
        "answer": "BIS CRS Certification is a mandatory requirement for selling certain electronic and IT products in the Indian market. It is a scheme introduced by the Bureau of Indian Standards (BIS) and the Ministry of Electronics and Information Technology (MeitY) to ensure that the products meet the standards of safety, reliability, and performance."
    },
    {
        "question": "Which products are covered under the BIS CRS Certification scheme?",
        "answer": "The BIS CRS Certification scheme covers 44 categories of electronic and IT products, such as power banks, mobile phones, laptops, LED lights, smartwatches, CCTV cameras, etc. The complete list of products can be found on the BIS website."
    },
    {
        "question": "How to obtain BIS CRS Certification for a product?",
        "answer": "To obtain BIS CRS Certification for a product, you need to follow these steps:",
        "list":[
            "Send your product samples to a BIS recognized lab for testing as per the relevant Indian Standard",
            "Apply for BIS CRS Registration on the BIS portal and upload the required documents and fee payment receipt",
            "Receive the BIS CRS Registration number and certificate from BIS within 15 working days",
            "Affix the BIS Standard Mark on your product and packaging as per the BIS guidelines",
            "Maintain the quality and safety of your product as per the BIS standards and comply with the BIS surveillance and inspection requirements",
        ]
    },
    {
        "question": "What are the benefits of BIS CRS Certification for a product?",
        "answer": "BIS CRS Certification for a product has the following benefits:",
        "list":["It ensures the compliance with the legal and regulatory requirements of the Indian market",
           "It enhances the brand reputation and customer trust of the product",
           "It avoids the penalties, customs issues, and consumer complaints of the product",
           "It facilitates the export of the product to other countries that recognize the BIS standards"]
           
    },
    {
        "question": "What are the fees and charges for BIS CRS Certification for a product?",
        "answer": "The fees and charges for BIS CRS Certification for a product vary depending on the type and quantity of the product. The BIS fee structure can be found on the BIS website. The fee includes the registration fee, the testing fee, the annual fee, and the surveillance fee. The fee is payable online through the BIS portal or offline through a demand draft or a bank transfer."
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

    const cityFromQuery = query?.replace('bis-certification-for-power-banks-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages bis-certification-for-power-banks-reg'>
            <Head>
                <title>Get Online BIS CRS Certification for Power Banks in {cityName} | RegisterKaro</title>
                <meta name="description" content="BIS Certification for Power Banks is vital for selling power banks in the Indian market to ensure that it should meet the BIS Standards." />
                <link rel="canonical" href="https://www.registerkaro.in/bis-certification-for-power-banks" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Get Online BIS CRS Certification for Power Banks in India | RegisterKaro" />
                <meta property="og:description" content="BIS Certification for Power Banks is vital for selling power banks in the Indian market to ensure that it should meet the BIS Standards." />
            </Head>
            <Hero  cityName={cityName}/>
            <h1 className='main-heading'>Get Online BIS Certification for Power Banks in {cityName}</h1>
            <div className='heading-line'></div>
            <Process  cityName={cityName}/>
            <h2 className='main-heading'>Applicable Rules/ Acts/Regulations</h2>
            <div className='heading-line'></div>
            <Applicable  cityName={cityName}/>
            <h2 className='main-heading'>Eligibility for BIS Certification for Power Banks</h2>
            <div className='heading-line'></div>
            <Eligibility  cityName={cityName}/>
            <h2 className='main-heading'>A detailed description of the Power Banks</h2>
            <div className='heading-line'></div>
            <Description  cityName={cityName}/>
            <h2 className='main-heading'>Types and distinctions of Licenses/Services involved</h2>
            <div className='heading-line'></div>
            <Types  cityName={cityName}/>
            <h2 className='main-heading'>Documents Required for BIS Certification for Power Banks</h2>
            <div className='heading-line'></div>
            <DocumentsRequired  cityName={cityName}/>
            <h2 className='main-heading'>Procedure for BIS Certification for Power Banks</h2>
            <div className='heading-line'></div>
            <Procedure  cityName={cityName}/>
            <h2 className='main-heading'>Cancellation/Validity/ Renewal of certification</h2>
            <div className='heading-line'></div>
            <Cancellation  cityName={cityName}/>
            <h2 className='main-heading'>Cancellation/Suspension/Revocation of certification</h2>
            <div className='heading-line'></div>
            <Revocation  cityName={cityName}/>
            <h2 className='main-heading'>Mandatory Compliance for BIS Certification for Power Banks</h2>
            <div className='heading-line'></div>
            <Mandatory  cityName={cityName}/>
            <h2 className='main-heading'>Why RegisterKaro for BIS CRS Certification?</h2>
            <div className='heading-line'></div>
            <WhyRegisterKaroBIS cityName={cityName}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'BIS CRS Certification for Power Banks'} state={state} Query={'bis-certification-for-power-banks'} city={city} />
        </div>
    )
}
export default Home