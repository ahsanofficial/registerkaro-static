import React from 'react'
import certificate from '../../../assets/images/static/epr-authorization-for-e-waste-dummy.tsx/EPR_Authorization_for_E-Waste_certificate.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>EPR authorization for e-waste involves holding producers accountable for the proper disposal and management of electronic waste. It’s a regulatory approach ensuring manufacturers take responsibility for the end –of –life disposal of their products. Regulations and requirements for EPR authorization can vary by region, so specific details would depend on the local laws governing e-waste management in your area.</p>
                <p className='text-justify'>EPR Authorization is given by the Central Pollution Control Board (CPCB) under MoEFCC, Government of {cityName}. With EPR {cityName} authorization, the manufacture/ importer of electronic and electrical products has been given the responsibility to control E-waste by the products after expiry of their lifetime.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhatIs" className="scrollTo">
                                <li>What is E-Waste?</li>
                            </a>
                            <a href="#TypeOF" className="scrollTo">
                                <li>Types of E-Waste</li>
                            </a>
                            <a href="#EWaste" className="scrollTo">
                                <li>E-waste Management Rules 2022</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                                <li>Documents Required for EPR Authorisation for E-waste</li>
                            </a>
                            <a href="#Registration" className="scrollTo">
                                <li>Registration process for E-Waste EPR Authorisation</li>
                            </a>
                            <a href="#Renewal" className="scrollTo">
                                <li>Renewal of EPR Authorisation</li>
                            </a>
                            <a href="#BenefitsOfState" className="scrollTo">
                                <li>Benefits of EPR Registration for e-waste</li>
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
                <p className="small-heading text-center">Get EPR Authorization for E-Waste Online</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="Get EPR Authorization for E-Waste Online" className="certificate h-50 w-70" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
