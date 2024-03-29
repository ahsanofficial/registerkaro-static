import React from 'react'
import certificate from '../../../assets/images/static/increase-authorized/certificate.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In {cityName}, to run a company or business you need more funds over time & these funds can be required on a long & short-term basis. A short-term need can be satisfied by taking loans & advances, but for the long run the company will need more funds. For a Private Limited Company, this can be done by simply increasing the company’s authorized capital. Since, the Private Limited Company is regulated under the Companies Act, 2013 to make alterations in the business structure it is important to follow the Companies Act and Rules. While incorporating the Private Limited Company, the paid-up & authorized capital is specified in the capital mentioned in the Memorandum of Association (MoA). If any Company wants to issue more shares than the limit that is specified then amendments need to be done in the Memorandum of Association. So, it is necessary to check if the Authorized Capital of the Company is adequate for increasing the paid-up share capital of the Company. Scroll down to check more about how to increase Authorized capita</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Meaning" className="scrollTo">
                                <li>Authorized Capital – Meaning</li>
                            </a>
                            <a href="#Primary" className="scrollTo">
                                <li>What are the primary components of Authorized Capital?</li>
                            </a>
                            <a href="#Advantages" className="scrollTo">
                                <li>What are the Advantages of Increasing Authorized Capital?</li>
                            </a>
                            <a href="#ProcessIncrease" className="scrollTo">
                                <li>What is the process to Increase Authorized Capital of a Company?</li>
                            </a>
                           
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Increase Authorized Share Capital</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="How to Increase Authorized Capital?" className="certificate h-50 w-70" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
