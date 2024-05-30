import certificate from '../../../assets/images/pvt-reg/benefit.svg';
import Image from 'next/image';


export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>
                    <p>Barcodes are now a necessary element in today's society. Businesses, regardless of their size, require barcode numbers for product identification, allowing them to sell items both online and in physical retail locations. GS1 barcodes are currently implemented in over 1 billion items by over 2 million businesses worldwide. Barcodes starting with the digits "890" show that the product is from India. Unique identification using GS1 standards is the basis for creating solutions for tracking, tracing, and recalling products, among other uses. Financial assistance scheme is accessible for micro enterprises through MSME support.</p>
                    <p>A barcode is an image that can be read by a machine, made up of parallel lines of different widths and spaces, along with numbers. Barcodes are utilized to quickly encode information about products like product numbers, serial numbers, and batch numbers. It is utilized for identifying products and is extensively used in supermarkets, clothing stores, malls, etc., offering advantages such as reducing errors, being cost-effective, saving time, and simplifying inventory management. This worldwide identification system helps manufacturers, logistics providers, and wholesalers easily identify products within the supply chain.</p>
                    <p>GS1 is an international organization that is not for profit and oversees the standardization and management of barcodes in India. GS1 establishes norms and oversees the barcode standard utilized by retailers, manufacturers, and suppliers. Around two million companies worldwide, spanning over 20 industries like Retail & Consumer Packaged Goods, Food, Healthcare, Transport & Logistics (including Customs), Government, etc., are utilizing the GS1 System of standards. Hence, GS1 is the entity responsible for managing the distribution of barcodes that are scannable globally.</p>
                    <p>Barcode registration involves allocating a distinct identification code to a product or item and associating it with a barcode symbol. This code can follow the item along the supply chain and help with managing inventory, setting prices, and other business operations.</p>
                    <p>In order to register a barcode, you need to get a distinctive ID number from a worldwide group like GS1 or EAN International. These organizations keep records of identification numbers and distribute them to businesses interested in utilizing barcodes for their items.  After acquiring an ID number, you can create barcode symbols by utilizing software or hardware compatible with the desired barcode format (such as UPC, EAN, Code 39, etc.). You are able to print the barcode on either labels or packaging of your products, making sure that the barcode symbol and identification code are properly connected in your database.</p>
                    <p>By enrolling your barcodes with an international entity, you guarantee that your product details are universally acknowledged and standardized, enabling effective monitoring and communication among various supply chain networks.</p>
                </p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#DocumentReq" className="scrollTo">
                                <li>Documents required</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                                <li>Types of Barcodes</li>
                            </a>
                            <a href="#HowRegisterKaro" className="scrollTo">
                                <li>How RegisterKaro helps you in the Registration process?</li>
                            </a>
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Barcode Registration</p>
                <div>
                    <Image alt="Barcode Registration" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}