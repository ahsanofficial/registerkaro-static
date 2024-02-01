import React from 'react'
import certificate from '../../../assets/images/public-reg/COI.webp';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Embarking on the Public Limited Company Registration journey involves crucial steps. Begin by selecting a distinctive name and securing its approval. Assemble a team with a minimum of two directors and seven shareholders (with no maximum limit). Craft the Memorandum of Association and Articles of Association, delineating the company's goals and governing principles. Ensure the necessary share capital is in place. The subsequent phase entails meticulous preparation and submission of essential documents, encompassing forms, proofs, and declarations. Following a thorough review and approval process, you'll be bestowed with the Certificate of Incorporation. Post-registration, attend to obligations such as acquiring a tax ID, initiating a bank account, and meeting statutory requirements. It's imperative to engage with professionals well-versed in the regulatory landscape of your jurisdiction for precise guidance throughout this comprehensive process.</p>
                <h3>Applicable rules, acts, and regulations</h3>
                <p className='text-justify'>In India, when it comes to registering a Public Limited Company (PLC), there are specific rules, acts, and regulations to follow. The Companies Act of 2013 is the main law that governs the process. It outlines the necessary steps for incorporating a PLC, such as having a minimum number of directors and shareholders, meeting share capital requirements, and preparing important documents like the Memorandum of Association and Articles of Association. The Securities and Exchange Board of India (SEBI) oversees the issuance and trading of securities by PLCs, making sure they comply with listing requirements, disclosure obligations, and corporate governance standards. Taxation laws like the Income Tax Act also apply, and PLCs must adhere to financial reporting standards set by the Ministry of Corporate Affairs.</p>
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
                <p className="small-heading text-center">Public Ltd. Company - Incorporation Certificate [Sample]</p>
                <div>
                    <Image alt="Minimum two directors for a company" className="certificate h-100 w-100" loading="lazy" src={certificate}/>
                </div>
            </div>
        </div>
    )
}
