import React from 'react'
import certificate from '../../../assets/images/pvt-reg/pvt_ltd_company_certificate_sample.webp';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>A Trademark refers to a recognizable phrase, word, symbol, name, design, image, or combination of these that denotes a particular product & legally differentiates it from all other products. In simple terms, a Trademark identifies a product as belonging to a particular company & recognizes the Company’s ownership of the brand. Trademarks are usually considered a type of IP (Intellectual Property) & may/may not be registered. Trademarks & its rights are safeguarded by the <strong>Trademark Act, 1999.</strong> To get the protection of Trademark Rights one has to register the Trademark. It’s vital to get Trademark Registration Online done because it prevents others from copying your Trademark & misrepresenting other products with your mark.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#TypeOfSubs" className="scrollTo">
                                <li>Types of Subsidiaries in India</li>
                            </a>
                            <a href="#Advantages" className="scrollTo">
                                <li>Advantages of Indian Subsidiary Registration</li>
                            </a>
                            <a href="#Classification" className="scrollTo">
                                <li>Regulatory Authorities for Indian Subsidiary Registration</li>
                            </a>
                            <a href="#Requirement" className="scrollTo">
                                <li>Requirements and Key Facts about Company Registration in India</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>Procedure for Indian Subsidiary Registration</li>
                            </a>
                            <a href="#Compilance" className="scrollTo">
                                <li>Compliance Requirements for Indian Subsidiary Registration</li>
                            </a>
                            <a href="#Taxation" className="scrollTo">
                                <li>Taxation of Indian Subsidiary Companies</li>
                            </a>
                            <a href="#HowToRegister" className="scrollTo">
                                <li>How Registerkaro Can Assist with Indian Subsidiary Registration?</li>
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
                <p className="small-heading text-center">Trademark RegistrationCertificate [Sample]</p>
                <div>
                    <Image alt="A certificate of incorporation for an indian company" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}