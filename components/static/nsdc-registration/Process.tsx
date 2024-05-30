import certificate from '../../../assets/images/static/nsdc-registration/certificate.svg';
import Image from 'next/image';


export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>The National Skill Development Corporation (NSDC) is a not-for-profit company which was established by the Ministry of Finance under Section 25 of the Companies Act, 1956 (similar to Section 8 of the Companies Act, 2013) on July 31, 2008. It’s a Public Private Partnership (PPP) between the Government of India which holds 49% stake through the Ministry of Skill Development & Entrepreneurship (MSDE) and the Private Sector which owns the remaining 51% stake.</p>
                <p className="text-justify">NSDC's main goal is to boost skill development by encouraging the establishment of high-quality vocational institutions that can make a profit. It provides financial support to help set up these institutions and offers funding for vocational training programs. NSDC also works to ensure quality standards, develop information systems, and establish training academies for instructors, either directly or through partnerships. The organization acts as a catalyst in skill development by funding enterprises, companies, and organizations that offer skill training. It also creates models to support and coordinate private sector initiatives. NSDC focuses on 37 different sectors and understands their potential for attracting private investment. As per the official data NSDC, in the fiscal year 2019-2020, trained around 20.45 lakh youths across 10,373 training centres.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhatDo" className="scrollTo">
                                <li>What does NSDC do?</li>
                            </a>
                            <a href="#CoursesAvailable" className="scrollTo">
                                <li>NSDC Courses Available in India</li>
                            </a>
                            <a href="#HowGet" className="scrollTo">
                                <li>How to Get an NSDC Affiliation?</li>
                            </a>
                            <a href="#NonFunded" className="scrollTo">
                                <li>Non-Funded Affiliation</li>
                            </a>
                            <a href="#Schemes" className="scrollTo">
                                <li>NSDC’s Schemes and Initiatives</li>
                            </a>
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">National Skill Development Corporation (NSDC) Registration</p>
                <div>
                    <Image alt="National Skill Development Corporation (NSDC) Registration" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}