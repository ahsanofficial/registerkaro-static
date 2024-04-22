import React from 'react'
import certificate from '../../../assets/images/static/trademark-reg/trademark_certificate.webp';
import Image from 'next/image';


export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Trademark search is a critical initial step in the process of securing a trademark for a brand, logo, or slogan. It involves a comprehensive examination of existing trademarks to ensure that the proposed mark is unique and does not infringe upon existing intellectual property rights. This process helps in determining whether a trademark is available for use and registration, reducing the risk of legal disputes and potential infringement claims.</p>

                <p className='text-justify'>The primary purpose of a trademark search is to uncover any similar or identical trademarks that may already exist in the market. This search is conducted through various databases maintained by government agencies, online databases, and proprietary databases provided by specialized search firms. The search encompasses both registered and unregistered trademarks, including those that might not be easily accessible or publicly available.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#DifferentTypes" className="scrollTo">
                                <li>Different Types of Trademark Searches</li>
                            </a>
                            <a href="#ApplicableRules" className="scrollTo">
                                <li>Applicable Rules/Acts/ Regulations</li>
                            </a>
                            <a href="#ServicesInvolved" className="scrollTo">
                                <li>A description of products/services Involved</li>
                            </a>
                            <a href="#WhyNecessary" className="scrollTo">
                                <li>Why is it necessary to do a Trademark Search in India?</li>
                            </a>
                            <a href="#ImportantPoints" className="scrollTo">
                                <li>Important Points to know for Conducting a Trademark Search Availability in India</li>
                            </a>
                            <a href="#WhatProcess" className="scrollTo">
                                <li>What is the process to conduct a Trademark IP India Public Search?</li>
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
                <p className="small-heading text-center">Trademark Sample Certificate</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="Trademark Sample Certificate" className="certificate h-100 w-60 " loading="lazy"  src={certificate} />
                </div>
            </div>
        </div>
    )
}