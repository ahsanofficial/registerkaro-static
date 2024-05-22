import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/petroleum-and-explosive-safety-organisation/Hero'
import { Process } from '../../components/static/petroleum-and-explosive-safety-organisation/Process'
import { Types } from '../../components/static/petroleum-and-explosive-safety-organisation/Types'

import { DocumentRequired } from '../../components/static/petroleum-and-explosive-safety-organisation/DocumentRequired'
import { WhyChoose } from '../../components/static/petroleum-and-explosive-safety-organisation/WhyChoose'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { CustomDefault } from '../../components/child_components/CustomDefault'
import { useEffect } from 'react'
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
  
    const cityFromQuery = query?.replace('petroleum-and-explosive-safety-organisation-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }
    return (
        <div className='services-pages petroleum-and-explosive-safety-organisation'>
            <Head>
                <title>PESO(Petroleum and Explosives Safety Organisation) Certification | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://www.registerkaro.in/ads/petroleum-and-explosive-safety-organisation" />
            </Head>
            <Hero  cityName={cityName} />
            <h1 className='main-heading'>What is PESO Certification ?</h1>
            <div className='heading-line'></div>
            <Process  cityName={cityName} />
            <h2 className='main-heading'>Process of obtaining a licence</h2>
            <div className='heading-line'></div>
            <Types  cityName={cityName} />
            <h2 className='main-heading'>Documents Required</h2>
            <div className='heading-line'></div>
            <DocumentRequired  cityName={cityName} />
            <h2 className='main-heading'>How does Register Karo help ?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={cityName} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'PESO(Petroleum and Explosives Safety Organisation) Certification'} state={state} Query={'petroleum-and-explosive-safety-organisation'} city={city} />
           
        </div>
    )
}
export default Home