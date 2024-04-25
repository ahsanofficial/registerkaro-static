import certificate from '../../../assets/images/pvt-reg/benefit.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Every person possessing a Director Identification Number (DIN) as of the 31st of March of a given financial year must submit 'Form No. DIR-3 KYC (Web)' to the central government for that financial year by the 30th of September of the subsequent financial year. This filing is necessary to authenticate and verify the KYC information stored in the MCA21 database. 
                     Purpose of the webform Form No. DIR-3 KYC (Web) aims to simplify the process for verification of a director’s KYC details. This service solely serves as a means of verifying existing details, and it does not facilitate updates to the information provided. Should any updates be necessary regarding the director's existing details, users may submit the updated information via e-form ‘Form No. DIR-3-KYC’ instead of utilizing this service for KYC submission. This requirement is in accordance with Rule 12A of the Companies (Appointment and Qualification of Directors) Rules, 2014. Compliance with e-Form DIR-3 KYC is imperative for directors of Indian companies to maintain regulatory transparency and integrity.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Types" className="scrollTo">
                                <li>Types of e-Form DIR-3 KYC</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Important Check Points while filling up the Web Form</li>
                            </a>
                            <a href="#Instruction" className="scrollTo">
                                <li>Instructions for Form No. DIR-3 KYC (Web) to be followed.</li>
                            </a>
                            <a href="#prerequisites" className="scrollTo">
                                <li>Prerequisites for e-Form DIR-3 KYC</li>
                            </a>
                            <a href="#tablecom" className="scrollTo">
                                <li>Application Process for filing Form No. DIR-3-KYC(Web)</li>
                            </a>
                            <a href="#duedate" className="scrollTo">
                                <li>Due Date and Penalty Charges for Not Filing DIR 3 KYC Form</li>
                            </a>
                            <a href="#laws" className="scrollTo">
                                <li>Applicable Laws and Regulations:</li>
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
                <p className="small-heading text-center">DIR-3-EKYC</p>
                <div>
                    <Image alt="process of company in Dir-3-ekyc" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}