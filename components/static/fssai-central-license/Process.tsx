import React from 'react'
import certificate from '../../../assets/images/pvt-reg/pvt_ltd_company_certificate_sample.webp';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>The Food Safety and Standards Authority of India (FSSAI) stands as a paramount government agency dedicated to the holistic well-being of the masses through the rigorous implementation of pertinent food safety standards. At its core, FSSAI’s mission revolves around the formulation of comprehensive guidelines and norms designed to cultivate a culture of heightened food safety awareness throughout India. Vigilantly overseeing every facet of the food supply chain, from production to retail, this institution plays a pivotal role in safeguarding public health. A significant milestone within the regulatory landscape is the FSSAI Central License, a coveted accreditation obtained by Food Business Operators (FBOs) with an annual turnover exceeding Rs. 20 Crores or those engaged in the import and export of food products within India. This accreditation underscores a commitment to the highest standards of food safety and places FBOs under the purview of stringent regulatory oversight, ensuring the integrity of the nation’s food supply and fortifying the health and well-being of its citizens.</p>
                <p className='text-justify'>
                Central to FSSAI’s mandate is the cultivation of consumer awareness, a facet of its work that it approaches with utmost seriousness. Regularly initiating diverse initiatives, FSSAI remains committed to keeping the public informed about the perils associated with substandard and low-quality foods. In alignment with the Food Safety and Standards Act of 2006, FSSAI meticulously crafts food safety norms and various guidelines, providing a robust regulatory framework for the food industry.
                </p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#FundamentalDuties" className="scrollTo">
                                <li>Fundamental Duties and Functions performed by FSSAI</li>
                            </a>
                            <a href="#BusinessesRequiring" className="scrollTo">
                                <li>Businesses Requiring Mandatory FSSAI License</li>
                            </a>
                            <a href="#AdvantagesAcquiring" className="scrollTo">
                                <li>Advantages of Acquiring an FSSAI Central License</li>
                            </a>
                            <a href="#RequirementsObtaining" className="scrollTo">
                                <li>Requirements for Obtaining FSSAI Central License</li>
                            </a>
                            <a href="#RequiredDocuments" className="scrollTo">
                                <li>Required Documents for Obtaining FSSAI Central License</li>
                            </a>
                            <a href="#ProceduresObtaining" className="scrollTo">
                                <li>Procedures for Obtaining FSSAI Central License</li>
                            </a>
                            <a href="#ValidityRenewal" className="scrollTo">
                                <li>Validity and Renewal of FSSAI Central License</li>
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
                <p className="small-heading text-center">FSSAI Central License Certificate [Sample]</p>
                <div>
                    <Image alt="A certificate of incorporation for an indian company" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
