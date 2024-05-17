import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/wpc-certificate/Hero'
import { Process } from '../../components/static/wpc-certificate/Process'
import { Types } from '../../components/static/wpc-certificate/Types'
import { Why } from '../../components/static/wpc-certificate/Why'
import { DocumentRequired } from '../../components/static/wpc-certificate/DocumentRequired'
import { WhyChoose } from '../../components/static/wpc-certificate/WhyChoose'
import { ProcessCompany } from '../../components/static/wpc-certificate/ProcessCompany'
import { Advantage } from '../../components/static/wpc-certificate/Advantage'
import { Consent } from '../../components/static/wpc-certificate/Consent'
import { Fees } from '../../components/static/wpc-certificate/Fees'
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

  const cityFromQuery = query?.replace('wpc-certificate-in-', '');
  const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
  const cityName = formatString(cityString)
  const isCityValid = city.includes(cityString) || state.includes(cityString)
  if (!isCityValid) {
      return <CustomDefault />;
  }
    return (
        <div className='services-pages wpc-certificate-reg'>
            <Head>
                 <title>WPC certificate | RegisterKaro</title> 
              <meta name="description" content="The Official RegisterKaro" /> 
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
               <link rel="canonical" href="https://www.registerkaro.in/ads/wpc-certificate" /> 
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>Overview of Wireless Planning and Coordination (WPC) Certificate:</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h2 className='main-heading'>What is WPC certificate?</h2>
            <div className='heading-line'></div>
            <Types cityName={cityName} />
            <h2 className='main-heading'>List of products which requires a WPC Certificate for import:</h2>
            <div className='heading-line'></div>
            <Why cityName={cityName} />
            <h2 className='main-heading'>What are the types of WPC Certificate?</h2>
            <div className='heading-line'></div>
            <DocumentRequired cityName={cityName} />
            <h2 className='main-heading'>Required Documents for WPC Certification</h2>
            <div className='heading-line'></div>
            <Advantage cityName={cityName}/>
            <h2 className='main-heading'>How to Apply Certificate or WPC License </h2>
            <div className='heading-line'></div>
            <ProcessCompany cityName={cityName} />
            <h2 className='main-heading'>Importance of WPC License </h2>
            <div className='heading-line'></div>
            <Consent cityName={cityName}/>
            <h2 className='main-heading'>WPC Certificate Fees </h2>
            <div className='heading-line'></div>
            <Fees cityName={cityName}/>
            <h2 className='main-heading'>How RegisterKaro Can Assist You in the WPC Certificate Fees process?</h2>
            <div className='heading-line'></div>
            <WhyChoose />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'WPC certificate'} state={state} Query={'wpc-certificate'} city={city} />
        </div>
    )
}
export default Home