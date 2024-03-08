import React from 'react'
import certificate from '../../../assets/images/static/bis-fmcs-certification/bis-fmcs-certification.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>

                <p className='text-justify'>The Foreign Manufacturers Certification Scheme (FMCS) is overseen by the Bureau of Indian Standards (BIS) as part of Scheme-I within Schedule-II of the Conformity (Assessment) Regulations, 2018, and the BIS Act, 2016. This scheme is designed for foreign manufacturers seeking certification for the use of the Standard Mark (ISI Mark) on products conforming to Indian Standards. The BIS FMCS Certification is a mandatory requirement for foreign manufacturers looking to import their products into India. This certification process underscores the commitment to quality, safety, and reliability, aligning with the standards set by the Bureau of Indian Standards for the benefit of the Indian consumer market. BIS FMCS Certification is an indispensable requirement for foreign manufacturers seeking to enter the Indian market. Beyond regulatory compliance, it signifies a commitment to quality and safety. As international trade continues to evolve, the BIS FMCS Certification remains a cornerstone for building trust, ensuring product reliability, and fostering seamless global commerce.</p>
                <p className='text-justify'>Under the Foreign Manufacturers Certification Scheme, the BIS grants a license to foreign manufacturers, allowing them to affix the ISI Mark to products meeting Indian Standard specifications. The scope of this scheme covers all products except Electronics and IT Goods, which are subject to notification by the Department of Electronics and Information Technology (Deity).</p>
                <p className='text-justify'>The core objective of the BIS, in issuing Manufacturing certificates to Foreign Manufacturers, is to ensure the public’s access to safe, high-quality, and dependable products. This is achieved by enforcing compliance with Indian Standards through the certification process.</p>
                <p className='text-justify'>The process involves a thorough factory audit of manufacturing units located outside India. This audit aims to assess whether the manufacturer meets all necessary requirements to obtain a BIS Certificate for importing products into India under the Foreign Manufacturer Certification Scheme. This certification is crucial for foreign manufacturers intending to export and sell their products in the Indian market.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#KeyInitiatives" className="scrollTo">
                                <li>What is BIS Standard Mark?</li>
                            </a>
                            <a href="#ObjectivesChecklist" className="scrollTo">
                                <li>Importance of BIS FMCS Certification in India</li>
                            </a>
                            <a href="#DocsREquired" className="scrollTo">
                                <li>List of Products Which Require BIS FMCS CertificationList of Products Which Require BIS FMCS Certification</li>
                            </a>
                            <a href="#EventBased" className="scrollTo">
                                <li>Requirements for BIS FMCS Certification</li>
                            </a>
                            <a href="#DocRequiredBIS" className="scrollTo">
                                <li>Required Documents for BIS FMCS Certification</li>
                            </a>
                            <a href="#ProcedureObtaining" className="scrollTo">
                                <li>Procedure for Obtaining BIS FMCS Certification</li>
                            </a>
                            <a href="#AdvantagesBIS" className="scrollTo">
                                <li>Key Guidelines for Nomination of AIR (Authorized Indian Representative) for Foreign Manufacturers</li>
                            </a>   
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                           
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">BIS FMCS Certificate [Sample]</p>
                <div>
                    <Image alt="An Overview of BIS FMCS Certification
                    The Foreign Manufacturers Certification Scheme (FMCS) is overseen by the Bureau of Indian Standards (BIS) as part of Scheme-I within Schedule-II of the Conformity (Assessme" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
