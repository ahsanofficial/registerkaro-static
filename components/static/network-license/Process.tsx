import certificate from '../../../assets/images/static/network-license/certificate.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Network licensing is a valuable concept utilized by numerous workstation-based software products. The objective of this white paper is to demonstrate how network licensing software can optimize your software budget. By employing network licensing, you ensure timely access to appropriate software for your users while efficiently managing license usage. While effective utilization of network licensing software necessitates investment in planning, implementation, and upkeep, it can yield substantial benefits for both you and your organization.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                      
                            <a href="#WhatIs" className="scrollTo">
                             <li>What is a Network License?</li>
                            </a>
                            <a href="#Eligibility" className="scrollTo">
                             <li>Eligibility Criteria for Network License in {cityName}</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                             <li>Documents required for the Network License in {cityName}</li>
                            </a>
                            <a href="#ProcessObtain" className="scrollTo">
                             <li>Process to Obtain Network License</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                             <li>Network licensing offers four main benefits:</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                             <li>Stepwise Process for Setting up Network Licensing:</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>How RegisterKaro Can Assist You in the Network Licensing Process?</li>
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
                <p className="small-heading text-center">Network License</p>
                <div>
                    <Image alt="An Overview of Network License" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}