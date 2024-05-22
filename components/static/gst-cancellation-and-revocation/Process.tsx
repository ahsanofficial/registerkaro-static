import certificate from '../../../assets/images/static/gst-cancellation-and-revocation/What is Cancellation of GST Registration_.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Cancellation of GST registration simply means that the taxpayer will not be a GST registered person anymore. He will not have to pay or collect GST or claim the input tax credit and accordingly, need not file GST returns. After the cancellation of registration, the taxpayer is no longer required to pay GST and is also not required to file GST returns. However for certain businesses, registration under GST is mandatory if such businesses cancel their GST registration but still continue their business, then it will amount to an offence under GST which is subject to heavy penalties.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhoCancel" className="scrollTo">
                             <li>Who can Cancel the GST Registration?</li>
                            </a>
                            <a href="#ReasonsCancel" className="scrollTo">
                             <li>Reasons for Cancellation of GST Registration</li>
                            </a>
                            <a href="#ProcedureCancellation" className="scrollTo">
                             <li>Procedure for Cancellation of Registration</li>
                            </a>
                            <a href="#WhatRevocation" className="scrollTo">
                             <li>What is Revocation of Cancellation Registration?</li>
                            </a>
                            <a href="#WhatRevocation" className="scrollTo">
                             <li>Time Limit for filling the revocation application</li>
                            </a>
                            <a href="#ProcedureRevocation" className="scrollTo">
                             <li>Procedure for Revocation</li>
                            </a>
                            <a href="#Unqualified" className="scrollTo">
                             <li>Unqualified Applicants</li>
                            </a>
                            <a href="#FeesCancellation" className="scrollTo">
                             <li>Fees for Cancellation and Revocation of GST Registration</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>How does Register Karo help?</li>
                            </a>
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">GST Cancellation and Revocation</p>
                <div>
                    <Image alt="GST Cancellation and Revocation" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}