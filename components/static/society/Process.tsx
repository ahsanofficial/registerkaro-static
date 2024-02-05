import React from 'react'
import certificate from '../../../assets/images/society/society_registration_certificate.png';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>A society is an association of several individuals combined using a mutual accord to deliberate, govern and act cooperatively for some communal purpose. Societies are usually registered for the advancement of charitable activities like sports, music, culture, religion, art, education, etc. Society Registration, under, The Society Registration Act, in India, lays down certain procedures for the sake of society registration & operation. This act was implemented with the purpose of augmenting the legal stipulations of society registration for the advancement of literature, fine arts, science or distribution of awareness for bountiful purposes. The Society Registration Act, 1860 has been accepted by several state governments without or with further amendments.</p>
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
                <p className="small-heading text-center w-80 ">Society Registration [Sample]</p>
                <div>
                    <Image alt="Society Registration certificate" className="certificate h-100 w-80 " loading="lazy" src={certificate}/>
                </div>
            </div>
        </div>
    )
}
