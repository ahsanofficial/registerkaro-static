import React from 'react'
import certificate from '../../../assets/images/static/section-8-reg/COI.webp';
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}

export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In {cityName}, a Section 8 Company functions as an NGO dedicated to advancing various fields such as art, science, education, sports, and charitable activities. Unlike Trusts or Societies, profits generated by Section 8 Companies are reinvested to support their stated objectives rather than being distributed to company members. The registration process for a Section 8 Company falls under the jurisdiction of the Ministry of Corporate Affairs (MCA), distinguishing it from Trusts and Societies, which are governed by State Government Registrars. <br />Opting for Section 8 Company registration through RegisterKaro offers distinct advantages over Trusts and Societies. The Section 8 structure enhances credibility with government departments, stakeholders, and potential donors. At RegisterKaro, our proficient team ensures a seamless registration process for your Section 8 Company. With expertise in documentation, application filing, and efficient incorporation, we alleviate your concerns, making the entire process smooth and effective.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#ImportantPoints" className="scrollTo">
                                <li>Important Points Regarding Section 8 Company in {cityName}</li>
                            </a>
                            <a href="#Advantages" className="scrollTo">
                                <li>Advantages of Section 8 Company Registration in {cityName}</li>
                            </a>
                            <a href="#Eligibility" className="scrollTo">
                                <li>Eligibility Criteria for Section 8 Company Registration in {cityName}</li>
                            </a>
                            <a href="#Requirements" className="scrollTo">
                                <li>Requirements for Section 8 Company Registration</li>
                            </a>
                            <a href="#Documents" className="scrollTo">
                                <li>Documents Required for Section 8 Company Registration</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>Procedure for Section 8 Company Registration</li>
                            </a>
                            <a href="#AnnualCompliance" className="scrollTo">
                                <li>What are the Annual Compliances for Section 8 Companies in {cityName}?</li>
                            </a>
                            <a href="#Penalties" className="scrollTo">
                                <li>Penalties for Non-Compliance</li>
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
                <p className="small-heading text-center">Section 8 Company Sample Documents</p>
                <div>
                    <Image alt="Section 8 Company Sample Documents" className="certificate h-100 w-100" loading="lazy" src={certificate}/>
                </div>
            </div>
        </div>
    )
}
