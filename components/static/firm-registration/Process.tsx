import React from 'react'
import certificate from '../../../assets/images/pvt-reg/pvt_ltd_company_certificate_sample.webp';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Under section 7 of the Companies Act, 2013 it is stated that for a company to have some legal existence it must be registered with the registrar of the jurisdiction in which the company is situated. There are several types in which a business may be registered- such as a firm or a company. A firm is generally considered an informal way of business, owned by the Partners of the business and is done in fields that require in-depth knowledge of a particular field or professional practices and they need to have high flexibility in business management such as chartered accountants firms, law firms and consultancy firms. Whereas, a company is a formal structure of business, which is owned by shareholders. Companies have to adhere to more legal compliances and require minimum capital to start a company as compared to a firm. Firm hence can be defined as when two individuals come together to do a business they are individually known as <strong>Partners</strong> whereas collectively they are known as <strong>Firms</strong></p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Registration" className="scrollTo">
                                <li>­Firm Registration</li>
                            </a>
                            <a href="#Structure" className="scrollTo">
                                <li>Structure of Business</li>
                            </a>
                            <a href="#Documents" className="scrollTo">
                                <li>Documents needed for Registering a firm</li>
                            </a>
                            <a href="#StepsForRegistering" className="scrollTo">
                                <li>Steps for Registering a Firm:</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Registering a Firm</li>
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
                <p className="small-heading text-center">Firm Registration Certificate [Sample]</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="A certificate of incorporation for an indian company" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
