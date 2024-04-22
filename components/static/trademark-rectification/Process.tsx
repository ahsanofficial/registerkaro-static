import React from 'react'
import certificate from '../../../assets/images/static/trademark-reg/trademark_certificate.webp';
import Image from 'next/image';


export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Trademark Rectification is the process of fixing mistakes or errors that happen after the Trademark Registration. This procedure deals with cases where a trademark was mistakenly registered or is still listed in the registry after it has expired. Corrective action is required in certain circumstances, and the Indian Trademark Act has procedures for this. The Trademark Act of 1999 delineates the rectification provisions in Chapter 7.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhoCan" className="scrollTo">
                                <li>Who can file for Trademark Rectification?</li>
                            </a>
                            <a href="#When" className="scrollTo">
                                <li>When can you file for Trademark Rectification?</li>
                            </a>
                            <a href="#HowProceed" className="scrollTo">
                                <li>How to proceed with Trademark Rectification?</li>
                            </a>
                            <a href="#Forms" className="scrollTo">
                                <li>Forms for Trademark Rectification</li>
                            </a>
                            <a href="#HowRegisterKaro" className="scrollTo">
                                <li>How does RegisterKaro help with the Trademark Rectification?</li>
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