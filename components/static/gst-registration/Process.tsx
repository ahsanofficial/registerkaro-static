import React from 'react'
import certificate from '../../../assets/images/static/gst-registration/certificate.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Introduced in 2017, the Goods and Services Tax (GST) in {cityName} is applicable to service providers, traders, and manufacturers, consolidating various taxes like Service Tax, CST, Entertainment Tax, Excise Tax, and VAT. This indirect tax aims to streamline the taxation system, replacing multiple levies with a unified regime for simplified collection and enhanced efficiency. Presently, all businesses with an annual turnover exceeding Rs. 40 lakh must undergo mandatory GST Registration, while in North East & Hill States, it applies to those earning over Rs. 10 lakhs annually.</p>
                <p className='text-justify'>Non-compliance with GST Registration is considered an offense, leading to substantial penalties. Typically, the registration process takes 2-6 working days, and the RegisterKaro Team can expedite GST Registration with ease.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#DifferentTable" className="scrollTo">
                                <li>What are the Different Types of GST in {cityName}?</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of GST Registration in {cityName}</li>
                            </a>
                            <a href="#Who" className="scrollTo">
                                <li>Who can apply for GST Registration in {cityName}?</li>
                            </a>
                            <a href="#VitalDocuments" className="scrollTo">
                                <li>List of Vital Documents Required for GST Registration in {cityName}</li>
                            </a>
                            <a href="#RegistrationProcess" className="scrollTo">
                                <li>Online GST Registration Process with RegisterKaro</li>
                            </a>
                            <a href="#GSTReturn" className="scrollTo">
                                <li>GST Return Filing</li>
                            </a>
                            <a href="#Penalty" className="scrollTo">
                                <li>Penalty for Not Getting GST in {cityName}</li>
                            </a>
                            <a href="#Voluntary" className="scrollTo">
                                <li>Voluntary Registration under GST</li>
                            </a>
                            <a href="#Voluntary" className="scrollTo">
                                <li>Exemption on GST Registration in {cityName}</li>
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
                <p className="small-heading text-center">GST Registration Certificate</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="An Overview of GST Registration" className="certificate h-50 w-70" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
