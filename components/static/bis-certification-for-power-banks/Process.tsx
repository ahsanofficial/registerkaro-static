import certificate from '../../../assets/images/static/u-k-company-registration/Registration_uk_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>BIS Certification for Power Banks is a mandatory requirement for selling power banks in the Indian market. It is a scheme introduced by the Bureau of Indian Standards (BIS) and the Ministry of Electronics and Information Technology (MeitY) to ensure that the power banks meet the standards of safety, reliability, and performance. BIS CRS Certification for Power Banks helps you to avoid penalties, customs issues, and consumer complaints. It also enhances your brand reputation and customer trust.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Applicable" className="scrollTo">
                                <li>Applicable Rules/ Acts/Regulations</li>
                            </a>
                            <a href="#Eligibility" className="scrollTo">
                                <li>Eligibility for BIS Certification for Power Banks</li>
                            </a>
                            <a href="#Description" className="scrollTo">
                                <li>A detailed description of the Power Banks</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                                <li>Types and distinctions of Licenses/Services involved</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                                <li>Documents Required for BIS Certification for Power Banks</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>Procedure for BIS Certification for Power Banks</li>
                            </a>
                            <a href="#Cancellation" className="scrollTo">
                                <li>Cancellation/Validity/ Renewal of certification</li>
                            </a>
                            <a href="#Revocation" className="scrollTo">
                                <li>Cancellation/Suspension/Revocation of certification</li>
                            </a>
                            <a href="#Mandatory" className="scrollTo">
                                <li>Mandatory Compliance for BIS Certification for Power Banks</li>
                            </a>
                            <a href="#WhyRegisterKaroBIS" className="scrollTo">
                                <li>Why RegisterKaro for BIS CRS Certification?</li>
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
                <p className="small-heading text-center">Company Registration in United Kingdom</p>
                <div>
                    <Image alt="An Overview of Company Registration in United Kingdom" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}