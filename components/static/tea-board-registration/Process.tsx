import certificate from '../../../assets/images/static/qatar-company-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>India is the second largest producer of tea globally. It produces a wide range of tea such as Black, Herbal, Green, Nilgiri, Assam, etc. In terms of value, India’s total tea exports stood at a whopping USD 687.9 million, for the year 2021 and in terms of volume, it stood at 201 million kg. Therefore considering the ever-increasing global demand, exporting is an excellent opportunity for exporters as well as tea procedures of India and for this exact purpose, the Tea Board of India was set up in 1954, through the Tea Act of 1953.</p>
                
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhatIsTeaBoard" className="scrollTo">
                             <li>What is Tea Board of India?</li>
                            </a>
                            <a href="#TypesOfLicenses" className="scrollTo">
                             <li>Types of Licenses granted by the Tea Board</li>
                            </a>
                            <a href="#TypesOfRegn" className="scrollTo">
                             <li>Types of Registration granted by the Tea Board</li>
                            </a>
                            <a href="#RCMC" className="scrollTo">
                             <li>Registration Cum Membership Certificate (RCMC)</li>
                            </a>
                            <a href="#Cancellation" className="scrollTo">
                             <li>Cancellation Of Licenses or Registrations</li>
                            </a>
                            <a href="#Pricing" className="scrollTo">
                             <li>Pricing for Licences and Registrations</li>
                            </a>
                            <a href="#Why" className="scrollTo">
                             <li>Why RegisterKaro?</li>
                            </a>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Company Registration in Australia</p>
                <div>
                    <Image alt="Company Registration in Australia" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}