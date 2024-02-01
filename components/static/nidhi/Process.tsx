import React from 'react'
import certificate from '../../../assets/images/pvt-reg/pvt_ltd_company_certificate_sample.webp';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Nidhi Companies are a type of NBFC that is founded, governed, and regulated by Section 406 of the revised Indian Companies Act of 2013, as well as the Companies (Nidhi Companies) Rules of 2014. The goal of forming a Nidhi Company is to encourage savings and frugality among its members and it tries to achieve this goal by instilling in its members the habit of saving and thrift. They are only permitted to accept deposits from and lend to members, implying that cash given to a Nidhi company comes from its members (shareholders) and is only to be used by the shareholders of the Nidhi Company. The RBI oversees all of its financial transactions, and it is governed by the Ministry of Corporate Affairs.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#What" className="scrollTo">
                                <li>What is a Private Limited Company?</li>
                            </a>
                            <a href="#Different" className="scrollTo">
                                <li>Different types of Business Structures in India</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Private Limited Company Registration in India</li>
                            </a>
                            <a href="#Checklist" className="scrollTo">
                                <li>Checklist for Private Limited Company Registration in India</li>
                            </a>
                            <a href="#Documents" className="scrollTo">
                                <li>Documents Required for Company Registration in India</li>
                            </a>
                            <a href="#How" className="scrollTo">
                                <li>How to register a private limited company?</li>
                            </a>
                            <a href="#Time" className="scrollTo">
                                <li>Time Required for Registering a Company Online in India</li>
                            </a>
                            <a href="#HowTo" className="scrollTo">
                                <li>How to Register Your Private Limited Company in India with RegisterKaro?</li>
                            </a>
                            <a href="#WhatDocuments" className="scrollTo">
                                <li>What Documents will you get after Online Company Registration in India?</li>
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
                <p className="small-heading text-center">Nidhi - Incorporation Certificate [Sample]</p>
                <div>
                    <Image alt="Private Limited Company sample" className="certificate h-100 w-100" loading="lazy" src={certificate}/>
                </div>
            </div>
        </div>
    )
}
