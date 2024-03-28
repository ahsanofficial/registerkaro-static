import React from 'react'
import certificate from '../../../assets/images/static/change-your-reistered-office/certificate.svg';
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>We know that the primary place of business for a Company or LLP (Limited Liability Partnership) is its registered office address. As per Section 12 of the Companies Act, 2013 all businesses including LLPs must have a registered office during or within 30 days of Company Incorporation. A Company in {cityName} should have a registered office at all times until it is in existence. The registered office address is cited in MoA (Memorandum of Association) & AoA (Articles of Association). The registered office is the office where the Company gets all the communications & notices sent to it. It’s the official office of the Company where it carries on business. The registered office address needs to be given to RoC. Scroll down to how to change your registered office address</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Important" className="scrollTo">
                                <li>What is the importance of a registered office address?</li>
                            </a>
                            <a href="#Different" className="scrollTo">
                                <li>Different way to change your registered office address</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                                <li>Documents Required to Change your Registered Office Address</li>
                            </a>
                            
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Change Your Registered Office Address</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="Change Your Registered Office Address" className="certificate h-50 w-70" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
