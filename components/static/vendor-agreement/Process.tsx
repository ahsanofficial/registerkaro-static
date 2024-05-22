import certificate from '../../../assets/images/static/vendor-agreement/certificate.svg';
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}

export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>This is an agreement between a business owner and a vendor or service provider for the provision of goods and services is known as a Vendor Agreement. This ensures the transparency between the contracting parties. This agreement addresses the extent of services to be provided, their time or duration, the cost or payment of services and the party’s respective liabilities.  It also specifies the rules and guidelines that both parties must abide by. Another name for it is the supplier's agreement.</p>
                <p className='text-justify'>Vendor agreements will vary depending on the type of business. For example like Amazon, Grofers, Flipkart, Bigbasket etc. in order to sell goods and services, such as products or raw materials, on their websites. This is a useful tool which legally enforces the contract between parties, a vendor agreement lowers the possibility of fraud on the part of the vendor and shields the company from losses brought on by the party’s illegal actions.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            
                            <a href="#Who" className="scrollTo">
                             <li>Who is a Vendor?</li>
                            </a>
                            <a href="#Objective" className="scrollTo">
                             <li>Objective of Vendor's Agreement</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                             <li>What are the types of Vendor Agreement?</li>
                            </a>
                            <a href="#WhatImportant" className="scrollTo">
                             <li>What are the important clauses in a Vendor Agreement?</li>
                            </a>
                            <a href="#ImportanceVendor" className="scrollTo">
                             <li>Importance of Vendor Agreement</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>How RegisterKaro helps in preparing Vendor’s Agreement?</li>
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
                <p className="small-heading text-center">VENDOR AGREEMENT</p>
                <div>
                    <Image alt="VENDOR AGREEMENT" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}