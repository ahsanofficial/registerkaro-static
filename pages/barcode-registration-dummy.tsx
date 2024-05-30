import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/barcode-registration/Hero'
import { Process } from '../components/static/barcode-registration/Process'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { DocumentReq } from '../components/static/barcode-registration/DocumentReq'
import { Types } from '../components/static/barcode-registration/Types'
import { HowRegisterKaro } from '../components/static/barcode-registration/HowRegisterKaro'

const faq = [
    {
        "question": "How is Barcode information is captured?",
        "answer": "The data linked to a barcode number is given to us by our customers. This usually consists of the company or product name along with contact information like phone number, email address, and/or physical address."
    },
    {
        "question": "How can I register my Barcode?",
        "answer": "It is simple to register your barcode. This is a voluntary registration service for barcode numbers that you have acquired legally - whether you obtained them from International Barcodes Group, another barcode reseller, or through a license from GS1. When buying this product, you won't be given a barcode. Instead, you must provide your current barcode and product information. By buying 'Barcode Registration' and showing ownership of your barcode number, you will be given guidance on how to register it on the International Barcodes Database. Data entered into that Database is also transmitted to other databases with similar functions. Barcode registration is not mandatory (your barcodes will function without it). Nevertheless, registering your barcodes and products has numerous advantages. Once your barcode numbers and product information are logged on the main barcode and product databases online, they will become part of the millions of products already stored in these databases. This indicates that when searching these databases with your barcode, your product information will be displayed, and after search engines index it, your product can be found through an internet search or smartphone app scan."
    },
    {
        "question": "What’s Barcode system?",
        "answer": "The barcoding system, developed by George Laurer in the 1970s, serves as a uniform method to monitor products and prices in inventories on a global scale. This is currently employed by nearly every retailer around the globe and operates on the assumption that each barcode is uniquely assigned to a single product, so there is no possibility of a barcode belonging to two different products in any store."
    },
    {
        "question": "Do I need to be a registered company for getting registered Barcodes?",
        "answer": "No, being a registered company is not necessary in order to buy a barcode. Our company sells barcodes to anyone, be it an individual, organization, or group."
    },
    {
        "question": "What’s the difference between UPC-A & EAN-13 Barcodes?",
        "answer": "UPC-A Numbers and EAN-13 numbers serve as retail barcodes, scanned at the checkout for pricing and product details. UPC-A Barcodes are distinguished by their 12-digit code, while EAN-13 barcodes stand out with their 13-digit code. Moreover, the positioning of the numbers under the barcodes varies. Both versions are meant for global use and can be used worldwide in theory, but UPC-A Barcodes are predominantly used in the USA while EAN-13 Barcodes are more widely used in other regions. This implies that certain merchants might not be familiar with a specific format or have a system that isn't able to process either 13-digit or 12-digit numbers. In spite of that, both formats are interchangeable. The image below shows that the bars of the UPC-A format barcode and the EAN-13 format barcode (starting with '0') are the same. This implies that they will be scanned in the same manner no matter the country they are located in. If a merchant's system can't process 13-digit numbers, omit the leading '0' when entering the number for the barcode to function like a UPC-A format. Likewise, should there be a need for 13 digits, a '0' can be included at the start of the UPC-A barcode to transform it into an EAN-13. The barcode will be unique worldwide and valid for international use regardless of the situation."
    },
]


const Home = () => {
    return (
        <div className='services-pages barcode-registration'>
            <Head>
                <title>Barcode Registration | RegisterKaro</title>
                <meta name="description" content="Barcodes are now a necessary element in today's society. Businesses, regardless of their size, require barcode numbers for product identification, allowing them to sell items both online and in physical retail locations." />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <h1 className='main-heading'>Barcode Registration</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Documents Required</h2>
            <div className='heading-line'></div>
            <DocumentReq />
            <h2 className='main-heading'>Types of Barcodes</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>How RegisterKaro helps you in the Registration process?</h2>
            <div className='heading-line'></div>
            <HowRegisterKaro />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
        </div>
    )
}
export default Home