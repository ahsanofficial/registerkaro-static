import React from 'react'
import certificate from '../../../assets/images/pvt-reg/pvt_ltd_company_certificate_sample.webp';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>FPO mark is a certification mark mandatory on all processed fruit products sold in India such as packaged fruit beverages, fruit-jams, squashes, pickles, dehydrated fruit products, and fruit extracts, following the food safety and Standards Act of 2006. The FPO Mark Certification guarantees that the product was manufactured in a hygienic ‘food-safe’ environment, thus ensuring that the product is fit for consumption.</p>
                <p className='text-justify'>As stated above, the FPO mark is important for businesses that manufactured products related to fruits and vegetables. But did you know who provides FPO license? So, the Food Safety and Standards Authority of India (FSSAI) issue the certificate. It ensures that the products which are sold in the Indian market must meet the quality and safety standards set by the government. To obtain the certificate, the manufacturer must submit an application with complete documents.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#FoodProduct" className="scrollTo">
                                <li>Food Products Requiring FPO Mark</li>
                            </a>
                            <a href="#FPOMark" className="scrollTo">
                                <li>FPO Mark Certification Application</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                                <li>Documents required for FPO Mark Certification</li>
                            </a>
                            <a href="#ProcedureGetFPO" className="scrollTo">
                                <li>Procedure to get FPO Mark Certification</li>
                            </a>
                            <a href="#HowMuchTime" className="scrollTo">
                                <li>How much time does it takes to obtain the FPO mark?</li>
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
                <p className="small-heading text-center">FPO Mark Certification Certificate [Sample]</p>
                <div>
                    <Image alt="A certificate of incorporation for an indian company" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}