import certificate from '../../../assets/images/static/u-k-company-registration/Registration_uk_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Under the Ministry of Micro, Small, and Medium Enterprises (MoMSMEs), the Government of India oversees the National Small Industries Corporation (NSIC). NSIC encourages and supports MSMEs’ expansion across the country. Professionals oversee the corporation’s incubation and training programs. NSIC offers comprehensive support services across multiple domains, including technology, marketing, finance, and support services. Micro and Small Enterprises (MSEs) can participate in government procurement by opting for NSIC Registration under the <strong>Single Point Registration Scheme (SPRS).</strong></p>
                <p className='text-justify'>The Indian government founded the <strong>National Small Industries Corporation in 1955.</strong> As of right now, NSIC is a well-known Mini Ratna PSU with <strong>ISO 9001:2015</strong> certification. The Government of India established NSIC to support small and expanding businesses in post-independence India. NSIC serves as a middleman, offering support to small-scale industries (SSI). MSEs with NSIC registration are eligible for a number of government development programs, which can help them expand their businesses significantly.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Services" className="scrollTo">
                               <li>Benefits of NSIC Registration</li>
                            </a>
                            <a href="#Services" className="scrollTo">
                               <li>Check if you are eligible for NSIC Registration</li>
                            </a>
                            <a href="#Services" className="scrollTo">
                               <li>Challenges to experience in NSIC registration</li>
                            </a>
                            <a href="#Services" className="scrollTo">
                               <li>Schemes pertaining to NSIC</li>
                            </a>
                            <a href="#Services" className="scrollTo">
                               <li>Documents to carry with you</li>
                            </a>
                            <a href="#Services" className="scrollTo">
                               <li>Process of NSIC Registration</li>
                            </a>
                            <a href="#Services" className="scrollTo">
                               <li>Why Choose RegisterKaro for NSIC Registration?</li>
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