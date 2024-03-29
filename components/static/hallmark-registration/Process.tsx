import React from 'react'
import certificate from '../../../assets/images/static/hallmark-registration/certificate.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}

export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In {cityName}, especially women are more fascinated with gold for many years and gold is always a very safe and secure investment for Indian residents during tough times. Hence, to protect customers from adulteration and to obligate jewelers to maintain the purity of jewellery, the Bureau of Indian Standards launched a jeweller Registration Scheme. BIS introduced the Gold Hallmarking Scheme in 2000 & a Silver Hallmarking Scheme in 2005. It is the accurate determination & official recording of the equivalent content of precious metal (such as gold and silver) in precious metal articles. Thus, Hallmarks are legal marks used in many countries as a guarantee of the purity/fitness of precious metal article. The primary objectives of the Hallmarking Scheme are to safeguard the public against adulteration & to obligate all the manufacturers to maintain legal standards of fitness. If we see in {cityName} especially two metals, namely Gold & Silver, have been brought under the purview of Hallmarking. Are you looking for Hallmark Registration in {cityName}? Then, you are at the right place. We offer Hallmark Registration at an affordable cost & quick turnaround.</p>
                <p><strong>The ministry of Consumer Affairs has decided on the compulsory hallmarking of gold based on the Consumer Protection Act 1986.</strong></p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Importance" className="scrollTo">
                                <li>Importance of Hallmark Registration Certification</li>
                            </a>
                            <a href="#ListDifferent" className="scrollTo">
                                <li>List of Different marks of a BIS Hallmark? Old Methods of Hallmarking</li>
                            </a>
                            <a href="#NewMethods" className="scrollTo">
                                <li>New Methods of Hallmarking</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                                <li>Types of BIS Hallmarking Certificate</li>
                            </a>
                            <a href="#DifferentTable" className="scrollTo">
                                <li>Different Types of Forms for Hallmark Registration</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents Required for Hallmark Registration</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>Procedure for Hallmark Registration in {cityName}</li>
                            </a>
                            <a href="#Fees" className="scrollTo">
                                <li>Hallmark Registration Fees</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Hallmarked Gold</li>
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
                <p className="small-heading text-center"> Hallmark Registration Online in {cityName}</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="Apply for Hallmark Registration Online in India" className="certificate h-50 w-70" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
