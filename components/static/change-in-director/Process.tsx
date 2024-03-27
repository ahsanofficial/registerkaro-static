import React from 'react'
import certificate from '../../../assets/images/pvt-reg/pvt_ltd_company_certificate_sample.webp';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Generally, a Company is a legal entity established by a group of individuals to engage in & operate a business entity (commercial or industrial) A Company may be organized in various ways for tax & financial liability purposes depending on the corporate law of its jurisdiction. A Company’s management structure includes a Directors’ position who are key managerial positions in any company. Directors take overall charge of management & operations in a Company. Usually, Directors of a Company are appointed as per the Companies Act, 2013 by the Company’s Shareholders to make sure that the day to day operations of the company are executed in an effective way. Directors of a Company have a fiduciary duty to the Company & its shareholders which means that all the Directors of a Company are responsible for conducting the Company’s Affairs in a way that ensures profitability & boosting the Company’s image & its reputation. Scroll down to check more about change in Director of a Company.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Meaning" className="scrollTo">
                                <li>Change in Director – Meaning </li>
                            </a>
                            <a href="#Role" className="scrollTo">
                                <li>What is the Role of a Company Director? </li>
                            </a>
                            <a href="#Eligibility" className="scrollTo">
                                <li>Eligibility Criteria to become a Director </li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                                <li>Documents Required for Change in Director of a Company</li>
                            </a>
                            <a href="#Step" className="scrollTo">
                                <li>Step-by-step procedure for change in director of a Company</li>
                            </a>
                           
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Change in Director of a Company </p>
                <div className='d-flex justify-content-center'>
                    <Image alt="Get Online State FSSAI License Registration in India" className="certificate h-50 w-70" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
