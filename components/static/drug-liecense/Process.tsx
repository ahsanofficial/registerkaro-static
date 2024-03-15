import React from 'react'
import certificate from '../../../assets/images/static/usa-company-registration/USA_Company_Registration_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In terms of volume, the Indian pharmaceutical market is third, while in terms of significance, it ranks fourteenth. It makes up about 20% of the global pharmaceutical industry's volume and 1.5% of its value. The Indian pharmaceutical industry has enormous potential, which presents opportunities for entrepreneurs and start-ups looking to enter or grow in the pharmaceutical sector. In India, registering for a drug license is a need for any pharmaceutical company that deals with pharmaceuticals, prescriptions, or cosmetics. In order to lawfully operate in the pharmaceutical sector, which includes Ayurvedic and Unani medications, one needs to obtain a drug license.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Basic" className="scrollTo">
                                <li>Basic pre-requisites for a drug license</li>
                            </a>
                            
                            <a href="#Application" className="scrollTo">
                                <li>Who may submit a drug license application?</li>
                            </a>
                            
                            <a href="#Types" className="scrollTo">
                                <li>Types of Drug License Registration</li>
                            </a>
                            
                            <a href="#DocumentsRequired" className="scrollTo">
                                <li>Documents requirement for Drug License in India</li>
                            </a>
                            
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Drug License Registration process in India</li>
                            </a>
                            
                            <a href="#Fees" className="scrollTo">
                                <li>Fees for drug license registration</li>
                            </a>
                            
                            <a href="#HowRegisterKaro" className="scrollTo">
                                <li>How RegisterKaro helps you in getting Drug License?</li>
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
                <p className="small-heading text-center">USA Company Registration</p>
                <div>
                    <Image alt="Get Online USA Company RegistrationExpansion to the United States may be revolutionary, opening up a universe of prospects and a large consumer base" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
