import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/petrol-pump-license/Hero'
import { Process } from '../../components/static/petrol-pump-license/Process'
import { WhyChoose } from '../../components/static/petrol-pump-license/WhyChoose'
import { Eligibility } from '../../components/static/petrol-pump-license/Eligibility'
import { HowToApply } from '../../components/static/petrol-pump-license/HowToApply'
import { RequiredInvestment } from '../../components/static/petrol-pump-license/RequiredInvestment'
import { NeedForLand } from '../../components/static/petrol-pump-license/NeedForLand'
import { LicenseCertificatedRequired } from '../../components/static/petrol-pump-license/LicenseCertificatedRequired'
import { Summary } from '../../components/static/petrol-pump-license/Summary'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { CustomDefault } from '../../components/child_components/CustomDefault'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const faq = [
    {
        "question": "What is the cost to open a petrol pump?",
        "answer": "Depending on a variety of criteria, including location, infrastructure, and kind of fuel pump, the required investment to open a gas station in India can range from ₹1 crore to ₹5 crore or more."
    },
    {
        "question": "Can I sell petrol without license?",
        "answer": "No one is permitted to transport or send petroleum to any person in India unless they are the owner of a storage license granted in accordance with these regulations, or their designated agent, a port authority, a railway administration, or an individual permitted by the Act to store petroleum without a license."
    },
    {
        "question": "How many petrol pumps can a person own?",
        "answer": 'The restriction of one pump per family will still apply to CODO pump dealers. An executive at a state oil company stated, "Rules have been relaxed to boost entrepreneurship in the sector, which is now open to private pumps."'
    },
    {
        "question": "Can I sell petrol in bottle?",
        "answer": "According to the Petroleum Act of 1934, gasoline may only be sold in glass, ceramic, or metal containers. Only those with a license to purchase gasoline may purchase it in containers made of materials that have been approved."
    },
    {
        "question": "What are the rules of petrol pump?",
        "answer": "Rules of petrol pump are as follows:",
        "list":[
            "Please refrain from smoking on the Petrol Pump property.",
            "It is forbidden to fire a matchstick inside the Petrol Pump area.",
            "When refueling, it is advisable to exit the vehicle.",
            "Carrying gasoline or fuel in glass or plastic bottles is not advised."
        ]
    },
    {
        "question": "What is petrol law?",
        "answer": "A legislation pertaining to the import, transportation, storage, production, refining, and blending of petroleum was consolidated and amended in 1934 with the passage of the Petroleum Act."
    },
    {
        "question": "Which NOC is required for petrol pump?",
        "answer": "District Administration For the storage and sale of fuels, such as gasoline, diesel, CNG, and other fuels, NOC is essential and required."
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

    const cityFromQuery = query?.replace('petrol-pump-license-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages petrol-pump-license'>
            <Head>
                <title>Petrol Pump License | RegisterKaro</title>
                <meta name="description" content="In India, one of the most lucrative business ventures is operating a petrol pump. The business has experienced a surge in recent years due to the steadily rising need for fuel. Additionally, the number of cars on Indian roadways has been rising annually, which has led to an increase in consumption of fuel. Secure Your License, Unlock Opportunities by registering it at RegisterKaro." />
                <link rel="canonical" href="https://www.registerkaro.in/petrol-pump-license" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Petrol Pump License | RegisterKaro" />
                <meta property="og:description" content="In India, one of the most lucrative business ventures is operating a petrol pump. The business has experienced a surge in recent years due to the steadily rising need for fuel. Additionally, the number of cars on Indian roadways has been rising annually, which has led to an increase in consumption of fuel. Secure Your License, Unlock Opportunities by registering it at RegisterKaro." />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>Overview on Petrol Pump License</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h2 className='main-heading'>Eligibility for a license to operate a Petrol Pump</h2>
            <div className='heading-line'></div>
            <Eligibility cityName={cityName} />
            <h2 className='main-heading'>How to apply for Petrol Pump License?</h2>
            <div className='heading-line'></div>
            <HowToApply cityName={cityName} />
            <h2 className='main-heading'>Required Investment for the Procurement of a Fuel Pump License</h2>
            <div className='heading-line'></div>
            <RequiredInvestment cityName={cityName} />
            <h2 className='main-heading'>Need for Land to Begin a Petrol Pump</h2>
            <div className='heading-line'></div>
            <NeedForLand cityName={cityName} />
            <h2 className='main-heading'>The licenses and certificates required to open a Petrol Pump</h2>
            <div className='heading-line'></div>
            <LicenseCertificatedRequired cityName={cityName} />
            <h2 className='main-heading'>In Summary</h2>
            <div className='heading-line'></div>
            <Summary cityName={cityName} />
            <h2 className='main-heading'>How RegisterKaro helps you in getting Petrol Pump License?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={cityName}/> 
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Petrol Pump License'} state={state} Query={'petrol-pump-license'} city={city} />
        </div>
    )
}
export default Home
