import React from 'react'
import certificate from '../../../assets/images/static/state-fssai-license-registration/FSSAI_Registration_certifiacte.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                    <p className='text-justify'>Apply FSSAI Registration Renewal Online. FSSAI controls and regulates the Food-related businesses as per the guidelines and regulations under the FSSAI Act 2006. If any individual owns and runs a food-related business needs to certify under the Act to obtain FSSAI license. It is important to renew the FSSAI license on time or else it will expire. Then you have to obtain a fresh FSSAI license as it is mandatory for the food business operator to have that always.</p>
                    <p className='text-justify'>FSSAI governs the Food-related businesses as per the guidelines and regulations specified in the FSSAI Act 2006. If you own a food-related business or activities related to food business need to obtain FSSAI license. Likewise, FSSAI Registration renewal is equivalently important and mandatory. An FSSAI License is needed to renew regularly within its validity time period. Any entrepreneur or food business operator, who desire to form a business in the food sector, whether a food processing or food manufacturing or food packaging or food products distribution, has to file for FSSAI license with its renewal in every 1 to 5 years.</p>

                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Requires" className="scrollTo">
                               <li>Who requires a FSSAI Registration Renewal?</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                               <li>Types of Renewal Of Food License</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                               <li>Benefits of FSSAI License</li>
                            </a>
                            <a href="#DocumentsNeeded" className="scrollTo">
                               <li>Documents needed for Food License Renewal</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                               <li>Procedure for Renewing FSSAI License</li>
                            </a>
                            <a href="#Consequences" className="scrollTo">
                               <li>Consequences if FSSAI Renewal is not done within the specified time</li>
                            </a>
                          
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">State FSSAI License Registration Certificate</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="Get Online State FSSAI License Registration in India" className="certificate h-50 w-70" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
