import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/memorandum-of-understanding-mou/Hero'
import { Process } from '../../components/static/memorandum-of-understanding-mou/Process'
import { WhyChoose } from '../../components/static/memorandum-of-understanding-mou/WhyChoose'
import NeedMemorandum from '../../components/static/memorandum-of-understanding-mou/NeedMemorandum'
import Points from '../../components/static/memorandum-of-understanding-mou/Points'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { CustomDefault } from '../../components/child_components/CustomDefault'

const faq = [
    {
        "question": "What is a memorandum of understanding for?",
        "answer": "MoU plays the role for establishing a mutual understanding between the parties involved pertaining to the successful completion of the respective task or project. MoU helps in outlining the parties’ operations including the responsibilities and expectations of the parties."
    },
    {
        "question": "Is MOU legally binding in India?",
        "answer": "MoU is a form of mutual agreement between the parties established in the written format. However, MoU does not hold a legal status under the Indian Legislation, there is non-binding and non-enforceable in the Indian Jurisdiction."
    },
    {
        "question": "What is the validity period of MOU in India?",
        "answer": "On the day of signing, the MOU shall come into effect. The MOU is supposed to be in effect for three years. If no party gives six months’ written notice in advance that it intends to terminate the MOU, it should automatically be renewed for additional periods of three years."
    },
    {
        "question": "What documents are required for MOU?",
        "answer": "In general, no particular paperwork is needed to draft or carry out the memorandum of understanding. However, in order to verify the names and permanent residences of the parties that need to be closely examined, you must supply proof of identification for each of the parties involved."
    },
    {
        "question": "Does MOU need to be notarized?",
        "answer": "A Notary Public attests to each party’s signature, making the MOU legally binding in the event of a disagreement. It is imperative to notarize the MOU in order to protect the rights and interests of each participant."
    },
    {
        "question": "Is notarized MOU valid in India?",
        "answer": "The MOU is legally enforceable in the event of a disagreement and is made so by having a Notary Public witness each party’s signature. In order to safeguard the rights and interests of each party to the MOU, it is crucial to notarize the document."
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

    const cityFromQuery = query?.replace('memorandum-of-understanding-mou-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages mou-reg'>
            <Head>
                <title>Get Memorandum of understanding online in India</title>
                <meta name="description" content=" A memorandum of Understanding is a document that helps parties come to mutual agreements. and it specifies duties & expectations." />
                <link rel="canonical" href="https://www.registerkaro.in/memorandum-of-understanding-mou" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="  Get Memorandum of understanding online in India" />
                <meta property="og:description" content=" A memorandum of Understanding is a document that helps parties come to mutual agreements. and it specifies duties & expectations." />
            </Head>
            <Hero  cityName={cityName}/>
            <h1 className='main-heading'>What is Memorandum of Understanding?</h1>
            <div className='heading-line'></div>
            <Process  cityName={cityName}/>
            <h2 className='main-heading'>Why do you need Memorandum of Understanding?</h2>
            <div className='heading-line'></div>
            <NeedMemorandum cityName={cityName}/>
            <h2 className='main-heading'>Points to remember while writing a Memorandum of Understanding (MoU)</h2>
            <div className='heading-line'></div>
            <Points cityName={cityName}/>
            <h2 className='main-heading'>How RegisterKaro makes your process easier?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={cityName}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Get Memorandum of understanding'} state={state} Query={'memorandum-of-understanding-mou'} city={city} />
        </div>
    )
}
export default Home