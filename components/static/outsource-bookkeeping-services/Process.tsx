import certificate from '../../../assets/images/static/outsource-bookkeeping-services/certificate.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}

export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>An outside accounting firm taking over the duties of your internal accounting department is known as “outsourced accounting & bookkeeping.” Although the external team is an extension of your team, it offers scale, cost, and expertise capabilities that are challenging for most firms to employ internally.  Similar to an internal team, the outsourced accounting team manages payroll, accounts payable, accounts receivable, management financial reporting, and many other tasks.  Offshoring is not the same as outsourcing.  It refers to any solution that your business does not use.  Combining onshore and offshore often results in the most value-for-money and economical solutions. RegisterKaro has earned the trust of more than 10000+ clients who have availed our Outsource Bookkeeping services.  Their trust in us from a term in continuity is proof of our services backed by quality and assurance.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Services" className="scrollTo">
                               <li>Services included in Outsourcing Bookkeeping</li>
                            </a>
                            <a href="#WhyOutsource" className="scrollTo">
                               <li>Why outsource bookkeeping services?</li>
                            </a>
                            <a href="#WhatHappen" className="scrollTo">
                               <li>What happen if you do not outsource bookkeeping services?</li>
                            </a>
                            <a href="#OurProcess" className="scrollTo">
                               <li>Our Process for Outsource Bookkeeping Services</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                               <li>Why to choose RegisterKaro?</li>
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
                <p className="small-heading text-center">Outsource Bookkeeping Services</p>
                <div>
                    <Image alt="What is a Bookkeeping Service?" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}