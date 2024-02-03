import React from 'react'
import certificate from '../../../assets/images/pvt-reg/pvt_ltd_company_certificate_sample.webp';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>A Sole Proprietorship is a type of business that is owned and managed by only one person and the owner of the business is called a Proprietor. This type of business is the most common form of business that is used in India. In India, you can commence this business with minimum regulatory compliance. However, there is no full-fledged way available to get Sole Proprietorship Registration by the Government of India. Tax Registration & other Business Registration is the correct way to show the legal existence of your proprietary business. Moreover, the business structure as a sole proprietorship company includes individual freelancers, growing start-ups, and settled & creative businesses comprising physical workplaces.<br/><br/>
                A Sole Proprietorship is a business owned and run by one person, known as the Proprietor. It’s the most common type of business in India, offering a straightforward way to start with minimal regulatory requirements. While the government doesn’t have a dedicated registration process for sole proprietorships, showcasing the legal existence involves obtaining tax registration and other necessary business registrations. <br/><br/>
                For a sole proprietorship company, individuals like freelancers, budding startups, and established creative businesses with physical offices can easily adopt this business structure. If you’re looking to formalize your sole proprietorship, consider opting for tax and business registrations to establish its legal presence.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhatBusinessPro" className="scrollTo">
                                <li>What types of businesses in India can be Sole Proprietorships?</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Sole Proprietorship in India</li>
                            </a>
                            <a href="#Eligibility" className="scrollTo">
                                <li>Eligibility Criteria for Sole Proprietorship Registration in India</li>
                            </a>
                            <a href="#Checklist" className="scrollTo">
                                <li>Checklist for Sole Proprietorship Registration in India</li>
                            </a>
                            <a href="#Documents" className="scrollTo">
                                <li>Documents Required for Sole Proprietorship Registration in India</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>Procedure for Sole Proprietorship Registration in India</li>
                            </a>
                            <a href="#RegisterGst" className="scrollTo">
                                <li>Registering under the Shops & Establishments Act</li>
                            </a>
                            <a href="#WhatDocuments" className="scrollTo">
                                <li>Registering through GST Registration</li>
                            </a>
                            <a href="#RegisterUdyog" className="scrollTo">
                                <li>Registration through Udyog or Udyam Aadhar Registration under MSME</li>
                            </a>
                            <a href="#Compliances" className="scrollTo">
                                <li>Compliances for Sole Proprietorship in India</li>
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
                <p className="small-heading text-center">Pvt. Ltd. Company - Incorporation Certificate [Sample]</p>
                <div>
                    <Image alt="A certificate of incorporation for an indian company" className="certificate h-100 w-100" loading="lazy" src={certificate}/>
                </div>
            </div>
        </div>
    )
}
