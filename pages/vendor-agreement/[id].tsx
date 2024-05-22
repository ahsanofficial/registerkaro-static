import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/vendor-agreement/Hero'
import ImportanceVendor from '../../components/static/vendor-agreement/ImportanceVendor'
import Objective from '../../components/static/vendor-agreement/Objective'
import { Process } from '../../components/static/vendor-agreement/Process'
import { Types } from '../../components/static/vendor-agreement/Types'
import WhatImportant from '../../components/static/vendor-agreement/WhatImportant'
import Who from '../../components/static/vendor-agreement/Who'
import { WhyChoose } from '../../components/static/vendor-agreement/WhyChoose'
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
        "question": "What is a Vendor Agreement?",
        "answer": "A vendor agreement is a legally binding contract that specifies the terms and conditions of the goods or services being given and is signed between a corporation or organization (the buyer) and an outside vendor or supplier (the seller). It outlines each party's obligations, responsibilities, and rights in the business partnership."
    },
    {
        "question": "How does one draft a vendor agreement?",
        "answer": "It is usually the customer and the vendor who work together to construct vendor agreements. The departments from both sides that are typically involved in drafting and negotiating the terms of the agreement are legal, procurement, and other relevant departments."
    },
    {
        "question": "How should a vendor contract be negotiated?",
        "answer": "A vendor contract negotiation requires careful planning, open communication, and an emphasis on shared advantages. Important actions include examining market rates, outlining your needs, talking about terms and conditions, requesting competitive bids, and being prepared to make concessions in order to reach a win-win solution."
    },
    {
        "question": "What is a Vendor supplier agreement?",
        "answer": "A vendor-supplier agreement is a kind of contract that serves to formalize the supplier-buyer business connection. It contains information about the particulars of the goods or services being offered, as well as terms like warranties, quality standards, delivery dates, and prices."
    },
    {
        "question": "What is vendor contract management?",
        "answer": "The continuous administration, oversight, and enforcement of vendor agreements are all part of vendor contract management. It entails duties including monitoring performance, making sure that regulations are followed, controlling modifications, addressing problems, and keeping a positive vendor relationship."
    },
    {
        "question": "What is a standard agreement for a vendor?",
        "answer": "A pre-drafted contract template outlining the fundamental terms and conditions commonly used in vendor agreements is called a standard agreement for a vendor. It can be tailored to each business relationship's unique requirements and acts as a springboard for talks."
    },
    {
        "question": "How to terminate a Vendor Contract?",
        "answer": "In order to terminate a vendor contract, one must often abide by the conditions specified in the agreement. Notice periods, grounds for termination, and processes for ending the relationship are common termination provisions. The termination procedure should be discussed and documented by both parties."
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

    const cityFromQuery = query?.replace('vendor-agreement-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages qatar-reg'>
            <Head>
                <title>Vendor Agreement | Registerkaro</title>
                <meta name="description" content="An arbitration in which a business owner or individual engages a third party to supply products or services is known as a vendor agreement. It includes services like event management, cloud service, delivery service, design service, software service, office supplies etc." />
                <link rel="canonical" href="https://www.registerkaro.in/vendor-agreement" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Vendor Agreement | Registerkaro" />
                <meta property="og:description" content="An arbitration in which a business owner or individual engages a third party to supply products or services is known as a vendor agreement. It includes services like event management, cloud service, delivery service, design service, software service, office supplies etc." />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>What is a Vendor Agreement?</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h2 className='main-heading'>Who is a Vendor?</h2>
            <div className='heading-line'></div>
            <Who cityName={cityName} />
            <h2 className='main-heading'>Objective of Vendor's Agreement</h2>
            <div className='heading-line'></div>
            <Objective cityName={cityName} />
            <h2 className='main-heading'>What are the types of Vendor Agreement?</h2>
            <div className='heading-line'></div>
            <Types cityName={cityName} />
            <h2 className='main-heading'>What are the important clauses in a Vendor Agreement?</h2>
            <div className='heading-line'></div>
            <WhatImportant cityName={cityName} />
            <h2 className='main-heading'>Importance of Vendor Agreement</h2>
            <div className='heading-line'></div>
            <ImportanceVendor cityName={cityName} />
            <h2 className='main-heading'>How RegisterKaro helps in preparing Vendor’s Agreement?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={cityName} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Vendor Agreement'} state={state} Query={'vendor-agreement'} city={city} />
        </div>
    )
}
export default Home