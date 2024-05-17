import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from "../../components/static/cheque-bounce-notice/Hero"
import { Process } from '../../components/static/cheque-bounce-notice/Process'
import { Types } from '../../components/static/cheque-bounce-notice/Types'
import { Why } from '../../components/static/cheque-bounce-notice/Why'
import { DocumentRequired } from '../../components/static/cheque-bounce-notice/DocumentRequired'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { IssueCheque } from '../../components/static/cheque-bounce-notice/IssueCheque'
import { DraftingCheque } from '../../components/static/cheque-bounce-notice/DraftingCheque'
import { ChequeBounce } from '../../components/static/cheque-bounce-notice/ChequeBounce'
import {WhyChoose } from '../../components/static/cheque-bounce-notice/WhyChoose'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

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
      "question": "What is the legal notice for a bounced cheque?",
      "answer": "The cheque bounce notice must be sent within 30 days of the receipt of information of return of cheque by the bank. The drawer fails to pay the amount of cheque to the payee within fifteen days of receipt of the cheque bounce notice."
    },
    {
      "question": "What is the new rule of cheque bounce?",
      "answer": "According to the new rule, it is illegal to bounce a cheque under Section 138 of the Negotiable Instruments Act, 1881. The drawer may be subject to monetary penalties, a two-year prison sentence, or bothpart from its advantageous location, Dubai provides other tax breaks to companies. With no personal income tax and a competitive corporate tax rate of just 9% (effective as of June 2023), from which many enterprises are still exempt, the city boasts a low tax regime."
    },
    {
      "question": "Can 138 notice be sent after 30 days?",
      "answer": "In this case, a complaint may be filed within the following month if the drawer does not pay the amount due within 15 days of the notice being received. This is because Section 138 of the NI Act requires a notice to be sent under this section (for dishonor of cheque) within 30 days of the date the cheque bounces"
    },
    {
      "question": "What is the time period for cheque bounce notice?",
      "answer": "According to the Negotiable Instruments Act, if a cheque bounces, a legal notice needs to be sent out within 30 days. Then, a case must be filed in a total of 45 days, which includes the first 30 days for sending the legal notice and the remaining 15 days."
    },
    {
      "question": "Can I escape from cheque bounce case?",
      "answer": "The accused must prove in this defense that the bounced cheque was made as a security deposit rather than to settle a debt or other obligation in order to avoid having the case violate Section 138 of the Negotiable Instruments Act. The security given was a bounced cheque. Thus, the defendants are immune from prosecution."
    },
    {
      "question": "Can I send legal notice without lawyer?",
      "answer": "With the assistance of a lawyer, anyone can serve another party with a legal notice, either in their own right or through an authorized representative who is legally permitted to do so"
    },
    {
      "question": "Can I send cheque bounce notice without a lawyer?",
      "answer": "Yes, you can send a notice without the help of an attorney. You have to use caution when it comes to the contents, though. The notice needs to be extremely explicit because it will be crucial for future actions. Obtaining the assistance of a knowledgeable lawyer might be prudent."
    },
    {
      "question": "Is a bounced cheque a crime?",
      "answer": "The Negotiable Instruments Act of 1881 makes it illegal to dishonor a cheque due to insufficient money in the payer’s account. When a cheque is written against an account that has insufficient funds, the payer could face legal action."
    },
    {
        "question":"What is the time limit for 138 legal notice?",
        "answer":"Within 30 days after receiving the bank’s notification of dishonor, the payee or holder in due course is required to start legal action"
    },
    {
        "question":"What if I ignore a legal notice?",
        "answer":"In India, a legal notice cannot be disregarded. There could be severe repercussions from disobeying a legal notice, such as legal action taken against you."
    }
  ]
  
const Home = () => {
    return (
        <div className='services-pages cheque-bounce-notice'>
            <Head>
                 <title>Cheque Bounce Notice | RegisterKaro</title> 
                <meta name="description" content="The Official RegisterKaro" /> 
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" /> 
                <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> 
            </Head>
 
            <Hero cityName={'India'}/>
            <h1 className='main-heading'>Understanding the Cheque Bounces</h1>
            <div className='heading-line'></div>
            <Process cityName={'India'}/>

            <h2 className='main-heading'>What is a Cheque Bounce Notice?</h2>
            <div className='heading-line'></div>
            <Types cityName={'India'}/>

            <h2 className='main-heading'>Cheque Bounce Notice Vis-a-vis Negotiable Instrumrnt Act</h2>
            <div className='heading-line'></div>
             <DocumentRequired cityName={'India'}/>

            <h2 className='main-heading'> When do you receive a notice for Cheque Bounce?</h2>
            <div className='heading-line'></div>
            <Why cityName={'India'}/>


            <h2 className='main-heading'> How do you issue a notice for cheque Bounce ?</h2>
            <div className='heading-line'></div>
            <IssueCheque cityName={'India'}/>
 
            <h2 className='main-heading'> Points to remember for drafting cheque Bounce Notice</h2>
            <div className='heading-line'></div>
            <DraftingCheque cityName={'India'}/>

            <h2 className='main-heading'>what to do when you recieve a cheque Bounce Notice?</h2>
            <div className='heading-line'></div>
            <ChequeBounce cityName={'India'}/>

            <h2 className='main-heading'>How RegisterKaro helps you in the Cheque Bounce Notice?</h2>
            <div className='heading-line'></div>
            <WhyChoose cityName={'India'}/>

            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />

            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className="mb-4"></div>
            <RegistrationLinks formattedQuery={'Cheque Bounce Notice'} state={state} Query={'cheque-bounce-notice'} city={city} />
        </div>
    )
}
export default Home