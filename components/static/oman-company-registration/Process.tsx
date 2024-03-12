import React from 'react'
import certificate from '../../../assets/images/static/usa-company-registration/USA_Company_Registration_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Oman, the third-largest nation on the Arabian Peninsula, has a rich history of foreign trade and enterprise dating back many centuries. Its marine trade formerly reached the borders of China, Europe, and Africa. Prior to the discovery of oil and gas, the economy of Oman was mostly centered on agriculture and fishing in rural and agrarian areas. Oman gradually transitioned from an agrarian to an oil-based economy and production when oil was discovered in commercial quantities in 1964, and oil exports began to dominate the country's government coffers.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Types" className="scrollTo">
                                <li>Types of Companies in Oman</li>
                            </a>
                            <a href="#Post" className="scrollTo">
                                <li>Post Registration Compliances</li>
                            </a>
                            <a href="#DocumentsReq" className="scrollTo">
                                <li>Documents you would need</li>
                            </a>
                            <a href="#ProcessStep" className="scrollTo">
                                <li>Process of Company Registration in Oman</li>
                            </a>
                            <a href="#WhyChooseReg" className="scrollTo">
                                <li>Why Choose RegisterKaro for Company Registration in Oman?</li>
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
