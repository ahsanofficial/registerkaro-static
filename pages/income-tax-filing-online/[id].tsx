import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Benefits } from '../../components/static/income-tax-filing-online/Benefits'
import { DocumentRequired } from '../../components/static/income-tax-filing-online/DocumentRequired'
import { Hero } from '../../components/static/income-tax-filing-online/Hero'
import Penalty from '../../components/static/income-tax-filing-online/Penalty'
import { Prerequisites } from '../../components/static/income-tax-filing-online/Prerequisites'
import { Procedure } from '../../components/static/income-tax-filing-online/Procedure'
import { Process } from '../../components/static/income-tax-filing-online/Process'
import { Types } from '../../components/static/income-tax-filing-online/Types'
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

  const cityFromQuery = query?.replace('income-tax-filing-online-in-', '');
  const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
  const cityName = formatString(cityString)
  const isCityValid = city.includes(cityString) || state.includes(cityString)
  if (!isCityValid) {
      return <CustomDefault />;
  }

  return (
        <div className='services-pages income-tax-filing-online-reg'>
           <Head>
                <title>Income Tax - IT Returns, e-Filing</title>
                <meta name="description" content="Income tax filing involves the online submission of your ITR to governmental tax authorities in a specified digital format." />
                <link rel="canonical" href="https://www.registerkaro.in/income-tax-filing-online" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Income Tax - IT Returns, e-Filing" />
                <meta property="og:description" content="Income tax filing involves the online submission of your ITR to governmental tax authorities in a specified digital format." />
            </Head>
            <Hero  cityName={cityName} />
            <h1 className='main-heading'>Income Tax Filing Online – Process, Documents, Benefits</h1>
            <div className='heading-line'></div>
            <Process  cityName={cityName} />
            <h2 className='main-heading'>Different Types of ITR Forms in {cityName}</h2>
            <div className='heading-line'></div>
            <Types  cityName={cityName} />
            <h2 className='main-heading'>Benefits of filing ITR Online in {cityName}</h2>
            <div className='heading-line'></div>
            <Benefits  cityName={cityName} />
            <h2 className='main-heading'>Eligibility criteria for Income Tax Filing Online</h2>
            <div className='heading-line'></div>
            <Prerequisites  cityName={cityName} />
            <h2 className='main-heading'>Documents required for ITR filing online</h2>
            <div className='heading-line'></div>
            <DocumentRequired  cityName={cityName} />
            <h2 className='main-heading'>Procedure for filing Income Tax Online</h2>
            <div className='heading-line'></div>
            <Procedure  cityName={cityName} />
            <h2 className='main-heading'>Penalty for late income tax filing</h2>
            <div className='heading-line'></div>
            <Penalty cityName={cityName} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <RegistrationLinks formattedQuery={'Income Tax Filing'} state={state} Query={'income-tax-filing-online'} city={city} />
        </div>
    )
}
export default Home