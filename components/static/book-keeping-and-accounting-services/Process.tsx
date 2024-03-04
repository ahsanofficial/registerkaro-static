import React from 'react'
import certificate from '../../../assets/images/pvt-reg/pvt_ltd_company_certificate_sample.webp';
import Image from 'next/image';
interface HeroProps { cityName: string; }
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>The transactional and administrative aspect of managing day-to-day financial transaction recording, including sales, purchases, receipts, and payments, is known as bookkeeping services. A three-tiered method to building and managing your business’s entire financial procedures and management is suggested by Bookkeeping and Accounting Services, and it consists of the following:</p>
                <li>General Accounting & Bookkeeping</li>
                <li>Financial Statement Preparation</li>
                <li>Tax Return Filing</li>
               
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhoMandates" className="scrollTo">
                                <li>Who mandates Bookkeeping and Accounting Services?</li>
                            </a>
                            <a href="#WhyBookkeeping" className="scrollTo">
                                <li>Why Bookkeeping and Accounting Services?</li>
                            </a>
                            <a href="#WhyOutsources" className="scrollTo">
                                <li>Why Outsource Accounting and Bookkeeping Services in {cityName}?</li>
                            </a>
                            <a href="#HowRegisterkaro" className="scrollTo">
                                <li>How RegisterKaro helps you in Accounting and Bookkeeping Services?</li>
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
                <p className="small-heading text-center">Bookkeeping and Accounting Services</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="A certificate of Consumer complaints,If customers pay for a certain commodity or service and receive inferior goods or services, they are entitled to legal action. Consumers are granted a number of legal rights and safeguards under the Consumer Protection Act, 1986." className="certificate h-100 w-100" loading="lazy" src={certificate}/>
                    {/* <p>pending pdf render file</p> */}
                </div>
            </div>
        </div>
    )
}
