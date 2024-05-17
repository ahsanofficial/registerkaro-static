import certificate from '../../../assets/images/static/franchise-agreement/certificate.svg';
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}

export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>The franchise agreement typically includes provisions such as the grant of franchise rights, territorial rights, franchisee's development obligations, initial and ongoing training, operating procedures, initial and ongoing fees, marketing fees and obligations, restrictive covenants, and legal rights. A franchise agreement is a legally binding contract between a franchisor and a franchisee that includes the rights and obligations of both parties in the franchise relationship. It provides the legal rights to the franchisee to establish and operate a franchised business and then a franchisee undertakes the obligation to operate the business following the franchisor's systems and procedures.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                          
                            <a href="#WhatIs" className="scrollTo">
                             <li>What is a Franchise Agreement</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                             <li>Types of Franchise Agreements</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                             <li>List of Documents required for Franchise Agreement</li>
                            </a>
                            <a href="#KeyElements" className="scrollTo">
                             <li>Key Elements of a Franchise Agreement</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                             <li>How Franchise Agreements Work</li>
                            </a>
                            <a href="#Advantages" className="scrollTo">
                             <li>Advantages of Franchise Agreement</li>
                            </a>
                            <a href="#Various" className="scrollTo">
                             <li>Various laws that govern a Franchise Agreement in {cityName}</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>How RegisterKaro Can Assist You in the Franchise Agreement Process</li>
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
                <p className="small-heading text-center">Franchise Agreement</p>
                <div>
                    <Image alt="An Overview of Franchise Agreement" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}